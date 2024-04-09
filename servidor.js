const http = require('http');
const express = require('express');
const aplicacao = express();

const servidor = http.createServer(aplicacao);
const io = require('socket.io')(servidor);

io.addListener('connection', (socket) => {
    console.log('Conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
});

aplicacao.use(express.static('public'));

servidor.listen(1000, '192.168.56.1');