import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionStr = process.env.mongoURI;

try {
    await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB connected with Mongoose`);
} catch (err) {
    console.error('Error connecting with MongoDB:', err)
}

export default mongoose;