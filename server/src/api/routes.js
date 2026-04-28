const express = require('express');

const foods = require('./components/food/foods-route');

module.exports = () => {
  const app = express.Router();

  foods(app);


  return app;
};
