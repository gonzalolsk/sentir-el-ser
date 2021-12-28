const controller = {
    home: (req, res) => { res.render('home')},
    aboutUs: (req,res) => { res.render('about-us')},
    formaciones: (req, res) => { res.render('formaciones')},
    testimonios: (req, res) => { res.render('includes/testimonios')}
}
module.exports = controller
