
module.exports = (sequelize, Sequelize) => {
    const Lessons = sequelize.define("lessons", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        topic: {
            type: Sequelize.STRING
        },
        classroom: {
            type: Sequelize.INTEGER
        },
        start: {
            type: Sequelize.TIME
        },
        end: {
            type: Sequelize.TIME
        }
    });
  
    return Lessons;
  };
  