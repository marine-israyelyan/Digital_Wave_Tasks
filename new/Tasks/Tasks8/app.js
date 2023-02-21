// 1․ Գրել ֆունկցիա, որը պարամետրով ստանում է n բնական թիվ և
// 1-3-ի դեպքում վերադարձնում է "Վատ",
// 4-6 - "Միջին"
// 7-8 - "Լավ"
// 9-10 - "Գերազանց"
// այլ դեպքերում "Սխալ գնահատական"։
function checkGrade(grade){
    switch (grade) {
        case 1:
        case 2:
        case 3:
            return 'Վատ';
        case 4:
        case 5:
        case 6:
            return 'Միջին';
        case 7:
        case 8:
            return 'Լավ';
        case 9:
        case 10:
            return 'Գերազանց';
        default:
            return 'Սխալ գնահատական'
    }
}
console.log(checkGrade(1))

// 2. Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում 0-ից n թվի
// միջև ընկած թվերի գումարը (n-ը ներառյալ)։
function getSum(n){
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i
    }
    return sum
}
console.log(getSum(5))

// 3․ Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում n թվի ֆակտորյալը։
function getFactorial(n){
    let factorial = 1;
    for (let i = 1; i <= n; i++){
        factorial *= i
    }
    return factorial
}
console.log(getFactorial(5))

// 4. Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n ամբողջ թիվ և վերադարձնում true n-ը պարզ թիվ լինելու դեպքում,
// հակառակ դեպքում false:
function isPrime(n){
    let prime = true;
    for (let i = 2; i < n; i++){
        if(!(n % i)){
            prime = false
        }
    }
    return prime
}
console.log(isPrime(7))

// 5․ Գրել ֆունկցիա, որը պարամետրով ստանում է (x1, y1) և (x2, y2) կետերի կոորդինատները և վերադարձնում 2 կետերի
// միջև եղած հեռավորությունը:
function calcDistance(x1, y1, x2, y2){
    let a = x2 > x1 ? x2 - x1 : x1 - x2;
    let b = y2 > y1 ? y2 - y1 : y1 - y2;
    return Math.sqrt(a**2 + b**2);
}
console.log(calcDistance(1,5,3,3))

// 6. Գրել ֆունկցիա, որը պարամետրով ստանում է arr զանգված և վերադարձնում նոր զանգված առանց կրկնվող տարրերի։
// օր․ [ 4, 4, 7, 8, 9, 5, 5, 6] --> [ 4, 7, 8, 9, 5, 6 ]:
function filterArr(arr){
    let newArr = [];
    for(let item of arr){
        if(!newArr.includes(item)){
            newArr.push(item)
        }
    }
    return newArr
}
console.log(filterArr([ 4, 4, 7, 8, 9, 5, 5, 6]))

// 7. https://edabit.com/challenge/8Qg78sf5SNDEANKti
function calcTotalLegs(chickens, cows, pigs){
    const legs = {
        chicken: 2,
        cow: 4,
        pig: 4
    }
    return chickens * legs.chicken + cows * legs.cow + pigs * legs.pig
}
console.log(calcTotalLegs(5, 2, 8))

// 8․ https://edabit.com/challenge/JesaFi5ntBEbGT8bu
function convertTime(hours, minutes){
    return hours * 3600 + minutes * 60
}
console.log(convertTime(1,3))

// 9․ https://edabit.com/challenge/vvuAkYEAArrZvmp6X
function bitwiseAND(n1, n2) {
    let a = n1.toString(2);
    let b = n2.toString(2);
    let length = a.length > b.length ? a.length : b.length;
    return `${a & b}`.padStart(length,'0');
}
function bitwiseOR(n1, n2) {
    let a = n1.toString(2);
    let b = n2.toString(2);
    let length = a.length > b.length ? a.length : b.length;
    return `${a | b}`.padStart(length,'0');
}
function bitwiseXOR(n1, n2) {
    let a = n1.toString(2);
    let b = n2.toString(2);
    let length = a.length > b.length ? a.length : b.length;
    return `${a ^ b}`.padStart(length,'0');
}
console.log(bitwiseAND(6,23))
console.log(bitwiseOR(6,23))
console.log(bitwiseXOR(6,23))

// 10. https://edabit.com/challenge/3kcrnpHk7krNZdnKK
function binary(n){
    return n.toString(2)
}
console.log(binary(5))

// 11. https://edabit.com/challenge/Q3n42rEWanZSTmsJm
function minMax(arr){
    let max = arr[0];
    let min = arr[0];
    for(let item of arr){
        max = item > max ? item : max;
        min = item < min ? item : min;
    }
    return [min, max]
}
console.log(minMax([1, 2, 3, 4, 5]))

// 12. https://edabit.com/challenge/xsi99TwpGyFC8KS6d
function numberSplit(n){
    if(n % 2){
        return [Math.floor(n/2), Math.ceil(n/2)]
    }
    return [n/2, n/2]
}
console.log(numberSplit(11))
