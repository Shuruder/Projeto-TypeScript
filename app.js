"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function addNumeros(n1, n2) {
    return n1 + n2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(addNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
