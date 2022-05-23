const fs = require('fs');

let usuarios;


const guardarUsuario = function(usuario){
    data = JSON.stringify(usuario);
    fs.exists('./bobeda.txt', (e) => {
        if (e) {
            fs.appendFile('bobeda.txt',','+data, (err) => {
                if (err) throw err;
                console.log('The user has been saved!');
            });
        } else {
            fs.writeFile('bobeda.txt',data, (err) => {
                if (err) throw err;
                console.log('The user has been saved!');
            });
        }
    });
}

const listarUsuarios = function(){
    const contenido = fs.readFileSync('./bobeda.txt');
    usuarios = JSON.parse('[' + contenido + ']'); 
}

/*
listarUsuarios();
console.log(usuarios);
*/

module.exports = {guardarUsuario};