import express from 'express';
import 'express-async-errors';
import router from './routes/index.routes';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json());

app.use('/task', router.taskRouter);


export default app;


