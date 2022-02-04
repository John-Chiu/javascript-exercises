const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        const aAge = getAge(a);
        const bAge = getAge(b);
        return aAge - bAge;
    });
    return arr[arr.length - 1];
};

function getAge(person) {
    let age;
    if ("yearOfDeath" in person)
        age = person.yearOfDeath - person.yearOfBirth;
    else
        age = new Date().getFullYear() - person.yearOfBirth;
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
