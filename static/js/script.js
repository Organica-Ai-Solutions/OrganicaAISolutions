<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
    <title>Chatbot</title>
</head>
<body>
    <div id="chat-container">
        <button id="chatbot-button" onclick="toggleChatbot()">Chat</button>
        <div id="chatbot-widget">
            <!-- Chatbot content goes here -->
        </div>
    </div>

    <div id="inquiry-container">
        <div id="chat-log"></div>
        <input type="text" id="user-input" placeholder="Type your message">
        <button id="send-button" onclick="sendInquiry()">Send</button>
    </div>

    <script src="{{ url_for('static', filename='chatbot.js') }}"></script>
    <script>
        function sendInquiry() {
            // Function implementation
        }

        function toggleChatbot() {
            // Function implementation
        }

        // Additional JavaScript code goes here

    </script>
</body>
</html>
