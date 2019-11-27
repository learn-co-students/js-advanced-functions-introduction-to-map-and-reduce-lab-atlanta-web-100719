// Your code here
function mapToNegativize(numbers) {
    const arr = [];
    for (const number of numbers) {
        arr.push(-1 * number);
    }
    return arr;
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(numbers) {
    const arr = [];
    for (const number of numbers) {
        arr.push(2 * number);
    }
    return arr;
}

function mapToSquare(numbers) {
    const arr = [];
    for (const number of numbers) {
        arr.push(number ** 2);
    }
    return arr;
}

function reduceToTotal(numbers, startingPoint = 0) {
    for (const number of numbers) {
        startingPoint += number;
    }
    return startingPoint;
}

function reduceToAllTrue(values) {
    let result = true;
    for (const value of values) {
        result = (result && Boolean(value))
    }
    return result;
}

function reduceToAnyTrue(values) {
    let result = false;
    for (const value of values) {
        if (Boolean(value))
            result = true;
    }
    return result;
}