const express = require('express');
const path = require('path');
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get('/', blogController.index);

// Articles
router.get('/articulos/crear', blogController.articlesNew);
router.post('/articulos/crear', blogController.articlesCreate);
router.get('/articulos/:slug', blogController.article);
router.get('/articulos/editar/:id', blogController.showEdit);
router.put('/articulos/editar/:id', blogController.edit);
router.delete('/:id', blogController.delete);

module.exports = router;