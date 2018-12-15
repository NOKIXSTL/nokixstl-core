const mongoose = require('mongoose');

const Semaforo = mongoose.model('Semaforo');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const semaforos = await Semaforo.paginate({},{ page, limit: 500});
        return res.json(semaforos);
    },
    async show(req, res){
        const semaforo = await Semaforo.findById(req.params.id);
        return res.json(semaforo);
    },
    async store(req, res) {
        console.log(req.body);
        const semaforo = await Semaforo.create(req.body);
        return res.json(semaforo);
    },
    async update(req, res){
        const semaforo = await Semaforo.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(semaforo);
    },
    async delete(req, res){
        await Semaforo.findByIdAndDelete(req.params.id);
        return res.send();
    },
};