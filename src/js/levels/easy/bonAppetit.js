const bonAppetit = (bill, k, b) => {
    const BON_APPETIT = 'Bon Appetit';

    bill.splice(k, 1);

    const calculateOrder = bill.reduce((acc, current) => {
        return acc + current;
    });
    const result = calculateOrder / 2;

    return result === b ? console.log(BON_APPETIT)
        : console.log(b - result);
}

console.log(bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288));