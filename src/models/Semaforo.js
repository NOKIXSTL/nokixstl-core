const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SemaforoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    movimento:{
        type: [String],
        required: true,
    },
});

SemaforoSchema.plugin(mongoosePaginate);

mongoose.model('Semaforo', SemaforoSchema);