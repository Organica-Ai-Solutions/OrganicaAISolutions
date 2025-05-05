import dotenv from 'dotenv';
import { generateAIResponse } from './utils/vertexAI.js';

// Load environment variables
dotenv.config();

async function testVertexAI() {
  try {
    console.log('Testing Vertex AI integration...');
    
    // Check for required environment variables
    const requiredVars = ['GOOGLE_CLOUD_PROJECT', 'GOOGLE_APPLICATION_CREDENTIALS'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
      console.log('\nPlease set these variables in your .env file or environment');
      console.log('You will need to create a Google Cloud project and service account credentials');
      console.log('Visit https://cloud.google.com/vertex-ai/docs/start/client-libraries to learn more');
      return;
    }
    
    // Test with a sample message
    const testMessage = "Tell me about Organica AI's mobile development services";
    console.log(`\nSending test message: "${testMessage}"`);
    
    const response = await generateAIResponse(testMessage);
    console.log('\nResponse from Vertex AI:');
    console.log('-'.repeat(50));
    console.log(response);
    console.log('-'.repeat(50));
    console.log('\nVertex AI integration test completed');
    
  } catch (error) {
    console.error('Error testing Vertex AI:', error);
  }
}

// Run the test
testVertexAI(); 