const sumAll = function(int1, int2) {
    if (int1 > 0 && int2 > 0 && parseInt(int1)===int1 && parseInt(int2)===int2) {
        if (int1 > int2) {
            let int3 = int1;
            int1 = int2;
            int2 = int3;
        }
        let result = 0;
        let currentInteger = int1;
        while (currentInteger <= int2) {
            result += currentInteger;
            currentInteger++;
        };
        return result; 
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
