require('dotenv').config();

module.exports = {

    database: {
        // host: 'us-cdbr-iron-east-01.cleardb.net',
           host: 'HOST_DATABASE',
        // user: 'b5b0dc098c957a',
           user: 'DB_USERNAME',
        // password: 'eff36c1f',
           password: 'DB_PASSWORD',
        // database: 'heroku_62a1f8c284e9910'
           database: 'DATABASE_NAME'
    }

};