import { type Request, Router } from 'express';
import path from 'path';
import xlsx from 'node-xlsx';
import { getInvoicingMonth } from '../helpers/helpers';
import { HttpMessage } from '../packages/http/http';

export const router = Router();

router.get('/', (req: Request, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/upload', (request: Request, res) => {
  const { fields, files } = request;

  const fileName = fields?.title;
  const uploadedFile = files?.file?.[0].filepath;

  if (!uploadedFile) {
    res.status(400).json({ error: HttpMessage.FILE_DOES_NOT_EXIST });
    return;
  }

  const workbook = xlsx.parse(uploadedFile);
  const InvoicingMonth = getInvoicingMonth(workbook);

  res.status(200).json({
    InvoicingMonth,
    currencyRates: fileName,
    invoicesData: workbook,
  });
});
