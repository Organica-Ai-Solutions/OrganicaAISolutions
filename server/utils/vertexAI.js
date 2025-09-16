import { VertexAI } from '@google-cloud/vertexai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Vertex with your project and location
const vertexAI = new VertexAI({
  project: process.env.GOOGLE_CLOUD_PROJECT,
  location: process.env.GOOGLE_CLOUD_LOCATION || 'us-central1',
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS // Path to your service account key file
});

// Get the generative model
const generativeModel = vertexAI.getGenerativeModel({
  model: 'gemini-2.0-pro', // Using Gemini 2.0 Pro model
  generationConfig: {
    temperature: 0.2,
    topP: 0.8,
    topK: 40,
    maxOutputTokens: 2048,
  },
});

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
 * Generate a response using Vertex AI Gemini
 * @param {string} message - The user message
 * @returns {Promise<string>} - The AI response
 */
export async function generateAIResponse(message) {
  try {
    console.log(`Generating AI response for: ${message}`);
    
    // Prepare chat history
    const chat = generativeModel.startChat({
      systemInstruction: SYSTEM_PROMPT,
    });
    
    // Generate response
    const result = await chat.sendMessage(message);
    const response = result.response;
    
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "I'm sorry, I'm having trouble connecting to my AI services. Please try again later or contact us directly at contact@organicaai.com.";
  }
}

// Function to ingest website data (for future enhancement)
export async function ingestWebsiteData(dataPath) {
  try {
    // Read website data (could be HTML, markdown, JSON, etc.)
    const data = fs.readFileSync(dataPath, 'utf8');
    
    // In a real implementation, you would:
    // 1. Parse the data into structured format
    // 2. Use Vertex AI to embed the content
    // 3. Store in a vector database for retrieval
    
    console.log(`Successfully ingested website data from ${dataPath}`);
    return true;
  } catch (error) {
    console.error('Error ingesting website data:', error);
    return false;
  }
}

export default { generateAIResponse, ingestWebsiteData }; 