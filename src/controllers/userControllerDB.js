const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Users = db.User;

const usersControllerDB={

    // list: (req, res) => {
    //     Users.findAll()
    //         .then(users => {
    //             res.render('users/users.ejs', {users})
    //         })
    // },
    // detail: (req, res) => {
    //     Users.findByPk(req.params.id)
    //         .then(user => {
    //             res.render('users/profile.ejs', {user});
    //         });
    // },

    register: (req,res)=> {res.render('users/register')
    },
    processRegister: async (req, res) => {
            try {
                console.log(req.body);
                 //Acá si hay errores los enviamos a la vista
                const resultValidations = validationResult(req);
                if (resultValidations.errors.length > 0 ) {
                    return res.render('users/register', {
                        errors: resultValidations.mapped(),
                        oldData: req.body
                    })
                }
        // Esto es por si el email ya está registrado:
                // let userInDB = await Users.findAll({where: {'email': req.body.email}}); 
                // if(userInDB){
                //     return res.render('users/registro',{
                //         errors:{
                //             email: {
                //                 msg:'Este email ya esta registrado'
                //             }
                //         },
                //         oldData: req.body
                // });
                // }
                let userToCreate = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email, 
                    birth_date: req.body.birth_date,
                    password: bcryptjs.hashSync(req.body.password, 10),
                }
                let userCreated = await Users.create(userToCreate);
                return res.redirect('/')}
            catch (err){
                    res.send(console.log(err))
                }
            },

    // create: (req, res)=>{
    //     let user = Users.create({
    //             first_name: req.body.first_name,
    //             last_name: req.body.last_name,
    //             email: req.body.email,
    //             password: req.body.password, 
    //             birth_date: req.body.birth_date,
    //         })
    //         .then((users)=>{
    //             res.redirect('/perfil/'+ user.id , {users})
    //         })
    //         .catch(err=>{
    //             res.send({error: err})
    //         })
    // },
    login: function (req, res) {
        return res.render('users/login');
    },
    loginProcess: async function (req, res) {
        try {
        //Buscamos al usuario a loguearse en nuestra base de datos
        let userToLogin = await db.User.findOne({where: {
            'email': req.body.email
        }});
        //Comprobamos la contraseña y si está bien guardamos el usuario en session.
        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
        //Guardamos el usuario en una cookie.
                if(req.body.saveUser) {
                    res.cookie('email', req.body.email, { maxAge: (1000 * 60) * 2 })
                }
        //Redirigimos a su perfil
                return res.redirect('/')
            }
        // Si la contraseña no es correcta enviamos error.
            return res.render('users/login', {
                errors: {
                    password: {
                        msg: 'Las credenciales son incorrectas'
                    }
                },
                oldData: req.body.email
            });
        }
        //Si no existe el usuario en la base de datos enviamos el error.
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este usuario en nuestra base de datos'
                }
            },
            oldData: req.body.email
        });
    }
    catch(err){
        console.log(err);
        res.send({error: err})
    }
    },
    logoutProcess: function (req, res) {
        res.clearCookie('email'); 
        req.session.destroy();
        return res.redirect('/');
    },
    
//     edit: async (req, res)=>res.render('edit.ejs',{
//         user: await Users.findByPk(req.params.id)
//     }),
//     update: async (req,res)=>{
//         try{
//             let user = Users.update({
//                 first_name: req.body.first_name,
//                 last_name: req.body.last_name,
//                 user: req.body.user,
//                 email: req.body.email,
//                 password: req.body.password, 
//                 admin: req.body.admin,
//                 img: req.body.img,
//                 dni: req.body.dni,
//                 birth_date: req.body.birth_date,
//                 baja: req.body.baja
//             },
//             {
//                 where: {id: req.params.id}
//             })
//             return res.redirect('/perfil/'+ user.id)
//         }
//         catch(err){
//             res.send({error: err})
//         }
//     },

}

module.exports = usersControllerDB;