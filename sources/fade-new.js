console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

var vw = window.innerWidth
const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
const faderElement = document.querySelector('#fader');





innerLinks.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        fadeOut(e);
    })
})










const d = new Date();
let ms = d.getMilliseconds();
console.log(ms);
// document.getElementById("demo").innerHTML = ms;









// var t = setInterval(fadeCheck,1);


// function fadeCheck() {
//     console.log('hello')
//     if (faderElement.classList.contains('motion')) {
//         fadeIn();
//     } else {
//         clearInterval(t);
//     }
// }

// function fadeIn() {
//     faderElement.classList.remove('motion');

//     setTimeout(() => {
//         faderElement.remove();
//         clearInterval(t);
//     }, 500);
// }





// function fadeOut(e){
//     var target = e.currentTarget.href;
//     const faderDiv = document.createElement('div');
//     faderDiv.classList.add('fader');

//     document.body.append(faderDiv);
//     setTimeout(() => {
//         faderDiv.classList.add('motion');
//     }, 1);

//     setTimeout(() => {
//         window.location.href = target;
//     }, 499);
// }