console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

var vw = window.innerWidth
const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
const faderElement = document.querySelector('#fader');

// TRIGGER FADER WHEN ENTERING AND EXITING EACH PAGE
document.addEventListener("DOMContentLoaded", ready);

function ready(){
    console.log('loaded');
}