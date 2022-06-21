const { pool } = require("../../database/users");
import bcryptjs from "bcryptjs";

async function userInfoService(userId) {
  const user = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);
  user.rows[0].password = bcryptjs.hashSync(user.rows[0].password, 10);
  return user.rows[0];
}

export default userInfoService;
