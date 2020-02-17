import { Router } from 'express';
import multer from 'multer';
import multerCongfig from './config/multer';

import UserController from './app/controller/UserController';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controller/SessionController';
import RecipientController from './app/controller/RecipientController';
import FileController from './app/controller/FileController';
import CourierController from './app/controller/CourierController';

const routes = new Router();
const upload = multer(multerCongfig);
routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.use(authMiddleware);
routes.post('/recipient', RecipientController.store);
routes.put('/users', UserController.update);
routes.put('/recipient', RecipientController.update);
routes.get('/recipient/:id', RecipientController.index2);
routes.get('/recipient', RecipientController.index);
routes.post('/file', upload.single('file'), FileController.store);
routes.post('/courier', CourierController.store);
routes.get('/courier', CourierController.index);
routes.put('/courier/:id', CourierController.update);
export default routes;
