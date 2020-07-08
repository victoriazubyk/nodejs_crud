module.exports = app => {
    const teachers = require("../controllers/teachers.js");
  
    var router = require("express").Router();

    router.post("/", teachers.create);
  
    router.get("/", teachers.findAll);
  
    router.put("/:id", teachers.update);

    router.delete("/:id", teachers.delete);
  
    app.use('/api/teachers', router);
  };