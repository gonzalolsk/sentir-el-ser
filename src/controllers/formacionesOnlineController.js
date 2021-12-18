const controller = {
    masterclass: (req, res) => { res.render('masterclass')},
    seminarios: (req,res) => { res.render('seminarios')},
    formacion: (req, res) => { res.render('formacion')},
    // formacionesOnline:(req, res) => { res.render('formaciones-online')}
    
}
module.exports = controller
