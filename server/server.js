import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import connectDB from './config/db.js'

// Load env vars first, before any other code
dotenv.config()

// TEMPORARY: Set hardcoded MongoDB URI for testing
if (!process.env.MONGODB_URI) {
  process.env.MONGODB_URI = "mongodb+srv://organicaai:MongoPassword123@clusterorganicaai.vojh4cg.mongodb.net/organicaai";
  console.log("Using hardcoded MongoDB URI for testing");
}

// Print all environment variables for debugging
console.log("Environment variables:");
console.log("PORT =", process.env.PORT);
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("JWT_SECRET length =", process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0);
console.log("FRONTEND_URL =", process.env.FRONTEND_URL);

// Modified validation to be more flexible
const requiredEnvVars = ['PORT', 'JWT_SECRET']
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.warn(`Warning: Environment variable ${envVar} is not set. Using defaults.`)
  }
}

// Connect to database
connectDB()

const app = express()

// Set trust proxy for rate limiting behind proxies (like Render)
app.set('trust proxy', 1)

// Security Middleware
app.use(helmet())
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'https://www.organicaai.com',
    'http://localhost:3000',
    'https://organicaai.com',
    'http://organicaai.com'
  ],
  credentials: true
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Body Parser Middleware
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Routes
import authRoutes from './routes/auth.js'
import chatRoutes from './routes/chat.js'

app.use('/api/auth', authRoutes)
app.use('/api/chat', chatRoutes)

// Health check endpoint - more explicit for Render hosting
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    port: PORT,
    environment: process.env.NODE_ENV || 'development',
    mongodb_connected: true
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  
  const statusCode = err.statusCode || 500
  const message = err.message || 'Something went wrong!'
  
  res.status(statusCode).json({
    status: 'error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
})

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Can't find ${req.originalUrl} on this server`
  })
})

// Start server
const PORT = (() => {
  // Parse PORT environment variable to handle Render's format
  if (process.env.PORT) {
    // Handle case where PORT might be formatted as "PORT=10000"
    if (process.env.PORT.includes('=')) {
      return process.env.PORT.split('=')[1];
    }
    return process.env.PORT;
  }
  return 5000; // Default port
})();

const server = app.listen(PORT, () => {
  console.log(`
Server is running:
- Port: ${PORT}
- Environment: ${process.env.NODE_ENV || 'development'}
- MongoDB URI present: ${process.env.MONGODB_URI ? 'Yes' : 'No'}
- MONGODB_URI length: ${process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0}
  `)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...')
  console.error(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})

// Handle SIGTERM
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully')
  server.close(() => {
    console.log('💥 Process terminated!')
  })
}) 