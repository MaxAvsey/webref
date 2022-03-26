'use strict';
// let admin, name;
// name = "John"
// admin = name;
// // alert(admin);
// const ourPlanetName = "Earth";
// const currentUserName = "Maxim";
// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old`);
// let agreement = confirm('are you agree?');
// alert(agreement);
// let userName = prompt('What is your name?', 'Name');
// alert(`Hello ${userName}`);
// let a = +prompt('First number', 0)
// let b = +prompt('Second number', 0)
// alert(+a + +b);
// let name = prompt('What is right js name?', 'name');
// if(name == 'ECMAScript') {
//     alert('Right');
// } else {
//     alert("Don't you know?");
// };
// let value = prompt('Write a number','');
// if (value > 0){
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// };
// let result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// // }
// let message = (login == 'Сотрудник') ? 'Привет':
//  (login == 'Директор') ? 'Здравствуйте':
//  (login == '') ? 'Нет логина': 
// //  '';
// let age = prompt('Enter', '');
// if(age < 14 || age > 90) 
// if(!(age >=14 && <=90))

// let login = prompt('Who is here?', '');

//  if(login == 'admin' || login == 'Admin') {
//      let password = prompt('Password','');
//          if(password === 'boss') {
//              alert('Hello');
//          } else if (password === '' || password === null){
//              alert('Cancel');
//          } else {
//             alert('Password is wrong');
//          }
//         } else if(login === '' || login === null){
//             alert('Cancel');
//         } else {
//             alert("I don't know you");
//         }
//
//
//
//При помощи цикла for выведите чётные числа от 2 до 10.
// for(let i = 2; i <= 10; i++) {
//     if (i % 2 == 0){
//         alert(i);
//     }
// }

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// while(i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }
// 
// // Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// // Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
// либо не нажмёт кнопку Отмена (ESC).
// // Предполагается, что посетитель вводит только числа. 
// Предусматривать обработку нечисловых строк в этой задаче необязательно.
//  let number;
//   do {
//    number =prompt('Enter number more than 100',0);
//     } while (number <= 100 && number);
    
// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// for(let n = 2; n <= 10; i++){
//     if (n =>1 || n % 2 ==0)
//     alert(n);
// }
/////////////////////////////////////////////////
// Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
    // if (browser === 'Edge'){
    //     alert("You've got the Edge!");
    // } else if(browser === 'Chrome' 
    // || browser === 'Firefox' 
    // || browser === 'Safari' 
    // || browser === 'Opera' ) {
    //     alert('Okay we support these browsers too');
    // } else {
    //     alert('We hope that this page looks ok!');
    // }
    ////////////////////////////////////////////////////////////////
//     Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
// const number = prompt('Enter number','0');
// switch(number) {
//     case '0':
//     alert('You entered 0');
//     break;
//     case '1':
//     alert('You entered 1');
//     break;
//     case '2':
//     case '3':
//     alert('You entered 3 or maybe 2')
//     break;
//     default:
//         alert("I do not know");
// }
//////////////////////////////////////////////////////////////////////////////////
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   return (age > 18) ? true: confirm('Родители разрешили?');
//   }
//   function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//     }

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||
/////////////////////////////////////////////////////////////
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
function min(a, b) {
    return (a < b) ? a : b;
}