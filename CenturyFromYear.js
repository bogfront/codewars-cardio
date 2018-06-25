function century(year) {
    return year % 100 !== 0 ? parseInt(year / 100 + 1) : parseInt(year / 100);
}

const centuryBest = year => Math.ceil(year/100);

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(89), 1, 'Testing for year 89');