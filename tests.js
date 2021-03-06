// IMPORT MODULES under test here:
import {
    add,
    subtract,
    minutesToSeconds,
    triangleArea,
    lessThanHundred,
    evenOrOdd,
    rockSiscorsPaper,
    firstLastMiddle,
    makeArray,
    totalOfNumbers,
    petNameArray,
    numberOfCats,
    numberOfAnimal,
    numberOfDays,
} from './functions.js';

const test = QUnit.test;

/* 
    Write a function that takes in two numbers
    and returns their sum (add)

    2, 5 --> 7

    Uses: Math operator
*/

test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 5;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two numbers
    and returns their difference (subtract)

    12, 8 --> 4

    Uses: Math operator
*/

test('subtracts two numbers', (expect) => {
    const x = 10;
    const y = 2;
    const expected = 8;

    const actual = subtract(x, y);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in number of minutes
    and returns the number of seconds

    10 --> 600

    Uses: Math operator(s)
*/

test('converts minutes to seconds', (expect) => {
    const minutes = 20;
    const expected = 1200;

    const actual = minutesToSeconds(minutes);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in the base and height
    of a triangle and returns its area (google it)

    5, 10 --> 25

    Uses: Math operator(s)
*/

test('find area of triangle', (expect) => {
    const base = 15;
    const height = 20;
    const expected = 150;

    const actual = triangleArea(base, height);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two 2 numbers
    and returns true if their sum is less than 100 or 
    false if it is greater than 100
    (feel free to use your add function from this function!)

    25, 13 --> true
    88, 60 --> false

    Uses: Comparison operator(s), if/else control flow
*/

test('check if total is more than 100', (expect) => {
    const num1 = 40;
    const num2 = 80;
    const expected = false;

    const actual = lessThanHundred(num1, num2);

    expect.equal(actual, expected);
});

test('check if total is less than 100', (expect) => {
    const num1 = 50;
    const num2 = 30;
    const expected = true;
    const actual = lessThanHundred(num1, num2);
    expect.equal(actual, expected);
});

/* 
    Write a function that takes a number and
    and returns 'even' if number is even, otherwise 'odd'.

    3 --> 'odd'
    6 --> 'even'

    Uses: modulo operator (remainder), comparison operator, if/else control flow
*/

test('check for odd num', (expect) => {
    const num1 = 11;
    const expected = 'odd';

    const actual = evenOrOdd(num1);

    expect.equal(actual, expected);
});

test('check for even number', (expect) => {
    const num1 = 10;
    const expected = 'even';
    const actual = evenOrOdd(num1);
    expect.equal(actual, expected);
});

/* 
    Write a function that takes two rock-paper-scissors throws
    and returns 'player 1' if first throw wins, 
    'player 2' if second throw wins, otherwise 'draw'.

    'rock', 'scissors' --> 'player 1'
    'rock', 'paper' --> 'player 2'
    'rock', 'rock' --> 'draw'
    
    Test all possible cases, but you can combine into tests like
    'player 1 wins', 'player 2 wins', 'players draw'

    Uses: comparison operator, if/else control flow
*/

test('RPS check for player 1 win', (expect) => {
    const p1 = 'rock';
    const p2 = 'scissors';
    const expected = 'player 1 wins';
    const actual = rockSiscorsPaper(p1, p2);
    expect.equal(actual, expected);
});

test('rps check for player 2 win', (expect) => {
    const p1 = 'rock';
    const p2 = 'paper';
    const expected = 'player 2 wins';
    const actual = rockSiscorsPaper(p1, p2);
    expect.equal(actual, expected);
});

test('rps check for draw', (expect) => {
    const p1 = 'rock';
    const p2 = 'rock';
    const expected = 'draw';
    const actual = rockSiscorsPaper(p1, p2);
    expect.equal(actual, expected);
});

/* 
    Write a function that takes in a first, last, and a third optional
    middle name parameter and returns a correctly formatted name

    'Ruth', 'Ginsburg' --> 'Ruth Ginsburg'
    'Ruth', 'Ginsburg', 'Bader' --> 'Ruth Bader Ginsburg'

    Uses: let variable with reassignment, string concatenation, 
    existence comparison operator, if control flow
*/

test('testing for full name', (expect) => {
    const first = 'dave';
    const last = 'fisher';
    const middle = 'joseph';
    const expected = 'dave joseph fisher';
    const actual = firstLastMiddle(first, last, middle);
    expect.equal(actual, expected);
});

test('testing for no middle name', (expect) => {
    const first = 'dave';
    const last = 'fisher';
    const expected = 'dave fisher';
    const actual = firstLastMiddle(first, last);
    expect.equal(actual, expected);
});

/* 
    Write a function that takes a name, type, age, food, and a toys array
    and returns an object like:

    {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    }

    Uses: object literal syntax, deepEqual assertion
*/

test('check array', (expect) => {
    const name = 'DK';
    const type = 'gorilla';
    const age = 'unknown';
    const food = 'bananas';
    const toys = ['tire swing', 'tires', 'barrels'];

    const expected = {
        name: 'DK',
        type: 'gorilla',
        age: 'unknown',
        food: 'bananas',
        toys: ['tire swing', 'tires', 'barrels']
    };
    
    const actual = makeArray(name, type, age, food, toys);
    expect.deepEqual(actual, expected);
});

/*
    Write a function that takes a number
    and returns the total of all counting numbers from 1 to the supplied number

    4 --> 10 (1 + 2 + 3 + 4)

    Uses: let variable with reassignment, math operator, for...i loop
*/

test('total sum of all numbers up to 4', (expect) => {
    const num = 4;
    const expected = 10;
    const actual = totalOfNumbers(num);
    expect.equal(actual, expected);
});

test('total sum of all numbers up to 10', (expect) => {
    const num = 10;
    const expected = 55;
    const actual = totalOfNumbers(num);
    expect.equal(actual, expected);
});

/*
    Write a function that takes name of three pets
    and returns an array of those names

    'felix', 'fido', 'alex' --> ['felix', 'fido', 'alex']

    Uses: array literal syntax, deepEqual assertion 
*/

test('make an array from 3 pet names', (expect) => {
    const pet1 = 'doug';
    const pet2 = 'bill';
    const pet3 = 'ted';
    const expected = ['doug', 'bill', 'ted'];
    const actual = petNameArray(pet1, pet2, pet3);
    expect.deepEqual(actual, expected);
});

/*
    Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and returns the count of cats

    ['cat', 'dog', 'bird', 'cat', 'cat'] --> 3

    Uses: let variable with reassignment, math operator, for...of loop
*/

test('count the number of cats', (expect) => {
    const arr = ['cat', 'cat', 'donkey', 'gorilla', 'cat'];
    const expected = 3;
    const actual = numberOfCats(arr);
    expect.equal(actual, expected);
});

test('count the number of cats again!', (expect) => {
    const arr = ['gorilla', 'not a cat', 'still not a cat', 'human'];
    const expected = 0;
    const actual = numberOfCats(arr);
    expect.equal(actual, expected);
});

/*
    BONUS: Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and the pet type to count and returns the count of that type

    ['cat', 'dog', 'bird', 'cat', 'cat'], 'cat' --> 3
    ['cat', 'dog', 'bird', 'cat', 'cat'], 'bird' --> 1

    Uses: let variable with reassignment, math operator, for...of loop, if control flow
*/

test('count the total number of an animal (gorilla) in an array', (expect) => {
    const arr = ['gorilla', 'fox', 'cat', 'mouse', 'gorilla', 'fox', 'fox', 'dog'];
    const animal = 'gorilla';
    const expected = '2 gorilla\'s';
    const actual = numberOfAnimal(arr, animal);
    expect.equal(actual, expected);
});

test('count the total number of an animal (fox) in an array', (expect) => {
    const arr = ['gorilla', 'fox', 'cat', 'mouse', 'gorilla', 'fox', 'fox', 'dog'];
    const animal = 'fox';
    const expected = '3 fox\'s';
    const actual = numberOfAnimal(arr, animal);
    expect.equal(actual, expected);
});

/*
    Write a function takes in a month as input (represented as a 
    number between 1 and 12) and returns the number of days in that month. 
    For now, assume there are always 28 days in Feb.
    
    1 --> 31
    2 --> 28
    4 --> 30

    Uses: if/else control flow

    Bonus 1: Check the value of the number passed into the function and
    print a message to the user if the value is not between 1 and 12
    
    Bonus 2: Update the function to accept an optional parameter year
    that checks if the year is a leap year, and returns the correct
    number of days for Feb. The default value for the year should be
    the current year
*/

test('number of days in a month (june)', (expect) => {
    const month = 6;
    const expected = 30;
    const actual = numberOfDays(month);
    expect.equal(actual, expected);
});

test('number of days in a month (february', (expect) => {
    const month = 2;
    const expected = 28;
    const actual = numberOfDays(month);
    expect.equal(actual, expected);
});