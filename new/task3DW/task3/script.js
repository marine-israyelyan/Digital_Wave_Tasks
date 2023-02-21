// 7.	Declare variable. Initialize it with the value, which shows 
// temperature in degrees Celsius. Print its equivalent in degrees 
// Fahrenheit. To convert temperatures 	in degrees Celsius to 
// Fahrenheit use the following formula: °C * 1.8 +32 = °F .
 let celsius = 10;
 let fahren = celsius * 1.8 + 32;
    console.log(fahren);



// 8.	Given two numbers print 1 if one of them is divisible by the 
// other one, otherwise print 0.
 let num1 = 8;
 let num2 = 4;

if (num1 % num2) {
     console.log(0)
} else {
     console.log(1)
 }




// Given three numbers. Find the maximum one.
 let number1 = 80;
 let number2 = 18;
 let number3 = 79;

if (number1 > number2 && number1 > number3) {
     console.log(number1)
 } else if (number2 > number1 && number2 > number3) {
     console.log(number2)
 } else if (number3 > number2 && number3 > number1) {
     console.log(number3)
 }


//14.  	Print all numbers between 1 and 10.
 for (i = 1; i <= 10; i++) {
     console.log(i)
 }




//15.	Print all numbers between 1 and 10 except 6.
 for (i = 1; i <= 10; i++) {
     if (i === 6) {
        continue;
     }
    console.log(i)
 }



//16.	Print all even numbers between 1 and 10.
 for (let i = 1; i <= 10; i++) {
     if (i % 2 === 0) {
        console.log(i);
     }
 }


// Calculate the sum of all numbers between 1 and 10 (using loop).
 let sum = 0;
 for (let i = 1; i <= 10; i++) {
        sum += i;
 }
 console.log(sum);



//Calculate the sum of all numbers between 1 and 10 except 8.
 let sum1 = 0;
 for (let i = 1; i <= 10; i++) {
     if (i === 8) {
         continue
     }
      sum1 += i;
 }
 console.log(sum1);

//17.Calculate the sum of all odd numbers between 1 and 10.
 let sum2 = 0;
 for (let i = 1; i <= 10; i++) {
     if (i % 2 === 1) {
         sum2 += i;
     }
 }
 console.log(sum2);


//Calculate the sum of squares of all numbers between 1 and 10.
 let sum3 = 0;
 for (let i = 0; i <= 10; i++) {
      sum3 += i ** 2;
 }
 console.log(sum3);



// Given five numbers as input. Calculate and print 
// the average of the numbers. 

let inputElem = document.getElementById('number_input');
let numArray = [];

function addNumber(){
    numArray.push(+inputElem.value);
    inputElem.value = '';
}

function calculateValue(){
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i]
    }
    console.log(sum/numArray.length);
    numArray = [];
}