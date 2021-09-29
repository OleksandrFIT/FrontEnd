
let arr = [-32, -8, -15, -7, -2, -434, -5, 0, 1, 8, 3, 10, 2, 7, 5, 12, 245, 21, 65, 71, 24];

arr.sort((a, b) => a - b);
arr.sort((a, b) => { return a - b });
console.log(arr);


arr.sort((a, b) => b - a);
arr.sort((a, b) => { return b - a });
console.log(arr);