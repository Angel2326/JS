// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2   ++a - инкремент, возвращает значение уже новое
// d = b++; alert(d);           // 1   b++ увеличивает b, но возвращает старое значение (которое было до увеличения)
// c = (2+ ++a); alert(c);      // 5   после выполнения кода на 3 строке a = 2 => c = (2+(2+1))
// d = (2+ b++); alert(d);      // 4   после выполнения кода на 4 строке b = 2 => c = (2+(2))
// alert(a);                    // 3   после выполнения кода на 5 строке a = 3
// alert(b);                    // 3   после выполнения кода на 6 строке b = 3
// Почему код даёт именно такие результаты?

//2. Чему будет равен x в примере ниже?
//var a = 2;
//var x = 1 + (a *= 2); // x = 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// let a = 4
// let b = 4

// if (a >= 0 && b >= 0) {
//     alert(a - b)
// }
// else if (a < 0 && b < 0) {
//     alert(a * b)
// }
// else {
//     alert(a + b)
// }

// // 4. Присвоить переменной а значение в промежутке 
// // [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// "uses Math"
// let min = 0
// let max = 15
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// number = getRandomInt(0, 15)
// switch (number) {
//     case 0: alert(number++);
//     case 1: alert(number++);
//     case 2: alert(number++);
//     case 3: alert(number++);
//     case 4: alert(number++);
//     case 5: alert(number++);
//     case 6: alert(number++);
//     case 7: alert(number++);
//     case 8: alert(number++);
//     case 9: alert(number++);
//     case 10: alert(number++);
//     case 11: alert(number++);
//     case 12: alert(number++);
//     case 13: alert(number++);
//     case 14: alert(number++);
//     case 15: alert(number++);
//     default: null;
// }


// 5. Реализовать основные 4 
// арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function getCalcSum(a, b) {
    return alert(a + b)
}
function getCalcSub(a, b) {
    return alert(a - b)
}
function getCalcDiv(a, b) {
    return alert(a / b)
}
function getCalcMult(a, b) {
    return alert(a * b)
}


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости 
// от переданного значения операции выполнить одну из арифметических операций (
//     использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
// function getCalc(a, b, oper) {
//     switch (oper) {
//         case "-": getCalcSub(a, b);
//             break;
//         case "+": getCalcSum(a, b);
//             break;
//         case "/": getCalcDiv(a, b);
//             break;
//         case "*": getCalcMult(a, b);
//             break;
//         default: null;
//     }
//     return alert(result)
// }

// getCalc(1, 9, "*")



// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// 0 - значение. Это уникальная известная величина нуля, которая имеет смысл в арифметической и 
// другой математике.

// Null не является значением. Это «заполнитель» для значения данных, которое неизвестно или не указано. 
// Это имеет смысл только в этом контексте; математические операции не могут 
// выполняться в нуле (результат любой такой операции не определен, а потому также представлен как нуль).

//8. *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

// function PWR(val, pow, result) {
//     if (pow < 1) {
//         return result;
//     }
//     return PWR(val, --pow, result * val);
// }
// alert(PWR(5, 3, 1));