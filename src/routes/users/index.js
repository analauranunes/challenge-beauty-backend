import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import createUserController from "../../controllers/users/creteUser.controller";
import createUserSchema from "../../schemas/users/createUser.schema";

const router = Router();

router.post(
  "",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  createUserController
);

export default router;
