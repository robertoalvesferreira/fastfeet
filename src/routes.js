import { Router } from 'express';
import UserController from './app/controller/UserController';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controller/SessionController';
import RecipientController from './app/controller/RecipientController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.post('/recipient', RecipientController.store);
routes.put('/users', UserController.update);
routes.put('/recipient', RecipientController.update);
routes.get('/recipient/:id', RecipientController.index2);
routes.get('/recipient', RecipientController.index);

export default routes;
