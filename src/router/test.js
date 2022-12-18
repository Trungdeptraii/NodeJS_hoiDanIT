const express = require("express");
const routertest = express.Router();

const getHomePage = require(`${__dirname}/../controllers/homeController.js`);

routertest.get("/123", getHomePage);

routertest.get("/456", (req, res) => {
  res.end("456");
});

module.exports = routertest;
