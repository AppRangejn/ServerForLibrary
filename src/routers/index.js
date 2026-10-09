const Router = require('express');

const authorRouter = require('./authors');
const bookRouter = require('./books');
const customerRouter = require('./customers');

const router = new Router();

router.use(authorRouter);
router.use(bookRouter);
router.use(customerRouter);

module.exports = router;
