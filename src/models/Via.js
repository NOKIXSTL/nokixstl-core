const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ViaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    sentido: {
        type: String,
        required: true,
    },
    cruzamentos:{
        type: [],
        required: true,
    },
});

ViaSchema.plugin(mongoosePaginate);

mongoose.model('Via', ViaSchema);