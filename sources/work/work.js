// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
// Values & measurements    --------------------------------------------------------------------------------------------------------
var viewerHeight = window.innerHeight;
var viewerWidth = window.innerWidth;
var windowPos = window.scrollY;









// INITIALIZERS & EVENT TRIGGERS    ================================================================================================
window.addEventListener('pageshow', e => {
	applyParallax(windowPos);
	hedera();

	if (isSortlaterVisible) {
		applySortLaterScroll();
	}
});



let ticking = false;

document.addEventListener('scroll', () => {
	windowPos = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(() => {
			applyParallax(windowPos);

			if (isSortlaterVisible) {
				applySortLaterScroll();
			}

			ticking = false;
		});
		ticking = true;
	}
});



let resizeTimeout;

window.addEventListener('resize', () => {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		viewerHeight = window.innerHeight;
		viewerWidth = window.innerWidth;
		windowPos = window.scrollY;

		hedera();
		if (isSortlaterVisible) {
			applySortLaterScroll();
		}
	}, 150);
});









// SMOOTH SCROLL FOR INTERNAL LINKS	================================================================================================
const internalAnchorLinks = document.querySelectorAll('a:is([target="_self"])');

let smoothScrollEnabled = false;

internalAnchorLinks.forEach(item => {
	item.addEventListener('click', e => {
		if (!smoothScrollEnabled) {
			document.querySelector('html').style.scrollBehavior = 'smooth';
			smoothScrollEnabled = true;
		}
	});
});










// REMOVE SPLASH	================================================================================================================
const splash = document.querySelector('#splash');

const handleSplashIntersection = (entries, observer) => {
	const entry = entries[0];

	if (!entry.isIntersecting) {
		observer.unobserve(entry.target);
		
		entry.target.remove();

		const withSplashElement = document.querySelector('.with-splash');
		if (withSplashElement) {
			withSplashElement.removeAttribute('class');
		}

		if (!location.hash) {
			window.scrollTo(0, 0);
		}
	}
};

if (splash) {
	const splashObserver = new IntersectionObserver(handleSplashIntersection);
	splashObserver.observe(splash);
}









// INDEX	========================================================================================================================
const indexBtn = document.getElementById('index-btn');
const index = document.getElementById('index');

indexBtn.addEventListener('click', e => {
	index.style.display = index.style.display === 'none' ? '' : 'none';
});









// PARALLAX	========================================================================================================================
// Elements	------------------------------------------------------------------------------------------------------------------------
const articles = document.querySelectorAll('article');
let currentlyVisibleArticles = [];
const articleData = new Map();



// Page section observer	--------------------------------------------------------------------------------------------------------
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

articles.forEach(article => {
	const parallaxEls = article.querySelectorAll('[data-rate]');
	articleData.set(article, parallaxEls);
	articleObserver.observe(article);
});




// Suplemental functions	--------------------------------------------------------------------------------------------------------
// Parallax calculation function
function parallaxCalc(article, windowPos) {
	const elementTop = article.getBoundingClientRect().top + window.scrollY;
	const difference = elementTop - windowPos;

	let multiplier = normalizeBetween(difference, -viewerHeight, viewerHeight, -1, 1);
	multiplier = Math.max(-1, Math.min(1, multiplier));

	return multiplier;
}

// Apply parallax transformations
function applyParallax(windowPos) {
    currentlyVisibleArticles.forEach(article => {
		const multiplier = parallaxCalc(article, windowPos);

		const elements = articleData.get(article);


        elements.forEach(el => {
			el.style.setProperty('-webkit-transform', 'translateY(' + multiplier * el.dataset.rate + 'px)');
			el.style.setProperty('-moz-transform', 'translateY(' + multiplier * el.dataset.rate + 'px)');
			el.style.setProperty('-o-transform', 'translateY(' + multiplier * el.dataset.rate + 'px)');
			el.style.setProperty('-ms-transform', 'translateY(' + multiplier * el.dataset.rate + 'px)');
			el.style.setProperty('transform', 'translateY(' + multiplier * el.dataset.rate + 'px)');
			
			el.style.transform = `translateY(${multiplier * el.dataset.rate}px)`;
        });
    });
};









// NIKE SECTION	====================================================================================================================
// const nikeHero = document.getElementById('nike-hero');

