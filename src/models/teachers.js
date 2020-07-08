
module.exports = (sequelize, Sequelize) => {
    const Teachers = sequelize.define("teachers", {
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
  
    return Teachers;
  };