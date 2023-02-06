let object = {
    1:{
        group: "Clothes",
        brand: {
            0: {
                brand_id: "12",
                brand_name: "Adidas"
            },
            1: {
                brand_id: "15",
                brand_name: "Zara",
            }

        }

    },
    2:{
        group: "Car",
        brand: {
            0: {
                brand_id: "43",
                brand_name: "Ferrari"
            },
            1: {
                brand_id: "51",
                brand_name: "BMW",
            }

        }

    }
}

let changeObjectStructur = (data)=>{
    let resArr = [];
    let res = {};
    for (let key in data){
        for(let k in  data[key].brand){
            data[key].brand[k].group = data[key].group;
            resArr.push(data[key].brand[k])
        }
    }
    for( let i = 0; i < resArr.length; i++ ){
        res[i] = resArr[i]
    }
    return res
}

console.log(changeObjectStructur(object))
