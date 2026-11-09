const sqlite=require('better-sqlite3');
const path=require('C:/Users/obi.clark/Documents/GitHub/docpacs2627/docpac_131311/Unit3Lesson3/ClarkObi/data/app.db', { verbose: console.log });
const dbPath=path.join(__dirname,'..','data','app.db');
const app=new sqlite(dbPath,{verbose:console.log});
module.exports=app