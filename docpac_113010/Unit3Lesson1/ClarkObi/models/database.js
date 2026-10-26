const sqlite=require('better-sqlite3');
const app=sqlite('../data/app', { verbose: console.log });


module.exports=app