import { Router } from 'express';
import { CreateTagContoller } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { esureAdmin } from './middlewares/ensureAdmin';


const router = Router();

const createUserController = new CreateUserController();
const creteTagController = new CreateTagContoller();

router.post("/tags",esureAdmin, creteTagController.handle);
router.post("/users", createUserController.handle );

export {router}