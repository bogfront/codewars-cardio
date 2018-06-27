const countSheep = num => {
    let answer = '';
    for (let i = 1; i <= num; i++) {
        answer += `${i} sheep...`
    }
    return answer;
};

countSheepBest=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``;