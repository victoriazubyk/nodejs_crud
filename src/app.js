const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const tokenAutorization = require('./middlewares/token_autorization.js');
const dotenv = require('dotenv');
dotenv.config({ path: "./config/.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db/db.js");

db.sequelize.sync();

dotenv.config();

app.set('view engine', 'ejs');

const groupRouter = require("./routes/groups_routes");
const lessonRouter = require("./routes/lessons_routes");
const studentRouter = require("./routes/students_routes");
const teacherRouter = require("./routes/teachers_routes");
const authRouter = require("./routes/autorization");

app.use('/groups', tokenAutorization, groupRouter);
app.use('/lessons', tokenAutorization, lessonRouter);
app.use('/students', tokenAutorization, studentRouter);
app.use('/teachers', tokenAutorization, teacherRouter);
app.use('/auth', authRouter);

app.listen(4200, () => {
    console.log("Server is runing on 4200 port");
  });