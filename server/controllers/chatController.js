import Chat from '../models/Chat.js';

// Send a message and get response
export const sendMessage = async (req, res) => {
  try {
    const startTime = Date.now();
    const { message } = req.body;
    
    // TODO: Integrate with AI service for response
    const response = "This is a placeholder response. AI integration pending.";
    
    const responseTime = Date.now() - startTime;
    
    const chat = await Chat.create({
      user: req.user._id,
      message,
      response,
      responseTime,
      success: true
    });

    res.status(201).json(chat);
  } catch (error) {
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