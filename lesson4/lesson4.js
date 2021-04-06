// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
// на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для 
// числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее 
// сообщение с помощью console.log и вернуть пустой объект.

function makeObject(hundreds, tens, units) {
    return {
        hundreds,
        tens,
        units
    };
}
number = parseInt(prompt("введите трехзначное число "))
if (number > 999) {
    console.log("Введено слишком большое число");
    c = '';
    b = '';
    a = '';
}
else {
    a = number % 10
    number = Math.trunc(number / 10)
    b = number % 10
    number = Math.trunc(number / 10)
    c = number % 10
}
let newObject = makeObject(c, b, a);

alert('единицы: ' + newObject.units + ', десятки: ' + newObject.tens + ', сотни:' + newObject.hundreds); // John


// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно з
// аменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
// let storage = [{
//     product1: {
//         name: "banana",
//         count: 5,
//         price: 75
//     }
// },
// {
//     product2: {
//         name: "pear",
//         count: 2,
//         price: 150
//     }
// },
// {
//     product3: {
//         name: "apple",
//         count: 1,
//         price: 100
//     }
// }
// ];

// function getTotalCost(storage) {
//     return storage.map(object => Object.values(object)[0].price * Object.values(object)[0].count).reduce((p, c) => p + c);
// }
// alert("Стоимость корзины: " + getTotalCost(storage));
