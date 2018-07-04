function find_average(array) {
    return array.reduce((sum, item) => sum + item) / array.length
}

console.log(find_average([1,2,3]), 2);