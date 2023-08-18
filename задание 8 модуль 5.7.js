// задание 8 модуль 5.7
let fruits = new Map();
fruits.set('apple', 'green');
fruits.set('strawberry', 'red');
fruits.set('blueberry', 'blue');

console.log(fruits.keys());

for (let [key, name] of fruits) {
    console.log(`Ключ — ${key}, значение — ${name}`);
}
