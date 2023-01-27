// STRUCTURE
const footerField = document.getElementById('footer-field');

window.onload = (event) => {
    footerField.appendChild(document.createElement('h3')).innerHTML += '<h3>' + footerTxt[Math.round(Math.random() * 2)] + '<h3>';
}









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