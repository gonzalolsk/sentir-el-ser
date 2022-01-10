const express = require ('express');
const session = require ('express-session');
const cookie = require ('cookie-parser');
const path = require ('path');
// const method = require ('method-override');
const app = express(); 
const cors = require('cors')
const userLoggedMiddlewares = require('./middlewares/userLoggedMiddlewares');


//Server Start 
app.set("port", process.env.PORT || 3003);
app.listen(app.get("port"), () => console.log("Servidor corriendo en http://localhost:" + app.get("port")));



//View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

//----Middlewares App-----
app.use(express.json());//
app.use(session({
    resave: false,
    saveUninitialized:false,
    secret: "digital"})) // req.session
app.use(cookie()); // req.cookie
app.use(userLoggedMiddlewares);
app.use(cors())

//Data Configuration
app.use(express.urlencoded({ extended: false })); //para el body
// app.use(method('_method')); //para metodos put y delete

//Static Files
app.use(express.static(path.resolve(__dirname,'../public')));


//Rutas
const mainRouter = require('./routes/mainRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const formacionesOnlineRouter = require('./routes/formacionesOnlineRoutes');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');

app.use('/', mainRouter);
app.use('/', profesoresRoutes);
app.use('/formaciones-online', formacionesOnlineRouter);
app.use("/usuarios", userRouter);
app.use("/admin", adminRouter);

//Error 404
app.use((req, res, next) => { res.status(404).render('error404'); }) 
    