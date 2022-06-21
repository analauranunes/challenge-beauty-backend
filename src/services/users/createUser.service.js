import bcryptjs from "bcryptjs";

const { pool } = require("../../database/users/index");

async function createUserService(data) {
  const emailExists = await pool.query(
    "SELECT email FROM users WHERE email ILIKE $1",
    [data.body.email]
  );

  if (emailExists.rowCount > 0) {
    return {
      error: "Email already exists.",
    };
  }

  const response = await pool.query(
    "INSERT INTO users(email, name, password) VALUES ($1, $2, $3) RETURNING *",
    [data.body.email, data.body.name, data.body.password]
  );

  response.rows[0].password = bcryptjs.hashSync(response.rows[0].password, 10);

  return response.rows[0];
}

export default createUserService;
