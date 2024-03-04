import dotenv from 'dotenv';
import express, { json } from 'express';
import path from 'path';
import {
  errorMiddleware,
  fileUploadMiddleware,
  loggerMiddleware,
} from './middlewares';
import { router } from './routes';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(json());
app.use(loggerMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUploadMiddleware);
app.use(router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
