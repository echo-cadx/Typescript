"use strict";
const getName = (name) => {
    return name;
};
const AddTwoNumbers = (num1 = 0, num2 = 0) => {
    return num1 + num2;
};
const ConcatStringAndAmount = (message, result) => {
    return message + result;
};
const my_name = "Elmer Toledo";
const sum_amount = AddTwoNumbers(5, 2);
console.log(getName(my_name));
console.log(sum_amount);
console.log(ConcatStringAndAmount("The sum is ", sum_amount));
