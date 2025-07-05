const express = require('express');
const router = express.Router();
//this is code

// ✅ Import all controller functions once
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
