const express = require('express');
const morgan = require('morgan');
const restaurants = require('./restaurants');

const routes = (app) => {
  // Middleware
  app.use(morgan('dev'));
  app.use(express.json());
  // API
  app.use('/api/v1/restaurants', restaurants);
};

module.exports = routes;
