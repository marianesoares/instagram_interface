const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); //o backend se comunica com o front mesmo estando em dir diferentes 

const app = express(); //permite lidar com rotas parametros e respostas

const server = require('http').Server(app);
const io = require('socket.io')(server); // permite requisicoes e enviar requisicoes

mongoose.connect('mongodb+srv://dbMariane:euseila@123@cluster0-quvpi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io; 

    next(); //permite q os midwares q vem depois tb sejam executados
})

app.use(cors()); //todos os end e urls possam acessar o backend

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes')); 

server.listen(3333);


