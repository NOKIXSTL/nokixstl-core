const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CruzamentoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    semaforos: {
        type: [],
        required: true,
    },
    vias:{
        type: [],
        required: true,
    },
});

CruzamentoSchema.plugin(mongoosePaginate);

mongoose.model('Cruzamento', CruzamentoSchema);