const ClientModel = require("../Models/client_model");

// Clients
const createClient = async (req, res) => {
  try {
    const postClient = new ClientModel(req.body);
    await postClient.save();
    res.status(201).json(postClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClient = async (req, res) => {
  try {
    const fetchClient = await ClientModel.find();
    res.status(200).json(fetchClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getClientbyID = async (req, res) => {
  try {
    let id = req.params.id;
    const fetchClient = await ClientModel.findById(id);
    res.status(200).json(fetchClient);
  } catch (error) {
    res.status(500).json({ message: "NO ID FOUND", error: error.message });
  }
};
const deleteClientbyID = async (req, res) => {
  try {
    let id = req.params.id;
    const deleteClient = await ClientModel.findByIdAndDelete(id);
    if (!deleteClient) {
      res.status(500).json({ error: error.message });
    }
    res.status(200).json(deleteClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const UpdateClientById = async (req, res) => {
  try {
    let id = req.params.id;
    let updateClientBody = req.body;
    const updateClient = await ClientModel.findByIdAndUpdate(
      id,
      updateClientBody,
      {
        new: true,
      }
    );

    if (!updateClient) {
      return res.status(400).json({ message: "error" });
    }
    res.json(updateClient);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating invoice", error: error.message });
  }
};

module.exports = {
  createClient,
  getClient,
  getClientbyID,
  deleteClientbyID,
  UpdateClientById,
};
