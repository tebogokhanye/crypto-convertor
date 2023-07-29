function convert() {
    const inputCurrency = document.getElementById("inputCurrency").value;
    const outputCurrency = document.getElementById("outputCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    
    const exchangeRates = {
        BTC: { ETH: 47.231, BNB: 1024.53, ADA: 1874.32, XRP: 13947.01 },
        ETH: { BTC: 0.02115, BNB: 21.759, ADA: 39.821, XRP: 280.854 },
        BNB: { BTC: 0.000976, ETH: 0.04602, ADA: 1.836, XRP: 68.223 },
        ADA: { BTC: 0.000533, ETH: 0.02511, BNB: 0.544, XRP: 22.693 },
        XRP: { BTC: 0.0000718, ETH: 0.00356, BNB: 0.01466, ADA: 0.04403 },
    };

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (!exchangeRates[inputCurrency] || !exchangeRates[inputCurrency][outputCurrency]) {
        alert("Invalid input or output currency.");
        return;
    }

    const convertedAmount = amount * exchangeRates[inputCurrency][outputCurrency];
    document.getElementById("result").textContent = `${amount} ${inputCurrency} = ${convertedAmount.toFixed(4)} ${outputCurrency}`;
}
