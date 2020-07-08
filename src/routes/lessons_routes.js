module.exports = app => {
    const lessons = require("../controllers/lessons.js");
  
    var router = require("express").Router();
  
    router.post("/", lessons.create);
  
    router.get("/", lessons.findAll);
  
    router.put("/:id", lessons.update);

    router.delete("/:id", lessons.delete);
  
    app.use('/api/lessons', router);
  };