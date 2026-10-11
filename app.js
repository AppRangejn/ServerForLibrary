const express = require('express');
const cors = require('cors');
const router = require('./src/routers');
const {
  errorHandlers: { validationErrorHandler, errorHandler },
} = require('./src/middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(validationErrorHandler);
app.use(errorHandler);

module.exports = app;
