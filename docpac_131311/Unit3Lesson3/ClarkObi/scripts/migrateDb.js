const db = require('../models/database');
const fs=require('fs');
const migration=fs.readdirSync('../migrations');
const sortedMigration=migration.sort()
const completeMigration=db.prepare('SELECT migration_name FROM schema_migrations').all();
const pending=sortedMigration.filter(filename=>{
    const found=completeMigration.find(row=>row.migration_name===filename)
    return !found;
});
console.log('Pending migation:', pending);