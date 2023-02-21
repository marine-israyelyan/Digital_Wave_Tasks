// -100 ic 400 tverov masiv

function generateArr(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(Math.round(Math.random() * 500 - 100))
    }
    return arr;
}

console.log(generateArr(10));
