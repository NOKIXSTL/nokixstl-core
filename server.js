const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const serverMQTT = require('./src/mqtt/broker');
var mosca = require('mosca');

//const serverMQTT = require('./src/mqtt/broker');

//Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());
//app.use(serverMQTT);

//Iniciando o DB
const uri = 'mongodb://localhost/nokixstl';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });


requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));


app.listen(3001, function() {
  console.log("Servidor API REST iniciado!");
  serverMQTT();
});