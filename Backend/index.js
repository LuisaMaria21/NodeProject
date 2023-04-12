console.log ('Holis :)')

const express = require('express')
require('dotenv').config()

//Crear Express App
const app = express();

//Rutas
app.use(express.static('public'))

app.listen(process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
})