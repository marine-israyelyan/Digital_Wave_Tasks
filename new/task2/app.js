// stugel tiv@ parz e te voch

function isPrime(num){
    let prime = true;
    for(let i = 2; i < num; i++){
       if(num % i === 0){
           prime = false;
           break;
       }
    }
    console.log(prime)
}

isPrime(17);
