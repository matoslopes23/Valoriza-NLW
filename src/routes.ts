import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagContoller } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { esureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/esureAuthenticated';


const router = Router();

const createUserController = new CreateUserController();
const creteTagController = new CreateTagContoller();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceivedComplimentsController();
const listTagController = new ListTagsController()

const listUsersController = new ListUsersController()

router.post("/tags",ensureAuthenticated,esureAdmin, creteTagController.handle);
router.post("/users", createUserController.handle );
router.post("/login", authenticateUserController.handle);
router.post("/compliments",ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send",ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",ensureAuthenticated, listUserReceiveComplimentsController.handle);

router.get("/tags",ensureAuthenticated, listTagController.handle);

router.get("/users",ensureAuthenticated, listUsersController.handle )

export {router}