// if (nikeHero) {
// 	const heroImages = [
// 		{
// 			src: 'work/nike/assets/content/2025/phantom-6/turn-table/high/phantom-6-high-detail.avif',
// 			blur: '(work/nike/assets/no-index/2025/phantom-6/turn-table/high/phantom-6-high-detail-blurry.webp',
// 			alt: 'Detail image of the underside of the Nike Phantom 6 football cleat.',
// 			title: 'Detail image of the underside of the Nike Phantom 6 football cleat.'
// 		},
// 		{
// 			src: 'work/nike/assets/content/2025/run-swoosh/marketing/runswoosh-1.jpg',
// 			blur: '(work/nike/assets/no-index/2025/run-swoosh/marketing/runswoosh-1-blurry.jpg',
// 			alt: 'Runner in motion on a track wearing the Run Swoosh Vomero 18s.',
// 			title: 'Runner in motion on a track wearing the Run Swoosh Vomero 18s.'
// 		},
// 		{
// 			src: 'work/nike/assets/content/2025/run-swoosh/marketing/runswoosh-2.jpg',
// 			blur: '(work/nike/assets/no-index/2025/run-swoosh/marketing/runswoosh-2-blurry.jpg',
// 			alt: 'Runner stretching on a track while wearing the Run Swoosh Vomero 18s.',
// 			title: 'Runner stretching on a track while wearing the Run Swoosh Vomero 18s.'
// 		},
// 		{
// 			src: 'work/nike/assets/content/2025/sabrina-3-hoopers-blueprint/marketing/sabrina-3-hero.webp',
// 			blur: 'work/nike/assets/no-index/2025/sabrina-3-hoopers-blueprint/marketing/sabrina-3-hero-blurry.webp',
// 			alt: "Sabrina Ionescu dribbling on a basketball court while wearing the Nike Sabrina 3 in the launch Hooper's Blueprint colorway.",
// 			title: "Sabrina Ionescu in the Nike Sabrina 3 Hooper's Blueprint colorway"
// 		},
// 		{
// 			src: 'work/nike/assets/content/2025/nxn/merch/gear-main-nxn.webp',
// 			blur: 'work/nike/assets/no-index/2025/nxn/merch/gear-main-nxn-blurry.webp',
// 			alt: "Nike Cross Nationals (NXN) official backpack and Dragonfly XC track spikes provided to qualifying runners for the 2025 competition.",
// 			title: "Nike Cross Nationals 2025 — NXN backpack and Dragonfly XC spikes"
// 		}
// 	];

// 	const randomIndex = getRandomInt(0, heroImages.length - 1);
// 	const chosen = heroImages[randomIndex];

// 	nikeHero.src = chosen.src;
// 	nikeHero.style.backgroundImage = chosen.blur;
// 	nikeHero.alt = chosen.alt;
// 	nikeHero.title = chosen.title;
// }









// HEDERA SECTION	================================================================================================================
// Trigger	------------------------------------------------------------------------------------------------------------------------
let hasTyped = false;

const ivyObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting && !hasTyped) {
			typeWriterEffect();
			hasTyped = true;
			ivyObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.2 });

ivyObserver.observe(document.getElementById('ivy-container'));



// Variables & elements	------------------------------------------------------------------------------------------------------------
var ivyIndex = 0;
var speed = 50;

