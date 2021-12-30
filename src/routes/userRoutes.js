const express = require('express');
const router = express.Router();
const userControllerDB = require('../controllers/userControllerDB')
// const multer = require('multer');

// const userController = require('../controllers/userController')

// // Middlewares
const validations = require('../middlewares/validationRegisterMiddlewares');
const alreadyLogMiddlewares = require('../middlewares/alreadyLogMiddlewares');
// const uploadFile = require('../middlewares/multerMiddlewares')
const notAdminMiddleware = require('../middlewares/notAdminMiddleware')

// const upload = multer({storage:uploadFile('users')});


// router.get('/', notAdminMiddleware, userControllerDB.list);
// router.get('/perfil/:id', userControllerDB.detail);

// router.get("/registro", alreadyLogMiddlewares, userControllerDB.register);
router.get("/registro", userControllerDB.register);
router.post("/registro",validations, userControllerDB.processRegister);

// router.get('/login', alreadyLogMiddlewares, userControllerDB.login)
router.get('/login', userControllerDB.login)
router.post('/login', userControllerDB.loginProcess);

router.get('/logout', userControllerDB.logoutProcess);

// router.get('/edit/:id', userControllerDB.edit);
// router.put('/update/:id', userControllerDB.update);





module.exports = router