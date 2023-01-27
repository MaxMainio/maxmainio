// STRUCTURE
const rem = (document.getElementsByTagName('header')[0].offsetHeight)/3
const title = document.querySelector('#title');
const subTitle = document.querySelector('#sub-title');

const context = document.querySelector('#context-track');
const firstDiv = document.querySelector('#first');

const footerGradient = document.querySelector('#footer-gradient');
const footerField = document.querySelector('#footer-final');

window.onload = (event) => {
    var vw = window.innerWidth;
    var titleHeight = title.offsetHeight;

    // GET HEIGHT OF FIRST WORK DIV
    var firstDivHeight = firstDiv.offsetHeight;

    if (vw > 685) {
        subTitle.style.paddingTop = titleHeight - rem + 'px';

        // SET THE MIN-HEIGHT OF THE CONTEXT COLUMN
        context.style.minHeight = firstDivHeight + 'px';
        // MEASURE AND COMPARE ACTUAL HEIGHT OF THE CONTEXT COLUMN WITH THE WORK DIV
        var contextHeight = context.offsetHeight;
        var offset = contextHeight - firstDivHeight;

        // SET WORK DIVS MARGIN BOTTOM TO MATCH THE OVERSHOOT
        firstDiv.style.marginBottom = offset + 'px';
    }

    var footerHeight = document.querySelector('.footer-section').offsetHeight;
    footerGradient.style.minHeight = footerHeight + 'px';

    footerField.appendChild(document.createElement('h3')).innerHTML += '<h3>' + footerTxt[Math.round(Math.random() * 2)] + '<h3>';
}

addEventListener('resize', e => {
    var vw = window.innerWidth;
    var titleHeight = title.offsetHeight;
    var firstDivHeight = firstDiv.offsetHeight;

    if (vw > 685) {
        subTitle.style.paddingTop = titleHeight - rem + 'px';
        context.style.minHeight = firstDivHeight + 'px';

        var contextHeight = context.offsetHeight;
        var offset = contextHeight - firstDivHeight;

        firstDiv.style.marginBottom = offset + 'px';
    } else {
        subTitle.removeAttribute('style');
        context.removeAttribute('style');
    }

    var footerHeight = document.querySelector('.footer-section').offsetHeight;
    footerGradient.style.minHeight = footerHeight + 'px';
})









// BACK TO TOP BUTTON
const backToTop = document.querySelector('#top-btn');

backToTop.addEventListener('click', e => {
	document.querySelector('html').style.scrollBehavior = 'smooth'
	
    setTimeout(() => {
		window.scrollTo(0, 0);
	}, 1)
})









// FOOTER CATCHPHRASES
footerTxt = new Array();
footerTxt[0] = 'More being added here and there...';
footerTxt[1] = 'This website is in a constant state of "work in progress."';
footerTxt[2] = 'This website is forever in the making.';