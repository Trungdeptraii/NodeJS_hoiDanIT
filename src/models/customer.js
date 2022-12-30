const mongoose = require("mongoose");

// Khởi tạo khung cho dữ liệu ghi vào Colection
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: String,
    phone: String,
    city: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

// Tạo Colection và gán khung dữ liệu vừa quy dịnh bên trên vào
const custommer_Col = mongoose.model("customer", customerSchema);

module.exports = custommer_Col;
