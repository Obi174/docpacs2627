const userModel=require('../models/userModel')
const express=require('express')
const routesAuthenication=express.Router()
routesAuthenication.get('/register',(req,res)=>{
    res.render('register.ejs')});
routesAuthenication.post('/register',(req,res)=>{
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const repassword=req.body.repassword
    if(!username||username.trim()===""){return res.status(400).render('error',{errorMessage:'Error text submitted is blank'})};
    if(!email||email.trim()===""){return res.status(400).render('error',{errorMessage:'Error text submitted is blank'})};
    if(!password||password.trim()===""){return res.status(400).render('error',{errorMessage:'Error text submitted is blank'})};
    if (repassword!=password) {return res.status(400).render('error',{errorMessage:"Passwords don't match"})};
    const existingUser=userModel.findUserByUsername(username);
    if(existingUser){return res.status(400).render('error',{errorMessage:"This username exist already"})};
    const existingEmail=userModel.findUserByEmail(email);
    if(existingEmail){return res.status(400).render('error',{errorMessage:"This email exist already"})};
    userModel.createUser(username,email)
    res.redirect('/login')});
routesAuthenication.get('/login',(req,res)=>{});
routesAuthenication.post('/login',(req,res)=>{
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const user=userModel.findUserByUsername(username)
    if(!user){return res.status(400).render('error',{errorMessage:"user doesn't exist"})};
    if(password!=ae){}
});
routesAuthenication.post('/logout',(req,res)=>{});
routesAuthenication.get('/account',(req,res)=>{});
module.export=routesAuthenication;