import express from 'express'
import { auth } from '../middleware/auth'
import { OpenAI } from 'openai'

const router = express.Router()
const openai = new OpenAI(process.env.OPENAI_API_KEY)

// Tech services information for context
const techServices = {
  ai: {
    title: 'AI & Machine Learning Solutions',
    description: 'Advanced AI solutions for business process automation, prediction, and optimization.',
    capabilities: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Machine Learning Models',
      'AI Integration Services',
    ],
    link: '/services#ai',
  },
  mobile: {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications using cutting-edge technologies.',
    capabilities: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter',
      'Progressive Web Apps',
    ],
    link: '/services#mobile',
  },
  blockchain: {
    title: 'Blockchain Solutions',
    description: 'Secure and transparent blockchain implementations for modern businesses.',
    capabilities: [
      'Smart Contracts',
      'DeFi Solutions',
      'NFT Platforms',
      'Private Blockchains',
      'Cryptocurrency Integration',
    ],
    link: '/services#blockchain',
  },
  analytics: {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics.',
    capabilities: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Real-time Analytics',
      'Custom Dashboards',
    ],
    link: '/services#analytics',
  },
  consulting: {
    title: 'Technology Consulting',
    description: 'Expert advice on digital transformation and technology strategies.',
    capabilities: [
      'Digital Strategy',
      'Technology Assessment',
      'Architecture Design',
      'Process Optimization',
      'Innovation Consulting',
    ],
    link: '/services#consulting',
  },
  security: {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    capabilities: [
      'Security Audits',
      'Penetration Testing',
      'Threat Detection',
      'Security Training',
      'Compliance Solutions',
    ],
    link: '/services#security',
  },
}

// Send message
router.post('/message', auth, async (req, res) => {
  try {
    const { message } = req.body
    const userId = req.user.id

    // Store the message in the database
    await db.chat.create({
      data: {
        content: message,
        userId,
        isUser: true,
      },
    })

    // Generate context for the AI based on the message
    const context = generateContext(message)

    // Get response from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a helpful AI assistant for a technology solutions company. 
          You help users understand our services and capabilities in AI, mobile development, 
          blockchain, analytics, consulting, and cybersecurity. Be concise and professional. 
          When relevant, include links to specific service pages.
          
          Available services context: ${JSON.stringify(techServices)}`,
        },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const aiResponse = completion.choices[0].message.content
    const links = extractLinks(aiResponse, context)

    // Store the AI response in the database
    await db.chat.create({
      data: {
        content: aiResponse,
        userId,
        isUser: false,
      },
    })

    res.json({ message: aiResponse, links })
  } catch (error) {
    console.error('Chat error:', error)
    res.status(500).json({ error: 'Failed to process message' })
  }
})

// Get chat history
router.get('/history', auth, async (req, res) => {
  try {
    const userId = req.user.id
    const history = await db.chat.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
    })
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' })
  }
})

// Clear chat history
router.delete('/history', auth, async (req, res) => {
  try {
    const userId = req.user.id
    await db.chat.deleteMany({
      where: { userId },
    })
    res.json({ message: 'Chat history cleared' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear chat history' })
  }
})

// Get chat statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const userId = req.user.id
    const stats = await db.chat.groupBy({
      by: ['isUser'],
      where: { userId },
      _count: true,
    })
    res.json(stats)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat statistics' })
  }
})

// Helper function to generate context based on message content
function generateContext(message) {
  const context = []
  const messageLower = message.toLowerCase()

  for (const [key, service] of Object.entries(techServices)) {
    if (
      messageLower.includes(key) ||
      messageLower.includes(service.title.toLowerCase()) ||
      service.capabilities.some(cap => messageLower.includes(cap.toLowerCase()))
    ) {
      context.push(service)
    }
  }

  return context
}

// Helper function to extract relevant links from response
function extractLinks(response, context) {
  const links = []
  
  for (const service of context) {
    links.push({
      url: service.link,
      text: `Learn more about ${service.title}`,
    })
  }

  return links
}

export default router 