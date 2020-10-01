require('dotenv').config();

module.exports = {
   database: {
      // connectionLimit : 10,
      // socketPath: process.env.SOCKET_PATH,
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASS || 'root',
      database: process.env.MYSQL_DB || 'db_node',
      port: process.env.MYSQL_PORT || '3306'
   }
};
