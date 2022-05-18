import { PrismaClient } from '@prisma/client'
import { Router, Request, Response } from 'express';
import TasksController from '../controllers/task.controller';

const router = Router();
const tasksController = new TasksController();

router.get('/', tasksController.findMany);

router.get('/:id', tasksController.findUnique);

router.post('/', tasksController.create);

router.put('/:id', tasksController.update);

router.delete('/', tasksController.deleteMany);

router.delete('/:id', tasksController.delete);

export default router;