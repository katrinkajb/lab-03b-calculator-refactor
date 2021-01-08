import {getAdd, getSubtract, getMultiply, getDivide} from './utils.js'


// Add
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addResults = document.getElementById('add-results');

export function addClick() {
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;

    const sum = getAdd(addValue1, addValue2);
    addResults.textContent = "The total is " + sum;
}

// Subtract
const subtractInput1 = document.getElementById('subtract-input1');
const subtractInput2 = document.getElementById('subtract-input2');
const subtractResults = document.getElementById('subtract-results');

export function subtractClick() {
    const subtractValue1 = subtractInput1.valueAsNumber;
    const subtractValue2 = subtractInput2.valueAsNumber;

    const minus = getSubtract(subtractValue1, subtractValue2);
    subtractResults.textContent = "The total is " + minus;
}

// Multiply
const multiplyInput1 = document.getElementById('multiply-input1');
const multiplyInput2 = document.getElementById('multiply-input2');
const multiplyResults = document.getElementById('multiply-results');

export function multiplyClick() {
    const multiplyValue1 = multiplyInput1.valueAsNumber;
    const multiplyValue2 = multiplyInput2.valueAsNumber;

    const times = getMultiply(multiplyValue1, multiplyValue2);
    multiplyResults.textContent = "The total is " + times;
}

// Divide
const divideInput1 = document.getElementById('divide-input1');
const divideInput2 = document.getElementById('divide-input2');
const divideResults = document.getElementById('divide-results');

export function divideClick() {
    const divideValue1 = divideInput1.valueAsNumber;
    const divideValue2 = divideInput2.valueAsNumber;

    const divi = getDivide(divideValue1, divideValue2);
    divideResults.textContent = "The total is " + divi;
}