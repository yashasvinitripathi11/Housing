// import { Server } from "socket.io";

<<<<<<< HEAD
// const io = new Server({
//     cors: {
//         origin: "http://localhost:5173",
//     },
// });

// let onlineUser = []

// const addUser = (userId,socketId)=>{
//     const userExists = onlineUser.find((user) => user.userId === userId);
//     if(!userExists){
//         onlineUser.push({ userId,socketId });
//     }

// };

// const removeUser = (socketId) => {
//     onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
//     return onlineUser.find((user) => user.userId === userId);
// };

// io.on("connection", (socket) => {
//     socket.on("newUser", (user)=>{
//         addUser(userId. socket.id);
        
//     });

//     socket.on("sendMessage", ({ receiverId, data })=>{
//         const receiver = getUser(receiverId)
//         io.to(receiver.socketId).emit("getMessage", data);
//     });
//     socket.on("disconnect",()=>{
//         removeUser(socket.id);

//     })
// });

// io.listen("4000");

=======
const io = new Server({
  cors: {
    origin: "https://estate-housing-8eb9a.web.app/",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (user) => {
    addUser(userId.socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit("getMessage", data);
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen("4000");
>>>>>>> origin/main
