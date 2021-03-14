exports.min = function min(array) {
    if (array == undefined) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let minNumber = array[0];
    for (const value of array) {
        if (minNumber > value) {
            minNumber = value;
        }
    }
    return minNumber;
};

exports.max = function max(array) {
    if (array == undefined) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let maxNumber = array[0];
    for (const value of array) {
        if (maxNumber < value) {
            maxNumber = value;
        }
    }
    return maxNumber;
};

exports.avg = function avg(array) {
    if (array == undefined) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    let allNumbers = 0;
    for (const value of array) {
        allNumbers += value;
    }
    let avgNumber = allNumbers / array.length;
    return avgNumber;
};
