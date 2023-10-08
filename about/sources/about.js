// EXPERIENCE SECTION	============================================================================================================
const allXpBtns = document.getElementsByClassName('xp-btn');

for (var i = allXpBtns.length-1; i >=0  ; i--) {
	allXpBtns[i].addEventListener('click', function() {
		var container = this.parentNode.previousElementSibling;
		var blocks = container.querySelectorAll('.modal');

		blocks.forEach(element => {
			element.classList.toggle('hide');
		});
		
		if (this.innerHTML === 'More...') {
			this.innerHTML = 'Less...'
		} else {
			this.innerHTML = 'More...'
		};
	});
};









// FOOTER FIX	====================================================================================================================
const footer = document.getElementById('footer-nav').parentNode.parentNode;
const xpSection = document.querySelector('.xp-section');

function setFooter(){
	let vw = checkVW();
	if(vw >= 1000){
		let fix = getHight(footer);
		xpSection.style.minHeight = 'calc(100vh - 3rem - ' + fix + 'px)';
	} else {
		xpSection.removeAttribute('style')
	};
};

function checkVW(){
	let vw = window.innerWidth;
	return(vw);
};

function getHight(footer){
	let height = footer.offsetHeight;
	return(height);
};









// INITIALIZERS & EVENT TRIGGERS    ================================================================================================
window.addEventListener('pageshow', setFooter());
window.addEventListener('resize', event => {
	setFooter();
});