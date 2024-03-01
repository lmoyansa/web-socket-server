require('dotenv').config()

const Server = require("./models/server");

//Creamos la instancia del servidor 
const server = new Server();

server.listen();