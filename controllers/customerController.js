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

module.exports = { addCustomer, getCustomers };


// UPDATE a customer
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE a customer
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer
};

