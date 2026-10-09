const Router = require('express');
const customerController = require('../controllers/customerController');

const router = new Router();

router
    .route('/customers')
    .get(customerController.getCustomers)
    .post(customerController.createCustomer)
    .put(customerController.updateCustomer);
router
    .route('/customers/:id')
    .get(customerController.getCustomerById)
    .delete(customerController.deleteCustomer);

module.exports = router;
