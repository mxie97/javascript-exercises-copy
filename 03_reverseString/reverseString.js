const reverseString = function(string) {
    myArray = [];
    myString = '';
    for (let letter of string) {
        myArray.push(letter);
    }
    for (let i = string.length-1; i >= 0; i--) {
        myString += myArray[i];
    }
    return myString;
};

// Do not edit below this line
module.exports = reverseString;
