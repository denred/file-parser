import xlsx from 'node-xlsx';
import { type Response, type Request } from 'express';
import { HttpCode, HttpMessage } from '../packages/http/http';
import {
  getCurrencyRates,
  getInvoicesData,
  getInvoicingMonth,
} from '../helpers/helpers';
import { FileError, InvalidDateFormatError } from '../exceptions/exceptions';

class UploadService {
  public static processUpload(request: Request, response: Response) {
    const { fields, files } = request;
    const [fileName] = fields?.title ?? [];
    const uploadedFile = files?.file?.[0].filepath;

    if (!uploadedFile) {
      throw new FileError({});
    }

    const workbook = xlsx.parse(uploadedFile);
    const InvoicingMonth = getInvoicingMonth(workbook);

    if (!(fileName?.trim() === InvoicingMonth?.trim())) {
      throw new InvalidDateFormatError({
        message: HttpMessage.INVOICING_DATE_MISMATCH,
      });
    }

    const { currencyRates, id } = getCurrencyRates(workbook);
    const invoicesData = getInvoicesData({ workbook, id, currencyRates });

    return {
      InvoicingMonth,
      currencyRates,
      invoicesData,
    };
  }
}

export { UploadService };
