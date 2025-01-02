import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';
import { act } from 'react-dom/test-utils';

// Mock component to test the context
const TestComponent = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      {user ? (
        <>
          <div>Logged in as: {user.email}</div>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ email: 'test@test.com', password: 'password' })}>
          Login
        </button>
      )}
    </div>
  );
};

describe('AuthContext', () => {
  test('provides authentication functionality', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Initially should show login button
    expect(screen.getByText(/login/i)).toBeInTheDocument();

    // Click login
    await act(async () => {
      fireEvent.click(screen.getByText(/login/i));
    });

    // Should show logged in state
    await waitFor(() => {
      expect(screen.getByText(/logged in as:/i)).toBeInTheDocument();
    });

    // Test logout
    fireEvent.click(screen.getByText(/logout/i));
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
}); 