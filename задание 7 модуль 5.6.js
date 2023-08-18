// задание 7 модуль 5.6
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, 'string', null, NaN];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

arr.forEach(function(item) {
    if (typeof item === 'number') {
        if (item === 0) {
            zeroCount++;
        } else if (item !== 0 && item % 2 === 1) {
            evenCount++;
        }  else {
            oddCount++;
        }
    }
});

console.log(`Количество четных: ${evenCount}, нечетных: ${oddCount},  нулевых: ${zeroCount}`);