const path = require("path");
const express = require("express");
//config Templace engine
const configViewEngine = (app) => {
  app.set("views", `${__dirname}/../views`); //Khai báo thư mục chứa Templace engine
  app.set("view engine", "ejs"); // Khái báo Tempalce engine là ejs

  //config static file
  app.use(express.static(`${__dirname}/../public`));
};

module.exports = configViewEngine;
