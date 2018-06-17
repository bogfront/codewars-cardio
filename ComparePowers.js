function comparePowers([b1, e1], [b2, e2]) {
    let d = Math.log(b2) * e2 - Math.log(b1) * e1;
    return (d > 0) - (d < 0);
}

console.log(comparePowers([98750, 3220],[40732, 20653]),-1)