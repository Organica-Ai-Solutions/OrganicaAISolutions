import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
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
  sendMessage: (message) => {
    return api.post('/chat/message', { message });
  },
  getChatHistory: () => {
    return api.get('/chat/history');
  },
  clearChatHistory: () => {
    return api.delete('/chat/history');
  },
  getChatStats: () => {
    return api.get('/chat/stats');
  }
};

export default api; 