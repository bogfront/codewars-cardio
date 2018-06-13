function reverseNumber(n) {
    if (n < 0)
        return Number([...String(n).slice(1)].reverse().join('')) * -1;
    else
        return Number([...String(n)].reverse().join(''))
}

function reverseNumberBest(n) {
    let isNegative = n < 0;
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);

    return isNegative ? -result : result;
}

console.log(reverseNumber(-1000));