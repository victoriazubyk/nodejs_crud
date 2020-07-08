const db = require("../db/db.js");
const Lessons = db.lessons;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const lessons = {
      id: req.body.id,
      topic: req.body.topic, 
      classroom: req.body.classroom, 
      start: req.body.start,
      end: req.body.end
    };
  

    Lessons.create(lessons)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Lessons."
        });
      });
  };


  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  
    Lessons.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Lessons."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Lessons.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Lessons was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Lessons with id=${id}. Maybe lessons was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Lessons with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Lessons.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Lessons was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Lessons with id=${id}. Maybe Lessons was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Lessons with id=" + id
        });
      });
  };



