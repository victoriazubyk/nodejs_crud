const express = require('express');
const app = express();

const db = require("./db/db.js");

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

require("./routes/groups_routes")(app);
require("./routes/lessons_routes")(app);
require("./routes/students_routes")(app);
require("./routes/teachers_routes")(app);

app.listen(4200, () => {
    console.log("Server is runing on 4200 port");
  });