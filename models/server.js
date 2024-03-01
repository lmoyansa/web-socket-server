require('dotenv').config();

const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Paths
        this.paths = {}

        //Middlewares: función que siempre se ejecuta al levantar el server
        this.middlewares();

        //Creamos las rutas
        this.routes()

        //Sockets
        this.sockets();
    }

    async connectDB() {
        await dbConnection()
    }

    middlewares() {

        //CORS
        this.app.use(cors())

        //Directorio public
        this.app.use(express.static('public'));

    }

    //Definimos las rutas
    routes() {

        //this.app.use(this.paths.auth, require('../routes/auth.routes'))
    }

    sockets() {

        this.io.on('connection', socketController)

    }

    listen() {
        this.server.listen(process.env.PORT, () => {
            console.log('Server correiendo en el puerto ', this.port)
        });
    }

}

module.exports = Server