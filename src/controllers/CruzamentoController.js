const mongoose = require('mongoose');

const Cruzamento = mongoose.model('Cruzamento');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const cruzamentos = await Cruzamento.paginate({},{ page, limit: 10});
        return res.json(cruzamentos);
    },
    async show(req, res){
        const cruzamento = await Cruzamento.findById(req.params.id);
        return res.json(cruzamento);
    },
    async store(req, res) {
        const cruzamento = await Cruzamento.create(req.body);
        return res.json(cruzamento);
    },
    async update(req, res){
        const cruzamento = await Cruzamento.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(cruzamento);
    },
    async delete(req, res){
        await Cruzamento.findByIdAndDelete(req.params.id);
        return res.send();
    },
};