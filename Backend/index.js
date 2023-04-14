console.log ('Holis :)')
const bodyParser = require('body-parser')

const express = require('express')
require('dotenv').config()

//Crear Express App
const app = express();


//Rutas
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/api/auth', require('./Rutas/auth'))

app.listen(process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
})