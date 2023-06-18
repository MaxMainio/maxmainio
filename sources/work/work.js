// SWITCH TO SCROLL SMOOTH WHEN CLICKING ON INTERNAL LINKS
const internalAnchorLinks = document.querySelectorAll('a:is([target="_self"])');

internalAnchorLinks.forEach(item => {
	item.addEventListener('click', e => {
		document.querySelector('html').style.scrollBehavior = 'smooth'
	});
});









// REMOVE SPLASH WHEN IT EXITS VIEW
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
			}
		}
	});
});

splashObserver.observe(splash)









// TOGGLE OPEN AND CLOSED THE INDEX
document.querySelector('#index-btn').addEventListener('click', e => {
	const index = document.querySelector('#index');
	index.style.display = index.style.display === 'none' ? '' : 'none';
});









// PARALLAX
const sections = document.querySelectorAll('article')

document.addEventListener('scroll', event => {
	const sectionObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting === true) {
				var windowScroll = window.scrollY;
				var vh = window.innerHeight;
	
				function parallaxCalc (elementPos, windowPos) {
					var difference = elementPos - windowPos;
					var normalized = (difference - (vh * -1)) / (vh - (vh * -1));
					var normalOffset = (normalized * 2) - 1;
					return normalOffset
				}
	
				var multiplier = parallaxCalc(entry.target.offsetTop, windowScroll)
				var elements = entry.target.querySelectorAll('[data-rate]');
				var elementsIndex = 0, length = elements.length;
	
				for (elementsIndex; elementsIndex < length; elementsIndex++) {
					elements[elementsIndex].style.transform = 'translate3d(0px, '+multiplier * elements[elementsIndex].dataset.rate+'px, 0px)'
				}
			}
		})
	})
	
	sections.forEach(sections => {
		sectionObserver.observe(sections)
	})
})









// SEAM CARVING
const nyCarve = document.querySelector('#nyCarve');
let counter = 0;

var intervalId = window.setInterval(function(){
	counter ++

	if (counter%4 === 0) {
		nyCarve.src = 'work/seam-carving/assets/nyc-standard.jpg';
	} else if (counter%4 === 2){
		nyCarve.src = 'work/seam-carving/assets/nyc-stretched.jpg'
	} else {
		nyCarve.src = 'work/seam-carving/assets/nyc-shrunk.jpg'
	}
}, 1500);









// CROSSWALK POETICS
document.querySelector('#crosswalk-projection').playbackRate = 0.20;









// FOOTER
window.onload = (event) => {
	var vw = window.innerWidth

	if (vw > 1000) {
		var standard = document.getElementById('footerDivStandard').offsetHeight;

		document.querySelectorAll('.footer-div')[0].style.minHeight = standard + 'px';
		document.querySelectorAll('.footer-div')[1].style.minHeight = standard + 'px';
    }
};

addEventListener('resize', e => {
    var vw = window.innerWidth

    if (vw > 1000) {
        var standard = document.getElementById('footerDivStandard').offsetHeight;

		document.querySelectorAll('.footer-div')[0].style.minHeight = standard + 'px';
		document.querySelectorAll('.footer-div')[1].style.minHeight = standard + 'px';
    } else {
		document.querySelectorAll('.footer-div')[0].style.minHeight = 'auto';
		document.querySelectorAll('.footer-div')[1].style.minHeight = 'auto';
    }
});

const backToTop = document.querySelector('#top-btn');

backToTop.addEventListener('click', e => {
	document.querySelector('html').style.scrollBehavior = 'smooth'

	setTimeout(() => {
		window.scrollTo(0, 0);
	}, 1)
});