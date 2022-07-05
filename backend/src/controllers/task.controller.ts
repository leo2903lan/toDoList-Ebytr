import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export default class TasksController {
  constructor(private prisma = new PrismaClient()) {}

  public findMany = async (req: Request, res: Response) => {
    const tasks = await this.prisma.task.findMany();
    res.status(200).json(tasks);
  };

  public findUnique = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await this.prisma.task.findUnique({ where: { id: Number(id)}});
    res.status(200).json(task);
  };

  public create = async (req: Request, res: Response) => {
    const { title, content, status } = req.body;
  
    await this.prisma.task.create({
      data: {
        title,
        content,
        status,
      }
    })
    res.status(201).json({ message: 'Task Created!' });
  };

  public update =  async  (req: Request, res: Response) => {
    const { title, content, status } = req.body;
    const { id } = req.params;
  
    await this.prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        status,
      }
    })
    res.status(200).json({ message: 'Task updated!' });
  };

  public deleteMany =  async (req: Request, res: Response) => {
    await this.prisma.task.deleteMany();
    res.status(200).json({ message: 'All task Deleted ' });
  };

  public delete =  async (req: Request, res: Response) => {
    const { id } = req.params;
  
    await this.prisma.task.delete({ where: { id:Number(id) }})
    res.status(200).json({ message: 'Task Deleted' });
  }
}