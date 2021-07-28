const express = require('express');
const app = express();
const path = require('path');

//Server Start 
app.set("port", process.env.PORT || 3003);
app.listen(app.get("port"), () => console.log("Servidor corriendo en http://localhost:" + app.get("port")));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

//Static Files
app.use(express.static(path.resolve(__dirname, '../public')));

//Rutas
const mainRouter = require('./routes/mainRoutes');
app.use('/', mainRouter);