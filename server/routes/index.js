const restaurants = require('./restaurants');

module.exports = (app) => {
  app.use('/api/v1/restaurants', restaurants);
};
