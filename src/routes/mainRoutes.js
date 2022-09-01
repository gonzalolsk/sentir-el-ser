const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require("../controllers/mainController")

router.get('/', mainController.home);
router.get('/sobre-nosotros', mainController.aboutUs);
// router.get('/blog', mainController.blog);
// router.get('/reto_suenos', mainController.reto_suenos);
router.get('/seminario-astrogenealogia', mainController.seminarioAstrogenealogia);
router.get('/tecnicas-sueos', mainController.tecnicasSueos);
router.get('/arbol-genealogico', mainController.arbolGenealogico);
router.get('/astrogenealogia', mainController.astrogenealogia);


router.get('/testimonios', mainController.testimonios);
module.exports = router;