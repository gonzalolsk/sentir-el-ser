const express = require('express');
const app = express();
const path = require('path');
// var helmet = require('helmet');
// app.use(helmet());
const http = require('http');


//Server Start 
app.set("port", process.env.PORT || 3003);
app.listen(app.get("port"), () => console.log("Servidor corriendo en http://localhost:" + app.get("port")));


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


//Static Files
app.use(express.static(path.resolve(__dirname,'../public')));


//Rutas
const mainRouter = require('./routes/mainRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const formacionesOnlineRouter = require('./routes/formacionesOnlineRoutes');
app.use('/', mainRouter);
app.use('/', profesoresRoutes);
app.use('/formaciones-online', formacionesOnlineRouter);

//Error 404
app.get("*", (req,res) => { 
    res.render("error404")
})