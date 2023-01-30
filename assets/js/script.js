// Array

let numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
let operator = ['/', '*', '-', '+'];

let calcul1 = [];
let calcul2 = [];

// Dom Element

const displayCalcul = document.querySelector('.calcul');
const displayResult = document.querySelector('.result');
const numberTouchs = document.querySelectorAll('.numberTouch');
const operatorTouch = document.querySelectorAll('.operator');
const resultTouch = document.querySelector('.touch2');

// JS

for(let i = 0; i < numberTouchs.length; i++){
    numberTouchs[i].addEventListener('click', () => {
        
    })
};
for(let e = 0; e < operatorTouch.length; e++) {
    operatorTouch[e].addEventListener('click', () => {
        
    })
};

resultTouch.addEventListener('click', () => {
    
})