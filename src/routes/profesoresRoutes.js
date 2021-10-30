const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require("../controllers/profesoresController")

router.get('/santiago-roldan', mainController.santiago);
router.get('/micaela-prusso', mainController.micaela);


module.exports = router;