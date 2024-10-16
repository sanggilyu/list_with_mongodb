const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
