let countBits = function(n) {
    return parseInt((n).toString(2).split('').reduce((a, b) => parseInt(a) + parseInt(b)));
};

countBits2 = n => n.toString(2).split('0').join('').length;

countBits(7);