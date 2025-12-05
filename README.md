# Currency Converter

A responsive web application that converts currencies using real-time exchange rates. The application features both desktop and mobile versions with an intuitive user interface.

## Features

- **Real-time Exchange Rates**: Uses the Open Exchange Rates API to fetch live currency conversion rates
- **Multiple Currencies**: Support for 33+ popular currencies including USD, EUR, GBP, JPY, INR, and more
- **Responsive Design**: Optimized layouts for both desktop and mobile devices
- **Live Conversion**: Automatically calculates conversion as you type the amount
- **Exchange Rate Display**: Shows current exchange rate between selected currencies

## Supported Currencies

- USD (United States Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- AUD (Australian Dollar)
- CAD (Canadian Dollar)
- CHF (Swiss Franc)
- CNY (Chinese Yuan)
- INR (Indian Rupee)
- And 23+ more...

## How to Use

1. Open `index.html` in your web browser
2. Select the currency you want to convert from (default: USD)
3. Select the currency you want to convert to (default: EUR)
4. Enter the amount you want to convert
5. The exchange rate will update automatically
6. Click the "Convert" button to perform the conversion or simply type to see live results

## Project Structure

```
currency/
├── index.html      # Main HTML file with desktop and mobile layouts
├── style.css       # Styling for both desktop and mobile views
├── script.js       # JavaScript logic for currency conversion and API calls
├── favicon.svg     # Website favicon
└── README.md       # This file
```

## API

The application uses the **Open Exchange Rates API** (https://open.er-api.com/v6/latest) to fetch real-time exchange rate data.

### API Endpoint
```
GET https://open.er-api.com/v6/latest/{currency_code}
```

## Responsive Design

- **Mobile View**: Displays a mobile phone mockup (375x812px) with touch-friendly interface
- **Tablet/Desktop View**: Full-width responsive layout optimized for larger screens

### Breakpoints
- < 768px: Mobile view
- 768px - 1023px: Mobile view (tablet)
- ≥ 1024px: Desktop view

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, flexbox, and media queries
- **JavaScript (ES6+)**: Async/await, fetch API, event listeners
- **Open Exchange Rates API**: Real-time exchange rate data

## Installation

No installation required! Simply open the `index.html` file in any modern web browser.

```bash
# Using a local server (recommended)
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## Browser Compatibility

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Explanation

### Exchange Rate Calculation
- Fetches the exchange rate from the base currency to the target currency
- Multiplies the entered amount by the exchange rate
- Displays the result with 2 decimal places

### Auto-Update
- Exchange rate updates when currency selections change
- Conversion happens automatically as you type the amount
- Works seamlessly on both desktop and mobile versions

## Future Enhancements

- Offline support with cached exchange rates
- Historical exchange rate charts
- Multi-currency conversion
- Currency conversion history
- Dark mode theme

## License

Copyright - Kaymen Communications | 2022


## presentation

https://www.canva.com/design/DAG6hHXoAf4/hDHxVUcqfL_EAFxMYhphhQ/edit?utm_content=DAG6hHXoAf4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
