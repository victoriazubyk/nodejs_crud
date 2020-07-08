module.exports = app => {
    const groups = require("../controllers/groups.js");
  
    var router = require("express").Router();
  
    router.post("/", groups.create);
  
    router.get("/", groups.findAll);
  
    router.put("/:id", groups.update);
  
    router.delete("/:id", groups.delete);
  
    app.use('/groups', router);
  };