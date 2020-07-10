const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const token_autorization = require('./middlewares/token_autorization.js');
const dotenv = require('dotenv');
dotenv.config({ path: "./config/.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db/db.js");

db.sequelize.sync();

dotenv.config();

app.set('view engine', 'ejs');

const group_router = require("./routes/groups_routes");
const lesson_router = require("./routes/lessons_routes");
const student_router = require("./routes/students_routes");
const teacher_router = require("./routes/teachers_routes");
const auth_router = require("./routes/autorization");

app.use('/groups', token_autorization, group_router);
app.use('/lessons', token_autorization, lesson_router);
app.use('/students', token_autorization, student_router);
app.use('/teachers', token_autorization, teacher_router);
app.use('/auth', auth_router);

app.listen(4200, () => {
    console.log("Server is runing on 4200 port");
  });