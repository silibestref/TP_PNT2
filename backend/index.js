const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const service = require ('./service');
const morgan = require ('morgan');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.post('/usuario/registrar', (req,res) => {
    console.log('responde el servidor') 
    service.guardarUsuario(req.body);
    res.end()
});

app.post('/usuario/login', (req,res) => {
    console.log('responde el servidor') 
    const autenticado = service.validarUsuario(req.body);      
    if(autenticado){
        res.sendStatus(200);
    } else{        
        res.sendStatus(403);
        //res.json("Usuario o Password invalido");
    }
});

app.listen(5000, () => {
    console.log("Ejecutando servidor")
  });