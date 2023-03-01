const removeFromArray = function(array, arg1) {
    const newArray = array.filter(function (arg) { {
            return arg1 !== arg;
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
