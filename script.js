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
// element = document.getElementById("num1");
// console.log(element);
// <!--------------------------------------------------------------------------------------------------------------->

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
function check_division() {
    var divison = document.getElementById("divison").value;
    let result_04 = document.getElementById("result_04");

    if (divison % 5 == 0 && divison % 11 == 0) {
        console.log("Number is divisible by 5 and 11");
        div = "Number is divisible by 5 and 11";
    } else {
        console.log("Number is not divisible by 5 and 11");
        div = "Number is not divisible by 5 and 11";
    }
    result_04.innerText = div;
}
// <!--------------------------------------------------------------------------------------------------------------->
// 5. Write a js program to check whether a number is even or odd.
function even_odd() {
    var ev_odd = document.getElementById("ev_odd").value;
    let result_05 = document.getElementById("result_05");

    if (ev_odd % 2 == 0) {
        console.log("Number is even");
        nim = "Number is even";
    } else {
        console.log("Number is odd");
        nim = "Number is odd";
    }
    result_05.innerText = nim;
}
// <!--------------------------------------------------------------------------------------------------------------->
// 6. Write a js program to check whether a year is leap year or not.
function leap_year() {
    var year = document.getElementById("year").value;
    let result_06 = document.getElementById("result_06");

    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        console.log(year + " is a leap year");
        yearrr = "leap year";
    } else {
        console.log(year + " is not a leap year");
        yearrr = " not leap year";
    }
    result_06.innerText = yearrr;
}

// <!--------------------------------------------------------------------------------------------------------------->
// 7. Write a js program to check whether a character is alphabet or not.
function char_checked() {
    var character = document.getElementById("character").value;
    let result_07 = document.getElementById("result_07");
    if (
        (character >= "a" && character <= "z") ||
        (character >= "A" && character <= "Z")
    ) {
        characterr = "alphabet";
    } else {
        characterr = "not an alphabet";
    }
    result_07.innerText = characterr;
}
// <!--------------------------------------------------------------------------------------------------------------->
// Write a js program to input any alphabet and check whether it is vowel or consonant.

function alpha_check() {
    var ch = document.getElementById("alphabet").value;
    let result_08 = document.getElementById("result_08");

    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        chraa = "vowel";
    } else if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
        chraa = "Vowel";
    } else {
        chraa = "constant";
    }
    result_08.innerText = chraa;
}

// <!--------------------------------------------------------------------------------------------------------------->
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
function characterr_check() {
    var chrr = document.getElementById("chr_chk").value;
    let result_09 = document.getElementById("result_09");

    if ((chrr >= "a" && chrr <= "z") || (chrr >= "A" && chrr <= "Z")) {
        chrr = "alphabet";
    } else if (chrr >= 0 || chrr <= 0) {
        chrr = "number";
    } else {
        chrr = "special character";
    }
    result_09.innerText = chrr;
}
// <!--------------------------------------------------------------------------------------------------------------->
// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
function char_case() {
    var chracterr = document.getElementById("check_case").value;
    let result_10 = document.getElementById("result_10");
    if (chracterr >= "a" && chracterr <= "z") {
        res_cse = "Lower Case";
        console.log("hdsd");
    } else if (chracterr >= "A" && chracterr <= "Z") {
        res_cse = "Upeer Case";
    } else {
        res_cse = "enter alphabets only";
    }
    result_10.innerText = res_cse;
}
// <!--------------------------------------------------------------------------------------------------------------->
// Write a js program to input week number and print week day.
function day_check() {
    var week_day = document.getElementById("week_day").value;
    let result_11 = document.getElementById("result_11");
    if (week_day == 1) {
        weakk = "Monday";
    } else if (week_day == 2) {
        weakk = "Tuesday";
    } else if (week_day == 3) {
        weakk = "Wednesday";
    } else if (week_day == 4) {
        weakk = "Thursday";
    } else if (week_day == 5) {
        weakk = "Friday";
    } else if (week_day == 6) {
        weakk = "Saturday";
    } else if (week_day == 7) {
        weakk = "Sunday";
    } else {
        weakk = "Enter Correct Day";
    }
    result_11.innerText = weakk;
}

// <!--------------------------------------------------------------------------------------------------------------->
// Write a js program to input month number and print number of days in that month.
function month_Days() {
    var month = document.getElementById("month").value;
    let result_12 = document.getElementById("result_12");

    if (month == 1) {
        daysss = "31 days";
    } else if (month == 2) {
        daysss = "28 or 29 days";
    } else if (month == 3) {
        daysss = "31 days";
    } else if (month == 4) {
        daysss = "30 days";
    } else if (month == 5) {
        daysss = "31 days";
    } else if (month == 6) {
        daysss = "30 days";
    } else if (month == 7) {
        daysss = "31 days";
    } else if (month == 8) {
        daysss = "31 days";
    } else if (month == 9) {
        daysss = "30 days";
    } else if (month == 10) {
        daysss = "31 days";
    } else if (month == 11) {
        daysss = "30 days";
    } else if (month == 12) {
        daysss = "31 days";
    } else {
        daysss = "Invalid input! Please enter month number between (1-12).";
    }
    result_12.innerText = daysss;
}

