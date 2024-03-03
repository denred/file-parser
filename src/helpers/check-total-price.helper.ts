import { Header } from '../types/types';

const checkTotalPrice = (
  record: Record<Header, unknown>,
): { isValid: boolean; error: string | null } => {
  const quantity = Number(record[Header.QUANTITY]);
  const pricePerItem = Number(record[Header.PRICE_PER_ITEM]);
  const totalPrice = Number(record[Header.TOTAL_PRICE]);

  if (isNaN(quantity) || isNaN(pricePerItem) || isNaN(totalPrice)) {
    return {
      isValid: false,
      error: `[Invoice Total]: not valid input data`,
    };
  }

  const calculatedTotalPrice = quantity * pricePerItem;

  return calculatedTotalPrice === totalPrice
    ? { isValid: true, error: null }
    : {
        isValid: false,
        error: `[${Header.TOTAL_PRICE}]: isn't correct (${quantity} * ${pricePerItem} not equal ${totalPrice})`,
      };
};

export { checkTotalPrice };
