const Router = require('express');
const bookController = require('../controllers/bookController');

const router = new Router();

router
    .route('/books')
    .get(bookController.getBooks)
    .post(bookController.createBook)
    .put(bookController.updateBook);
router
    .route('/books/:id')
    .get(bookController.getBookById)
    .delete(bookController.deleteBook);

module.exports = router;
