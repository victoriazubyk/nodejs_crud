const router = require('express').Router();
const auth_controller = require('../controllers/authorization_controller.js');

router.post('/', auth_controller.create_token);

module.exports = router;