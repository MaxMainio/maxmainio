console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

function scaleType(){
    var vw = window.innerWidth
    var vh = window.innerHeight
    var texts = document.querySelectorAll('p');
    
    var i;
    for(i = 0; i < texts.length; i++){
        texts[i].style.fontSize = vh / texts.length + 'px';
        texts[i].style.lineHeight = vh / texts.length + 'px';

        var lineWidth = texts[i].offsetWidth;
        var fitLength = vw / (lineWidth / 100);

        texts[i].style.transform = 'scaleX(' + fitLength + '%)';
    }
}


window.onload = (event) => {
    scaleType();
}

addEventListener('resize', e => {
    scaleType();
});