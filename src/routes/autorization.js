const router = require('express').Router();
const authController = require('../controllers/authorization_controller.js');

router.post('/', authController.createToken);

module.exports = router;