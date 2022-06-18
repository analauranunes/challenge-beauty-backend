import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import allUsersController from "../../controllers/users/allUsers.controller";
import createUserController from "../../controllers/users/creteUser.controller";
import createUserSchema from "../../schemas/users/createUser.schema";

const router = Router();

router.get("", allUsersController);

router.post(
  "",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  createUserController
);

export default router;
