import axios from 'axios';

// Determine if we're in a test environment
const isTest = typeof jest !== 'undefined';

// Import the mock for testing or use import.meta.env for production
let env;
if (isTest) {
  // In Jest tests
  const viteMock = require('./__mocks__/viteMock').default;
  env = viteMock.env;
} else {
  // In browser
  env = import.meta.env;
}

// Create axios instance with default config
const api = axios.create({
  baseURL: (isTest ? 'http://localhost:5000/api' : env.VITE_API_URL) || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth services
export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const signup = (name, email, password) => {
  return api.post('/auth/signup', { name, email, password });
};

export const validateToken = () => {
  return api.get('/auth/validate');
};

export const verifyEmail = (token) => {
  return api.get(`/auth/verify-email/${token}`);
};

export const updateProfile = (data) => {
  return api.put('/auth/profile', data);
};

// Chat services
export const chatService = {
  sendMessage: async (message) => {
    try {
      // Check Render backend first
      const renderUrl = (isTest ? 'http://localhost:5000/api' : env.VITE_API_URL) || 'https://organicaai-backend.onrender.com/api';
      const customApi = axios.create({
        baseURL: renderUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 second timeout
      });
      
      // Try to use the custom API first with Render URL
      try {
        const response = await customApi.post('/chat/message', { message });
        return response.data;
      } catch (renderError) {
        console.error("Error connecting to Render backend:", renderError);
        // Fall back to the regular API
        const response = await api.post('/chat/message', { message });
        return response.data;
      }
    } catch (error) {
      console.error("Error sending chat message:", error);
      // Instead of throwing the error, return a mock response
      // This allows the chat to work even when the backend is unavailable
      return {
        message: "This is a mock response as the backend service is unavailable. Please ensure the backend server is running correctly.",
        links: []
      };
    }
  },
  getChatHistory: async () => {
    try {
      const response = await api.get('/chat/history');
      return response.data;
    } catch (error) {
      console.error("Error getting chat history:", error);
      return { messages: [] };
    }
  },
  clearChatHistory: async () => {
    try {
      const response = await api.delete('/chat/history');
      return response.data;
    } catch (error) {
      console.error("Error clearing chat history:", error);
      return { success: false };
    }
  },
  getChatStats: async () => {
    try {
      const response = await api.get('/chat/stats');
      return response.data;
    } catch (error) {
      console.error("Error getting chat stats:", error);
      return { stats: {} };
    }
  }
};

export default api; 