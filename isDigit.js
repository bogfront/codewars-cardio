function isDigit(s) {
    return !Number.isNaN(+s) && s !== ' ' && s !== ''
}

function isDigitBest(s) {
    return s == parseFloat(s)
}

console.log(isDigitBest(' -3.23 '), true)
console.log(isDigitBest(' '), false)