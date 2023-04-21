// broj koji će dodijeliti defaultnom imenu ako se ne unese ime
const randomNumber = Math.floor(Math.random() * 10);

let userName = window.prompt('Unesite vaše ime:');

if (userName === null) {
    userName = `Korisnik ${randomNumber}`;
}


const screen = document.querySelector('.screen');
const sendBtn = document.getElementById('send');
const textInput = document.getElementById('textInput');


sendBtn.addEventListener('click', function(event)  {
    event.preventDefault();
    const textInputValue = textInput.value;
    console.log(textInputValue);
   
    //stvara div element i stavlja u njega korisnikovo ime
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = userName;
    screen.appendChild(nameDiv);

   // stvara div element i stavlja u njega value od input elementa
    const textDiv = document.createElement('div');
    textDiv.classList.add('message');
    textDiv.textContent = textInputValue;
    screen.appendChild(textDiv);

    textInput.value = '';
    
})