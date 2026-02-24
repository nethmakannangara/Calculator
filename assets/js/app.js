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
        
    }
    else if (btn_value === '=') {
        calculateValue();
        display_input_values.innerText = ""
    }
    else {
        if (null !== calculate_value) {
            if (calculate_value !== previous_calculate_value) {
                previous_calculate_value = calculate_value
                display_input_values.innerText = previous_calculate_value;
            }
            
        }
        display_input_values.innerText += btn_value;
        saveInputValues(btn_value)
    }
}

function saveInputValues(input_value) {
    inputs.push(input_value);
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
                console.log(operator);

            } else {
                // console.log(calculate_value);

                switch (operator) {
                    case '+': {
                        calculate_value = calculate_value + Number(num)
                        console.log(calculate_value);

                        break;
                    } case '-': {
                        calculate_value = calculate_value - Number(num)
                        console.log(calculate_value);

                        break;
                    } case '*': {
                        calculate_value = calculate_value * Number(num)
                        break;
                    } case '/': {
                        calculate_value = calculate_value / Number(num)
                        console.log(calculate_value);
                        break;
                    }
                }

                operator = inputs[i]
                console.log(operator);

            }
            num = null;

        }
    }

    switch (operator) {
        case '+': {
            calculate_value = calculate_value + Number(num)
            console.log(calculate_value);

            break;
        } case '-': {
            calculate_value = calculate_value - Number(num)
            console.log(calculate_value);

            break;
        } case '*': {
            calculate_value = calculate_value * Number(num)
            console.log(calculate_value);

            break;
        } case '/': {
            calculate_value = calculate_value / Number(num)
            console.log(calculate_value);
            break;
        }
    }

    display_final_value.innerText = calculate_value
    num = null
}
