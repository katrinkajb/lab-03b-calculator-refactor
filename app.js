import {addClick, subtractClick, multiplyClick, divideClick} from './handlers.js'

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addClick);

const subtractButton = document.getElementById('subtract-button');
subtractButton.addEventListener('click', subtractClick);

const multiplyButton = document.getElementById('multiply-button');
multiplyButton.addEventListener('click', multiplyClick);

const divideButton = document.getElementById('divide-button');
divideButton.addEventListener('click', divideClick);