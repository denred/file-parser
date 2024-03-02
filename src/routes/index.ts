import { type Request, Router } from 'express';
import path from 'path';
import { UploadController } from '../upload';

export const router = Router();

router.get('/', (req: Request, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/upload', UploadController.perform);
