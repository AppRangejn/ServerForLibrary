const Router = require('express');
const authorController = require('../controllers/authorController');
const { validate } = require('../middleware/validate.mw');
const { authorSchema } = require('../utils/validationSchemas');

const router = new Router();

router
  .route('/authors')
  .get(authorController.getAuthors)
  .post(validate(authorSchema), authorController.createAuthor)
  .put(validate(authorSchema), authorController.updateAuthor);
router
  .route('/authors/:id')
  .get(authorController.getAuthorById)
  .delete(authorController.deleteAuthor);

module.exports = router;
