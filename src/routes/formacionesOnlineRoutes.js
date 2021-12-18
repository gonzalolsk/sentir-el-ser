const express = require('express');
const path = require('path');
const router = express.Router();
const formacionesOnlineController = require("../controllers/formacionesOnlineController")

router.get('/masterclass', formacionesOnlineController.masterclass);
router.get('/seminarios', formacionesOnlineController.seminarios);
router.get('/formacion', formacionesOnlineController.formacion);
// router.get('/', formacionesOnlineController.formacionesOnline);


module.exports = router;