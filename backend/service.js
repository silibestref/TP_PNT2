const fs = require('fs');


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

const validarUsuario = function(user){
    let autenticado = false;    
    const listaUsuarios = listarUsuarios.call();
    let nombre='';
    for (let u of listaUsuarios) {    
		if (u.password == user.password && u.email==user.email) {
            autenticado = true;
            nombre = u.fullName;
        }        
	} 
    return autenticado;
}

const listarUsuarios = function(){
    const contenido = fs.readFileSync('./bobeda.txt');
    return JSON.parse('[' + contenido + ']'); 
}

module.exports = {guardarUsuario,validarUsuario};