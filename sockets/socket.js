var { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();
bands.addBand(new Band('Walter 1'));
bands.addBand(new Band('Walter 2'));
bands.addBand(new Band('Walter 3'));
bands.addBand(new Band('Walter 4'));
//Mensajes de socket.io

io.on('connection', client => {
    console.log('cliente sconectado');

    client.emit('active-bands', bands.getBands());

    client.on('event', data => {

    });

    client.on('mensaje', () => {
            
    });

    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    client.on('emitir-mensaje', (payload) => {
        client.broadcast.emit('nuevo-mensaje', payload);
    });

    client.on('vote-band', (payload) => {
        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    });
    client.on('crear-band', (payload) => { 
        bands.addBand(new Band(payload.name));
        io.emit('active-bands', bands.getBands());
    });
    client.on('delete-band', (payload) => { 
        bands.deleteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    });
});
