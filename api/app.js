import express from "express";
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import testRoute from './routes/test.route.js'
import useRoute from './routes/user.route.js'
import chatRoute from './routes/chat.route.js'
import messageRoute from './routes/message.route.js'
import cookieParser from "cookie-parser";
import cors from 'cors'


const app = express();

const allowedOrigins = [
    'https://real-estate-three-orcin.vercel.app',
    'https://realestatemern-1-qgpr.onrender.com'
  ];
  app.use(cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));
app.use(express.json());
app.use(cookieParser());


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