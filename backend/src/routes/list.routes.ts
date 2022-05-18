import { PrismaClient } from '@prisma/client'
import { Router, Request, Response } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const tasks = await prisma.list.findMany();
  res.status(200).json(tasks);
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await prisma.list.findUnique({ where: { id: Number(id)}});
  res.status(200).json(task);
});

router.post('/',   async (req: Request, res: Response) => {
  const { title, content, pubcompleted } = req.body;

  await prisma.list.create({
    data: {
      title,
      content,
      pubcompleted,
    }
  })
  res.status(201).json({ message: 'Task Created!' });
});

router.put('/', async  (req: Request, res: Response) => {
  const { title, content, pubcompleted } = req.body;
  const { id } = req.params;

  await prisma.list.update({
    where: { id: Number(id) },
    data: {
      title,
      content,
      pubcompleted,
    }
  })
  res.status(200).json({ message: 'Task updated!' });
});

router.delete('/', async (req: Request, res: Response) => {
  await prisma.list.deleteMany();
  res.status(200).json({ message: 'All task Deleted ' });
});
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.list.delete({ where: { id:Number(id) }})
  res.status(200).json({ message: 'Task Deleted' });
});

export default router;