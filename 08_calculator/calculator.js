const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current, 1)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let factorial = 1;
	for (let i = a; i > 1; i--) {
    factorial*= i;
  }
  return factorial;
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
