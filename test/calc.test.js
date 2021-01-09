// IMPORT MODULES under test here:
import { getAdd, getSubtract, getMultiply, getDivide } from '../utils.js';

const test = QUnit.test;

// Add tests
test('return 3 when given 1 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getAdd(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});

test('return -4 when given 2 and -6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = -4;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getAdd(2, -6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});


// Subtract tests
test('return 2 when given 7 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getSubtract(7, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});

test('return -3 when given 1 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = -3;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getSubtract(1, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});


// Multiply tests
test('return 20 when given 4 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getMultiply(4, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});

test('return 8 when given 4 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getMultiply(4, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});


// Divide tests
test('return 2 when given 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getDivide(10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});
test('return 3 when given 18 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResult = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
const actual = getDivide(18, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedResult);
});