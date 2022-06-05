const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const service = require ('./service');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


app.post('/usuario/registrar', (req,res) => {
    console.log('responde el servidor') 
    service.guardarUsuario(req.body);
    res.end()
});


app.listen(5000, () => {
    console.log("Ejecutando servidor")
  });