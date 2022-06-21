const { Pool } = require("pg");

const pool = new Pool({
  user: "anahsn",
  host: "localhost",
  database: "challenge_beauty_pass",
  password: "Cake!chocolate@1",
  port: 5432,
});

module.exports = { pool };

