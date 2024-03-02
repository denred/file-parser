import { type Fields, type Files } from 'formidable';

declare global {
  namespace Express {
    interface Request {
      fields?: Fields;
      files?: Files;
    }
  }
}
