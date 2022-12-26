const mongoose = require("mongoose");

const creatSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
});
const creatCollection = mongoose.model("col_HoidanIT", creatSchema);

module.exports = creatCollection;
