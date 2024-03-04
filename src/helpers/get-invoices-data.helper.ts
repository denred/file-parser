import { Header, Status, type UploadedFile } from '../types/types';
import { checkCurrencyRates } from './check-currency-rates.helper';
import { checkTotalPrice } from './check-total-price.helper';
import { getTotalInvoice } from './get-total-invoice.helper';
import {
  validateFormatData,
  validateString,
} from './validate-format-data.helper';

type InvoiceParameters = {
  workbook: UploadedFile[];
  currencyRates: Record<string, number>;
  id: number;
};
const getInvoicesData = ({
  workbook,
  currencyRates,
  id,
}: InvoiceParameters): Record<string, unknown>[] => {
  const [headers, ...rawInvoiceData] = workbook[0].data.slice(id);
  const invoicesData: Record<string, unknown>[] = [];

  rawInvoiceData.forEach((records) => {
    const invoiceData: Record<string, unknown> = {};
    const validationErrors: string[] = [];

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i] as string;
      const record = records[i];
      const { isValid, error } = validateFormatData(header, record);
      if (!isValid) {
        validationErrors.push(error as string);
      }

      invoiceData[header] = record ?? null;
    }

    if (
      invoiceData[Header.STATUS] === Status.READY ||
      validateString(invoiceData[Header.INVOICE_NO])
    ) {
      const { isValid, error } = checkTotalPrice(invoiceData);

      if (!isValid) {
        validationErrors.push(error as string);
      }

      const { isValid: isCurrencyRatesValid, error: currencyRatesError } =
        checkCurrencyRates(invoiceData, currencyRates);

      if (!isCurrencyRatesValid) {
        validationErrors.push(currencyRatesError as string);
      }

      invoiceData[Header.INVOICE_TOTAL] =
        isValid && isCurrencyRatesValid
          ? getTotalInvoice(invoiceData, currencyRates)
          : null;

      invoiceData[Header.VALIDATION_ERRORS] = validationErrors;
      invoicesData.push(invoiceData);
    }
  });

  return invoicesData;
};

export { getInvoicesData };
