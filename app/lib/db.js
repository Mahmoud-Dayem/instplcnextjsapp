// lib/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',// replace it my mysql-service if you need to run it in k8s
  user: 'root',
  password: 'ahli',
  database: 'plcinstdb'
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME
});

module.exports = pool;
