from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
from functools import wraps
import google.generativeai as genai
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
# Configure CORS to allow all origins for testing
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configuration
app.config["SECRET_KEY"] = os.environ.get('SECRET_KEY', 'your-secret-key-here')
DATABASE = 'users.db'

# Configure Gemini Pro
GEMINI_API_KEY = os.environ.get('VITE_GEMINI_API_KEY', 'AIzaSyAks_c1rMf0xGjSNvQ7seVG1kMnieFf6H4')
genai.configure(api_key=GEMINI_API_KEY)

# Custom configuration for the AI assistant
SYSTEM_PROMPT = """You are an AI assistant for Organica AI Solutions, a cutting-edge technology company specializing in:
- Data Analytics
- Blockchain Solutions
- Machine Learning
- AI Integration
- Fintech Solutions

Your role is to:
1. Provide detailed, accurate information about our services
2. Help users understand how AI and blockchain can benefit their business
3. Explain complex technical concepts in simple terms
4. Guide users to appropriate solutions based on their needs
5. Maintain a professional yet friendly tone

Remember to:
- Always be helpful and courteous
- Provide specific examples when explaining concepts
- Recommend appropriate services based on user queries
- Stay within the scope of our company's offerings
- Protect user privacy and sensitive information

If you're unsure about something, acknowledge it and offer to connect the user with a human expert.
"""

# Initialize the model with custom configuration
generation_config = {
    'temperature': 0.7,
    'top_p': 0.8,
    'top_k': 40,
    'max_output_tokens': 1024,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

model = genai.GenerativeModel(
    model_name='gemini-pro',
    generation_config=generation_config,
    safety_settings=safety_settings
)

# Initialize chat history for each user
chat_sessions = {}

def get_or_create_chat(user_id):
    if user_id not in chat_sessions:
        chat = model.start_chat(history=[])
        # Initialize with system prompt
        chat.send_message(SYSTEM_PROMPT)
        chat_sessions[user_id] = chat
    return chat_sessions[user_id]

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # This enables column access by name
    return conn

def init_db():
    with app.app_context():
        conn = get_db()
        cursor = conn.cursor()
        # Create users table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        # Create inquiries table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                message TEXT NOT NULL,
                response TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            )
        ''')
        conn.commit()
        conn.close()

# Token required decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token is missing'}), 401
        try:
            token = token.split(' ')[1]  # Remove 'Bearer ' prefix
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user_id = data['user_id']
        except:
            return jsonify({'message': 'Token is invalid'}), 401
        return f(current_user_id, *args, **kwargs)
    return decorated

@app.route('/api/signup', methods=['POST'])
def signup():
    logger.debug(f"Received signup request: {request.get_json()}")
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
        
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    try:
        conn = get_db()
        cursor = conn.cursor()
        hashed_password = generate_password_hash(password)
        cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', 
                      (username, hashed_password))
        conn.commit()
        conn.close()
        logger.info(f"User {username} created successfully")
        return jsonify({'message': 'User created successfully'}), 201
    except sqlite3.IntegrityError:
        logger.warning(f"Username {username} already exists")
        return jsonify({'error': 'Username already exists'}), 409
    except Exception as e:
        logger.error(f"Error creating user: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
        user = cursor.fetchone()
        conn.close()
        
        if user and check_password_hash(user['password'], password):
            token = jwt.encode({
                'user_id': user['id'],
                'username': user['username'],
                'exp': datetime.utcnow() + timedelta(days=1)
            }, app.config['SECRET_KEY'])
            
            return jsonify({
                'token': token,
                'user': {
                    'id': user['id'],
                    'username': user['username']
                }
            }), 200
        return jsonify({'error': 'Invalid credentials'}), 401
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/chat', methods=['POST'])
@token_required
def chat(current_user_id):
    data = request.get_json()
    message = data.get('message')
    
    if not message:
        return jsonify({'error': 'Message is required'}), 400
    
    try:
        # Get or create chat session for user
        chat = get_or_create_chat(current_user_id)
        
        # Generate response from Gemini
        response = chat.send_message(message)
        response_text = response.text
        
        # Store in database
        conn = get_db()
        cursor = conn.cursor()
        
        # Store the message
        cursor.execute(
            'INSERT INTO inquiries (user_id, message, response) VALUES (?, ?, ?)',
            (current_user_id, message, response_text)
        )
        
        conn.commit()
        conn.close()
        
        return jsonify({
            'message': message,
            'response': response_text
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/chat/clear', methods=['POST'])
@token_required
def clear_chat(current_user_id):
    try:
        # Clear chat session
        if current_user_id in chat_sessions:
            del chat_sessions[current_user_id]
        
        # Clear chat history from database
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('DELETE FROM inquiries WHERE user_id = ?', (current_user_id,))
        conn.commit()
        conn.close()
        
        return jsonify({
            'message': 'Chat history cleared successfully'
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/chat/history', methods=['GET'])
@token_required
def get_chat_history(current_user_id):
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('''
            SELECT message, response, created_at 
            FROM inquiries 
            WHERE user_id = ? 
            ORDER BY created_at DESC
        ''', (current_user_id,))
        history = cursor.fetchall()
        conn.close()
        
        return jsonify({
            'history': [{
                'message': row['message'],
                'response': row['response'],
                'created_at': row['created_at']
            } for row in history]
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.before_request
def log_request_info():
    logger.debug('Headers: %s', request.headers)
    logger.debug('Body: %s', request.get_data())

@app.after_request
def after_request(response):
    logger.debug('Response: %s', response.get_data())
    return response

if __name__ == '__main__':
    init_db()
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=True, port=port, host='0.0.0.0')
