const express = require("express");
require('dotenv').config();

//crear servidor express
const app = express();

//lectura y parseo del body
app.use( express.json() );

//ruta por defecto
app.use(express.static('public'))
//rutas
app.use('/api/auth', require('./routes/auth'))




//escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log("corriendo puerto", process.env.PORT)
})
