var mosca = require('mosca');
const express = require('express');

const serverMQTT = () =>{
  var pubsubsettings = {
    type: 'mqtt',
    json: true,
    mqtt: require('mqtt'),
    host: '192.168.0.166',
    port: 1883
  };

  var settings = {
    port:1883,
    host:'192.168.0.166',//IP DO SERVIDOR
    //backend: pubsubsettings
  }

  var server = new mosca.Server(settings);
  server.on('ready', function(){
    console.log("ready");
  });
}
module.exports = serverMQTT;