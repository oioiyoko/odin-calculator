function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    return (a / b);
}

let input1 = "";
let input2 = "";
let operator = "";
let result;
let number = "";
const keypad = document.querySelector(".buttons");
const bigLetter = document.querySelector(".result");
const smallLetter = document.querySelector(".input");

keypad.addEventListener('click', (event)=> {
    let target = event.target;
        if (target.classList.contains("number")) {
            if(target.id == "period") {
                number = number + ".";
            }
            else {
                number = number + target.id;
            }
            smallLetter.textContent = number;
        }

        else if (target.classList.contains("operator")) {
            smallLetter.textContent = smallLetter.textContent + " " + getOperator(target);

            if (!input1) {
                input1 = number;
            }
            else if (!input2){
                input2=number;

                if (operator === "add") {
                    result = add(+input1, +input2);
                }
                else if (operator === "subtract") {
                    result = subtract(+input1, +input2);
                }
                else if (operator === "multiply") {
                    result =  multiply(+input1, +input2);
                }
                else if (operator === "divide") {
                    result = divide(+input1, +input2);
                }
                input1 = result;
                input2 = null;
                bigLetter.textContent = result;
            }
            operator = target.id;
            number = "";
        }

        else if (target.id === "clear") {
            input1 = "";
            input2 = "";
            operator = "";
            number = "";
            bigLetter.textContent = "";
            smallLetter.textContent = "";
        }
        else if (target.id === "delete") {
            if (smallLetter.textContent.charAt(-1) === "+"
            || smallLetter.textContent.charAt(-1) === "-"
            || smallLetter.textContent.charAt(-1) === "X"
            || smallLetter.textContent.charAt(-1) === "%") {
                smallLetter.textContent = smallLetter.textContent.slice(0, -1);
                operator = null;
            }
            else {
                number = number.slice(0, -1);
                smallLetter.textContent = smallLetter.textContent.slice(0, -1);
            }
        }

        else if (target.id === "equals") {
            console.log("EQUALS");
            input2=number;
            if (operator === "add") {
                result = add(+input1, +input2);
            }
            else if (operator === "subtract") {
                result = subtract(+input1, +input2);
            }
            else if (operator === "multiply") {
                result =  multiply(+input1, +input2);
            }
            else if (operator === "divide") {
                result = divide(+input1, +input2);
            }
            input1 = result;
            input2 = null;
            bigLetter.textContent = result;
        }

    })

    function getOperator(target) {
        if (target.id === "add") {
            return "+"
        }
        else if (target.id === "subtract") {
            return "-"
        }
        else if (target.id === "multiply") {
            return "X"
        }
        else if (target.id === "divide") {
            return "%"
        }
    }