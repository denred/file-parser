import { UploadedFile } from '../types/types';

const getCurrencyRates = (data: UploadedFile[]): Record<string, number> => {
  const currencyRates: Record<string, number> = {};
  const invoicingData = data[0].data.filter(
    (it) => typeof it[0] === 'string' && it[0].toLowerCase().endsWith('rate'),
  );

  invoicingData.forEach((record) => {
    const currency = record[0] as string;
    const rate = parseFloat(record[1] as string);
    currencyRates[currency] = rate;
  });

  return currencyRates;
};

export { getCurrencyRates };
