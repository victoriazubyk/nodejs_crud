const db = require("../db/db.js");
const Groups = db.groups;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const groups = {
      id: req.body.id,
      name: req.body.name
    };
  

    Groups.create(groups)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Groups."
        });
      });
  };


  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  
    Groups.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Groups."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Groups.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Groups was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Groups with id=${id}. Maybe groups was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Groups with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Groups.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Groups was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Groups with id=${id}. Maybe Groups was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Groups with id=" + id
        });
      });
  };

