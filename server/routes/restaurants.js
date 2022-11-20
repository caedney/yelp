const Router = require('express-promise-router');
const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await db.query('SELECT * FROM restaurants');
    return res.json(restaurants.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Get restaurant
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  return res.send(`Get restaurant ${id}`);
});

// Create restaurant
router.post('/', async (req, res) => {
  console.log(req.body);
  return res.send('Created restaurant');
});

// Update restaurant
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  return res.send(`Updated restaurant ${id}`);
});

// Delete restaurant
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  return res.send(`Deleted restaurant ${id}`);
});
