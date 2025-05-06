import dotenv from 'dotenv';
import { generateAIResponse, generateReasoningResponse } from './utils/deepseekAI.js';

// Load environment variables
dotenv.config();

async function testDeepseekAI() {
  try {
    console.log('Testing DeepSeek AI integration...');
    
    // Check for required environment variables
    if (!process.env.DEEPSEEK_API_KEY) {
      console.error('Missing required environment variable: DEEPSEEK_API_KEY');
      console.log('\nPlease set this variable in your .env file or environment');
      console.log('You will need to obtain an API key from DeepSeek API');
      console.log('Visit https://platform.deepseek.com to get your API key');
      return;
    }
    
    // Test with a sample message (standard model)
    const testMessage = "Tell me about Organica AI's mobile development services";
    console.log(`\nSending test message to standard model: "${testMessage}"`);
    
    const response = await generateAIResponse(testMessage);
    console.log('\nResponse from DeepSeek AI (standard model):');
    console.log('-'.repeat(50));
    console.log(response);
    console.log('-'.repeat(50));
    
    // Test with a more complex question (reasoning model)
    const reasoningQuestion = "Compare Organica AI's blockchain services with their mobile development. What are the key differences and similarities?";
    console.log(`\nSending test message to reasoning model: "${reasoningQuestion}"`);
    
    const reasoningResponse = await generateReasoningResponse(reasoningQuestion);
    console.log('\nResponse from DeepSeek AI (reasoning model):');
    console.log('-'.repeat(50));
    console.log(reasoningResponse);
    console.log('-'.repeat(50));
    
    console.log('\nDeepSeek AI integration test completed');
    
  } catch (error) {
    console.error('Error testing DeepSeek AI:', error);
  }
}

// Run the test
testDeepseekAI(); 