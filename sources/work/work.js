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
			document.querySelector('.with-splash').className = '';

			var anchorHash = location.hash

			// INCASE THERE IS A HASH
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
const sortlaterScroll = document.getElementById('sortlater-scroll');

let currentlyVisibleArticles = [];
let sortlaterVisibility;

var viewerHeight = window.innerHeight;
var viewerWidth = window.innerWidth;



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



function normalizeBetween(m, rmin, rmax, tmin, tmax){
	return(((m - rmin) / (rmax - rmin)) * (tmax - tmin) + tmin);
};









// Parallax calculation function
function parallaxCalc(elementPos, windowPos) {
    const vh = window.innerHeight;
    const difference = elementPos - windowPos;
    const normalized = (difference - (vh * -1)) / (vh - (vh * -1));
    const normalOffset = (normalized * 2) - 1;

    return normalOffset;
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



// Scroll trigger
document.addEventListener('scroll', event => {
	const windowPos = window.scrollY;

	applyParallax(windowPos);
	if(sortlaterVisibility === true){
		applyScroll();
	};
});

window.addEventListener('resize', event => {
	viewerHeight = window.innerHeight;
	viewerWidth = window.innerWidth;
});

















// const sections = document.querySelectorAll('article');

// document.addEventListener('scroll', event => {
// 	const sectionObserver = new IntersectionObserver(entries => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting === true) {
// 				var windowScroll = window.scrollY;
// 				var vh = window.innerHeight;
	
// 				function parallaxCalc (elementPos, windowPos) {
// 					var difference = elementPos - windowPos;
// 					var normalized = (difference - (vh * -1)) / (vh - (vh * -1));
// 					var normalOffset = (normalized * 2) - 1;
// 					return normalOffset
// 				};
	
// 				var multiplier = parallaxCalc(entry.target.offsetTop, windowScroll);
// 				var elements = entry.target.querySelectorAll('[data-rate]');
// 				var elementsIndex = 0, length = elements.length;
	
// 				for (elementsIndex; elementsIndex < length; elementsIndex++) {
// 					elements[elementsIndex].style.transform = 'translateY(' + multiplier * elements[elementsIndex].dataset.rate + 'px)'
// 				};
// 			};
// 		});
// 	});
	
// 	sections.forEach(sections => {
// 		sectionObserver.observe(sections);
// 	});
// });









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









// CROSSWALK POETICS	------------------------------------------------------------------------------------------------------------
document.querySelector('#crosswalk-projection').playbackRate = 0.20;