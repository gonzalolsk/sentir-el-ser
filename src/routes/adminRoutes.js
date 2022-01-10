const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require("../controllers/adminController");
const notAdminMiddleware = require('../middlewares/notAdminMiddleware');

router.get('/', notAdminMiddleware, adminController.dashboard);

// router.get('/masterclass', notAdminMiddleware, adminController.masterclass);
router.get('/seminarios', notAdminMiddleware, adminController.seminarios);
// router.get('/formacion', adminController.formacion);
router.get('/usuarios', notAdminMiddleware, adminController.usuarios);

module.exports = router;