 const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
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