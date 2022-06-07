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
    /*
    for (let i = 0; i<2; i++) {
        console.log(listaUsuarios[i]);
    }
    */
    for (let u of listaUsuarios) {        
		if (u.password == user.password) {
            autenticado = true;
        }
	} 
    return autenticado;
}

const listarUsuarios = function(){
    const contenido = fs.readFileSync('./bobeda.txt');
    return JSON.parse('[' + contenido + ']'); 
}

module.exports = {guardarUsuario,validarUsuario};