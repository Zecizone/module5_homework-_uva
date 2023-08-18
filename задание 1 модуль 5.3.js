// задание 1 модуль 5.3
value = prompt ('Введите число');
number = +value;

if (typeof number === 'number' && !isNaN (number)){
    if (number % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
};

