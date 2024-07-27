const Invoice = require("../Models/invoice_model");

//Invoices
const createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getInvoicesID = async (req, res) => {
  try {
    let id = req.params.id;
    const invoices = await Invoice.findById(id);
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateInvoiceData = async (req, res) => {
  try {
    let id = req.params.id;
    let updateInvoiceID = req.body;
    let updateInvoice = await Invoice.findByIdAndUpdate(id, updateInvoiceID, {
      new: true,
    });
    if (!updateInvoice) {
      return res.status(400).json({ message: "error" });
    }
    res.json(updateInvoice);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating invoice", error: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteID = await Invoice.findByIdAndDelete(id);
    if (!deleteID) {
      return res.status(400).json({ message: "Id not deleted" });
    }
    res.json(deleteID);
  } catch (error) {
    res.status(500).json({ message: " No Id found against this" });
  }
};



module.exports = {
  createInvoice,
  getInvoices,
  updateInvoiceData,
  deleteInvoice,
  getInvoicesID,
};
