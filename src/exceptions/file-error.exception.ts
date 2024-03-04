import { HttpCode, HttpMessage } from '../packages/http/http';
import { AppError } from './app-error.exception';

type Constructor = {
  message?: string;
  cause?: unknown;
};

class FileError extends AppError {
  public constructor({
    message = HttpMessage.FILE_DOES_NOT_EXIST,
    cause,
  }: Constructor) {
    super({
      message,
      status: HttpCode.BAD_REQUEST,
      cause,
    });
  }
}

export { FileError };
