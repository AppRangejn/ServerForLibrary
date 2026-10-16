const Router = require('express');
const customerController = require('../controllers/customerController');
const { validate } = require('../middleware/validate.mw');
const { customerSchema } = require('../utils/validationSchemas');

const router = new Router();

router
  .route('/customers')
  .get(customerController.getCustomers)
  .post(validate(customerSchema), customerController.createCustomer)
  .put(validate(customerSchema), customerController.updateCustomer);
router
  .route('/customers/:id')
  .get(customerController.getCustomerById)
  .delete(customerController.deleteCustomer);

module.exports = router;
