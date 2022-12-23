require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const configViewEngine = require(`${__dirname}/src/config/viewEngine.js`);
const { routertest } = require(`${__dirname}/src/router/test.js`);

const app = express();

//Logger request http
app.use(
  morgan(
    ":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :status"
  )
);

app.use(express.json()); // Used to parse JSON bodies - for JSON
app.use(express.urlencoded()); //Parse URL-encoded bodies - for Form Data

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

//config Templace engine
configViewEngine(app);

// simple query
// connection.query("select * from Users u", function (err, results, fields) {
//   if (!err) {
//     console.log("Ket Qua", results); // results contains rows returned by server
//   } else console.log("ERROR :", err);
// });

//Router
app.use("/", routertest);

app.listen(port, hostname, () => {
  console.log(`Example app listening on  port ${port}`);
});
