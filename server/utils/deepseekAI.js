import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize OpenAI with DeepSeek configuration
let deepseekClient;
try {
  deepseekClient = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY || 'dummy-key-if-not-available',
    baseURL: 'https://api.deepseek.com',
  });
} catch (error) {
  console.error('Failed to initialize DeepSeek client:', error.message);
}

// System prompt with website context
const SYSTEM_PROMPT = `
You are an AI assistant for Organica AI Solutions, a company that specializes in mobile app development, AI integration, and blockchain technology.

The company offers the following services:
1. Mobile Development: Creating intuitive mobile applications with optimized user experiences.
2. Social Finance Applications: Building solutions that help communities manage and grow their financial resources together.
3. Community-Focused Applications: Developing applications that strengthen community bonds and facilitate collaboration.
4. Blockchain Services: Implementing secure payment processing and financial management solutions.

Current projects include:
- Tanda Circles: A social finance app that helps communities manage group savings and financial circles.
- KAT App: A social media platform connecting cat lovers and their feline friends.
- NIS Protocol: A biologically inspired framework for designing intelligent multi-agent systems that mimic human cognitive processes.

The company is based in Philadelphia, PA and can be contacted at contact@organicaai.com or +1-215-888-8748.

Your task is to provide helpful, accurate, and concise information about Organica AI Solutions and its services. 
Be friendly and professional. If you don't know something specific about the company that wasn't provided in this context, 
acknowledge that limitation and offer to help the user contact the company directly for more information.
`;

/**
 * Generate a response using DeepSeek AI
 * @param {string} message - The user message
 * @returns {Promise<string>} - The AI response
 */
export async function generateAIResponse(message) {
  try {
    console.log(`Generating DeepSeek AI response for: ${message}`);
    
    // Check if the client is available
    if (!deepseekClient) {
      throw new Error('DeepSeek client is not initialized');
    }
    
    const completion = await deepseekClient.chat.completions.create({
      model: "deepseek-chat", // Using the latest DeepSeek-V3 model
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      temperature: 0.2,
      max_tokens: 1024,
    });
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating DeepSeek AI response:', error);
    return "I'm sorry, I'm having trouble connecting to my AI services. Please try again later or contact us directly at contact@organicaai.com.";
  }
}

/**
 * Generate a reasoning response using DeepSeek AI's reasoning model
 * @param {string} message - The user message
 * @returns {Promise<string>} - The AI response
 */
export async function generateReasoningResponse(message) {
  try {
    console.log(`Generating DeepSeek reasoning response for: ${message}`);
    
    // Check if the client is available
    if (!deepseekClient) {
      throw new Error('DeepSeek client is not initialized');
    }
    
    const completion = await deepseekClient.chat.completions.create({
      model: "deepseek-reasoner", // Using the DeepSeek-R1 reasoning model
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      temperature: 0.1, // Lower temperature for more precise reasoning
      max_tokens: 2048,
    });
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating DeepSeek reasoning response:', error);
    return "I'm sorry, I'm having trouble connecting to my reasoning services. Please try again later or contact us directly at contact@organicaai.com.";
  }
}

export default { generateAIResponse, generateReasoningResponse }; 