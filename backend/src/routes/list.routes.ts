import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista completa de tarefa')
});
router.get('/:id', (req: Request, res: Response) => {
  res.send('Buscar por id de tarefa!')
});

router.post('/', function (req: Request, res: Response) {
  res.send('Criando uma tarefa');
});

router.put('/', function (req: Request, res: Response) {
  res.send('Editando uma tarefa');
});

router.delete('/', function (req: Request, res: Response) {
  res.send('Deletando tarefa');
});

export default router;