import { GoogleGenerativeAI } from '@google/generative-ai';

// Get API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Validate API key
if (!apiKey) {
  throw new Error('VITE_GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Initialize the model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Chat history for maintaining context
let chatHistory = [];

export const geminiService = {
  // Initialize a new chat
  startChat: () => {
    chatHistory = [];
    return model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });
  },

  // Send a message and get response
  sendMessage: async (message) => {
    try {
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        },
      });

      // Add user message to history
      chatHistory.push({
        role: "user",
        parts: message,
      });

      // Get response from Gemini
      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();

      // Add assistant response to history
      chatHistory.push({
        role: "assistant",
        parts: text,
      });

      return text;
    } catch (error) {
      console.error('Error in Gemini chat:', error);
      throw error;
    }
  },

  // Generate content with specific prompt
  generateContent: async (prompt) => {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;
    }
  },

  // Clear chat history
  clearHistory: () => {
    chatHistory = [];
  },
};

export default geminiService; 