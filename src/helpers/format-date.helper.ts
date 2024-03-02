import { ValidateDateError } from '../exceptions/exceptions';
import { getFullYear } from './get-full-year.helper';

const formatDate = (dateString: string): string => {
  const match = dateString.match(/([A-Za-z]+)\s(\d{2,4})/);

  if (!match) {
    throw new ValidateDateError({});
  }

  const monthString = match[1];
  const year = getFullYear(match[2]);

  return `${year}-${monthString}`;
};

export { formatDate };
