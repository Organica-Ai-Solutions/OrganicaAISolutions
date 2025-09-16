import axios from 'axios';
import { authService } from '../api';

// Mock axios
jest.mock('axios');

describe('API Services', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('authService', () => {
    test('login sets token in localStorage', async () => {
      const mockResponse = {
        data: {
          token: 'test-token',
          user: { id: 1, email: 'test@test.com' }
        }
      };

      axios.post.mockResolvedValueOnce(mockResponse);

      const credentials = { email: 'test@test.com', password: 'password' };
      await authService.login(credentials);

      expect(localStorage.getItem('token')).toBe('test-token');
    });

    test('logout removes token from localStorage', () => {
      localStorage.setItem('token', 'test-token');
      authService.logout();
      expect(localStorage.getItem('token')).toBeNull();
    });
  });
}); 