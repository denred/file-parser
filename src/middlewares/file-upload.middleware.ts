import { type NextFunction, type Request, type Response } from 'express';
import formidable from 'formidable';
import { HttpCode, HttpMessage } from '../packages/http/http';

const fileUploadMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const form = formidable({ multiples: true });

  form.parse(request, (error, fields, files) => {
    if (error) {
      response
        .status(HttpCode.BAD_REQUEST)
        .send({ error: HttpMessage.FILE_DOES_NOT_EXIST });
    }

    request.fields = fields;
    request.files = files;

    next();
  });
};

export { fileUploadMiddleware };
