// Open Exchange Rates API - Free Currency Exchange API
const API_URL = 'https://open.er-api.com/v6/latest';

// Popular currencies
const currencies = [
    { code: 'KGS', name: 'Kyrgyz Som' },
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'RUB', name: 'Russian Ruble' },
    { code: 'KRW', name: 'South Korean Won' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'NOK', name: 'Norwegian Krone' },
    { code: 'SEK', name: 'Swedish Krona' },
    { code: 'DKK', name: 'Danish Krone' },
    { code: 'PLN', name: 'Polish Zloty' },
    { code: 'TRY', name: 'Turkish Lira' },
    { code: 'IDR', name: 'Indonesian Rupiah' },
    { code: 'HUF', name: 'Hungarian Forint' },
    { code: 'CZK', name: 'Czech Koruna' },
    { code: 'ILS', name: 'Israeli Shekel' },
    { code: 'CLP', name: 'Chilean Peso' },
    { code: 'PHP', name: 'Philippine Peso' },
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'SAR', name: 'Saudi Riyal' },
    { code: 'MYR', name: 'Malaysian Ringgit' },
    { code: 'RON', name: 'Romanian Leu' }
];

// Get all available currencies from API
async function getAllCurrencies() {
    try {
        const response = await fetch(`${API_URL}/USD`);
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.error('Error fetching currencies:', error);
        return null;
    }
}

// Populate select dropdowns
function populateSelects() {
    const desktopFrom = document.getElementById('desktop-from');
    const desktopTo = document.getElementById('desktop-to');
    const mobileFrom = document.getElementById('mobile-from');
    const mobileTo = document.getElementById('mobile-to');

    currencies.forEach(currency => {
        // Desktop selects
        const desktopOptionFrom = document.createElement('option');
        desktopOptionFrom.value = currency.code;
        desktopOptionFrom.textContent = `${currency.code} - ${currency.name}`;
        desktopFrom.appendChild(desktopOptionFrom);

        const desktopOptionTo = document.createElement('option');
        desktopOptionTo.value = currency.code;
        desktopOptionTo.textContent = `${currency.code} - ${currency.name}`;
        desktopTo.appendChild(desktopOptionTo);

        // Mobile selects
        const mobileOptionFrom = document.createElement('option');
        mobileOptionFrom.value = currency.code;
        mobileOptionFrom.textContent = `${currency.code} - ${currency.name}`;
        mobileFrom.appendChild(mobileOptionFrom);

        const mobileOptionTo = document.createElement('option');
        mobileOptionTo.value = currency.code;
        mobileOptionTo.textContent = `${currency.code} - ${currency.name}`;
        mobileTo.appendChild(mobileOptionTo);
    });

    // Set default values
    desktopFrom.value = 'USD';
    desktopTo.value = 'EUR';
    mobileFrom.value = 'USD';
    mobileTo.value = 'EUR';

    // Update rate on load
    updateExchangeRate('desktop');
    updateExchangeRate('mobile');
}

// Get exchange rate
async function getExchangeRate(from, to) {
    try {
        const response = await fetch(`${API_URL}/${from}`);
        const data = await response.json();

        if (data.result === 'success' && data.rates && data.rates[to]) {
            return data.rates[to];
        }
        return null;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}

// Update exchange rate display
async function updateExchangeRate(platform) {
    const fromSelect = document.getElementById(`${platform}-from`);
    const toSelect = document.getElementById(`${platform}-to`);
    const rateDisplay = document.getElementById(`${platform}-rate`);

    const from = fromSelect.value;
    const to = toSelect.value;

    if (!from || !to) {
        rateDisplay.textContent = '0.00';
        return;
    }

    const rate = await getExchangeRate(from, to);

    if (rate) {
        rateDisplay.textContent = rate.toFixed(2);
    } else {
        rateDisplay.textContent = '0.00';
    }
}

// Convert currency
async function convertCurrency(platform) {
    const amountInput = document.getElementById(`${platform}-amount`);
    const fromSelect = document.getElementById(`${platform}-from`);
    const toSelect = document.getElementById(`${platform}-to`);
    const rateDisplay = document.getElementById(`${platform}-rate`);

    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!amount || !from || !to) {
        alert('Please fill in all fields');
        return;
    }

    const rate = await getExchangeRate(from, to);

    if (rate) {
        const result = (amount * rate).toFixed(2);
        rateDisplay.textContent = result;
    } else {
        alert('Error fetching exchange rate');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    populateSelects();

    // Desktop listeners
    document.getElementById('desktop-from').addEventListener('change', () => updateExchangeRate('desktop'));
    document.getElementById('desktop-to').addEventListener('change', () => updateExchangeRate('desktop'));
    document.getElementById('desktop-convert').addEventListener('click', () => convertCurrency('desktop'));
    document.getElementById('desktop-amount').addEventListener('input', () => {
        if (document.getElementById('desktop-amount').value) {
            convertCurrency('desktop');
        }
    });

    // Mobile listeners
    document.getElementById('mobile-from').addEventListener('change', () => updateExchangeRate('mobile'));
    document.getElementById('mobile-to').addEventListener('change', () => updateExchangeRate('mobile'));
    document.getElementById('mobile-convert').addEventListener('click', () => convertCurrency('mobile'));
    document.getElementById('mobile-amount').addEventListener('input', () => {
        if (document.getElementById('mobile-amount').value) {
            convertCurrency('mobile');
        }
    });
});
