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

// Update a customer
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated doc
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating customer', error });
  }
});
