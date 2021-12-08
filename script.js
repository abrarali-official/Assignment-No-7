//                                       1st program
// program to find the largest among two numbers
let num = max(150, 50)
    // console.log(num)
document.getElementById("dom").innerHTML = num;

function max(num1, num2) {
    if (num1 > num2)
        return num1
    return num2
}
//                                         2nd program
// program to find the largest among three numbers

// if you to take input from the user then use these three parsefloats
var num1 = 200 //parseFloat(prompt("Enter first number: "));
var num2 = 150 //parseFloat(prompt("Enter second number: "));
var num3 = 55 //parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}
document.getElementById("demo").innerHTML = largest; // display the result

//                                       3rd program
// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    document.getElementById("dom2").innerHTML = "The number is positive"
        // console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
    document.getElementById("dom2").innerHTML = "The number is zero"
        // console.log("The number is zero");
}

// if number is less than 0
else {
    document.getElementById("dom2").innerHTML = "The number is negative"
        // console.log("The number is negative");
}