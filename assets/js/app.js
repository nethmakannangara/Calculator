console.log("Project - Calculator");

let inputs = []
let calculate_value = null
let previous_calculate_value = null;

let display_input_values = document.getElementById("display_input_values");
let display_final_value = document.getElementById("display_final_value");

function getBtnValue(btn_value) {

    if (btn_value === 'c') {
        inputs = [];
        display_input_values.innerText = ""
        display_final_value.innerText = ""
        calculate_value = null

    }
    else if (btn_value === '=') {
        calculateValue();
        display_input_values.innerText = ""
    }
    else {

        // console.log(0 === inputs.length);


        if ((btn_value === '+' || btn_value === '*' || btn_value === '/') && (0 === inputs.length)) {
            alert("Please enter a number first!!")
            return
        }

        if (null !== calculate_value) {
            if (calculate_value !== previous_calculate_value) {
                previous_calculate_value = calculate_value
                display_input_values.innerText = previous_calculate_value;
            }

        }

        if (saveInputValues(btn_value)){
            display_input_values.innerText += btn_value;
            display_final_value.innerText = ""
        }
    }
}

function saveInputValues(input_value) {
    let last_input_value = inputs[inputs.length - 1]

    if ((input_value === '+' || input_value === '-' || input_value === '*' || input_value === '/') && (last_input_value === '+' || last_input_value === '-' || last_input_value === '*' || last_input_value === '/')) {
        alert("Invalid input!!")
        return false
    }

    inputs.push(input_value);

    return true;
}

function calculateValue() {
    let num = null;
    let operator;


    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] !== '+' && inputs[i] !== '-' && inputs[i] !== '*' && inputs[i] !== '/') {

            if (null === num) {
                num = `${inputs[i]}`
            } else {
                num += `${inputs[i]}`
            }
        } else {


            if (null == operator) {
                calculate_value = Number(num)
                operator = inputs[i]


            } else {
                // console.log(calculate_value);

                switch (operator) {
                    case '+': {
                        calculate_value = calculate_value + Number(num)

                        break;
                    } case '-': {
                        calculate_value = calculate_value - Number(num)

                        break;
                    } case '*': {
                        calculate_value = calculate_value * Number(num)
                        break;
                    } case '/': {
                        if (Number(num) === 0) {
                            alert("You can't divide by zero!")
                            calculate_value = null
                            return
                        }
                        calculate_value = calculate_value / Number(num)
                        break;
                    }
                }

                operator = inputs[i]
                // console.log(operator);

            }
            num = null;

        }
    }

    switch (operator) {
        case '+': {
            calculate_value = calculate_value + Number(num)
            break;
        } case '-': {
            calculate_value = calculate_value - Number(num)
            break;
        } case '*': {
            calculate_value = calculate_value * Number(num)
            break;
        } case '/': {
            if (Number(num) === 0) {
                alert("You can't divide by zero")
                calculate_value = null
                return
            }
            calculate_value = calculate_value / Number(num)
            break;
        }
    }

    display_final_value.innerText = calculate_value
    num = null
}
