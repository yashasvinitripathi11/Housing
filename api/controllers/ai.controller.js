// // // // node --version # Should be >= 18
// // // // npm install @google/generative-ai express

// // // const express = require('express');
// // // const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
// // // const dotenv = require('dotenv').config()

// // // const app = express();
// // // const port = process.env.PORT || 3000;
// // // app.use(express.json());
// // // const MODEL_NAME = "gemini-pro";
// // // const API_KEY = process.env.API_KEY;

// // // async function runChat(userInput) {
// // //   const genAI = new GoogleGenerativeAI(API_KEY);
// // //   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// // //   const generationConfig = {
// // //     temperature: 0.9,
// // //     topK: 1,
// // //     topP: 1,
// // //     maxOutputTokens: 1000,
// // //   };

// // //   const safetySettings = [
// // //     {
// // //       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
// // //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// // //     },
// // //     // ... other safety settings
// // //   ];

// // //   const chat = model.startChat({
// // //     generationConfig,
// // //     safetySettings,
// // //     history: [
// // //       {
// // //         role: "user",
// // //         parts: [{ text: "You are a friendly assistant, You are going to integrate in a website called housing. in this website when user asks about any location and asks you about whether in that location flats are available for rent or buy. Just tell them the locations where flats are available for rent or buy. Tell them about price rate of that area and also more about the location. You can fetch these data from google. remeber one thing , only answer the things that are related to housing or locations ."},
// // //            ],
// // //       },
// // //       {
// // //         role: "model",
// // //         parts: [{text: "I understand! I can help you with that. I'm ready to be integrated into your \"housing\" website and provide users with information about rental and purchase options in different locations. \n\nHere's how I can assist:\n\n**User Query:** \"Are there flats for rent in [Location Name]?\"\n\n**My Response:**\n\n* **Availability:** \"Yes, there are flats available for rent in [Location Name]. \"\n* **Price Range:** \"The average rent for a 1-bedroom flat in [Location Name] is around [Price Range]. However, prices can vary depending on size, amenities, and the specific building.\"\n* **Location Details:** \"[Location Name] is a [Type of area - e.g., vibrant, quiet, family-friendly, etc.] neighborhood located [Brief description of the location's proximity to amenities, transportation, etc.]. [Optional: Mention any notable landmarks or attractions in the area.]\"\n\n**Important Considerations:**\n\n* **Real-Time Data:** I'll need access to up-to-date information on rental and purchase prices. I'll need to be connected to a real estate database or API that provides this information.\n* **Location Specificity:** If the user asks about a very specific location (e.g., \"Are there flats for rent near the park in [Location Name]?\"), I may need to use Google Maps or a similar service to provide more precise information.\n* **User Preferences:** I can learn about user preferences (e.g., budget, desired amenities) to provide more personalized recommendations.\n\n**Example:**\n\n**User:** \"Are there flats for rent in Brooklyn, New York?\"\n\n**Me:** \"Yes, there are flats available for rent in Brooklyn, New York. The average rent for a 1-bedroom flat in Brooklyn is around $2,500 - $3,500 per month, but it can range from $1,800 to $5,000 depending on the neighborhood and amenities. Brooklyn is a diverse and vibrant borough with a mix of residential and commercial areas. You'll find many restaurants, shops, and cultural attractions, as well as parks and green spaces.\"\n\nLet's work together to make your \"housing\" website the go-to resource for users looking to find their perfect home! \n"},
// // //                     ],
// // //       },
      
// // //     ],
// // //   });

// // //   const result = await chat.sendMessage(userInput);
// // //   const response = result.response;
// // //   return response.text();
// // // }

// // // app.get('/', (req, res) => {
// // //   res.sendFile(__dirname + '../../components/bot/Bot.jsx');
// // // });
// // // app.get('/loader.gif', (req, res) => {
// // //   res.sendFile(__dirname + '/loader.gif');
// // // });
// // // app.post('/chat', async (req, res) => {
// // //   try {
// // //     const userInput = req.body?.userInput;
// // //     console.log('incoming /chat req', userInput)
// // //     if (!userInput) {
// // //       return res.status(400).json({ error: 'Invalid request body' });
// // //     }

// // //     const response = await runChat(userInput);
// // //     res.json({ response });
// // //   } catch (error) {
// // //     console.error('Error in chat endpoint:', error);
// // //     res.status(500).json({ error: 'Internal Server Error' });
// // //   }
// // // });

// // // // app.listen(port, () => {
// // // //   console.log(`Server listening on port ${port}`);
// // // // });

// // //  export default API_KEY;

// // import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
// // import dotenv from 'dotenv';

// // dotenv.config();

// // const MODEL_NAME = 'gemini-pro';
// // const API_KEY = process.env.API_KEY;

// // async function runChat(userInput) {
// //   const genAI = new GoogleGenerativeAI(API_KEY);
// //   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// //   const generationConfig = {
// //     temperature: 0.9,
// //     topK: 1,
// //     topP: 1,
// //     maxOutputTokens: 1000,
// //   };

// //   const safetySettings = [
// //     {
// //       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
// //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //     },
// //   ];

// //   const chat = model.startChat({
// //     generationConfig,
// //     safetySettings,
// //     history: [
// //       {
// //         role: 'user',
// //         parts: [{ text: 'You are a friendly assistant, You are going to integrate in a website called housing...' }],
// //       },
// //       {
// //         role: 'model',
// //         parts: [{ text: 'I understand! I can help you with that...' }],
// //       },
// //     ],
// //   });

// //   const result = await chat.sendMessage(userInput);
// //   return result.response.text();
// // }

// // export default async function chatbot(req, res) {
// //   try {
// //     const userInput = req.body?.userInput;
// //     if (!userInput) {
// //       return res.status(400).json({ error: 'Invalid request body' });
// //     }

// //     const response = await runChat(userInput);
// //     res.json({ response });
// //   } catch (error) {
// //     console.error('Error in chat endpoint:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// //  }

// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
// import dotenv from 'dotenv';

// dotenv.config();

// const MODEL_NAME = 'gemini-pro';
// const API_KEY = process.env.API_KEY;

// async function runChat(userInput) {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 1000,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [
//       {
//         role: 'user',
//         parts: [{ text: 'You are a friendly assistant, You are going to integrate in a website called housing...' }],
//       },
//       {
//         role: 'model',
//         parts: [{ text: 'I understand! I can help you with that...' }],
//       },
//     ],
//   });

//   const result = await chat.sendMessage(userInput);
//   return result.response.text();
// }

// export default async function chatbot(req, res) {
//   try {
//     const userInput = req.body?.userInput;
//     if (!userInput) {
//       return res.status(400).json({ error: 'Invalid request body' });
//     }

//     const response = await runChat(userInput);
//     res.json({ response });
//   } catch (error) {
//     console.error('Error in chat endpoint:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

