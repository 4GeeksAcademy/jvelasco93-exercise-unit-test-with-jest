// One euro is:
const oneEuroIs = {
    // Lectura realizada el 2026-05-25 a las 16:28
    "JPY": 185.04, // Japan yen
    "USD": 1.1643, // US dollar
    "GBP": 0.86255, // British pound
};

function fromDollarToYen(dollars) {
    return Math.round(dollars / oneEuroIs.USD * oneEuroIs.JPY);
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    return yen / oneEuroIs.JPY * oneEuroIs.GBP;
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}

console.log(fromYenToPound(250.50))