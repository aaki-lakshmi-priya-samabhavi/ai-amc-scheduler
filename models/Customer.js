const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  amcStartDate: {
    type: Date,
    required: true
  },
  amcEndDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
