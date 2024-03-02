import { type ErrorConstructor } from './libs/types';

class AppError extends Error {
  public constructor({ message, status, cause }: ErrorConstructor) {
    super(message, {
      cause,
    });
  }
}

export { AppError };
