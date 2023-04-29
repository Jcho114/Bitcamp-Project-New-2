const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.PW,
    database: process.env.DB,
    connectionLimit: 10,
});

pool.on('connnection', (connection) => {
    console.log('Connection to bitcamp2023 database established.');

    connection.on('error', (err) => {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', (err) => {
        console.error(new Date(), 'MySQL close', err);
    });
})

module.exports = pool;