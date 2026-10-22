const path = require('path');
const express = require('express');
const routesForm = express.Router();

routesForm.post('/form',(req,res) => {
    const user = req.body.username
    if (!user || user.trim() === "") {
        res.status(400).render('error',{errorMessage:'Error text submitted is blank'})
    } else{res.render('formResponse',{username:user})}
}); 

routesForm.get('/form',(req,res) => {
    res.render('form')
});

module.exports=routesForm