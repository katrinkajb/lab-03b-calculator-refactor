import {addClick, subtractClick, multiplyClick, divideClick} from './handlers.js'

// Add
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addClick);

//   Subtract
const subtractButton = document.getElementById('subtract-button');
subtractButton.addEventListener('click', subtractClick);

//   Multiply
const multiplyButton = document.getElementById('multiply-button');
multiplyButton.addEventListener('click', multiplyClick);

//   Divide
const divideButton = document.getElementById('divide-button');
divideButton.addEventListener('click', divideClick);