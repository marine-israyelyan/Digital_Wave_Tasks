// 1. Զանգվածով ստանալ վերը նշված օբյեկտի key-երը
// 2. Զանգվածով ստանալ վերը նշված օբյեկտի value-ները

const obj = {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
};
const keys = [];
const values = [];

for(let key in obj){
    keys.push(key)
    values.push(obj[key])
}
console.log(keys, values)

// 3․ ['author', 'title', 'readingStatus'] և ['Bill Gates', 'The Road Ahead', true] զանգվածներից ստանալ օբյեկտ, որտեղ key-երը
// առաջին զանգվածի էլեմենտներն են, իսկ value-ները 2րդ զանգվածի։

const arrKeys = ['author', 'title', 'readingStatus'];
const arrValues = ['Bill Gates', 'The Road Ahead', true];

let newObj = {};

for(let i = 0; i < arrKeys.length; i++){
    newObj[arrKeys[i]] = arrValues[i]
}
console.log(newObj)

// 4. Սորտավորել զանգվածը ըստ յուր․ օբյեկտի libraryId-ի։

let library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
]

library = library.sort((a, b) => {
    return a.libraryID - b.libraryID;
});

console.log(library)

// 5․ Գրել ֆունկցիա, որը կջնջի զանգվածում եղած null, 0, '', "", undefined, false էլեմենտները

let arr = [NaN, 0, 15, false, -22, '', undefined, 47,  null];

function deleteFromArr(arr){
    let newArr = [];
    for(let item of arr){
        if(item || (isNaN(item) && item !== undefined)){
            newArr.push(item)
        }
    }
    return newArr
}

arr = deleteFromArr(arr);
console.log(arr);
