from flask import Flask, render_template, request, redirect
import sqlite3
from flask_babel import Babel, gettext
import openai


app = Flask(__name__)
app.config["SECRET_KEY"] = '123456987'
babel = Babel(app)
app.config['BABEL_LANGUAGES'] = ['en', 'es']
# Configure SQLite database
DATABASE = 'users.db'


    #@babel.localeselector
    #def get_locale():
    #d    return request.accept_languages.best_match(app.config['BABEL_LANGUAGES'])

def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn

def create_table():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)')
    conn.commit()
    conn.close()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get the username and password from the form
        username = request.form.get('username')
        password = request.form.get('password')

        # Check if the username is available (e.g., by querying a database)
        if is_username_available(username):
            # Process the sign-up logic (e.g., create a new user in the database)
            create_user(username, password)
            # Redirect to a success page or login page
            return redirect('/login')
        else:
            # Username is already taken, display an error message
            return render_template('signup.html', error='Username already taken')

    # Render the sign-up template for GET requests
    return render_template('signup.html')

def is_username_available(username):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT username FROM users WHERE username = ?', (username,))
    result = cursor.fetchone()
    conn.close()
    return result is None

def create_user(username, password):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    conn.commit()
    conn.close()

@app.route('/login', methods=['GET', 'POST'])
def login():
    def is_valid_credentials(username, password):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT username FROM users WHERE username = ? AND password = ?', (username, password))
        result = cursor.fetchone()
        conn.close()
        return result is not None

    if request.method == 'POST':
        # Get the username and password from the form
        username = request.form.get('username')
        password = request.form.get('password')

        # Check if the username and password are valid (e.g., by querying a database)
        if is_valid_credentials(username, password):
            # Authentication successful, redirect to a protected page
            return redirect('/dashboard')
        else:
            # Authentication failed, display an error message
            return render_template('login.html', error='Invalid username or password')

    # Render the login template for GET requests
    return render_template('login.html')




@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')








openai.api_key = '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'


@app.route('/chat', methods=['POST'])
def chat():
    message = request.form['message']
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=message,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.7
    )
    reply = response.choices[0].text.strip()
    return reply


@app.route('/inquiry', methods=['POST'])
def handle_inquiry():
    user_message = request.form['message']

    # Create a connection to the SQLite database
    conn = sqlite3.connect('inquiries.db')
    cursor = conn.cursor()
    
    # Store the inquiry in the SQLite database
    cursor.execute("INSERT INTO inquiries (message) VALUES (?)", (user_message,))
    conn.commit()

    # Generate a response for the inquiry
    response = generate_inquiry_response(user_message)

    # Store the inquiry and answer in the SQLite database
    inquiry = user_message
    answer = response
    cursor.execute("INSERT INTO inquiries (message, answer) VALUES (?, ?)", (inquiry, answer))
    conn.commit()

    # Close the database connection
    cursor.close()
    conn.close()

    return response


def generate_inquiry_response(conversation):
    prompt = f"You are a chatbot for a tech company named Organica AI Solutions, a cutting-edge technology firm specializing in providing customized AI solutions in data analytics, blockchain, fintech, and machine learning. We cater to the needs of small and medium-sized companies across various industries, enabling them to leverage the power of artificial intelligence to streamline operations, enhance decision-making processes, and unlock new opportunities for growth. These are messages from customers asking questions. Please respond professionally. {conversation}"
    response = openai.Completion.create(
        engine='davinci',
        prompt=prompt,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.7
    )

    reply = response.choices[0].text.strip()
    return reply
if __name__ == '__main__':
    create_table()
    app.run(debug=True)

