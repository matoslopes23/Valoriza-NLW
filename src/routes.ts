import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagContoller } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { esureAdmin } from './middlewares/ensureAdmin';


const router = Router();

const createUserController = new CreateUserController();
const creteTagController = new CreateTagContoller();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController()

router.post("/tags",esureAdmin, creteTagController.handle);
router.post("/users", createUserController.handle );
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle)

export {router}