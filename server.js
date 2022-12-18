require("dotenv").config();
const express = require("express");
const configViewEngine = require(`${__dirname}/src/config/viewEngine.js`);
const routertest = require(`${__dirname}/src/router/test.js`);

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

const app = express();

//config Templace engine
configViewEngine(app);

//Router
app.use("/", routertest);

app.listen(port, hostname, () => {
  console.log(`Example app listening on  port ${port}`);
});
