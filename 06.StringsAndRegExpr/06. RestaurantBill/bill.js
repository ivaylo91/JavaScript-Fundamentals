const printBill = function (input) {
    let products = input.filter((e, i) => i % 2 === 0);
    let prices = input.filter((e, i) => i % 2 === 1).map(Number);

    return `You purchased ${products.join(", ")} for total sum  ${prices.reduce((a, b) => a + b)}`;
};
console.log(printBill(['Cola', '1.35', 'Pancakes', '2.88']));
