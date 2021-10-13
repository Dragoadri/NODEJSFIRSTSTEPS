'use strict'
var Project = require('../models/proyect');
var fs= require('fs');
var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo accion test del controlador'
        });
    },
    saveProject: function (req, res) {
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

    getProject: function (req, res) {
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
    },

    getProjects: function (req, res) {
        Project.find().exec((err, projects) => {
            if (err) {
                return res.status(500).send({ message: 'error al devolver los proyectos' });

            }
            if (!projects) {
                return res.status(404).send({ message: 'no hay proyectos para mostrar' });


            }
            return res.status(200).send({ projects });
        });
        // con where seria         Project.find({year:2019})
        // para ordenar despues del find().sort('year');/.sort('-year');/.sort('+year')

    },
    // actualizar proyectos

    updateProject: function (req, res) {
        // recojer el id del proyecto que se quiere actualizar
        var projectId = req.params.id;
        //objeto completo con datos actualizados
        var update = req.body;
        /*Funcion que sustituye la informacion del objeto del primer parametro y pone todos los datos del segundo en el*/
        //{new:true} para que muestre el objeto nuevo
        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {
            if (err) {
                return res.status(500).send({ message: 'Error al actualizar' });
            }
            if (!projectUpdated) {
                return res.status(404).send({ message: 'No existe el proyecto' });

            }
            return res.status(200).send({ project: projectUpdated })
        });

    }, deleteProject: function (req, res) {
        // recojer el id del proyecto que se quiere eleiminar
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {

            if (err) {
                return res.status(500).send({ message: 'Error al eliminar' });

            } if (!projectRemoved) {
                return res.status(404).send({ message: 'No existe el proyecto para borrar' });

            }
            return res.status(200).send({ project: projectRemoved })


        });

    },



    uploadImage: function (req, res) {


        // recojer el id del proyecto que se quiere guardar la imagen
        var projectId = req.params.id;


        var fileName = 'no subido';
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var filExt= extSplit[1];

            if (fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdated) => {
                if (err) {
                    return res.status(500).send({ message: 'La imagen no se ha subido' });

                } if (!projectUpdated) {
                    return res.status(404).send({ message: 'La imgen/proyecto no existe' });
                }
                return res.status(200).send({ project: projectUpdated });


            });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension de la img no es valida'});

                })
            }


            

        } else {
            return res.status(200).send({ message: fileName });

        }
    }

};

module.exports = controller;