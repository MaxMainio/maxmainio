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
var vh = window.innerHeight;
console.log(vh);

const sections = document.querySelectorAll("article")


const sectionObserver = new IntersectionObserver(entries => {
	// console.log(entries)

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

			console.log(parallaxCalc(entry.target.offsetTop, windowScroll))
			
			// console.log(entry.target.offsetTop - windowScroll);

			// console.log(entry + "is intersecting " + entry.target.offsetTop + " " + windowScroll);
		} else {
			// var windowScroll = window.scrollY;
			// console.log(entry + "is not intersecting " + entry.target.offsetTop + " " + windowScroll);
		}
	})
})

sections.forEach(sections => {
	sectionObserver.observe(sections)
})







// Crosswalk poetics
document.querySelector("#crosswalk-projection").playbackRate = 0.20;