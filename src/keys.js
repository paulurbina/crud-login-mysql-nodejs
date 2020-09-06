require('dotenv').config();

module.exports = {
   database: {
      // connectionLimit : 10,
      // host: process.env.MYSQL_HOST,
      socketPath: process.env.SOCKET_PATH,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT
   }
};
