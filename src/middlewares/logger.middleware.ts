import { type NextFunction, type Request, type Response } from 'express';
import { logger } from '../packages/logger';

const loggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  logger.info(`[${request.method}]: ${request.url}`);
  next();
};

export { loggerMiddleware };
