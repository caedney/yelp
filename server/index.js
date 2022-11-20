require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

routes(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
