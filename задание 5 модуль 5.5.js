// задание 5 модуль 5.5
// вариант 1
let arr = [1, 2, 3, 4, 3, 56, 4, 53, 8];

console.log(arr.length);

let result = arr.map(function(item, index, array) {
    console.log(item);
});
// вариант 2
let arr = [1, 2, 3, 4, 3, 56, 4, 53, 8];

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
};arr.forEach(function(item) {
    console.log(item);
});
