const Router = require('express-promise-router');
const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM restaurants');

    return res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Create restaurant
router.post('/', async (req, res) => {
  try {
    const { name, location, price_range } = req.body;

    // RETURNING * returns all columns from the newly created row
    const results = await db.query(
      'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *',
      [name, location, price_range]
    );

    return res.status(200).json({
      status: 'success',
      results: 1,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Retrieve restaurant
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Parameterized query
    // Prevents vulnerability from SQL injection attacks
    const restaurant = await db.query(
      'SELECT * FROM restaurants WHERE id = $1',
      [id]
    );

    const reviews = await db.query(
      'SELECT * FROM reviews WHERE restaurant_id = $1',
      [id]
    );

    return res.status(200).json({
      restaurants: restaurant.rows,
      reviews: reviews.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Update restaurant
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, price_range } = req.body;

    const results = await db.query(
      'UPDATE restaurants SET name = $2, location = $3, price_range = $4 WHERE id = $1 RETURNING *',
      [id, name, location, price_range]
    );

    return res.status(200).json({
      status: 'success',
      results: 1,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Delete restaurant
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await db.query('DELETE FROM restaurants WHERE id = $1', [id]);

    return res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Create review
router.post('/:id/add-review', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, review, rating } = req.body;

    // RETURNING * returns all columns from the newly created row
    const reviews = await db.query(
      'INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, name, review, rating]
    );

    return res.status(200).json({
      reviews: reviews.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// export our router to be mounted by the parent application
module.exports = router;
