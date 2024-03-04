import { type NextFunction, type Request, type Response } from 'express';
import { logger } from '../packages/logger';
import { AppError } from '../exceptions/app-error.exception';
import { HttpCode } from '../packages/http/http';

const errorMiddleware = (
  error: AppError,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  logger.error(error.message);
  response
    .status(error.status ?? HttpCode.BAD_REQUEST)
    .json({ error: error.message });
};

export { errorMiddleware };
