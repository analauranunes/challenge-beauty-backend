import { expressYupMiddleware } from "express-yup-middleware";
import loginController from "../../controllers/login/login.controller";
import loginSchema from "../../schemas/login/login.schema"

const {Router} = require('express');

const router = Router()

router.post("", expressYupMiddleware({schemaValidator: loginSchema}), loginController)

export default router;
