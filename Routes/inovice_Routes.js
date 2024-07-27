const express = require("express");
const router = express.Router();
const invoiceController = require("../Controllers/invoice_controller");

router.post("/", invoiceController.createInvoice);
router.get("/", invoiceController.getInvoices);
router.put("/:id", invoiceController.updateInvoiceData);
router.delete("/:id", invoiceController.deleteInvoice);
router.get("/:id", invoiceController.getInvoicesID);



module.exports = router;
