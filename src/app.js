if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override')
// var helmet = require('helmet');
// app.use(helmet());

//Data Configuration
app.use(express.urlencoded({ extended: false })); //para el body
app.use(methodOverride('_method')); //para metodos put y delete

//Database Conection
mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));


//Server Start
app.set("port", process.env.PORT || 3003);
app.listen(app.get("port"), () => console.log("Server running in http://localhost:" + app.get("port") + " in " + process.env.NODE_ENV + " enviroment"));


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


//Static Files
app.use(express.static(path.resolve(__dirname,'../public')));


//Rutas
const mainRouter = require('./routes/mainRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const formacionesOnlineRouter = require('./routes/formacionesOnlineRoutes');
const blogRouter = require('./routes/blogRoutes'); 
app.use('/', mainRouter);
app.use('/', profesoresRoutes);
app.use('/formaciones-online', formacionesOnlineRouter);
app.use('/blog', blogRouter);

//Error 404
app.get("*", (req,res) => {
    res.render("error404")
})