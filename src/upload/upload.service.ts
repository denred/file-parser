import xlsx from 'node-xlsx';
import { type Response, type Request } from 'express';
import { HttpCode, HttpMessage } from '../packages/http/http';
import { getCurrencyRates, getInvoicingMonth } from '../helpers/helpers';

class UploadService {
  public static processUpload(request: Request, response: Response) {
    const { fields, files } = request;
    const fileName = fields?.title;
    const uploadedFile = files?.file?.[0].filepath;

    if (!uploadedFile) {
      return response
        .status(HttpCode.BAD_REQUEST)
        .json({ error: HttpMessage.FILE_DOES_NOT_EXIST });
    }

    const workbook = xlsx.parse(uploadedFile);
    const InvoicingMonth = getInvoicingMonth(workbook);
    const currencyRates = getCurrencyRates(workbook);

    return {
      InvoicingMonth,
      currencyRates,
      invoicesData: workbook,
    };
  }
}

export { UploadService };
