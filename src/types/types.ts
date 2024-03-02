type InvoiceData = {
  InvoicingMonth: string;
  currencyRates: unknown;
  invoicesData: unknown[];
};

type UploadedFile = {
  name: string;
  data: unknown[][];
};

export { type InvoiceData, type UploadedFile };
