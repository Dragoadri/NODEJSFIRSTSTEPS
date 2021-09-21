const os = require('os');

// trabajar con archivos del sistema operativo
const fs = require('fs');
//codigo asincrono, crear archivo en la carpeta,nombre,contenido,funcion de callback
/**
 * Nodejs no crra el archivo, el sistema operativo lo hace
 * mientras lo hace, se van ejecutando las demas lineas de codigo 
 * Cuando el SO crea el archivo este le dice A nodeJS que ha terminado
 * 
 * 
 * NODEJS delega tareas, no las lleva a cabo.
 * NO ejecuta , espera al resultado
 
const http = require('http');


//node package manager NPM
const colors = require('colors');




const handleServer = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write('<h1>Hola mundo </h1>');
    res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function() {
    console.log('servidor en puerto 3000'.red);
});
*/

// Express framework inicia un servidor sin tener que escribir

const colors = require('colors');
const express = require('express');
const server = express();


server.get('/', (req, res) => {
    console.log('enrutado'.green);
    res.send('pinga');
});

server.listen(3000, () => {
    console.log('Server en puerto 3000'.red);
});


/**
fs.writeFile('./texto.txt', 'contenido del archivo', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});


fs.readFile('./texto.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); 
});

console.log('ultima linea de codigo');




query('Select * from USERS',function (err,users) {
    if (err) {
        console.log(err);
    }
     if (users) {
        console.log('');
    }
});



console.log(os.platform());
console.log(os.freemem());
console.log(os.release()); */