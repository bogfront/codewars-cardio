const fakeBin = x =>
    x.split('').map(item =>
        parseInt(item) < 5 ? 0 : 1
    ).join('');


console.log(fakeBin('45385593107843568'), '01011110001100111');