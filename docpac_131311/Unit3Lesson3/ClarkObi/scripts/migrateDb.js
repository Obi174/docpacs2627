const db = require('../models/database');
const fs=require('fs');
const migration=fs.readdirSync('../migrations');
const sortedMigration=migration.sort()
const completeMigration=db.prepare('SELECT migration_name FROM schema_migrations')
console.log(completeMigration);
