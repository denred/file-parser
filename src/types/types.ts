type InvoiceData = {
  InvoicingMonth: string;
  currencyRates: unknown;
  invoicesData: unknown[];
};

type UploadedFile = {
  name: string;
  data: unknown[][];
};

enum Project {
  FINANCE = 'Finance',
  MARKETING = 'Marketing',
  SUPPORT = '24/7 Support',
  DEVELOPMENT = 'Development',
}

enum Currency {
  ILS,
  USD,
  EUR,
  GPB,
}

enum Status {
  READY = 'Ready',
  DONE = 'Done',
}

interface Invoice {
  customer: string;
  customerNumber: number;
  projectType: Project;
  quantity: number;
  pricePerItem: number;
  itemPriceCurrency: Currency;
  totalPrice: number;
  invoiceCurrency: Currency;
  status: Status;
  invoiceNumber: string;
  contractComments: string;
}

enum Header {
  CUSTOMER = 'Customer',
  CUSTOMER_NO = 'Cust No',
  PROJECT_TYPE = 'Project Type',
  QUANTITY = 'Quantity',
  PRICE_PER_ITEM = 'Price Per Item',
  ITEM_PRICE_CURRENCY = 'Item Price Currency',
  TOTAL_PRICE = 'Total Price',
  INVOICE_CURRENCY = 'Invoice Currency',
  STATUS = 'Status',
  INVOICE_NO = 'Invoice #',
  CONTRACT_COMMENTS = 'Contract Comments',
  INVOICE_TOTAL = 'Invoice Total',
  VALIDATION_ERRORS = 'validationErrors',
}

export { type InvoiceData, type UploadedFile, Header, Status };
