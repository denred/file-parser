import { InvalidDateFormatError } from '../exceptions/validate-date-error.exception';

const months: Record<string, string> = {
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
};

const getNumberMonth = (monthString: string): string => {
  const lowercasedMonth = monthString.toLowerCase();

  if (!months.hasOwnProperty(lowercasedMonth)) {
    throw new InvalidDateFormatError({
      message: `Invalid month: ${monthString}`,
    });
  }

  return months[lowercasedMonth];
};

export { getNumberMonth };
