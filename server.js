require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const configViewEngine = require(`${__dirname}/src/config/viewEngine.js`);
const apiRouter = require(`${__dirname}/src/router/api.js`);
const connection = require(`${__dirname}/src/config/DB.js`);
const fileupdate = require("express-fileupload");
const { MongoClient } = require("mongodb");

const app = express();

//Logger request http
app.use(
  morgan(
    ":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :status"
  )
);

//Config upload file:  view -> route -> control -> model -> view
// view -> route -> req.file -> control -> model -> view
app.use(fileupdate());

app.use(express.json()); // Used to parse JSON bodies - for JSON
app.use(express.urlencoded()); //Parse URL-encoded bodies - for Form Data

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

//config Templace engine
configViewEngine(app);

//Test connect

//Router
app.use("/api/v1/", apiRouter);

(async () => {
  try {
    //using mongoose
    await connection();

    //using mongodb
    // const url = process.env.DB_URL;
    // const db_name = process.env.DB_NAME;
    // const client_mongo = new MongoClient(url);
    // await client_mongo.connect();
    // console.log("Connected successfully to server");
    // const db = client_mongo.db(db_name);
    // const collection = db.collection("customer");

    // await collection.insertOne({ name: "Trungdeptrai", address: "Ha Noi" });
    app.listen(port, hostname, () => {
      console.log(`Example app listening on  port ${port}`);
    });
  } catch (error) {
    console.log("DB ERROR: ", error);
  }
})();

module.exports = app;
