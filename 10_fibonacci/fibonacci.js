const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    } 
    let arr = [1, 1];
    let result = 1;
    for (let i=2; i<number; i++) {
        result = arr[arr.length-1]+arr[arr.length-2];
        arr.push(result);
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
