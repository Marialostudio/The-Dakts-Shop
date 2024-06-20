import { Router } from 'express';
import DaktsProductController from "../controllers/productcontrollers.js";

const daktsProductRouter = Router();

daktsProductRouter.post('/', DaktsProductController.createProduct);
daktsProductRouter.get('/:id', DaktsProductController.readProduct);
daktsProductRouter.get('/', DaktsProductController.readProducts);
daktsProductRouter.put('/:id', DaktsProductController.updateProduct);
daktsProductRouter.delete('/:id', DaktsProductController.deleteProduct);

export default daktsProductRouter;