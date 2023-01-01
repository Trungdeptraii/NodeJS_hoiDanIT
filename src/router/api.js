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

let {
  creatProject,
  getProject,
  updateProject,
  deleteProject,
} = require(`${__dirname}/../controllers/apiProjectController.js`);

let {
  creatTask,
  getTask,
  updateTask,
  deleteTask,
} = require(`${__dirname}/../controllers/apiTaskController.js`);

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
routerAPI.get("/project", getProject);
routerAPI.put("/project", updateProject);
routerAPI.delete("/project", deleteProject);

routerAPI.post("/task", creatTask);
routerAPI.get("/task", getTask);
routerAPI.put("/task", updateTask);
routerAPI.delete("/task", deleteTask);

module.exports = routerAPI;
