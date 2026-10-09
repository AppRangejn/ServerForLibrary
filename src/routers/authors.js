const Router = require('express');
const authorController = require('../controllers/authorController');

const router = new Router();

router
    .route('/authors')
    .get(authorController.getAuthors)
    .post(authorController.createAuthor)
    .put(authorController.updateAuthor);
router
    .route('/authors/:id')
    .get(authorController.getAuthorById)
    .delete(authorController.deleteAuthor);

module.exports = router;
