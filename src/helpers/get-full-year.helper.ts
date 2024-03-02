import { InvalidDateFormatError } from '../exceptions/validate-date-error.exception';

const FULL_YEAR_DIGITS = 4;
const ANNIVERSARY_PREFIX = '20';

const getFullYear = (year: string): string => {
  const numericYear = Number(year);

  if (isNaN(numericYear)) {
    throw new InvalidDateFormatError({});
  }

  return year.length === FULL_YEAR_DIGITS ? year : ANNIVERSARY_PREFIX + year;
};

export { getFullYear };
