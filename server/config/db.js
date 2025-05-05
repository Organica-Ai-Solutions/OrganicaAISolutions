import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Hardcoded connection string as fallback (replace with your real credentials)
    const fallbackUri = "mongodb+srv://organicaai:MongoPassword123@clusterorganicaai.vojh4cg.mongodb.net/organicaai";
    
    // Get connection string with fallback
    const connectionString = process.env.MONGODB_URI || fallbackUri;
    
    // Show connection details with credentials masked
    const maskedString = connectionString.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@');
    console.log(`Attempting to connect to MongoDB with: ${maskedString}`);
    
    // Parse connection string for debugging
    try {
      const url = new URL(connectionString);
      console.log("Connection details:");
      console.log("- Protocol:", url.protocol);
      console.log("- Host:", url.host);
      console.log("- Username:", url.username ? "present" : "missing");
      console.log("- Password:", url.password ? "present" : "missing");
      console.log("- Database:", url.pathname.substring(1) || "not specified");
    } catch (parseError) {
      console.error("Error parsing connection string:", parseError.message);
    }
    
    // Connect with simplified options
    const conn = await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 15000, // 15 seconds
      socketTimeoutMS: 45000,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)

    // Handle connection events
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
    // Don't exit, allow app to continue trying
    console.log("Continuing without database connection")
  }
}

export default connectDB 