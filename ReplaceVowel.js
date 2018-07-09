function replace(s){
    return s.replace(/[aeiou]/ig, () => '!')
}

console.log(replace("ABCDE") , "!BCD!");