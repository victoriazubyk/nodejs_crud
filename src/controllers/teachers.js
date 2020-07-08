const db = require("../db/db.js");
const Teachers = db.teachers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    
    const teachers = {
      id: req.body.id,
      name: req.body.name, 
      surname: req.body.surname
    };
  
    
    Teachers.create(teachers)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Teachers."
        });
      });
  };


  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  
    Teachers.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Teachers."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Teachers.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Teachers was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Teachers with id=${id}. Maybe teachers was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Teachers with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Teachers.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Teachers was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Teachers with id=${id}. Maybe Teachers was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Teachers with id=" + id
        });
      });
  };

