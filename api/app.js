
// // import express from "express";
// // import cors from "cors";
// // import cookieParser from "cookie-parser";
// // import authRoute from "./routes/auth.route.js";
// // import postRoute from "./routes/post.route.js";
// // import testRoute from "./routes/test.route.js";
// // import userRoute from "./routes/user.route.js";
// // import chatRoute from "./routes/chat.route.js";
// // import messageRoute from "./routes/message.route.js";

// //  const app = express();

// // app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
// // app.use(express.json());
// // app.use(cookieParser());

// // app.use("/api/auth", authRoute);
// // app.use("/api/users", userRoute);
// // app.use("/api/posts", postRoute);
// // app.use("/api/test", testRoute);
// // app.use("/api/chats", chatRoute);
// // app.use("/api/messages", messageRoute);


// // app.listen(8800, () => {
// //   console.log("Server is running!");
// //  });

 import express from "express";
 import cors from "cors";
 import cookieParser from "cookie-parser";
 import authRoute from "./routes/auth.route.js";
 import postRoute from "./routes/post.route.js";
 import testRoute from "./routes/test.route.js";
 import userRoute from "./routes/user.route.js";
 import chatRoute from "./routes/chat.route.js";
 import messageRoute from "./routes/message.route.js";
 import dotenv from 'dotenv';

 dotenv.config();

 const app = express();
  const port = process.env.PORT || 8800;
 const MODEL_NAME = "gemini-pro";
 const API_KEY = process.env.API_KEY;

 app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
 app.use(express.json());
 app.use(cookieParser());

 app.use("/api/auth", authRoute);
 app.use("/api/users", userRoute);
 app.use("/api/posts", postRoute);
 app.use("/api/test", testRoute);
 app.use("/api/chats", chatRoute);
 app.use("/api/messages", messageRoute);



  // app.listen(8800, () => {
  //  console.log('Server is running on port 8800!');
  // });
// app.listen(process.env.PORT,()=>{
//   console.log(`Server Running on Port ${process.env.PORT}`);
// });
 export default app;
