const router = require('express').Router();  // ✅ This line is required

const {
  addCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customerController');

// ✅ Routes
router.route('/')
  .get(getCustomers)
  .post(addCustomer);

router.route('/:id')
  .put(updateCustomer)
  .delete(deleteCustomer);

// ✅ Export the router once
module.exports = router;
