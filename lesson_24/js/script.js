"use strict"
// function showName() {
//    console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');
// let showMessadge;
// showMessadge = function () {
//    console.log('Сообщение');
// }
// showMassadge();
// let arr = ['Ваня', 'Іштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);
// let users = ['Ваня', 'Іштван'];
// users.push('Оля');
// users[1] = 'Петя';
// users.shift();
// users.unshift('Маша', 'Паша');
// console.log(users);
// const element = document.querySelectorAll('[data-say-hi]');
// console.log(element);
// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// console.log(mainElementWidth);
// const windowWidth = window.innerWidth;
// console.log(windowWidth);

// const windowHeight = window.innerHeight;
// console.log(windowHeight);
// function setScrollBy() {
//    window.scrollBy(0, 100);
//    const windowScrollTop = window.pageYOffset;
//    console.log(windowScrollTop);
// }
// const block = document.querySelector('div');
// block.scrollTop = 100;
// const elementScrollTop = block.scrollTop;
// console.log(elementScrollTop);
const item = document.querySelector('.homework-page__title');
const getItemCoords = item.getBoundingClientRect().left;
const getItemCoord = item.getBoundingClientRect().top;
console.log(getItemCoords);
console.log(getItemCoord);
