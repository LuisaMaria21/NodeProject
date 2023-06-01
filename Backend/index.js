const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validateRegister } = require('./validation');

// profe tenga piedad de mi D':

app.use(bodyParser.json());


app.post('/register', validateRegister, (req, res) => {

  const { username, email, password } = req.body;

 


  res.status(200).json({ message: 'Registro exitoso' })
})


app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000')
})
