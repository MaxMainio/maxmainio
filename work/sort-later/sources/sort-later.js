const slScroll = document.getElementById('sortlaterscroll');

window.addEventListener('scroll', (event) => {
    var position = window.pageYOffset;
    
    slScroll.style.transform = 'translate3d(0px, ' + position * -0.5 + 'px, 0px)';
});