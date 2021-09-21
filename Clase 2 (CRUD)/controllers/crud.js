const conexion = require('../database/db');

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', { nombre: user, rol: rol }, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });

};

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? where id = ?', [{ nombre: user, rol: rol }, id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });

};


/*
exports.delete = (req, res) => {
    const id = req.body.id;
    
    conexion.query('DELETE from users where id= ?', { id: id }, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    })

};*/