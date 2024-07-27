const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
  },
  phone: String,
  business: String,
  website: String,
  owner: String,
});
const ClientModel = mongoose.model("client", ClientSchema);
module.exports = ClientModel;
