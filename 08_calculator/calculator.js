const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function(num, times) {
  if (times === 0)
    return 1;

  let total = 1;
  for (let i = 0; i < times; i++) {
    total *= num;
  }
	return total;
};

const factorial = function(fact) {
	let total = 1;
  for (let i = 1; i <= fact; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
