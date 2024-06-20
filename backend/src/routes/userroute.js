import { Router } from "express";
import DaktsUsersController from "../controllers/usercontrollers.js";

const daktsUsersRouter = Router();

daktsUsersRouter.post('/', DaktsUsersController.createUser);
daktsUsersRouter.get('/:id', DaktsUsersController.readUser);
daktsUsersRouter.get('/', DaktsUsersController.readUsers);
daktsUsersRouter.put('/:id', DaktsUsersController.updateUser);
daktsUsersRouter.delete('/:id', DaktsUsersController.deleteUser);

export default daktsUsersRouter;