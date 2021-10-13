'use strict'

var express = require('express');
var ProjectControler = require('../controlers/proyect');

var router = express.Router();
var multipart= required('connect-multiparty');
var multioartMiddleware= multipart({ uploadDir:'./uploads'});

router.get('/home', ProjectControler.home);
router.post('/test', ProjectControler.test);
// guardar objetos
router.post('/save-project', ProjectControler.saveProject);
//mostrar objeto concreto con id ?
router.get('/project/:id?', ProjectControler.getProject);
// mostrar todos los objetos proyecto
router.get('/projects', ProjectControler.getProjects);
//ruta para actualizar con tipo put
router.put('/project/:id', ProjectControler.updateProject);
//ruta para elominar un objeto con id de tipo proyecto de tipo delete
router.delete('/project/:id', ProjectControler.deleteProject);
// upload imagenes de tiipo imagenes
router.post('/upload-image/:id', multioartMiddleware ,ProjectControler.uploadImage);





module.exports = router;