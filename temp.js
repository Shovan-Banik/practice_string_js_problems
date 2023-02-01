//swap of value

// wrong method
// var num1=20;
// var num2=30;

// num1=num2;
// num2=num1;
// console.log(num1,num2);


//temp method
var num1=20;
var num2=30;

var temp=num1;
num1=num2;
num2=temp;
console.log(num1,num2);



// Destructuring method

var a=10;
var b=15;
[a,b]=[b,a];
console.log(a,b);