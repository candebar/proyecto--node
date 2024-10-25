const express = require('express')
const path= require('path') //Permite construir la ruta para que sea compatible con diferentes sistemas operativo
const hbs = require('hbs');
const router= express.Router() //Crear instancia para definir las rutas

let usuario = {};

router.get('/', (req,res)=>{
    const usuarios =[
        {nombre: 'Cosme', edad:45, email: 'cosme@gmail.com'},
        {nombre: 'Lola', edad:25, email: 'lola@gmail.com'},
        {nombre: 'Toto', edad:35, email: 'toto@gmail.com'},
    ]
    res.render('inicio');
}) ;
router.get('/usuario' , (req,res) =>{
    const usuario ={
        nombre: 'Pepito',
        edad: 25,
        email: 'cosme@gmail.com'
    }
    res.render('usuario');
});

// Ruta para mostrar el formulario
router.get('/formulario' , (req,res) =>{
    res.render('formulario');
});

// Ruta para manejar la creación de un nuevo usuario
router.post('/formulario' , (req,res) =>{
    const { nombre, edad, email} = req.body; //Guardar usuario en el objeto
    usuario = { nombre, edad, email }; // Almacena el usuario globalmente
     res.redirect('/mostrar-usuario'); //Redirigir a la vista de usuario
 });

//  Ruta para mostrar la vista del usuario
router.get('/mostrar-usuario', (req,res) =>{
    res.render('mostrar-usuario', {usuario})
});


// Ruta para la página contacto
router.get('/contacto', function (req,res){
    res.sendFile(path.join(__dirname + '/../public/contacto.html'));
}); 
// Ruta para la página de info
router.get('/sobre-nosotros', function (req,res){
    res.sendFile(path.join(__dirname + '/../public/sobre-nosotros.html'));
}); 

// Ruta para la página de error
router.get('/*', function (req,res){
    res.sendFile(path.join(__dirname + '/../public/404.html'));
}); 


module.exports= router;