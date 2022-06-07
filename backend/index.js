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

app.post('/usuario/login', (req,res) => {
    console.log('responde el servidor') 
    const autenticado = service.validarUsuario(req.body);
    console.log(autenticado);
    if(autenticado){
        res.status(200).json(req.body)
    }else{
        res.status(401).json("Usuario o Password invalido");
    }
});

app.listen(5000, () => {
    console.log("Ejecutando servidor")
  });