import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  sendMessage,
  getChatHistory,
  clearChatHistory,
  getChatStats
} from '../controllers/chatController.js';

const router = express.Router();

// @route   POST /api/chat/message
// @desc    Send a message
// @access  Private
router.post('/message', protect, sendMessage);

// @route   POST /api/chat/public-message
// @desc    Send a message without authentication (for testing)
// @access  Public
router.post('/public-message', sendMessage);

// @route   GET /api/chat/history
// @desc    Get chat history
// @access  Private
router.get('/history', protect, getChatHistory);

// @route   DELETE /api/chat/history
// @desc    Clear chat history
// @access  Private
router.delete('/history', protect, clearChatHistory);

// @route   GET /api/chat/stats
// @desc    Get chat statistics
// @access  Private
router.get('/stats', protect, getChatStats);

export default router; 