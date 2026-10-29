require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT 
const app = express();
app.use(express.static('public/'));
app.use(express.json());
app.listen(PORT,()=>{console.log('server: http://localhost:'+PORT);});