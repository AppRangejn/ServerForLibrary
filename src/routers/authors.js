const Router = require('express');
const authorController = require('../controllers/authorController');
const { validate } = require('../middleware/validate.mw');

const router = new Router();

router
  .route('/authors')
  .get(authorController.getAuthors)
  .post(validate, authorController.createAuthor)
  .put(validate, authorController.updateAuthor);
router
  .route('/authors/:id')
  .get(authorController.getAuthorById)
  .delete(authorController.deleteAuthor);

module.exports = router;
