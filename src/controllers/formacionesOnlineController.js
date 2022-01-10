const db = require('../database/models');
const sequelize = db.sequelize;


const controller = {
    masterclass: (req, res) => { res.render('masterclass')},
    // seminarios: (req,res) => { res.render('seminarios')},
    formacion: (req, res) => { res.render('formacion')},


    seminarios: (req, res) => {
        db.Seminario.findAll()
            .then(seminarios => {
                res.render('seminarios.ejs', {seminarios})
            })
    },
    // formacionesOnline:(req, res) => { res.render('formaciones-online')}
    
}
module.exports = controller
