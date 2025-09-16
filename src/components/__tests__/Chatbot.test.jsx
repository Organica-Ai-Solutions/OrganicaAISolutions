import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Chatbot from '../Chatbot'
import { chatService } from '../../utils/api'
import { useAuth } from '../../contexts/AuthContext'

// Mock the chat service
jest.mock('../../utils/api', () => ({
  chatService: {
    sendMessage: jest.fn(),
  },
}))

// Mock the auth context
jest.mock('../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}))

describe('Chatbot', () => {
  beforeEach(() => {
    useAuth.mockReturnValue({ isAuthenticated: true })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders chat button initially', () => {
    render(<Chatbot />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('opens chat window when button is clicked', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('AI Assistant')).toBeInTheDocument()
  })

  test('displays initial welcome message', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    expect(
      screen.getByText("Hello! I'm your AI assistant. How can I help you with our technology solutions?")
    ).toBeInTheDocument()
  })

  test('displays suggestion buttons', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Tell me about your AI solutions')).toBeInTheDocument()
    expect(screen.getByText('How can you help with mobile development?')).toBeInTheDocument()
    expect(screen.getByText('What blockchain services do you offer?')).toBeInTheDocument()
    expect(screen.getByText('Explain your cybersecurity solutions')).toBeInTheDocument()
  })

  test('sends message and displays response', async () => {
    const mockResponse = {
      message: 'I can help you with that!',
      links: [{ url: 'https://example.com', text: 'Learn More' }],
    }
    chatService.sendMessage.mockResolvedValueOnce(mockResponse)

    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))

    const input = screen.getByPlaceholderText('Type your message...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument()
      expect(screen.getByText('I can help you with that!')).toBeInTheDocument()
      expect(screen.getByText('Learn More')).toBeInTheDocument()
    })
  })

  test('handles error when sending message fails', async () => {
    chatService.sendMessage.mockRejectedValueOnce(new Error('Failed to send'))

    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))

    const input = screen.getByPlaceholderText('Type your message...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    await waitFor(() => {
      expect(screen.getByText('Sorry, I encountered an error. Please try again.')).toBeInTheDocument()
    })
  })

  test('closes chat window', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    
    expect(screen.queryByText('AI Assistant')).not.toBeInTheDocument()
  })

  test('fills input with suggestion when clicked', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    
    const suggestion = screen.getByText('Tell me about your AI solutions')
    fireEvent.click(suggestion)
    
    const input = screen.getByPlaceholderText('Type your message...')
    expect(input.value).toBe('Tell me about your AI solutions')
  })

  test('disables send button when input is empty', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    
    const sendButton = screen.getByRole('button', { name: /send/i })
    expect(sendButton).toBeDisabled()
  })

  test('disables send button while sending message', async () => {
    chatService.sendMessage.mockImplementationOnce(() => new Promise(resolve => setTimeout(resolve, 100)))

    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))

    const input = screen.getByPlaceholderText('Type your message...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    const sendButton = screen.getByRole('button', { name: /send/i })
    expect(sendButton).toBeDisabled()
  })
}) 