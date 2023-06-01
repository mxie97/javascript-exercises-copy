const findTheOldest = function(array) {
    array = array.map(function(item) {
        if (!item.yearOfDeath) {
            item.yearOfDeath = new Date().getFullYear() ;
        } return item;
    })
    array.sort( (a, b) => (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth) )
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
