import jwt from "jsonwebtoken";

const { pool } = require("../../database/users/index");

async function loginService(data) {
    const userExists = await pool.query(
        "SELECT * FROM users WHERE email ILIKE $1",
        [data.body.email]
      );

    if(userExists.rowCount === 0){
        return {
            error: "User does not exist."
        }
    }

    if(userExists.rows[0].password !== data.body.password){
        return {
            error: "Password invalid."
        }
    }

    const token = jwt.sign(
        {
            id: userExists.rows[0].id
        },
        "SECRET_KEY", {
            expiresIn: "24h",
            subject: userExists.rows[0].id
        }
    )

    return {
        token: token
    }
}

export default loginService;
