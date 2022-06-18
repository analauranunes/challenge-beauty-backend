const { pool } = require("../../database/users");

async function allUsersService() {
  const users = await pool.query("SELECT id, name, email FROM users");
  return users.rows;
}

export default allUsersService;
