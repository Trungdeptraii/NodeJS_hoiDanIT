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
  creatArrayCustomers,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  deleteArrayCustomers,
} = require(`${__dirname}/../controllers/apiCustomerController.js`);

let { creatProject } = require(`${__dirname}/../controllers/apiProject.js`);

routerAPI.get("/users", getAllUsers);
routerAPI.post("/users", addUser);
routerAPI.put("/users", updateIDs);
routerAPI.delete("/users", deleteUsers);
routerAPI.post("/file", uploadMutiplates);
routerAPI.post("/files", uploadMutiplates);

routerAPI.post("/customers", creatCustomer);
routerAPI.post("/customers-many", creatArrayCustomers);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", updateCustomer);
routerAPI.delete("/customers", deleteCustomer);
routerAPI.delete("/customers-many", deleteArrayCustomers);

routerAPI.post("/project", creatProject);

module.exports = routerAPI;
