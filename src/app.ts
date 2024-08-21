

const getName = (name : string)=>{

    return name;
}

const AddTwoNumbers = (num1:number = 0,num2 :number = 0) => {

    return num1 + num2;
}

const ConcatStringAndAmount = (message : string,result : number) =>{
    return message + result;
}

const my_name : string = "Elmer Toledo"
const sum_amount  = AddTwoNumbers(5,2);


console.log(getName(my_name));
console.log(sum_amount);
console.log(ConcatStringAndAmount("The sum is ",sum_amount));
