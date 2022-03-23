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

let login = prompt('Who is here?', '');

 if(login == 'admin' || login == 'Admin') {
     let password = prompt('Password','');
         if(password === 'boss') {
             alert('Hello');
         } else if (password !== 'boss'){
             alert('Password is wrong');
         } else {
            alert('Cancel');
         }
        } else if(login!== 'admin' || login !== 'Admin'){
            alert("I don't know you");
        } else {
            alert('Cancel');
        }