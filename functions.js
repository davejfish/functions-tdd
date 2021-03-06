
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function minutesToSeconds(minutes) {
    return minutes * 60;
}

export function triangleArea(base, height) {
    return (base * height) / 2;
}

export function lessThanHundred(num1, num2) {
    if (add(num1, num2) < 100) {
        return true;
    } else {
        return false;
    }
}

export function evenOrOdd(num1) {
    const sum = num1 % 2;
    
    if (sum === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

export function rockSiscorsPaper(p1, p2) {
    if ((p1 === 'rock') && (p2 === 'scissors')) {
        return 'player 1 wins';
    } else if ((p1 === 'rock') && (p2 === 'paper')) {
        return 'player 2 wins';
    } else {
        return 'draw';
    }
}

export function firstLastMiddle(first, last, middle) {
    if (middle === undefined) {
        return `${first} ${last}`;
    } else {
        return `${first} ${middle} ${last}`;
    }
}

export function makeArray(name, type, age, food, toys) {
    let arr = {};
    arr.name = name;
    arr.type = type;
    arr.age = age;
    arr.food = food;
    arr.toys = toys;

    return arr;
}

export function totalOfNumbers(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

export function petNameArray(pet1, pet2, pet3) {
    let arr = [];
    arr.push(pet1);
    arr.push(pet2);
    arr.push(pet3);
    return arr;
}

export function numberOfCats(arr) {
    let result = 0;
    for (let i of arr) {
        if (i === 'cat') {
            result += 1;
        }
    }
    return result;
}

export function numberOfAnimal(arr, animal) {
    let result = 0;
    for (let i of arr) {
        if (i === animal) {
            result += 1;
        }
    }
    return `${result} ${animal}'s`;
}

export function numberOfDays(month) {
    var days = new Date();
    let year = days.getFullYear();
    return new Date(year, month, 0).getDate();
}