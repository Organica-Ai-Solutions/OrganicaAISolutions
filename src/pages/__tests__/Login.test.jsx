import { render, screen, fireEvent, waitFor } from '../../utils/test-utils';
import Login from '../Login';
import { authService } from '../../utils/api';

// Mock the auth service
jest.mock('../../utils/api', () => ({
  authService: {
    login: jest.fn()
  }
}));

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form', () => {
    render(<Login />);
    
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
  });

  test('handles login submission', async () => {
    const mockUser = { email: 'test@test.com' };
    authService.login.mockResolvedValueOnce({
      token: 'fake-token',
      user: mockUser
    });
    
    render(<Login />);
    
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'test@test.com' }
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));
    
    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledWith({
        email: 'test@test.com',
        password: 'password123'
      });
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  test('displays error message on login failure', async () => {
    authService.login.mockRejectedValueOnce(new Error('Invalid credentials'));
    
    render(<Login />);
    
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'test@test.com' }
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'wrongpassword' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/Failed to sign in/i)).toBeInTheDocument();
    });
  });
}); 