let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in'); // input
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');

button.onclick = function () {
    // кнопка будет нажата
    console.log('Работает!!!');
    // console.log(inputIn.value); // value - то, что введено в input
    let b = +inputIn.value; // + переводит в число
    console.log(b + 10); // '66'+10 = 6610
    div.innerHTML = b;
    inputIn.value = '';

}

// Home Work

let a1 = 7;
let b1 = 9;

console.log(a1 * b1);

let c = 7;
let d = 9;

div.innerHTML = c / d;

let e = 3;
let f = 5;

div.innerHTML = e + f;