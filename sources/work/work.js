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
			};
		};
	});
});

splashObserver.observe(splash);









// TOGGLE OPEN AND CLOSED THE INDEX
document.querySelector('#index-btn').addEventListener('click', e => {
	const index = document.querySelector('#index');
	index.style.display = index.style.display === 'none' ? '' : 'none';
});









// PARALLAX
const sections = document.querySelectorAll('article');

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
				};
	
				var multiplier = parallaxCalc(entry.target.offsetTop, windowScroll);
				var elements = entry.target.querySelectorAll('[data-rate]');
				var elementsIndex = 0, length = elements.length;
	
				for (elementsIndex; elementsIndex < length; elementsIndex++) {
					elements[elementsIndex].style.transform = 'translate3d(0px, ' + multiplier * elements[elementsIndex].dataset.rate + 'px, 0px)'
				};
			};
		});
	});
	
	sections.forEach(sections => {
		sectionObserver.observe(sections)
	});
});





// let options = {
// 	root: null, // Use the viewport as the root.
// 	rootMargin: '0px', // No margins.
// 	threshold: 0 // Call the callback when half of the target is visible.
// };

// let callback = (entries, observer) => {
// 	entries.forEach(entry => {
// 	  if (entry.isIntersecting) {
// 		// Target is visible.
// 		console.log('Target is visible');
// 	  } else {
// 		// Target is not visible.
// 		console.log('Target is not visible');
// 	  };
// 	});
// };

// let observer = new IntersectionObserver(callback, options);

// // Target the element to observe.
// sections.forEach(section => {
// 	observer.observe(section);
// });



// // Define your scroll handler function.
// function scrollHandler(e) {
// 	console.log('Scroll position:', window.scrollY);
// };

// window.addEventListener('scroll', scrollHandler);





// const sections = document.querySelectorAll('article');

// // Define your threshold width for mobile devices
// const mobileWidth = 900; // Or whatever you define as the threshold

// // Function to calculate parallax offset
// function parallaxCalc (elementPos, windowPos, windowHeight) {
//     let difference = elementPos - windowPos;
//     let normalized = (difference - (windowHeight * -1)) / (windowHeight - (windowHeight * -1));
//     let normalOffset = (normalized * 2) - 1;
//     return normalOffset;
// }

// // Scroll event listener
// document.addEventListener('scroll', event => {
//     let windowScroll = window.scrollY;
//     let windowHeight = window.innerHeight;

//     // Loop over each section
//     for (let section of sections) {
//         // Calculate the parallax multiplier based on the section's position and the window's scroll position
//         let multiplier = parallaxCalc(section.offsetTop, windowScroll, windowHeight);

//         // Check if window width is smaller than defined mobile width
//         if (window.innerWidth <= mobileWidth) {
//             multiplier /= 2; // Halve the multiplier on mobile
//         }

//         // Find all elements in the section that have a 'data-rate' attribute
//         let elements = section.querySelectorAll('[data-rate]');

//         // Apply a 3D transformation to each element based on its 'data-rate' attribute
//         for (let element of elements) {
//             element.style.transform = `translate3d(0px, ${multiplier * element.dataset.rate}px, 0px)`;
//         }
//     }
// });









// SEAM CARVING
const nyCarve = document.querySelector('#nycCarve');
let counter = 0;

var intervalId = window.setInterval(function(){
	counter ++

	if (counter%4 === 0) {
		nyCarve.src = 'work/seam-carving/assets/maps/nyc/nyc-0.jpg';
	} else if (counter%4 === 2){
		nyCarve.src = 'work/seam-carving/assets/maps/nyc/nyc-2.jpg'
	} else {
		nyCarve.src = 'work/seam-carving/assets/maps/nyc/nyc-1.jpg'
	};
}, 1500);









// CROSSWALK POETICS
document.querySelector('#crosswalk-projection').playbackRate = 0.20;