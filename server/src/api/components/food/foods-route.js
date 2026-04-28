const express = require('express');
const foodsController = require('./foods-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/foods', route);

  // Get list of foods
  route.get('/', foodsController.getfoods);
};