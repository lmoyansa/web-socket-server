

const socketController = (socket) => {

    socket.on('disconnect', () => {
    })

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        callback({ id, fecha: new Date().getTime() });

        socket.broadcast.emit('enviar-mensaje', payload)    //broadcast para mandarle el mensaje a los demas clientes

    })

}

module.exports = {
    socketController
}