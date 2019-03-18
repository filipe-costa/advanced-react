// let's go!
require("dotenv").config({path: "variables.env"})
const yogaServer = require("./server")
const db = require("./db")

const server = yogaServer()



// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, (server) => console.log(`Server is running on port http://localhost:${server.port}`))