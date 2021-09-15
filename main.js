let buttonToggleMenu = document.querySelector('.nav__btn');
const toggleColorMenu = () => {
    let navAside = document.querySelector('.nav__hamburger');
    navAside.classList.toggle('toggleMenu');
    let btnImage = document.querySelector('.hamburger');
    btnImage.classList.toggle('toggleImage');
    navAside.classList.toggle('transition');
}

buttonToggleMenu.addEventListener('click', toggleColorMenu);

const bodyColor = document.querySelector('body');
const colorText = document.querySelector('#colorText');

const removeToggle = () => {
    bodyColor.classList.toggle('homeColor', false);
    bodyColor.classList.toggle('greenColor', false);
    bodyColor.classList.toggle('orangeColor', false);
    bodyColor.classList.toggle('purpleColor', false);
    bodyColor.classList.toggle('blueColor', false); 
}

const close = document.querySelector('#close');
close.addEventListener('click', toggleColorMenu);

const closeOnRadioButtonCheck = document.querySelector('li');
closeOnRadioButtonCheck.addEventListener('click', toggleColorMenu);

const closeOnLabelClickHome = document.querySelector('#labelClickHome');
closeOnLabelClickHome.addEventListener('click', toggleColorMenu);

const closeOnLabelClickGreen = document.querySelector('#labelClickGreen');
closeOnLabelClickGreen.addEventListener('click', toggleColorMenu);

const closeOnLabelClickOrange = document.querySelector('#labelClickOrange');
closeOnLabelClickOrange.addEventListener('click', toggleColorMenu);

const closeOnLabelClickPurple = document.querySelector('#labelClickPurple');
closeOnLabelClickPurple.addEventListener('click', toggleColorMenu);

const closeOnLabelClickBlue = document.querySelector('#labelClickBlue');
closeOnLabelClickBlue.addEventListener('click', toggleColorMenu);

const radioBtnHome = document.querySelector('#homeBtn');
const radioBtnGreen = document.querySelector('#greenBtn');
const radioBtnOrange = document.querySelector('#orangeBtn');
const radioBtnPurple = document.querySelector('#purpleBtn');
const radioBtnBlue = document.querySelector('#blueBtn');

let home = document.querySelector('#home');
const toggleColorHome = () => {
    removeToggle();
    bodyColor.classList.toggle('homeColor');    
    radioBtnHome.checked = true;
    colorText.innerHTML = 'LIGHTGREY'
}
home.addEventListener('click', toggleColorHome);
home.addEventListener('click', toggleColorMenu);

let green = document.querySelector('#green');
const toggleColorGreen = () => {
    removeToggle();
    bodyColor.classList.toggle('greenColor');    
    radioBtnGreen.checked = true;
    colorText.innerHTML = 'GREEN'
}
green.addEventListener('click', toggleColorGreen);
green.addEventListener('click', toggleColorMenu);

let orange = document.querySelector('#orange');
const toggleColorOrange = () => {
    removeToggle();
    bodyColor.classList.toggle('orangeColor');    
    radioBtnOrange.checked = true;
    colorText.innerHTML = 'ORANGE'
}
orange.addEventListener('click', toggleColorOrange);
orange.addEventListener('click', toggleColorMenu);

let purple = document.querySelector('#purple');
const toggleColorPurple = () => {
    removeToggle();
    bodyColor.classList.toggle('purpleColor');    
    radioBtnPurple.checked = true;
    colorText.innerHTML = 'PURPLE'
}
purple.addEventListener('click', toggleColorPurple);
purple.addEventListener('click', toggleColorMenu);

let blue = document.querySelector('#blue');
const toggleColorBlue = () => {
    removeToggle();
    bodyColor.classList.toggle('blueColor');    
    radioBtnBlue.checked = true;
    colorText.innerHTML = 'BLUE'
}
blue.addEventListener('click', toggleColorBlue);
blue.addEventListener('click', toggleColorMenu);

document.addEventListener('keypress', function (event) {
    if (event.key === '1') {
        removeToggle();
        bodyColor.classList.toggle('homeColor');
        colorText.innerHTML = 'LIGHTGREY';
        radioBtnHome.checked = true;        
    } if (event.key === '2') {
        removeToggle();
        bodyColor.classList.toggle('greenColor');
        colorText.innerHTML = 'GREEN';
        radioBtnGreen.checked = true;        
    } if (event.key === '3') {
        removeToggle();
        bodyColor.classList.toggle('orangeColor');
        colorText.innerHTML = 'ORANGE';
        radioBtnOrange.checked = true;        
    } if (event.key === '4') {
        removeToggle();
        bodyColor.classList.toggle('purpleColor');
        colorText.innerHTML = 'PURPLE';
        radioBtnPurple.checked = true;        
    } if (event.key === '5') {
        removeToggle();
        bodyColor.classList.toggle('blueColor');
        colorText.innerHTML = 'BLUE';
        radioBtnBlue.checked = true;        
    }; 
})