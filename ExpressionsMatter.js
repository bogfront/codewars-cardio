function expressionMatter(a, b, c) {
    let answer = [
        a + b + c,
        a + b * c,
        a * b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c
    ];
    return Math.max.apply(null, answer), answer;
}

console.log(expressionMatter(1, 1, 1), 6);

function expressionMatterBest(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}