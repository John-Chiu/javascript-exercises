const removeFromArray = function(arr, ...rest) {
    for (const target of rest) {
        arr = arr.filter(item => item !== target);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
