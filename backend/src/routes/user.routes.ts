import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista usuários cadastrados')
});

router.get('/:username', (req: Request, res: Response) => {
  const{ username } = req.params;
  
  res.send(`Buscar por usuário específico ${ username } !`)
});

router.post('/', function (req: Request, res: Response) {
  res.send('Criando usuário');
});

export default router;