import Router from '@koa/router';

import AuthController from '../controllers/auth';
import UserController from '../controllers/user';

const router = new Router();

// auth 相关的路由
router.post('/auth', AuthController.login);

// user 相关的路由

// file 相关的路由

// team 相关的路由

export default router;