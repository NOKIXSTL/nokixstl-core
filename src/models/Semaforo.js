const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SemaforoSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    sinal:{
        type: String,
        enum: ['VERDE', 'VERMELHO', 'AMARELO'],
        default: 'VERMELHO',
        required: true
    },
    tempo:{
        type : Number,
        min: 0,
        max: 60,
        required: true
    }
});

SemaforoSchema.plugin(mongoosePaginate);
mongoose.model('Semaforo', SemaforoSchema);
module.exports = SemaforoSchema;