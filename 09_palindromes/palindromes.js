
const palindromes = function (str) {
    let array = str.split("");
    array = array.filter(item => item.toLowerCase() != item.toUpperCase()).map(item => item.toLowerCase())
    let isPalindrome = true;
    if (array.length % 2 === 0) {
        for (let i=1; i<(array.length/2); i++) {
            if (array[i-1] != array[array.length-i]) {
                isPalindrome = false;
            }
        }
    } else {
        for (let i=1; i<((array.length-1)/2); i++) {
            if (array[i-1] != array[array.length-i]) {
                isPalindrome = false;
            }
        }
    }; 
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
