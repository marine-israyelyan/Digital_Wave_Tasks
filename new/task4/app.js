// 1-ic 30 tveri qarakusineri masiv

function getPowArr(){
    let arr = [];
    for(let i = 1; i <= 30; i++){
        arr.push(i**2)
    }
    return arr;
}

console.log(getPowArr());
