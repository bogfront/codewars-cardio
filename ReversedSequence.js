const reverseSeq = n => Array(n).fill(0).map((v, k) => n - k);

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);