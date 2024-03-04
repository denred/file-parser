import { type Request, type Response } from 'express';
import { UploadService } from './upload.service';
import { HttpCode } from '../packages/http/http';

class UploadController {
  public static perform(request: Request, response: Response) {
    const result = UploadService.processUpload(request, response);
    response.status(HttpCode.OK).json(result);
  }
}

export { UploadController };
