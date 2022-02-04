const fibonacci = function(th) {
    if (th < 0)
        return "OOPS";

    if (th == 0)
        return 0;
    if (th == 1)
        return 1;

    let num1 = 0;
    let num2 = 1;
    let num3;
    for (let i = 1; i < th; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
