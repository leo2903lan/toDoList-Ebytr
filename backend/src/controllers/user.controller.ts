import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export default class UserController {
  constructor(private prisma = new PrismaClient()) {}

  public findMany = async (req: Request, res: Response) => {
    const users = await this.prisma.user.findMany();
    res.status(200).json(users);
  }

  public findUnique = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.prisma.user.findUnique({ where: { id: Number(id)}});
    res.status(200).json(user);
  }

  public create =  async (req: Request, res: Response) => {
  const { email, password, username, } = req.body;

  await this.prisma.user.create({
    data: {
      email,
      password,
      username,
  }})
  res.status(201).json({ message: 'User Created!' });
}
}