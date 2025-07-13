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

// PUT - Update customer
const updateCustomer = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });

  customer.name = req.body.name || customer.name;
  customer.phone = req.body.phone || customer.phone;
  customer.address = req.body.address || customer.address;

  const updated = await customer.save();
  res.json(updated);
};

// DELETE - Remove customer
const deleteCustomer = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });

  await customer.remove();
  res.json({ message: 'Customer deleted' });
};


module.exports = {
  addCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer
};

