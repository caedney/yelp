const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const restaurants = require('./restaurants');

const routes = (app) => {
  // Middleware
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  // API
  app.use('/api/v1/restaurants', restaurants);
};

module.exports = routes;
