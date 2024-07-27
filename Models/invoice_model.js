const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
  from: {
    name: String,
    email: String,
    address: {
      street: String,
      city: String,
      state: String,
    },
    phone: String,
    business: String,
    website: String,
    owner: String,
  },
  to: {
    name: String,
    email: String,
    address: {
      street: String,
    },
    phone: String,
    fax: String,
  },
  invoice: {
    number: String,
    date: Date,
  },
  rows: [
    {
      description: String,
      additinal: String,
      quantity: Number,
      tax: Number,
      totalAmount: Number,
      rate: Number,
    },
  ],
  subtotal: Number,
  total: Number,
});
const Invoice = mongoose.model("Invoice", invoiceSchema);   
module.exports = Invoice;
