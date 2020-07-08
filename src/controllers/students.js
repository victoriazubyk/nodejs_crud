const db = require("../db/db.js");
const Students = db.students;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  

    const students = {
      id: req.body.id,
      name: req.body.name, 
      surname: req.body.surname
    };
  
    Students.create(students)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Students."
        });
      });
  };


  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  
    Students.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Students."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Students.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Students was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Students with id=${id}. Maybe students was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Students with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Students.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Students was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Students with id=${id}. Maybe Students was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Students with id=" + id
        });
      });
  };
