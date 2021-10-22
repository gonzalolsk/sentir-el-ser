const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require("../controllers/mainController")

router.get('/', mainController.home);
router.get('/sobre-nosotros', mainController.aboutUs);
router.get('/formaciones', mainController.formaciones)

module.exports = router;