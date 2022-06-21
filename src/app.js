import express from "express";
import loginRouter from "./routes/login";
import userRouter from "./routes/users";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3100;

app.use("/users", userRouter)
app.use("/login", loginRouter)

app.listen(port, () => console.log("Aplication running", port));
