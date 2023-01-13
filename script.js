'use strict';
 function calculateArea(r){
     let area;
     if(r<=0){
         return 0;
     }else{
         area = Math.PI * r *r;
         return area;
     }
 }
 let radius = 2.2;
 let theArea = calculateArea(radius);
 console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
let txt1 = 'abc!def!';
console.log(txt1.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
let txt2 = 'aaa bbb ccc';
console.log(txt2.substr(4,3));
console.log(txt2.substring(4,7));
console.log(txt2.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let txt3 = 'js';
console.log(txt3.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
let txt4 = 'я люблю JS!';
console.log(txt4.length);

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:years, myDog, guests
// Функции:dogYears, makeTea, secret
// Встроенные функции: log
// Аргументы:mydog, 4, guests, 'Earl Grey'
// Параметры:dogname, age, cups, tea
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt5 = 'JS'
console.log(txt5.toLowerCase())


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let txt6 = 'я люблю JS!'
console.log(txt6.substr(2, 5))
console.log(txt6.substr(8,2))
console.log(txt6.substring(2, 7))
console.log(txt6.substring(8, 10))
console.log(txt6.slice(2, 7))
console.log(txt6.slice(8, 10))

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let txt7 = 'я люблю JS!'
console.log(txt7.indexOf('люблю'))

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt8 = 'abcdefgh';
let n = 5 ;
let result;
if(txt8.length > n){
    result = txt8.slice(0, n) + '...'
    console.log(result)
}else{
    result = txt8
    console.log(result)
}


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let txt9 = 'Я-люблю-JS!'
console.log(txt9.replace(/-/g, '!'))

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let txt10 = 'я люблю JS'
console.log(txt10.split(' '))

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txt11 = 'привет мир'
console.log(txt11.split(''))
