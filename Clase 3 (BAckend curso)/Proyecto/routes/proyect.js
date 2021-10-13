'use strict'

var express = require('express');
var ProjectControler = require('../controlers/proyect');

var router = express.Router();
router.get('/home', ProjectControler.home);
router.post('/test', ProjectControler.test);
router.post('/save-project', ProjectControler.saveProject);
router.get('/project/:id?', ProjectControler.getProject);



module.exports = router;