let SecretNum;
let intentos = 1;
let SortedNums = [];

function asignarTextoElemento(elemento, txt) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = txt;
    return;
}

function checkTry() {
    let userNum = parseInt(document.getElementById('varUser').value);

    if (userNum === SecretNum) {
        asignarTextoElemento('p', `¡Felicidades! Has adivinado en 
            ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        document.getElementById('retry').removeAttribute('disabled');
    } else {
        if (userNum < SecretNum) asignarTextoElemento('p', 'El numero es mayor');
        else asignarTextoElemento('p', 'El numero es menor');
        intentos++
        clearBox();
    }
    return;
}

function GenerateNum() {
    let genNum = Math.floor(Math.random() * 10) + 1;
    
    //Base case
    if (SortedNums.length == 10) 
        asignarTextoElemento('p', 'All numbers were already sorted');
    else {
        if (SortedNums.includes(genNum)) return GenerateNum();
        else {
            SortedNums.push(genNum);
            return genNum;
        }
    }
    
}

function newGame() {
    SortedNums = [];
    clearBox();
    StartMessages();
    StartUp();
    document.querySelector('#retry').setAttribute('disabled', 'true');
}

function StartUp() {
    SecretNum = GenerateNum();
    intentos = 1;
}

function clearBox() {
    document.querySelector('#varUser').value = '';
}

function StartMessages() {
    asignarTextoElemento('h1', 'Secret Guess Number!');
    asignarTextoElemento('p', 'Guess a number between 1 and 10');
}

StartMessages();
StartUp();