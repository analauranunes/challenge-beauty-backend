const { Pool } = require("pg");

const pool = new Pool({
  user: "anahsn",
  host: "localhost",
  database: "challenge_beauty_pass",
  password: "Cake!chocolate@1",
  port: 5432,
});

module.exports = { pool };

// pool.query("SELECT * FROM users", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// const {pool} = require("./database/users/index")

