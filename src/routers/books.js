const Router = require('express');
const bookController = require('../controllers/bookController');
const { validate } = require('../middleware/validate.mw');

const router = new Router();

router
  .route('/books')
  .get(bookController.getBooks)
  .post(validate, bookController.createBook)
  .put(validate, bookController.updateBook);
router
  .route('/books/:id')
  .get(bookController.getBookById)
  .delete(bookController.deleteBook);

module.exports = router;
