const Customer = require('../models/Customer');

// POST: Add new customer
const addCustomer = async (req, res) => {
  const { name, contact, amcStartDate, amcEndDate } = req.body;
  try {
    const customer = new Customer({ name, contact, amcStartDate, amcEndDate });
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Get all customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Update customer
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contact, amcStartDate, amcEndDate } = req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name, contact, amcStartDate, amcEndDate },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE: Remove customer
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting customer" });
  }
};

// ✅ Export all functions in one place
module.exports = {
  addCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer
};
