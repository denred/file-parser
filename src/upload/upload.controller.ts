import { type Request, type Response } from 'express';
import { UploadService } from './upload.service';

class UploadController {
  public static perform(request: Request, response: Response) {
    const result = UploadService.processUpload(request, response);

    response.status(200).json(result);
  }
}

export { UploadController };
