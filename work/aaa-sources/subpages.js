// CONSTANTS
const rem = (document.getElementsByTagName('header')[0].offsetHeight)/3
const footerField = document.querySelector('#footer-final');
const backToTop = document.querySelector('#top-btn');









// STRUCTURE
window.onload = (event) => {
    var vw = window.innerWidth
    var titleHeight = document.querySelector('#title').offsetHeight;
    var firstDivHeight = document.querySelector('#first').offsetHeight;

    if (vw > 685) {
        document.querySelector('#context-track').style.minHeight = firstDivHeight + 'px';
        document.querySelector('#sub-title').style.paddingTop = titleHeight - rem + 'px';
    } else {
        document.querySelector('#sub-title').removeAttribute('style');
    }

    var footerHeight = document.querySelector('.footer-section').offsetHeight;
    document.querySelector('#footer-gradient').style.minHeight = footerHeight + 'px';

    footerField.appendChild(document.createElement('h3')).innerHTML += '<h3>' + footerTxt[Math.round(Math.random() * 2)] + '<h3>';
};

addEventListener('resize', e => {
    var vw = window.innerWidth
    var titleHeight = document.querySelector('#title').offsetHeight;
    var firstDivHeight = document.querySelector('#first').offsetHeight;

    if (vw > 685) {
        document.querySelector('#context-track').style.minHeight = firstDivHeight + 'px';
        document.querySelector('#sub-title').style.paddingTop = titleHeight - rem + 'px';
    } else {
        document.querySelector('#sub-title').removeAttribute('style');
    }

    var footerHeight = document.querySelector('.footer-section').offsetHeight;
    document.querySelector('#footer-gradient').style.minHeight = footerHeight + 'px';
});









// BACK TO TOP BUTTON
backToTop.addEventListener('click', e => {
	document.querySelector('html').style.scrollBehavior = 'smooth'

	setTimeout(() => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			document.querySelector('html').style.scrollBehavior = 'instant'
		}, 1)
	}, 1)
})









// FOOTER CATCHPHRASES
footerTxt = new Array();
footerTxt[0] = 'More being added here and there...';
footerTxt[1] = 'This website is in a constant state of "work in progress."';
footerTxt[2] = 'This website is forever in the making.';