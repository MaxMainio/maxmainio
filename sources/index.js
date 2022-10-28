console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

// Splash
const splash = document.querySelector("#splash")

const splashObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("hide", entry.isIntersecting === false)
	})
})

splashObserver.observe(splash)

// Index
const indexBtn = document.querySelector("#index-btn")
const indexSection = document.querySelector("#index-section")

indexBtn.addEventListener("click", e => {
	indexSection.classList.toggle("hide")
})

// Parallax
// const sections = document.querySelectorAll("section")

// document.addEventListener("scroll", (sectionObserver) => {
// 	var sectionObserver = new IntersectionObserver(entries => {
// 		entries.forEach(entry => {
// 			console.log(entry);
// 		})
// 	})

// 	sections.forEach(sections => {
// 		sectionObserver.observe(sections)
// 	})
// })








var vh = window.innerHeight;
console.log(vh);
var vhNeg = vh * -1
const sections = document.querySelectorAll("section")


const sectionObserver = new IntersectionObserver(entries => {
	// console.log(entries)

	entries.forEach(entry => {
		if (entry.isIntersecting === true) {
			var windowScroll = window.scrollY;
			console.log("is intersecting " + entry.target.offsetTop + " " + windowScroll);
		} else {
			var windowScroll = window.scrollY;
			console.log("is not intersecting " + entry.target.offsetTop + " " + windowScroll);
		}
	})

	// entries.forEach(entry => {
	// 	document.addEventListener("scroll", () => {
	// 		var sectionLocation = entry.target.offsetTop;
	// 		var windowScroll = window.scrollY;
			
	// 		var scrollDifference = sectionLocation - windowScroll;

	// 		function limitNumberWithinRange(scrollDifference, min, max){
	// 			const MIN = min || vhNeg;
	// 			const MAX = max || vh;
	// 			var parsed = parseInt(scrollDifference)
	// 			return Math.min(Math.max(parsed, MIN), MAX)
	// 		}

	// 		var limited = limitNumberWithinRange (scrollDifference);

	// 		// console.log(limited);
	// 	})
		
	// 	// console.log(entry);
	// })
})

sections.forEach(sections => {
	sectionObserver.observe(sections)
})







// Crosswalk poetics
document.querySelector("#crosswalk-projection").playbackRate = 0.20;