const removeFromArray = function(array, ...multipleArgs) {
    return array.filter(val => !multipleArgs.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
