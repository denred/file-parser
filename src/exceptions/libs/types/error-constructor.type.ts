import { HttpCode } from 'src/packages/http/http';
import { ValueOf } from 'src/types/types';

type ErrorConstructor = {
  message?: string;
  cause?: unknown;
  status?: ValueOf<typeof HttpCode>;
};

export { type ErrorConstructor };
