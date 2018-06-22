function correct(string) {
    return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');
}

console.log(correct("ISO1F-RUDYARD K1PL1NG"),"IF-RUDYARD KIPLING");