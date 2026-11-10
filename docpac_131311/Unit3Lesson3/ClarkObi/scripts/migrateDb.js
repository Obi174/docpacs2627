const db = require('../models/database');
const fs=require('fs');
const migration=fs.readdirSync('../migrations');
const sortedMigration=migration.sort()
const completeMigration=db.prepare('SELECT migration_name FROM schema_migrations');
sortedMigration.filter(completeMigration=>{
    if(completeMigration.find(migration_name===filename)){console.log('migration complete')}else{console.log('migration pending')}
});
