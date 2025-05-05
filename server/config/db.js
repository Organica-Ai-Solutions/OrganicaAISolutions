import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Print the connection string with password masked
    const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/organicaai';
    const maskedString = connectionString.replace(/:([^@]+)@/, ':****@');
    console.log(`Attempting to connect to MongoDB with: ${maskedString}`);
    
    // Connect with simplified options
    const conn = await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 10000, // Increased timeout to 10s
      socketTimeoutMS: 45000,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)

    // Handle connection errors after initial connection
    mongoose.connection.on('error', err => {
      console.error(`MongoDB connection error: ${err}`)
    })

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect...')
    })

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected')
    })

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
    console.error(`Full error: ${JSON.stringify(error, null, 2)}`)
    // Exit with failure if this is the initial connection
    process.exit(1)
  }
}

export default connectDB 