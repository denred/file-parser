import { HttpCode } from '../packages/http/http';
import { AppError } from './app-error.exception';
import { ErrorMessage } from './libs/enums';

type Constructor = {
  message?: string;
  cause?: unknown;
};

class ValidateDateError extends AppError {
  public constructor({
    message = ErrorMessage.INVALID_INPUT_FORMAT,
    cause,
  }: Constructor) {
    super({
      message,
      status: HttpCode.BAD_REQUEST,
      cause,
    });
  }
}

export { ValidateDateError };
