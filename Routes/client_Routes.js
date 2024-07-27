const express = require("express");
const router = express.Router();
const clientController = require("../Controllers/client_controller");

// Client Controllers
router.post("/", clientController.createClient);
router.get("/", clientController.getClient);
router.get("/:id", clientController.getClientbyID);
router.delete("/:id", clientController.deleteClientbyID);
router.patch("/:id", clientController.UpdateClientById);
module.exports = router;
