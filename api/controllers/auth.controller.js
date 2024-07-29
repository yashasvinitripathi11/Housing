// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import prisma from "../lib/prisma.js";

// export const register = async (req,res)=>{
//     const { username, email, password } = req.body;

    



//     try{
//         const hashedPassword = await bcrypt .hash(password, 10);

//     console.log(hashedPassword);

    


    
//     const newUser = await prisma.user.create({
//         data : {
//             username,
//             email,
//             password: hashedPassword,

//         },
//     });

//     console.log(newUser);

//     res.status(201).json({message:"User created successfully"});
//     }catch(err){
//         console.log(err)
//         res.status(500).json({message:"Failed to create user!"});
//     }
 

// };
// export const login = async (req,res)=>{
//     const { username, password} = req.body;
    
//     try{


//         const user = await prisma.user.findUnique({
//             where:{ username },
//         });

//         if(!user) return res.status(401).json({message:"Invalid Credentials!"});

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if(!isPasswordValid)  return res.status(401).json({message:"Invalid Credentials!"});

//         // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");
//         const age = 1000 * 60 * 60 * 24 * 7;
        
//         const token = jwt.sign({
//             id:user.id,
//             isAdmin: false,

//         }, 
//         process.env.JWT_SECRET_KEY,
//         { expiresIn: age }
//        );

//        const {password:userPassword, ...userInfo} = user;

        
//         res
//            .cookie("token", token, {
//             httpOnly: true,
//             // secure:true,
//             maxAge: age,


//            })
//            .status(200)
//            .json(userInfo);




//     }catch(err){
//         console.log(err);
//         res.status(500).json({message:"Failed to login!"});
//     }
    
// };
// export const logout = (req,res)=>{

//     res.clearCookie("token").status(200).json({ message: "Logout Successful" });
    
// };


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Register a new user
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        // Create the new user
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log("New User:", newUser);

        // Generate JWT token
        const token = jwt.sign(
            { id: newUser.id, isAdmin: false },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '7d' } // Token expiration time
        );

        // Send the token as a cookie
        res.cookie("token", token, {
            httpOnly: true, // Prevent client-side access to the cookie
            secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
            maxAge: 1000 * 60 * 60 * 24 * 7, // Cookie expiration time (7 days)
        }).status(201).json({ message: "User created successfully", user: newUser });

    } catch (err) {
        console.error("Error in registration:", err);
        res.status(500).json({ message: "Failed to create user!" });
    }
};

// Login a user
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

        // Check if the password is valid
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials!" });

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, isAdmin: false },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '7d' } // Token expiration time
        );

        // Exclude the password from the user info
        const { password: userPassword, ...userInfo } = user;

        // Send the token as a cookie
        res.cookie("token", token, {
            httpOnly: true, // Prevent client-side access to the cookie
            secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
            maxAge: 1000 * 60 * 60 * 24 * 7, // Cookie expiration time (7 days)
        }).status(200).json(userInfo);

    } catch (err) {
        console.error("Error in login:", err);
        res.status(500).json({ message: "Failed to login!" });
    }
};

// Logout a user
export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true, // Ensure the cookie is cleared
        secure: process.env.NODE_ENV === 'production', // Only clear the cookie over HTTPS in production
    }).status(200).json({ message: "Logout Successful" });
};

