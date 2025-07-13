const express = require('express');
const controller = require('../controller/controller.js')
const router = express.Router();

router.use('/',(req, res, next) =>{
    console.log("middleware");
    next();
});

router.get('/auth',controller.authenticateToken)

module.exports =router;