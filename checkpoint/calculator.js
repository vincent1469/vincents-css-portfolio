// Creates variables for the numbers
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

// Creates variable for the operator
var operator = document.getElementById("operator");

// Creates variable for the button
var calculate = document.getElementById("calculate");

// Creates variable for the answer
var display = document.getElementById("display");

// Listens for the button press
calculate.addEventListener("click", function(){
    
    // Creates variables for the values that you entered
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;
    
    // Performs function
    if(op === "+"){
        display.innerHTML = number1 + number2;
    }
    if(op === "-"){
        display.innerHTML = number1 - number2;
    }
    if(op === "*"){
        display.innerHTML = number1 * number2;
    }
    if(op === "/"){
        display.innerHTML = number1 / number2;
    }
})