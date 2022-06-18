import express from "express";
import { pool } from "./database/users";
import loginRouter from "./routes/login";
import userRouter from "./routes/users";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/users", userRouter)
app.use("/login", loginRouter)
console.log(pool)

app.listen(port, () => console.log("Running on port 3000"));
