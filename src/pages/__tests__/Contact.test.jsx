import { render, screen, fireEvent } from '../../utils/test-utils';
import Contact from '../Contact';

describe('Contact', () => {
  test('renders contact page content', () => {
    render(<Contact />);
    
    // Check for main heading and description
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText(/We're here to help you transform your business/)).toBeInTheDocument();
    
    // Check for contact information
    expect(screen.getByText(/1438 N7th st./)).toBeInTheDocument();
    expect(screen.getByText(/Philadelphia PA0, 19122/)).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('+1-215-888-8748')).toBeInTheDocument();
    expect(screen.getByText('contact@organicaai.com')).toBeInTheDocument();
  });

  test('renders contact form fields', () => {
    render(<Contact />);
    
    // Check for form labels
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Company')).toBeInTheDocument();
    expect(screen.getByLabelText('Service of Interest')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    
    // Check for submit button
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  test('handles form input changes', () => {
    render(<Contact />);
    
    // Get form fields
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    
    // Simulate user input
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    // Check if inputs have the correct values
    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Test message');
  });

  test('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Contact />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));
    
    // Check if form data was logged (temporary implementation)
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', expect.any(Object));
    
    consoleSpy.mockRestore();
  });
}); 