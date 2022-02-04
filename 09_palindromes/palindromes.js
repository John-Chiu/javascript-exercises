const palindromes = function (str) {
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (!isLetter(str[l]))
            l++;
        else if (!isLetter(str[r]))
            r--;
        // check if they are same letter, ignore case
        else if (str[l].toUpperCase() === str[r].toUpperCase()) {
            l++;
            r--;
        } else
            return false;
    }
    return true;
};

function isLetter(ch) {
    return ch.toLowerCase() !== ch.toUpperCase();
}

// Do not edit below this line
module.exports = palindromes;
