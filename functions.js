
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