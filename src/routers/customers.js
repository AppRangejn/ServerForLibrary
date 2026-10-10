const Router = require('express');
const customerController = require('../controllers/customerController');
const { validate } = require('../middleware/validate.mw');

const router = new Router();

router
  .route('/customers')
  .get(customerController.getCustomers)
  .post(validate, customerController.createCustomer)
  .put(validate, customerController.updateCustomer);
router
  .route('/customers/:id')
  .get(customerController.getCustomerById)
  .delete(customerController.deleteCustomer);

module.exports = router;
