// EXPERIENCE SECTION	============================================================================================================
const allXpBtns = document.getElementsByClassName('xp-btn');

[...allXpBtns].forEach((button, index) => {
    const container = button.parentElement.previousElementSibling;
    const blocks = [...container.querySelectorAll('.modal')];
    const heading = container.querySelector('h2');
    heading.id = `experience-heading-${index + 1}`;
    button.id ||= `experience-toggle-${index + 1}`;
    button.setAttribute('aria-labelledby', `${button.id} ${heading.id}`);
    blocks.forEach((block, i) => { block.id = `experience-${index + 1}-${i + 1}`; });
    button.setAttribute('aria-controls', blocks.map(block => block.id).join(' '));
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') !== 'true';
        blocks.forEach(block => block.classList.toggle('hide', !expanded));
        button.setAttribute('aria-expanded', String(expanded));
        button.textContent = expanded ? 'Less...' : 'More...';
    });
});


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
window.addEventListener('pageshow', setFooter);
window.addEventListener('resize', event => {
	setFooter();
});