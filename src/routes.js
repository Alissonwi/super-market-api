const express = require('express');
const routes = express.Router();

const SuperMarketController = require('./app/controllers/superMarketController')

routes.get('/superMarkets', SuperMarketController.getSuperMarkets);
routes.post('/superMarket', SuperMarketController.addSuperMarket);
routes.put('/superMarket/:id', SuperMarketController.updateSuperMarket);
routes.delete('/superMarket/:id', SuperMarketController.removeSuperMarket);

module.exports = routes;