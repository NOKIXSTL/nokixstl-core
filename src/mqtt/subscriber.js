const mongodb  = require('mongodb');
const mqtt = require('mqtt')
const config = require('./config');

var mqttUri  = 'mqtt://' + config.mqtt.hostname + ':' + config.mqtt.port;
const client  = mqtt.connect(mqttUri);

//"mongodb://localhost:27017/nokixstl", {native_parser:true}
var mong = require('./mongodb');

const subscriber = () => {
    client.on('connect', function () {
        client.subscribe('semaforo');
    })
    client.on('message', function (topic, message) {
        context = message.toString();
        //console.log(context);
        mong(context);
    })


   
}
module.exports = subscriber;