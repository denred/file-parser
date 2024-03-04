import { Header } from '../types/types';

const checkCurrencyRates = (
  invoice: Record<Header, unknown>,
  currencyRates: Record<string, number>,
): { isValid: boolean; error: string | null } => {
  const itemPriceCurrency = String(invoice[Header.ITEM_PRICE_CURRENCY]);
  const invoiceCurrency = String(invoice[Header.INVOICE_CURRENCY]);

  if (!currencyRates[itemPriceCurrency]) {
    return {
      isValid: false,
      error: `[${Header.ITEM_PRICE_CURRENCY}]: Currency rate not found for ${itemPriceCurrency}`,
    };
  }

  if (!currencyRates[invoiceCurrency]) {
    return {
      isValid: false,
      error: `[${Header.INVOICE_CURRENCY}]: Currency rate not found for ${invoiceCurrency}`,
    };
  }

  return { isValid: true, error: null };
};

export { checkCurrencyRates };
