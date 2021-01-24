var { io } = require('../index');


//Mensajes de socket.io

io.on('connect', client => {
    console.log('cliente sconectado');
    client.on('event', data => {

    });

    client.on('mensaje', () => {
            
    });

    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });
});
