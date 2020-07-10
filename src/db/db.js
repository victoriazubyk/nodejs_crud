
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "postgres",
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.groups = require("../models/groups.js")(sequelize, Sequelize);
db.lessons = require("../models/lessons.js")(sequelize, Sequelize);
db.students = require("../models/students.js")(sequelize, Sequelize);
db.teachers = require("../models/teachers.js")(sequelize, Sequelize);

db.groups.hasMany(db.students);
db.groups.hasMany(db.lessons);
db.teachers.hasMany(db.lessons);

module.exports = db;