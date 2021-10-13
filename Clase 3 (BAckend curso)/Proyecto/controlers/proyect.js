'use strict'
var Project = require('../models/proyect');
var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req, res) {
        return res.status(200).send({
            message: 'Soy el metodo accion test del controlador'
        });
    },
    saveProject: function(req, res) {
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = params.image;

        //guardar datos en la DB
        project.save((err, projectStored) => {
            if (err) {
                res.status(500).send({ message: 'error al guardar' });
            }
            if (!projectStored) {
                res.status(404).send({ message: 'no se pudo guardar el proyecto' });

            }
            return res.status(200).send({ project: projectStored });
        })

        return res.status(200).send({
            Pro: project,
            message: 'Metodo saveProject'
        });
    },

    getProject: function(req, res) {
        var projectId = req.params.id;
        if (projectId == null) {
            return res.status(404).send({
                message: 'El proyecto no existe'
            });
        }
        Project.findById(projectId, (err, project) => {
            if (err) {
                return res.status(500).send({ message: 'error al recivir los datos' });

            }
            if (!project) {
                return res.status(404).send({
                    message: 'El proyecto no existe'
                });
            }
            return res.status(200).send({
                pro: project
            });

        });
    }

};

module.exports = controller;