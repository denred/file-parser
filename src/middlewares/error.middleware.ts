import { type NextFunction, type Request, type Response } from 'express';
import { logger } from '../packages/logger';
import { AppError } from '../exceptions/app-error.exception';

const errorMiddleware = (
  error: AppError,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  logger.error(error.message);
  response.status(error.status).json({ error: error.message });
};

export { errorMiddleware };
