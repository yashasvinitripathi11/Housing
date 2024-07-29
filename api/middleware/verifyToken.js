// import jwt from "jsonwebtoken";

// export const verifyToken = (req,res,next) => {
//     const token = req.cookies.token
//     const authHeader = req.headers["authorization"];

//     if(!token) return res.status(401).json({message:"Not Authenticated!"});

//     jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
//         if(err) return res.status(401).json({ message: "Token is not valid!"});

//         req.userId = payload.id;

//         next();
//     });
// }

import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log("Token:", token); // Check if the token is received

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(401).json({ message: "Token is not valid!" });

    req.userId = payload.id;
    next();
  });
};

