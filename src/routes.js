const express = require('express');
const routes = express.Router();

const SemaforoController = require('./controllers/SemaforoController');

routes.get('/semaforos', SemaforoController.index);
routes.get('/semaforos/:id', SemaforoController.show)
routes.post('/semaforos', SemaforoController.store);
routes.put('/semaforos/:id', SemaforoController.update);
routes.delete('/semaforos/:id', SemaforoController.delete);

module.exports = routes;