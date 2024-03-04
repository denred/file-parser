import { Header } from '../types/types';

const BASE_CURRENCY = 'ILS';

const round = (value: number): number => Math.round(value * 100) / 100;

const getTotalInvoice = (
  invoice: Record<Header, unknown>,
  currencyRates: Record<string, number>,
): number | undefined => {
  const totalPrice = Number(invoice[Header.TOTAL_PRICE]);
  const itemPriceCurrency = String(invoice[Header.ITEM_PRICE_CURRENCY]);
  const invoiceCurrency = String(invoice[Header.INVOICE_CURRENCY]);

  if (
    isNaN(totalPrice) ||
    !currencyRates[itemPriceCurrency] ||
    !currencyRates[invoiceCurrency]
  ) {
    return undefined;
  }

  if (itemPriceCurrency === invoiceCurrency) {
    return totalPrice;
  }

  if (invoiceCurrency === BASE_CURRENCY) {
    return round(totalPrice * currencyRates[itemPriceCurrency]);
  }

  return itemPriceCurrency === BASE_CURRENCY
    ? round(totalPrice / currencyRates[invoiceCurrency])
    : round(
        (totalPrice * currencyRates[itemPriceCurrency]) /
          currencyRates[invoiceCurrency],
      );
};

export { getTotalInvoice };
