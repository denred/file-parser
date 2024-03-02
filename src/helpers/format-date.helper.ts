import { InvalidDateFormatError } from '../exceptions/exceptions';
import { getFullYear } from './get-full-year.helper';
import { getNumberMonth } from './get-number-month.helper';

const formatDate = (dateString: string): string => {
  const match = dateString.match(/([A-Za-z]+)\s(\d{2,4})/);

  if (!match) {
    throw new InvalidDateFormatError({});
  }

  const monthString = getNumberMonth(match[1]);
  const year = getFullYear(match[2]);

  return `${year}-${monthString}`;
};

export { formatDate };
