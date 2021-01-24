const express = require('express');
const path = require('path');
require('dotenv').config();

//Ap express
const app = express();

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


const public = path.resolve(__dirname, 'public');
app.use(express.static( public ));




server.listen(process.env.PORT, (err) => {
     if(err) throw new Error(err);

     console.log('Servidor covrriendo puerto '+process.env.PORT);
});