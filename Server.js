const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const invoiceRoutes = require("./Routes/inovice_Routes");
const clientRoutes = require("./Routes/client_Routes");
const userRoutes = require("./Routes/user_Routes");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
function dbConnect() {
  mongoose
    .connect(process.env.mongo_URL || "mongodb://127.0.0.1:27017/Invoice_tool")
    .then(() => {
      console.log("Database connected succesfully");
    })
    .catch((err) => {
      console.log("Data base not connected", err);
    });
}
dbConnect();

// Use routes
app.use("/invoices", invoiceRoutes);
app.use("/clients", clientRoutes);
app.use("/users", userRoutes);

// Start the server
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8000;
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
