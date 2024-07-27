
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

//  import express from "express";
//  import cors from "cors";
//  import cookieParser from "cookie-parser";
//  import authRoute from "./routes/auth.route.js";
//  import postRoute from "./routes/post.route.js";
//  import testRoute from "./routes/test.route.js";
//  import userRoute from "./routes/user.route.js";
//  import chatRoute from "./routes/chat.route.js";
//  import messageRoute from "./routes/message.route.js";
//  import dotenv from 'dotenv';

//  dotenv.config();

//  const app = express();
//   const port = process.env.PORT || 8800;
//  const MODEL_NAME = "gemini-pro";
//  const API_KEY = process.env.API_KEY;

//  app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
//  app.use(express.json());
//  app.use(cookieParser());

//  app.use("/api/auth", authRoute);
//  app.use("/api/users", userRoute);
//  app.use("/api/posts", postRoute);
//  app.use("/api/test", testRoute);
//  app.use("/api/chats", chatRoute);
//  app.use("/api/messages", messageRoute);



//   // app.listen(8800, () => {
//   //  console.log('Server is running on port 8800!');
//   // });
// // app.listen(process.env.PORT,()=>{
// //   console.log(`Server Running on Port ${process.env.PORT}`);
// // });
//  export default app;

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import testRoute from './routes/test.route.js';
import userRoute from './routes/user.route.js';
import chatRoute from './routes/chat.route.js';
import messageRoute from './routes/message.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8800;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/test', testRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

// Chatbot route
// const MODEL_NAME = "gemini-pro";
// const API_KEY = process.env.API_KEY;

// async function runChat(userInput) {
//   try {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//     const generationConfig = {
//       temperature: 0.9,
//       topK: 1,
//       topP: 1,
//       maxOutputTokens: 1000,
//     };

//     const safetySettings = [
//       {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       // ... other safety settings
//     ];

//     const chat = model.startChat({
//       generationConfig,
//       safetySettings,
//       history: [
//         {
//                        role: "user",
//                        parts: [{ text: "You are a friendly assistant, You are going to integrate in a website called housing. in this website when user asks about any location and asks you about whether in that location flats are available for rent or buy. Just tell them the locations where flats are available for rent or buy. Tell them about price rate of that area and also more about the location. You can fetch these data from google. remeber one thing , only answer the things that are related to housing or locations ."},
//                           ],
//                      },
//                      {
//                        role: "model",
//                        parts: [{text: "I understand! I can help you with that. I'm ready to be integrated into your \"housing\" website and provide users with information about rental and purchase options in different locations. \n\nHere's how I can assist:\n\n**User Query:** \"Are there flats for rent in [Location Name]?\"\n\n**My Response:**\n\n* **Availability:** \"Yes, there are flats available for rent in [Location Name]. \"\n* **Price Range:** \"The average rent for a 1-bedroom flat in [Location Name] is around [Price Range]. However, prices can vary depending on size, amenities, and the specific building.\"\n* **Location Details:** \"[Location Name] is a [Type of area - e.g., vibrant, quiet, family-friendly, etc.] neighborhood located [Brief description of the location's proximity to amenities, transportation, etc.]. [Optional: Mention any notable landmarks or attractions in the area.]\"\n\n**Important Considerations:**\n\n* **Real-Time Data:** I'll need access to up-to-date information on rental and purchase prices. I'll need to be connected to a real estate database or API that provides this information.\n* **Location Specificity:** If the user asks about a very specific location (e.g., \"Are there flats for rent near the park in [Location Name]?\"), I may need to use Google Maps or a similar service to provide more precise information.\n* **User Preferences:** I can learn about user preferences (e.g., budget, desired amenities) to provide more personalized recommendations.\n\n**Example:**\n\n**User:** \"Are there flats for rent in Brooklyn, New York?\"\n\n**Me:** \"Yes, there are flats available for rent in Brooklyn, New York. The average rent for a 1-bedroom flat in Brooklyn is around $2,500 - $3,500 per month, but it can range from $1,800 to $5,000 depending on the neighborhood and amenities. Brooklyn is a diverse and vibrant borough with a mix of residential and commercial areas. You'll find many restaurants, shops, and cultural attractions, as well as parks and green spaces.\"\n\nLet's work together to make your \"housing\" website the go-to resource for users looking to find their perfect home! \n"},
//                                    ],
//                      },
//       ],
//     });

//     const result = await chat.sendMessage(userInput);
//     const response = result.response;
//     return response.text();
//   } catch (error) {
//     console.error('Error in runChat function:', error);
//     throw error;
//   }
// }

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/chatbot.html'));
// });

// app.get('/loader.gif', (req, res) => {
//   res.sendFile(path.join(__dirname + '/loader.gif'));
// });

// app.post('/generate', async (req, res) => {
//   try {
//     const userInput = req.body.userInput;
//     console.log('incoming /generate req', userInput);
//     if (!userInput) {
//       return res.status(400).json({ error: 'Invalid request body' });
//     }

//     const response = await runChat(userInput);
//     res.json({ response });
//   } catch (error) {
//     console.error('Error in /generate endpoint:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
