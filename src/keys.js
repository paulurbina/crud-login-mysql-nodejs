require('dotenv').config();

module.exports = {
   database: {

      connectionLimit : 10,
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT

      // socketPath: 'test-project-267903:us-central1:myinstance',
      // user: 'root',
      // password: 'ikPyD42F5i9uw8N8',
      // database: 'database_links'
   }
};
