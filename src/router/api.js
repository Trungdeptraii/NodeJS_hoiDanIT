const express = require("express");
const routerAPI = express.Router();
let {
  getAllUsers,
  addUser,
  updateIDs,
  deleteUsers,
  uploadSingeFile,
  uploadMutiplates,
} = require(`${__dirname}/../controllers/apiController.js`);

let {
  creatCustomer,
} = require(`${__dirname}/../controllers/apiCustomerController.js`);

routerAPI.get("/users", getAllUsers);
routerAPI.post("/users", addUser);
routerAPI.put("/users", updateIDs);
routerAPI.delete("/users", deleteUsers);
routerAPI.post("/file", uploadMutiplates);
routerAPI.post("/files", uploadMutiplates);

routerAPI.post("/customer", creatCustomer);

module.exports = routerAPI;
