const express = require('express');
const routes = express.Router();

const SemaforoController = require('./controllers/SemaforoController');
const CruzamentoController = require('./controllers/CruzamentoController');
const ViaController = require('./controllers/ViaController');

routes.get('/semaforos', SemaforoController.index);
routes.get('/semaforos/:id', SemaforoController.show)
routes.post('/semaforos', SemaforoController.store);
routes.put('/semaforos/:id', SemaforoController.update);
routes.delete('/semaforos/:id', SemaforoController.delete);

routes.get('/cruzamentos', CruzamentoController.index);
routes.get('/cruzamentos/:id', CruzamentoController.show)
routes.post('/cruzamentos', CruzamentoController.store);
routes.put('/cruzamentos/:id', CruzamentoController.update);
routes.delete('/cruzamentos/:id', CruzamentoController.delete);

routes.get('/vias', ViaController.index);
routes.get('/vias/:id', ViaController.show)
routes.post('/vias', ViaController.store);
routes.put('/vias/:id', ViaController.update);
routes.delete('/vias/:id', ViaController.delete);

module.exports = routes;