// OUTPUT

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

console.log(result);
