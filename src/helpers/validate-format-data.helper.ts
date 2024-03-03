import { Header } from '../types/types';

const validateString = (data: unknown): boolean =>
  typeof data === 'string' && data.length > 0;
const validateNumber = (data: unknown): boolean =>
  typeof data === 'number' || !isNaN(parseFloat(data as string));

const validateFormatData = (
  header: string,
  record: unknown,
): { isValid: boolean; error: string | null } => {
  switch (header) {
    case Header.CUSTOMER:
    case Header.PROJECT_TYPE:
    case Header.ITEM_PRICE_CURRENCY:
    case Header.INVOICE_CURRENCY:
    case Header.STATUS:
      return validateString(record)
        ? { isValid: true, error: null }
        : { isValid: false, error: `[${header}]: empty or invalid format` };
    case Header.CUSTOMER_NO:
    case Header.QUANTITY:
    case Header.PRICE_PER_ITEM:
    case Header.TOTAL_PRICE:
      return validateNumber(record)
        ? { isValid: true, error: null }
        : { isValid: false, error: `[${header}]: empty or invalid format` };
    default:
      return { isValid: true, error: null };
  }
};

export { validateFormatData, validateString };
