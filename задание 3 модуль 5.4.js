
// задание 3 модуль 5.4
name = 'Валентина';
colName = name.length;
reversName = '';

for (let count = colName -1;
     count >=0;
     count--){
    reversName += name[count]
}

console.log(reversName);