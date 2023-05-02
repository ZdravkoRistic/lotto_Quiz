
let buttonOne = document.querySelector('#buttonOne');
let buttonTwo = document.querySelector('#buttonTwo')
let rightBox = document.querySelector('.right_box');
let firstRow = document.querySelector('#first_row');
let secondRow = document.querySelector('#second_row');
let inputOne = document.querySelector('#input_one');
let inputTwo = document.querySelector('#input_two');


buttonOne.addEventListener('click', setArray);
buttonTwo.addEventListener('click', generateArray)

function makeBalls(num) {
    let ball = ``;
    for (let i = 1; i <= num ; i++) {
        ball += `
         <div class='selectedBall'>${i}</div>`
    };
    rightBox.innerHTML = ball;
    let numbers = document.querySelectorAll('.selectedBall');
    return numbers;
};


function setArray() {
    if(inputOne.value === '' || inputTwo.value === ''){
        alert('Please enter your number')
    } else {
        let second = parseInt(inputTwo.value) ;
        let numbersArray = makeBalls(second);
        numbersArray.forEach(function(el){
            el.addEventListener('click', finalArray)
        });
    }}


let arrOne = [];

function finalArray(event){
    if(arrOne.length < inputOne.value){
        event.target.style.background = 'yellow';
        let selectedNumber = parseInt(event.target.innerHTML) ;
        arrOne.push(selectedNumber);
        arrOne.sort(function(a, b){return a-b});
        let ourNumbers = document.createElement('div');
        firstRow.appendChild(ourNumbers).innerHTML = selectedNumber;
    }
};





