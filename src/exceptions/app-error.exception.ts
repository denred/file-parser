import { ValueOf } from '../types/types';
import { HttpCode } from '../packages/http/http';
import { type ErrorConstructor } from './libs/types';

class AppError extends Error {
  public status: ValueOf<typeof HttpCode>;

  public constructor({ message, status, cause }: ErrorConstructor) {
    super(message, {
      cause,
    });
    this.status = status ?? HttpCode.BAD_REQUEST;
  }
}

export { AppError };
