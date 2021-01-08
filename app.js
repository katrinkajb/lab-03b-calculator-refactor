// Add
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

// initialize state

// console.log(addInput1);
// console.log(addInput2);
// console.log(addButton);
// console.log(addResults);

// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    // console.log('Clicked');
    // console.log(addInput1.value);
    // console.log(addInput2.value);
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;

    const addTotal = addValue1 + addValue2;
    console.log(addTotal);
    addResults.textContent = "The total is " + addTotal;
  })

//   Subtract
const subtractInput1 = document.getElementById('subtract-input1');
const subtractInput2 = document.getElementById('subtract-input2');
const subtractButton = document.getElementById('subtract-button');
const subtractResults = document.getElementById('subtract-results');

// initialize state

// console.log(subtractInput1);
// console.log(subtractInput2);
// console.log(subtractButton);
// console.log(subtractResults);

// set event listeners to update state and DOM

subtractButton.addEventListener('click', () => {
    // console.log('Clicked');
    // console.log(subtractInput1.value);
    // console.log(subtractInput2.value);
    const subtractValue1 = subtractInput1.valueAsNumber;
    const subtractValue2 = subtractInput2.valueAsNumber;

    const subtractTotal = subtractValue1 - subtractValue2;
    // console.log(subtractTotal);
    subtractResults.textContent = "The total is " + subtractTotal;
  })

//   Multiply
const multiplyInput1 = document.getElementById('multiply-input1');
const multiplyInput2 = document.getElementById('multiply-input2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResults = document.getElementById('multiply-results');

// initialize state

// console.log(multiplyInput1);
// console.log(multiplyInput2);
// console.log(multiplyButton);
// console.log(multiplyResults);

// set event listeners to update state and DOM

multiplyButton.addEventListener('click', () => {
    // console.log('Clicked');
    // console.log(multiplyInput1.value);
    // console.log(multiplyInput2.value);
    const multiplyValue1 = multiplyInput1.valueAsNumber;
    const multiplyValue2 = multiplyInput2.valueAsNumber;

    const multiplyTotal = multiplyValue1 * multiplyValue2;
    // console.log(multiplyTotal);
    multiplyResults.textContent = "The total is " + multiplyTotal;
  })

//   Divide
const divideInput1 = document.getElementById('divide-input1');
const divideInput2 = document.getElementById('divide-input2');
const divideButton = document.getElementById('divide-button');
const divideResults = document.getElementById('divide-results');

// initialize state

// console.log(divideInput1);
// console.log(divideInput2);
// console.log(divideButton);
// console.log(divideResults);

// set event listeners to update state and DOM

divideButton.addEventListener('click', () => {
    // console.log('Clicked');
    // console.log(divideInput1.value);
    // console.log(divideInput2.value);
    const divideValue1 = divideInput1.valueAsNumber;
    const divideValue2 = divideInput2.valueAsNumber;

    const divideTotal = divideValue1 / divideValue2;
    // console.log(divideTotal);
    divideResults.textContent = "The total is " + divideTotal;
  })