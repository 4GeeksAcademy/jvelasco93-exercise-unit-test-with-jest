const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

describe("Currency converter", () => {

    describe("fromEuroToDollar", () => {
        test("converts 1 EUR to USD", () => {
            expect(fromEuroToDollar(1)).toBeCloseTo(1.16, 2)
        })

        test("converts decimal EUR amount to USD", () => {
            expect(fromEuroToDollar(2.5)).toBeCloseTo(2.91, 2)
        })

        test("converts 0 EUR to 0 USD", () => {
            expect(fromEuroToDollar(0)).toBe(0)
        })
    })

    describe("fromDollarToYen", () => {
        test("converts USD to JPY rounded to neares yen", () => {
            expect(fromDollarToYen(10)).toBe(1589)
        })

        test("converts 0 USD to 0 JPY", () => {
            expect(fromDollarToYen(0)).toBe(0)
        })

        test("converts decimal USD amount to JPY rounded to the nearest yen", () => {
            expect(fromDollarToYen(2.54)).toBe(404)
        })

    })

    describe("fromYenToPound", () => {
        test('converts JPY to GBP using EUR exchange rate', () => {
            expect(fromYenToPound(1000)).toBeCloseTo(4.66, 2)
        })

        test('converts 0 JPY to 0 GBP', () => {
            expect(fromYenToPound(0)).toBe(0)
        })

        test('converts decimal JPY to GBP', () => {
            expect(fromYenToPound(250.50)).toBeCloseTo(1.17, 2)
        })
    })
})