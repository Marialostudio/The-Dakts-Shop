import { Router } from "express";
import LogInController from "../controllers/logincontroller.js";

const logInRouter = Router();

logInRouter.post('/', LogInController.logInSession);
logInRouter.get('/:token', LogInController.validateToken);

export default logInRouter;