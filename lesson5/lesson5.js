// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
// html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
// т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
// столбцы – латинскими буквами A, B, C, D, E, F, G, H.

// 2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например 
// К – король, Ф – ферзь и т.п.,
// let field = document.createElement('div');
// document.body.appendChild(field);
// for (let y = 0; y < 10; y++) {
//     for (let x = 0; x < 10; x++) {
//         let css = x ? {} : { clear: 'left' };
//         let content = '';
//         if (y == 1 || y == 8)
//             content = x > 0 && x < 9 ? 'ЛКСФКСКЛ'.charAt(x - 1) : null;
//         if (y == 2 || y == 7)
//             content = 'П';
//         if (y == 0 || y == 9)
//             content = x > 0 && x < 9 ? 'ABCDEFGH'.charAt(x - 1) : null;
//         else if (x == 0 || x == 9)
//             content = 9 - y;
//         else css.background = (x + y) % 2 ? '#808080' : '#fff';
//         let node = document.createElement('div');
//         css.width = '20px';
//         css.height = css.width;
//         css.textAlign = 'center';
//         css.float = 'left';
//         for (let i in css) node.style[i] = css[i];
//         if (content)
//             node.innerHTML = content;
//         field.appendChild(node);
//     }
// }

// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

// смотреть index.html







