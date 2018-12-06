const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//var mosca = require('mosca');
//const serverMQTT = require('./src/mqtt/broker');

//Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());
//app.use(serverMQTT);

//Iniciando o DB
mongoose.connect('mongodb://localhost/nokixstl', { useNewUrlParser: true, useCreateIndex: true });

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

//var pubsubsettings = {
//    type: 'mqtt',
//    json: true,
//    mqtt: require('mqtt'),
//    host: '192.168.0.166',
//    port: 1883
//};

//var settings = {
//  port:1883,
//    host:'192.168.0.166',//IP DO SERVIDOR
//    backend: pubsubsettings
//  }

//  var server = new mosca.Server(settings);
//  server.on('ready', function(){
//   console.log("Servidor MQTT iniciado");
//  });

app.listen(3001, function() {
    console.log("Servidor API REST iniciado!");
  });