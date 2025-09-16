# Setting Up DeepSeek AI for OrganicaAI Chatbot

This guide helps you set up DeepSeek AI integration for the OrganicaAI chatbot.

## Prerequisites

1. A DeepSeek account
2. Access to the DeepSeek Platform
3. An active payment method for API usage

## Steps to Set Up

### 1. Create a DeepSeek Account

1. Go to [DeepSeek Platform](https://platform.deepseek.com)
2. Sign up for an account if you don't already have one
3. Verify your email address

### 2. Obtain an API Key

1. Log in to your DeepSeek account
2. Navigate to the API section or dashboard
3. Find the API Keys section
4. Create a new API key
5. Copy the API key for later use

### 3. Configure Environment Variables

Add the following to your server's `.env` file:

```
DEEPSEEK_API_KEY=your_deepseek_api_key
```

Replace `your_deepseek_api_key` with the API key you obtained from DeepSeek.

### 4. Test the Integration

Run the test script to verify everything is working:

```
cd server
node test-deepseek-ai.js
```

## Troubleshooting

### Common Issues:

1. **Authentication Error**: Make sure your API key is valid and correctly set in the environment variables.

2. **Rate Limit Exceeded**: Check if you've exceeded your API usage limits.

3. **Billing Issue**: Verify your payment method is valid and your account is in good standing.

4. **Model Availability**: Some models might be in high demand or temporarily unavailable.

## Understanding DeepSeek Models

The OrganicaAI chatbot uses two DeepSeek models:

1. **deepseek-chat (DeepSeek-V3)**: The standard chat model for general responses.

2. **deepseek-reasoner (DeepSeek-R1)**: A specialized reasoning model for more complex questions.

## Managing Costs

DeepSeek API usage is billed based on the number of tokens processed. To manage costs:

1. Monitor your API usage regularly
2. Consider implementing a token budget
3. Optimize your prompts to be concise
4. Use the appropriate model for different types of queries

For more information, visit [DeepSeek API Documentation](https://platform.deepseek.com/api-docs). 