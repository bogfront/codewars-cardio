function riders (stations) {
    let count = 1;
    let sum = 0;
    stations.map(item => {
        if(sum + item < 100) {
            sum += item;
            console.log(item, sum, count)
        } else {
            count++;
            sum = item
        }
    });
    return count;
}

console.log(riders([17,19,37,26,22,30,32,7]));
