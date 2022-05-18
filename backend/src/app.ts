import express from 'express';
import 'express-async-errors';
import router from './routes/index.routes'

const app = express();

app.use(express.json());

app.use('/task', router.listRouter);
app.use('/user', router.userRouter);


export default app;


