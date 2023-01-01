// get the client
const mongoose = require("mongoose");
require("dotenv").config();

//Creat avalible state connect
var dbState = [
  {
    value: 0,
    label: "Disconnected",
  },
  {
    value: 1,
    label: "Connected",
  },
  {
    value: 2,
    label: "Connecting",
  },
  {
    value: 3,
    label: "Disconnecting",
  },
];

const option = {
  user: process.env.DB_USER,
  pass: process.env.DB_PW,
  dbName: process.env.DB_NAME,
};

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_CLOUD, option);
    const state = Number(mongoose.connection.readyState);
    console.log(
      dbState.filter((el) => {
        if (el.value === state) {
          return el.label;
        }
      })
    );
  } catch (error) {
    console.log(">>>> Connect to DB ERROR :  ", error);
    const state = Number(mongoose.connection.readyState);
    console.log(
      dbState.filter((el) => {
        if (el.value === state) {
          return el.label;
        }
      })
    );
  }
};

module.exports = connection;
