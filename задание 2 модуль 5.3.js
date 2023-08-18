
// задание 2 модуль 5.3
x = null;

if (typeof x === 'number') {
    console.log('х - это число');
} else if (typeof x === 'string') {
    console.log('х - это текст');
} else if (typeof x === 'boolean') {
    console.log('х - это логическое выражение');
} else {
    console.log('Тип x не определён');
};