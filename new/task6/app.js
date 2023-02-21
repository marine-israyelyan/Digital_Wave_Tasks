// masivi tveri gumar@

function getSumOfArrItems(arr){
    let sum = 0;
    for(let item of arr){
        if(item === 13){
            break
        }
        sum += item;
    }
    return sum;
}

console.log(getSumOfArrItems([10,15,13,30]));
