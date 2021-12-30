const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('first_name').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('last_name').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('birth_date').notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento'),
    body('email').notEmpty().withMessage('Tienes que escribirt un mail').bail().isEmail().withMessage('Tienes que escribir un correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')

    ]

