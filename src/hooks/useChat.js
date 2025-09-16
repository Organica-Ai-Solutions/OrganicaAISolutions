import { useState, useCallback } from 'react';
import { chatService } from '../utils/api';

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (message) => {
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      // Add user message to chat
      const userMessage = { text: message, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);

      // Get AI response
      const response = await chatService.sendMessage(message);
      const botMessage = { text: response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);

      return response;
    } catch (err) {
      setError(err.message);
      const errorMessage = { 
        text: 'Sorry, I encountered an error. Please try again.', 
        sender: 'bot', 
        isError: true 
      };
      setMessages(prev => [...prev, errorMessage]);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const submitInquiry = useCallback(async (inquiry) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatService.submitInquiry(inquiry);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
    chatService.clearChatHistory();
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    submitInquiry,
    clearChat,
  };
};

export default useChat; 