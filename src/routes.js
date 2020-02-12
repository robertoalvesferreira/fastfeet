import { Router } from 'express';
import UserController from './app/controller/UserController';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controller/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.post('/users', UserController.store);

export default routes;
