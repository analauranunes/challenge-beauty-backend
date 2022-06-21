import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import userInfoController from "../../controllers/userInfo/userInfo.controller";
import allUsersController from "../../controllers/users/allUsers.controller";
import createUserController from "../../controllers/users/creteUser.controller";
import verifyTokenMiddleware from "../../middlewares/verifyToken.middleware";
import createUserSchema from "../../schemas/users/createUser.schema";

const router = Router();

router.get("", allUsersController);

router.post(
  "",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  createUserController
);

router.get("/me", verifyTokenMiddleware, userInfoController);

export default router;
