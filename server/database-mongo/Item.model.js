const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  description: String,
  productname: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;