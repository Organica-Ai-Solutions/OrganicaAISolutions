import Chat from '../models/Chat.js';
import { generateAIResponse } from '../utils/deepseekAI.js';

// Send a message and get response
export const sendMessage = async (req, res) => {
  try {
    const startTime = Date.now();
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }
    
    // Generate response using Vertex AI
    let response;
    try {
      response = await generateAIResponse(message);
      console.log("AI Response generated successfully");
    } catch (aiError) {
      console.error("Error with AI response generation:", aiError);
      // Fallback response if AI fails
      response = "I'm currently experiencing technical difficulties. Our team has been notified of this issue. Please try again later or contact us directly at contact@organicaai.com.";
    }
    
    const responseTime = Date.now() - startTime;
    
    // Handle case when not authenticated (public endpoint)
    let chat;
    if (req.user) {
      // Authenticated user
      chat = await Chat.create({
        user: req.user._id,
        message,
        response,
        responseTime,
        success: true
      });
    } else {
      // Non-authenticated user (public endpoint)
      chat = {
        message,
        response,
        responseTime,
        success: true,
        createdAt: new Date()
      };
      // We don't save to database for unauthenticated users
    }

    res.status(201).json(chat);
  } catch (error) {
    console.error('Error in sendMessage:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get chat history for a user
export const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(50);
    
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear chat history for a user
export const clearChatHistory = async (req, res) => {
  try {
    await Chat.deleteMany({ user: req.user._id });
    res.json({ message: 'Chat history cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get chat statistics for a user
export const getChatStats = async (req, res) => {
  try {
    const totalMessages = await Chat.countDocuments({ user: req.user._id });
    const chats = await Chat.find({ user: req.user._id });
    
    const averageResponseTime = chats.reduce((acc, chat) => acc + chat.responseTime, 0) / totalMessages;
    const successfulChats = chats.filter(chat => chat.success).length;
    const successRate = (successfulChats / totalMessages) * 100;

    res.json({
      totalMessages,
      averageResponseTime,
      successRate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 