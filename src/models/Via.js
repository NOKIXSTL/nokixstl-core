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
    cruzamentos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Cruzamento',
        required: true,
    },
});

ViaSchema.plugin(mongoosePaginate);
mongoose.model('Via', ViaSchema);
module.exports = ViaSchema;