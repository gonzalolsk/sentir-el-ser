const db = require('../database/models');
const sequelize = db.sequelize;


const adminController = {

    dashboard: (req, res) => { 
        res.render('admin/dashboard')
    },

    seminarios: (req, res) => {
        db.Seminario.findAll()
            .then(seminarios => {
                res.render('admin/seminarios', {seminarios})
            })
    },

    // masterclass: (req, res) => {
    //     db.Masterclass.findAll()
    //         .then(masterclasses => {
    //             res.render('admin/masterclass', {masterclasses})
    //         })
    // },

    // formaciones: (req, res) => {
    //     db.Formacion.findAll()
    //         .then(formaciones => {
    //             res.render('admin/formaciones', {formaciones})
    //         })
    // },
    usuarios: (req, res) => {
        db.User.findAll()
            .then(usuarios => {
                res.render('admin/usuarios', {usuarios})
            })
    },
}
module.exports = adminController
