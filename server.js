import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("session_count", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("session_count", activeSessions);
  });
});

