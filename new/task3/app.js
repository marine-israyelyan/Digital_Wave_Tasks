// bolor andamner@ 1 en kam 4

function isAllOneOrFour(arr){
    let allOneOrFour = true;
    for(let item of arr){
       if(item !== 1 && item !== 4){
           allOneOrFour = false;
           break;
       }
    }
    console.log(allOneOrFour)
}

isAllOneOrFour([1,4,1,1,1,4,1,4,4,3]);
