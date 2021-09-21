const express = require('express');
const router = express.Router();
const conexion = require('./database/db');




//Mostrar todos los registros
router.get('/', (req, res) => {

    conexion.query('select * from users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
});
//Crear registros
router.get('/create', (req, res) => {
        res.render('create');
    })
    //Ruta para editar registros
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { users: results[0] });
        }
    });
});
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
});


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);




//router.post('/delete', crud.delete);

//Exportar 
module.exports = router;