ivyText = new Array();
ivyText[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque. Neque vitae tempus quam pellentesque nec. Mauris in aliquam sem fringilla ut morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sit amet porttitor eget dolor morbi non arcu risus. Eget est lorem ipsum dolor sit amet consectetur. Arcu non sodales neque sodales ut etiam sit amet. In cursus turpis massa tincidunt dui ut. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Enim diam vulputate ut pharetra sit amet aliquam id diam. Non pulvinar neque laoreet suspendisse interdum consectetur.";
ivyText[1] = "Vitae auctor eu augue ut lectus. Volutpat lacus laoreet non curabitur. Urna molestie at elementum eu facilisis sed odio morbi quis. Pharetra sit amet aliquam id diam maecenas ultricies mi. Vitae congue eu consequat ac. Ut placerat orci nulla pellentesque dignissim enim. At varius vel pharetra vel turpis nunc eget lorem dolor. Quisque id diam vel quam. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Erat velit scelerisque in dictum. Lectus proin nibh nisl condimentum id venenatis. Varius quam quisque id diam. Amet consectetur adipiscing elit duis. Velit egestas dui id ornare arcu odio ut sem nulla. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Consequat ac felis donec et odio pellentesque. Laoreet id donec ultrices tincidunt arcu. Odio aenean sed adipiscing diam. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Et malesuada fames ac turpis.";
ivyText[2] = "Ligula ullamcorper malesuada proin libero nunc consequat interdum. Morbi enim nunc faucibus a. Neque aliquam vestibulum morbi blandit. Lacinia quis vel eros donec ac odio tempor orci. Mauris sit amet massa vitae tortor condimentum lacinia. Ridiculus mus mauris vitae ultricies. Dis parturient montes nascetur ridiculus. Arcu non sodales neque sodales ut etiam. Nisi est sit amet facilisis. Lacinia quis vel eros donec ac odio tempor orci dapibus. Integer feugiat scelerisque varius morbi enim nunc faucibus. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sem integer vitae justo eget magna fermentum iaculis eu non. A lacus vestibulum sed arcu. Congue quisque egestas diam in arcu cursus euismod quis.";
ivyText[3] = "Odio tempor orci dapibus ultrices in iaculis. Nisi vitae suscipit tellus mauris a diam. Orci dapibus ultrices in iaculis nunc sed. Cras sed felis eget velit aliquet sagittis id consectetur. Consequat id porta nibh venenatis cras sed felis eget. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Nulla malesuada pellentesque elit eget. Et tortor consequat id porta nibh venenatis cras sed. Semper feugiat nibh sed pulvinar proin. Quis viverra nibh cras pulvinar. Ultricies lacus sed turpis tincidunt id. Est pellentesque elit ullamcorper dignissim cras. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Varius sit amet mattis vulputate. Lacinia quis vel eros donec ac odio tempor orci. Elementum facilisis leo vel fringilla est. Tristique et egestas quis ipsum suspendisse ultrices gravida. Id porta nibh venenatis cras sed felis eget velit.";
ivyText[4] = "Mauris nunc congue nisi vitae suscipit tellus mauris. Ultrices dui sapien eget mi proin. Lectus mauris ultrices eros in cursus. Adipiscing elit duis tristique sollicitudin. Amet risus nullam eget felis eget nunc. Eget mauris pharetra et ultrices neque ornare aenean euismod. Tellus integer feugiat scelerisque varius morbi. Accumsan in nisl nisi scelerisque eu ultrices. At ultrices mi tempus imperdiet nulla malesuada. Integer feugiat scelerisque varius morbi. Nunc sed augue lacus viverra vitae congue eu consequat ac. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Lorem sed risus ultricies tristique. Sit amet consectetur adipiscing elit ut. A pellentesque sit amet porttitor eget. Aenean sed adipiscing diam donec. Ac feugiat sed lectus vestibulum mattis ullamcorper velit.";
const textNumber = getRandomInt(0, (ivyText.length - 1));

const ivyContainer = document.getElementById('ivy-container');
const ivyP = document.getElementById('ivy');



// Main functions	----------------------------------------------------------------------------------------------------------------
function hedera(){
	let ivyHeight = ivyContainer.offsetHeight;
	let lineHeight = ivyHeight / 21;
	ivyP.style.fontSize = lineHeight + 'px';
	ivyP.style.lineHeight = lineHeight + 'px';
};

function typeWriterEffect() {
	if (ivyIndex < ivyText[textNumber].length) {
		document.getElementById("growth").innerHTML += ivyText[textNumber].charAt(ivyIndex);
		ivyIndex++;
		setTimeout(typeWriterEffect, speed);
	};
};









// SEAM CARVING SECTION	============================================================================================================
// Variables & elements	------------------------------------------------------------------------------------------------------------
const nyCarve = document.querySelector('#nycCarve');

if (nyCarve) {
	const frames = [
		'work/seam-carving/assets/content/maps/nyc/nyc-0.jpg',
		'work/seam-carving/assets/content/maps/nyc/nyc-1.jpg',
		'work/seam-carving/assets/content/maps/nyc/nyc-2.jpg'
	];

	let counter = 0;
	let direction = 1;
	let intervalId = null;

	function updateFrame() {
		nyCarve.src = frames[counter];
		counter += direction;

		if (counter === frames.length - 1 || counter === 0) {
			direction *= -1;
		}
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting && intervalId === null) {
				updateFrame();
				intervalId = setInterval(updateFrame, 1500);
			} else if (!entry.isIntersecting && intervalId !== null) {
				clearInterval(intervalId);
				intervalId = null;
			}
		});
	}, { threshold: 0.1 });

	observer.observe(nyCarve);
}










// SORT LATER	====================================================================================================================
// Variables & elements	------------------------------------------------------------------------------------------------------------
let isSortlaterVisible = false;
const sortlaterScroll = document.getElementById('sortlater-scroll');



// Page section observer	--------------------------------------------------------------------------------------------------------
const sortlaterObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		isSortlaterVisible = entry.isIntersecting;
	});
});

sortlaterObserver.observe(sortlaterScroll);



// Main function	----------------------------------------------------------------------------------------------------------------
function applySortLaterScroll(){
	let sortlaterContainer = sortlaterScroll.parentNode;
	let containerPos = sortlaterContainer.getBoundingClientRect().top;
	let minThreshold = sortlaterContainer.offsetHeight * -1;
	
	let offset = normalizeBetween(containerPos, minThreshold, viewerHeight, -200, 0);
	offset = Math.max(-200, Math.min(0, offset));


	sortlaterScroll.style.top = offset + '%';
};









// CROSSWALK POETICS	============================================================================================================
document.querySelector('#crosswalk-projection').playbackRate = 0.20;









// GLOBAL FUNCTIONS	================================================================================================================
function normalizeBetween(m, rmin, rmax, tmin, tmax){
	return(((m - rmin) / (rmax - rmin)) * (tmax - tmin) + tmin);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};