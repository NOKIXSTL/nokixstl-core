const mongoose = require('mongoose');

const Via = mongoose.model('Via');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const vias = await Via.paginate({},{ page, limit: 10});
        return res.json(vias);
    },
    async show(req, res){
        const via = await Via.findById(req.params.id);
        return res.json(via);
    },
    async store(req, res) {
        const via = await Via.create(req.body);
        return res.json(via);
    },
    async update(req, res){
        const via = await Via.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(via);
    },
    async delete(req, res){
        await Via.findByIdAndDelete(req.params.id);
        return res.send();
    },
};