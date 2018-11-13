const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CruzamentoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    semaforos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Semaforo',
        required: true,
    },
    vias:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Via',
        required: true,
    },
});

CruzamentoSchema.plugin(mongoosePaginate);
mongoose.model('Cruzamento', CruzamentoSchema);
module.exports = CruzamentoSchema;