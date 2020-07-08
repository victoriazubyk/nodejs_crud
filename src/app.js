const express = require('express');
const app = express();

const db = require("./db/db.js");

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

app.listen(4200, () => {
    console.log("Server is runing on 4200 port");
  });