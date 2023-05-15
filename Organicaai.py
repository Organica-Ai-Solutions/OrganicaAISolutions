from flask import Flask, render_template, request, redirect
import sqlite3
from flask_babel import Babel, gettext
from flask import Flask, render_template, request
import openai

app = Flask(__name__)
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
    # Implement your logic to check if the username is available
    # This can involve querying a database or any other mechanism
    # Return True if the username is available, False otherwise
    # Example implementation:
    return username != 'admin'

def create_user(username, password):
    # Implement your logic to create a new user
    # This can involve creating a user record in the database
    # Example implementation:
    # user = User(username=username, password=password)
    # db.session.add(user)
    # db.session.commit()
    pass

@app.route('/login', methods=['GET', 'POST'])
def login():
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

def is_valid_credentials(username, password):
    # Implement your logic to check if the username and password are valid
    # This can involve querying a database or any other authentication mechanism
    # Return True if the credentials are valid, False otherwise
    # Example implementation:
    return username == 'admin' and password == 'password'


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

openai.api_key = 'your openai key'

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

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
