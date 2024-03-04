# Invoices XLS Parsing 📊

## ℹ️ General Info

This NodeJS and ExpressJS application is designed to process an XLS file containing invoice data. It includes validation for the file structure and performs specific calculations and validations on the data. Follow the steps below to set up and run the application.

## 🖍 Requirements

- [NodeJS](https://nodejs.org/en/) (>=12.x.x);
- [NPM](https://www.npmjs.com/) (>=6.x.x);

## 🏃‍♂️ Simple Start

1. **`npm install`** at the root
2. Fill ENVs
3. **`npm run start`** at the root
4. Enjoy <3

## 📚 API Endpoints

**Endpoint:**

```bash
POST /upload
```

**Request Parameters:**

- `invoicingMonth` (Format: YYYY-MM)

**Request Payload:**

Form data with the `file` field containing the XLS file.

**Sample Request:**

```bash
curl -X POST -H "Content-Type: multipart/form-data" -F "file=@/path/to/Test_task.xlsx" -F "invoicingMonth=2024-03" http://localhost:3000/upload
```

**Sample Response:**

```json
{
  "InvoicingMonth": "2023-09",
  "currencyRates": {
    "USD": 3.849,
    "EUR": 4.0575,
    "GBP": 4.7003
  },
  "invoicesData": [
    {
      "Customer": "Coca Col",
      "Cust No'": 21314,
      "Project Type": "Marketing",
      "Quantity": 12,
      "Price Per Item": 2,
      "Item Price Currency": "USD",
      "Total Price": 10000,
      "Invoice Currency": "USD",
      "Status": "Ready",
      "Invoice #": null,
      "Contract Comments": "Remind next month",
      "Invoice Total": null,
      "validationErrors": [
        "[Total Price]: isn't correct (12 * 2 not equal 10000)"
      ]
    }
  ]
}
```

## Validation Details

1. Only relevant lines with a status of "ready" or having the "Invoice #" filled are processed.
2. Mandatory fields for validation: _Customer_, _Cust No'_, _Project Type_, _Quantity_, _Price Per Item_,\* _Item Price Currency_, _Total Price_, _Invoice Currency_, _Status_.
