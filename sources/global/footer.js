// STRUCTURE
const footerField = document.getElementById('footer-field');

window.onload = (event) => {
    footerField.appendChild(document.createElement('h3')).innerHTML += '<h3>' + footerTxt[Math.round(Math.random() * (footerTxt.length - 1))] + '<h3>';
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
footerTxt[3] = 'A never-ending journey of website enhancement.';
footerTxt[4] = 'Content blooms here regularly... Keep checking back!';
footerTxt[5] = 'Always adding, always refining.';
footerTxt[6] = 'Work in progress, masterpiece in making...';
footerTxt[7] = 'Forever in progress... Enjoy the transformation.';
footerTxt[8] = 'Always under construction in the pursuit of excellence.';
footerTxt[9] = 'A personal journey of perpetual web crafting...';