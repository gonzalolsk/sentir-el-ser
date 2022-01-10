function notAdminMiddleware(req, res, next) {

if (!res.locals.isLogged.admin){
    // Activar cuando este listo el dash
    //     res.send('Acceso Restringido. Por favor logueate con tu cuenta Admin.');
    }
    next();
}

module.exports = notAdminMiddleware;