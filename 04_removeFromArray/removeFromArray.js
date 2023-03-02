const removeFromArray = function(array, ...multipleArgs) {
    let newArray = array;
    for (let arg of multipleArgs) {
        newArray = newArray.filter(function (argument) {
            return arg !== argument;
        });
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
