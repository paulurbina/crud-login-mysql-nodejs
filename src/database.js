const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');
console.log('database', database);
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    //SI HAY ERRORES
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            // console.error(err)
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection) {
        //CONNECTION SUCCESS!!!
        connection.release();
        console.log('DB IS CONNECTED');
        return;
    }
});
//CONVIRTIENDO CALLBACKS A PROMESAS
pool.query = promisify(pool.query);

module.exports = pool;