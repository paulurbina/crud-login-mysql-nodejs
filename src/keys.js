require("dotenv").config();

module.exports = {
  database: {
    // connectionLimit : 10,
    // socketPath: process.env.SOCKET_PATH,
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "my_database",
  },
};
