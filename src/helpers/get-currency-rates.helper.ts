import { type UploadedFile } from '../types/types';

type CurrencyRate = {
  currencyRates: Record<string, number>;
  id: number;
};

const getCurrencyRates = (data: UploadedFile[]): CurrencyRate => {
  const currencyRates: Record<string, number> = {};
  let id = 0;
  const invoicingData = data[0].data.filter((it, index) => {
    const condition =
      typeof it[0] === 'string' && it[0].toLowerCase().endsWith('rate');

    id = condition ? index + 1 : id;
    return condition;
  });

  invoicingData.forEach(([currencyTitle, currencyRate]) => {
    const currency = (currencyTitle as string).split(' ')[0];
    const rate = parseFloat(currencyRate as string);
    currencyRates[currency] = rate;
  });

  return { currencyRates, id };
};

export { getCurrencyRates };
