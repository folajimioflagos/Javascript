
let num1 = prompt("Enter a number");
let operator = prompt("Enter + - * /");
let num2 = prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;

if (operator == "+") {
    result = num1 + num2;
}

else if (operator == "-") {
    result = num1 - num2;
}

else if (operator == "*") {
    result = num1 * num2;
}

else if (operator == "/") {
    result = num1 / num2;
}

alert(result);


// let addResult = num1 + num2;
// let subResult = num1 - num2;
// let multiResult = num1 * num2;
// let divResult = num1 / num2;


// alert("The sum of " + num1 + " and " + num2 + " is: " + addResult);

// alert("The difference of " + num1 + "and " + num2 + " is: " + subResult);

// alert("The product of " + num1 + "and " + num2 + " is: " + multiResult);

// alert("The ratio of " + num1 + "and " + num2 + " is: " + divResult);


