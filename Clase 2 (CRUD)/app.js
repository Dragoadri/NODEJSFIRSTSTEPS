const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
//app.use(express(json));
// escribe en la pagina lo que hay en el archivo router, codigo limpio
app.use('/', require('./router'));




app.listen(5000, () => {
    console.log('Servidor corriendo en: http://localhost:5000')
});