// Gtnel masivic dzaynavorov sksvox barer@

function getNewStringList(arr){
    let newArr = [];
    for(let item of arr){
        let vowelRegex = '^[aieouAIEOU].*'
        if(item.match(vowelRegex)) {
            newArr.push(item);
        }
    }
    return newArr;
}

let res = getNewStringList(['dfdsf','asfdf','gdsfd','cdzcd','efdsf','isvdv','ffff']);
console.log(res);
