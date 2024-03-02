import { type UploadedFile } from '../types/types';
import { formatDate } from './format-date.helper';

const getInvoicingMonth = (data: UploadedFile[]): string =>
  formatDate(data[0].data[0][0] as string);

export { getInvoicingMonth };
