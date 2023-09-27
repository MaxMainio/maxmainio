// GLOBAL VARIABLES	----------------------------------------------------------------------------------------------------------------
var viewerHeight = window.innerHeight;
var viewerWidth = window.innerWidth;









// SWITCH TO SCROLL SMOOTH WHEN CLICKING ON INTERNAL LINKS	------------------------------------------------------------------------
const internalAnchorLinks = document.querySelectorAll('a:is([target="_self"])');

internalAnchorLinks.forEach(item => {
	item.addEventListener('click', e => {
		document.querySelector('html').style.scrollBehavior = 'smooth'
	});
});









// REMOVE SPLASH WHEN IT EXITS VIEW	------------------------------------------------------------------------------------------------
const splash = document.querySelector('#splash');

const splashObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting === false) {
			entry.target.remove();
			document.querySelector('.with-splash').removeAttribute('class');

			var anchorHash = location.hash

			if (anchorHash === '') {
				window.scrollTo(0, 0);
			};
		};
	});
});

splashObserver.observe(splash);









// TOGGLE OPEN AND CLOSED THE INDEX	------------------------------------------------------------------------------------------------
const indexBtn = document.getElementById('index-btn');
const index = document.getElementById('index');

indexBtn.addEventListener('click', e => {
	index.style.display = index.style.display === 'none' ? '' : 'none';
});









// PARALLAX	------------------------------------------------------------------------------------------------------------------------
const articles = document.querySelectorAll('article');
let currentlyVisibleArticles = [];



// Articles Observer callback
const articleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            currentlyVisibleArticles.push(entry.target);

        } else {
            const index = currentlyVisibleArticles.indexOf(entry.target);

            if (index !== -1) {
                currentlyVisibleArticles.splice(index, 1);
            };
        };
    });
});

// Start observing each article
articles.forEach(article => {
    articleObserver.observe(article);
});



// Parallax calculation function
function parallaxCalc(elementPos, windowPos) {
    const difference = elementPos - windowPos;
	let multiplier = normalizeBetween(difference, (viewerHeight * -1), viewerHeight, -1, 1);
	
	return(multiplier);
};

// Apply parallax effect
function applyParallax(windowPos) {
    currentlyVisibleArticles.forEach(article => {
        const multiplier = parallaxCalc(article.offsetTop, windowPos);
        const elements = article.querySelectorAll('[data-rate]');

        elements.forEach(el => {
            el.style.transform = 'translateY(' + multiplier * el.dataset.rate + 'px)';
        });
    });
};









// SEAM CARVING	--------------------------------------------------------------------------------------------------------------------
const nyCarve = document.querySelector('#nycCarve');
let counter = 0;

var intervalId = window.setInterval(function(){
	counter ++

	if (counter%4 === 0) {
		nyCarve.src = 'work/seam-carving/assets/content/maps/nyc/nyc-0.jpg';
	} else if (counter%4 === 2){
		nyCarve.src = 'work/seam-carving/assets/content/maps/nyc/nyc-2.jpg'
	} else {
		nyCarve.src = 'work/seam-carving/assets/content/maps/nyc/nyc-1.jpg'
	};
}, 1500);









// SORT LATER	--------------------------------------------------------------------------------------------------------------------
const sortlaterScroll = document.getElementById('sortlater-scroll');
let sortlaterVisibility;



const sortlaterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
			sortlaterVisibility = true;

        } else {
			sortlaterVisibility = false;
        };
    });
});

sortlaterObserver.observe(sortlaterScroll);



function applyScroll(){
	let sortlaterContainer = sortlaterScroll.parentNode;
	let containerPos = sortlaterContainer.getBoundingClientRect().top;
	let minThreshold = sortlaterContainer.offsetHeight * -1;
	
	let offset = normalizeBetween(containerPos, minThreshold, viewerHeight, -200, 0);

	sortlaterScroll.style.top = offset + '%';
};









// CROSSWALK POETICS	------------------------------------------------------------------------------------------------------------
document.querySelector('#crosswalk-projection').playbackRate = 0.20;









// GLOBAL TRIGGERS	----------------------------------------------------------------------------------------------------------------
document.addEventListener('load', e => {
	applyParallax(windowPos);
	
	if(sortlaterVisibility === true){
		applyScroll();
	};
});



document.addEventListener('scroll', e => {
	const windowPos = window.scrollY;

	applyParallax(windowPos);

	if(sortlaterVisibility === true){
		applyScroll();
	};
});

window.addEventListener('resize', e => {
	viewerHeight = window.innerHeight;
	viewerWidth = window.innerWidth;

	if(sortlaterVisibility === true){
		applyScroll();
	};
});









// GLOBAL FUNCTIONS	----------------------------------------------------------------------------------------------------------------
function normalizeBetween(m, rmin, rmax, tmin, tmax){
	return(((m - rmin) / (rmax - rmin)) * (tmax - tmin) + tmin);
};