import { type NextFunction, type Request, type Response } from 'express';
import formidable from 'formidable';

const fileUploadMiddleware = (
  request: Request,
  _: Response,
  next: NextFunction,
) => {
  const form = formidable({ multiples: true });

  form.parse(request, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    request.fields = fields;
    request.files = files;

    next();
  });
};

export { fileUploadMiddleware };
