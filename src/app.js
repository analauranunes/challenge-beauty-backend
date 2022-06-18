import loginRouter from "./routes/login";
import userRouter from "./routes/users";

const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/login", loginRouter);
console.log(port);

app.listen(port, () => console.log("Aplication running"));
