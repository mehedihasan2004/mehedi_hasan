import { Router } from "express";
import { UserValidation } from "./validation";
import { UserController } from "./controller";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();
const { ZCreateUser } = UserValidation;
const { createUser } = UserController;

router.post("/", validateRequest(ZCreateUser), createUser);

export const UserRoutes = router;
