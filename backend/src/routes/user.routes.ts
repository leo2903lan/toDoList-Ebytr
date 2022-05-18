import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.get('/', userController.findMany);

router.get('/:id', userController.findMany);

router.post('/', userController.create);

export default router;