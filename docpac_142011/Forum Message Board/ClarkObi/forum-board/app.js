const Express = require('express');
const app = Express();
app.set('view engine' ,'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
