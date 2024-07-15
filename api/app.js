import express from "express";
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import testRoute from './routes/test.route.js'
import useRoute from './routes/user.route.js'
import chatRoute from './routes/chat.route.js'
import messageRoute from './routes/message.route.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();


const app = express();


const allowedOrigins = [
  'https://realestatemern-1-qgpr.onrender.com'
];
app.use(cors( {
  origin: allowedOrigins,
    credentials:true,            
    optionSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]  
  }
));
app.use(express.json());
app.use(cookieParser());


// MongoDB Connection
const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.DATABASE_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
  }
};

connectDB();









app.use("/api/posts", postRoute );
app.use("/api/auth", authRoute );
app.use("/api/test", testRoute );
app.use("/api/users", useRoute );
app.use("/api/chats", chatRoute);
app.use("/api/message", messageRoute);



app.get("/", (req, res) => {
    res.send("Welcome to your Yikes estate");
  });




app.listen(8800, () => {
    console.log("Server is running on port 8800");
})