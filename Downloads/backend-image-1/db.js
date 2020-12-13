const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '192.168.1.4',
  user: 'root',
  password: 'root',
  database: 'ecommercedb',
  port: 9090,
  connectionLimit: 20
})

module.exports = pool
