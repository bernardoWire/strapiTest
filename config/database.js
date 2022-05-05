const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    ssl: {
      rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
    },
    useNullAsDefault: true,
  },
  options: {
    ssl: env.bool("DATABASE_SSL", false),
  },
});