// <!--------------------------------------------------------------------------------------------------------------->
// 13. Write a js program to count total number of notes in given amount.
function note_check() {
    var amount = document.getElementById("notes").value;
    let result_13 = document.getElementById("result_13");
    let notes = [5000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];
    let noteCounter = Array(10).fill(0);

    for (let i = 0; i < 10; i++) {
        if (amount >= notes[i]) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];
        }
    }

    for (let i = 0; i < 10; i++) {
        if (noteCounter[i] != 0) {
            data = data + `<tr><td>${notes[i]} ${":"} ${noteCounter[i]} </td></tr>`;
            result_13.innerHTML = notes[i] + " : " + noteCounter[i] + "<br>";
        }
    }
    result_13.innerHTML = data;
}

// <!--------------------------------------------------------------------------------------------------------------->
// 14. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer.
//     <br>Calculate percentage and grade according to following:
//     <br> Percentage >= 90% : Grade A
//     <br>Percentage >= 80% : Grade B
//     <br> Percentage >= 70% : Grade C
//     <br>Percentage >= 60% : Grade D
//     <br> Percentage >= 40% : Grade E
//     <br>Percentage <= 40% : Grade F <br>

function res_check() {
    var Physics = parseInt(document.getElementById("book1").value);
    var Chemistry = parseInt(document.getElementById("book2").value);
    var Biology = parseInt(document.getElementById("book3").value);
    var Mathematics = parseInt(document.getElementById("book4").value);
    var Computer = parseInt(document.getElementById("book5").value);

    if (
        Physics > 100 ||
        Chemistry > 100 ||
        Biology > 100 ||
        Mathematics > 100 ||
        Computer > 100
    ) {
        alert("Enter correct marks less then 100");
    } else {
        var obtain = Physics + Chemistry + Biology + Mathematics + Computer;
        document.getElementById("obtain").innerText = obtain;
        var per = (obtain / 500) * 100;
        document.getElementById("per").innerText = per + "%";
        if (per >= 90) {
            document.getElementById("Grade").innerText = "Grade A";
        } else if (per >= 80) {
            document.getElementById("Grade").innerText = "Grade B";
        } else if (per >= 70) {
            document.getElementById("Grade").innerText = "Grade C";
        } else if (per >= 60) {
            document.getElementById("Grade").innerText = "Grade D";
        } else if (per >= 40) {
            document.getElementById("Grade").innerText = "Grade E";
        } else {
            document.getElementById("Grade").innerText = "Grade F";
        }
    }
}
// ----------------------------------------------------------------------------------------->
// 15. Write a js program to input basic salary of an employee and calculate its Gross salary according to
// following:
// <br>
// <br>Basic Salary less then equal 10000 : HRA=20%, DA=80%
// <br>Basic Salary less then or equal 20000 : HRA=25%, DA=90%
// <br>Basic Salary > 20000: HRA = 30%, DA = 95%

function salary_check() {
    var basic = parseInt(document.getElementById("salary").value);
    let result_14 = document.getElementById("result_14");
    if (basic <= 10000) {
        da = basic * 0.8;
        hra = basic * 0.2;
        gross = parseInt(basic + hra + da);
        document.getElementById("result_14").innerText = gross;
    } else if (basic <= 20000) {
        da = basic * 0.9;
        hra = basic * 0.25;
        gross = parseInt(basic + hra + da);
        document.getElementById("result_14").innerText = gross;
    } else {
        da = basic * 0.95;
        hra = basic * 0.3;
        gross = parseInt(basic + hra + da);
        document.getElementById("result_14").innerText = gross;
    }
}

// ----------------------------------------------------------------------------------------->
// 16. Write a js program to input electricity unit charges and calculate total electricity bill according
// to the given condition:
// <br>For first 50 units Rs. 0.50/unit
// <br>For next 100 units Rs. 0.75/unit
// <br>For next 100 units Rs. 1.20/unit
// <br>For unit above 250 Rs. 1.50/unit
// <br>An additional surcharge of 20% is added to the bill
function units_check() {
    var units = document.getElementById("units").value;
    let result_15 = document.getElementById("result_15");

    if (units <= 50) {
        pricee = units * 0.5;
        final_price = pricee + 20 / 100;
        document.getElementById("result_15").innerText = final_price;
    } else if (units <= 100) {
        pricee = units * 0.75;
        final_price = pricee + 20 / 100;
        document.getElementById("result_15").innerText = final_price;
    } else if (units >= 100 || units <= 250) {
        pricee = units * 1.2;
        final_price = pricee + 20 / 100;
        document.getElementById("result_15").innerText = final_price;
    } else {
        pricee = units * 1.5;
        final_price = pricee + 20 / 100;
        document.getElementById("result_15").innerText = final_price;
    }
}
// ----------------------------------------------------------------------------------------->