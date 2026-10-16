const Router = require('express');
const bookController = require('../controllers/bookController');
const { validate } = require('../middleware/validate.mw');
const { bookSchema } = require('../utils/validationSchemas');

const router = new Router();

router
  .route('/books')
  .get(bookController.getBooks)
  .post(validate(bookSchema), bookController.createBook)
  .put(validate(bookSchema), bookController.updateBook);
router
  .route('/books/:id')
  .get(bookController.getBookById)
  .delete(bookController.deleteBook);

module.exports = router;
