// STRUCTURE
window.onload = (event) => {
    var vw = window.innerWidth
    var titleHeight = document.querySelector('#title').offsetHeight;
    var firstDivHeight = document.querySelector('.first').offsetHeight;
    const footerField = document.querySelector('#footerFinal');

    if (vw > 685) {
        document.querySelector('#contextTrack').style.minHeight = firstDivHeight + 'px';
        document.querySelector('#subTitle').style.paddingTop = titleHeight + 'px';
    } else {
        document.querySelector('#subTitle').removeAttribute('style');
    }

    var footerHeight = document.querySelector('.footer-section').offsetHeight;
    document.querySelector('#footerGradient').style.minHeight = footerHeight + 'px';

    footerField.appendChild(document.createElement('h3')).innerHTML += '<h3>' + footerTxt[Math.round(Math.random() * 1)] + '<h3>';
};

addEventListener('resize', e => {
    var vw = window.innerWidth
    var titleHeight = document.querySelector('#title').offsetHeight;
    var firstDivHeight = document.querySelector('.first').offsetHeight;

    if (vw > 685) {
        document.querySelector('#contextTrack').style.minHeight = firstDivHeight + 'px';
        document.querySelector('#subTitle').style.paddingTop = titleHeight + 'px';
    } else {
        document.querySelector('#subTitle').removeAttribute('style');
    }

    var footerHeight = document.querySelector('.footer-section').offsetHeight;
    document.querySelector('#footerGradient').style.minHeight = footerHeight + 'px';
});









// FOOTER CATCHPHRASES
footerTxt = new Array();
footerTxt[0] = 'More being added here and there...';
footerTxt[1] = 'This website is in a constant state of "work in progress."';