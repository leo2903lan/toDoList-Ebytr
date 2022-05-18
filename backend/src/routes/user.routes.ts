import { PrismaClient } from '@prisma/client'
import { Router, Request, Response } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id)}});
  res.status(200).json(user);
});

router.post('/',   async (req: Request, res: Response) => {
  const { email, password, username, } = req.body;

  await prisma.user.create({
    data: {
      email,
      password,
      username,
  }})
  res.status(201).json({ message: 'User Created!' });
});

export default router;