const mysql = require("mysql2/promise");

const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 25,
});

async function executeQuery(query, args) {
  // Potential timeout when waiting execution on pool's queue. Watch out for handling!
  return pool.query(query, args);
}

module.exports = { executeQuery };
