require('dotenv').config();

module.exports = {
   database: {
      connectionLimit : 10,
      host: 'mysql',
      user: 'root',
      password: 'root',
      database: 'database_links'
      // socketPath: 'test-project-267903:us-central1:myinstance',
      // user: 'root',
      // password: 'ikPyD42F5i9uw8N8',
      // database: 'database_links'
   }
};
