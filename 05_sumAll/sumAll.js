const sumAll = function(...rest) {
    // return "ERROR" if any parameter is: not number, negative
    for (const item of rest) 
        if (typeof item != "number" || item < 0) 
            return "ERROR";

    let min = Math.min(...rest);
    let max = Math.max(...rest);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
