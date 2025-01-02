import requests
import json

BASE_URL = 'http://localhost:5001/api'

def print_response_debug(response):
    print(f"Status Code: {response.status_code}")
    print(f"Headers: {dict(response.headers)}")
    print(f"Content: {response.text}")
    try:
        print(f"JSON: {response.json()}")
    except:
        print("Could not parse JSON response")

def test_signup():
    print("\nTesting Signup...")
    data = {
        "username": "testuser",
        "password": "testpass123"
    }
    print(f"Sending request to {BASE_URL}/signup")
    print(f"Request data: {data}")
    
    try:
        response = requests.post(
            f'{BASE_URL}/signup',
            json=data,
            headers={'Content-Type': 'application/json'}
        )
        print_response_debug(response)
        return response.json() if response.ok else None
    except Exception as e:
        print(f"Error during signup: {str(e)}")
        return None

def test_login():
    print("\nTesting Login...")
    data = {
        "username": "testuser",
        "password": "testpass123"
    }
    print(f"Sending request to {BASE_URL}/login")
    print(f"Request data: {data}")
    
    try:
        response = requests.post(
            f'{BASE_URL}/login',
            json=data,
            headers={'Content-Type': 'application/json'}
        )
        print_response_debug(response)
        return response.json() if response.ok else None
    except Exception as e:
        print(f"Error during login: {str(e)}")
        return None

def test_chat(token):
    print("\nTesting Chat...")
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    data = {
        "message": "Tell me about your data analytics services"
    }
    print(f"Sending request to {BASE_URL}/chat")
    print(f"Request data: {data}")
    print(f"Headers: {headers}")
    
    try:
        response = requests.post(f'{BASE_URL}/chat', json=data, headers=headers)
        print_response_debug(response)
        return response.json() if response.ok else None
    except Exception as e:
        print(f"Error during chat: {str(e)}")
        return None

def test_chat_history(token):
    print("\nTesting Chat History...")
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    print(f"Sending request to {BASE_URL}/chat/history")
    print(f"Headers: {headers}")
    
    try:
        response = requests.get(f'{BASE_URL}/chat/history', headers=headers)
        print_response_debug(response)
        return response.json() if response.ok else None
    except Exception as e:
        print(f"Error getting chat history: {str(e)}")
        return None

def test_clear_chat(token):
    print("\nTesting Clear Chat...")
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    print(f"Sending request to {BASE_URL}/chat/clear")
    print(f"Headers: {headers}")
    
    try:
        response = requests.post(f'{BASE_URL}/chat/clear', headers=headers)
        print_response_debug(response)
        return response.json() if response.ok else None
    except Exception as e:
        print(f"Error clearing chat: {str(e)}")
        return None

def run_tests():
    print("Starting API Tests...")
    print(f"Base URL: {BASE_URL}")
    
    # Test signup
    signup_result = test_signup()
    if not signup_result:
        print("Signup failed, but continuing with login...")
    
    # Test login
    login_result = test_login()
    if not login_result:
        print("Login failed, skipping authenticated tests")
        return
    
    token = login_result.get('token')
    if token:
        # Test chat
        chat_result = test_chat(token)
        if not chat_result:
            print("Chat test failed")
        
        # Test chat history
        history_result = test_chat_history(token)
        if not history_result:
            print("Chat history test failed")
        
        # Test clear chat
        clear_result = test_clear_chat(token)
        if not clear_result:
            print("Clear chat test failed")
    else:
        print("No token received, skipping authenticated tests")

if __name__ == "__main__":
    run_tests() 