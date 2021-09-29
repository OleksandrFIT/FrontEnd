let arr = [-32, -8, -15, -7, -2, -434, -5, 0, 1, 8, 3, 10, 2, 7, 5, 12, 245, 21, 65, 71, 24];

let arrPositive = arr.filter(function (number) {
    return number >= 0;
});
console.log('Array with positive numbers: ' + arrPositive);

let arrNegative = arr.filter(function (number) {
    return number < 0;
});
console.log('Array with negative numbers: ' + arrNegative);



