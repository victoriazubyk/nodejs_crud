
module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        }
    });
    
    return Students;
  };