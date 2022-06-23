const { Pool } = require("pg");

const pool = new Pool({
  user: "anahsn",
  url: "https://my-beauty-pass.herokuapp.com/",
});

module.exports = { pool };
