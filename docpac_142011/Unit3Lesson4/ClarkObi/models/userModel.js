const db = require('../models/database');
const sqlite=require('better-sqlite3');
function findUserById(id) {
const sql=`SELECT*FROM users WHERE id=?`;
const result=db.prepare(sql).get(id);
return result
}
function findUserByEmail(email) {
const sql=`SELECT*FROM users WHERE email=?`;
const result=db.prepare(sql).get(email);
return result
}
function findUserByUsername(username) {
const sql=`SELECT*FROM users WHERE username=?`;
const result=db.prepare(sql).get(username);
return result
}