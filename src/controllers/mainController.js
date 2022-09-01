const controller = {
    home: (req, res) => { res.render('home')},
    aboutUs: (req,res) => { res.render('about-us')},
    formaciones: (req, res) => { res.render('formaciones')},
    testimonios: (req, res) => { res.render('includes/testimonios')},
    // blog: (req, res) => { res.render('blog/blog')},
    reto_suenos: (req, res) => { res.render('reto_suenos')},
    seminarioAstrogenealogia: (req, res) => { res.render('seminario-astrogenealogia')},
    tecnicasSueos: (req, res) => { res.render('tecnicas_sueos')},
    arbolGenealogico: (req, res) => { res.render('arbol_genealogico')},
    astrogenealogia: (req, res) => { res.render('astrogenealogia')},
}
module.exports = controller
