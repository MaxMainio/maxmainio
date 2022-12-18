// TURN ON SMOOTH SCROLL AFTER DELAY
setTimeout(function() {
	document.querySelector("html").style.scrollBehavior = "smooth"
}, 500);

// SPLASH
const splash = document.querySelector("#splash")

const splashObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("hide", entry.isIntersecting === false)
	})
})

splashObserver.observe(splash)

// INDEX
const indexBtn = document.querySelector("#index-btn")
const indexSection = document.querySelector("#index-section")

indexBtn.addEventListener("click", e => {
	indexSection.classList.toggle("hide")
})

// PARALLAX
const sections = document.querySelectorAll("article")

document.addEventListener("scroll", event => {
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
				var elements = entry.target.querySelectorAll("[data-rate]");
				var elementsIndex = 0, length = elements.length;
	
				for (elementsIndex; elementsIndex < length; elementsIndex++) {
					elements[elementsIndex].style.transform = "translate3d(0px, "+multiplier * elements[elementsIndex].dataset.rate+"px, 0px)"
				}
			}
		})
	})
	
	sections.forEach(sections => {
		sectionObserver.observe(sections)
	})
})

// CROSSWALK POETICS
document.querySelector("#crosswalk-projection").playbackRate = 0.20;

// FOOTER
window.onload = (event) => {
	var vw = window.innerWidth

	if (vw > 1000) {
		var standard = document.getElementById("footerDivStandard").offsetHeight;

		document.querySelectorAll('.footer-div')[0].style.minHeight = standard + "px";
		document.querySelectorAll('.footer-div')[1].style.minHeight = standard + "px";
    } else {
		document.querySelector(".footer-ice").setAttribute('data-rate', 0);
		document.querySelectorAll(".footer-div")[0].setAttribute('data-rate', 0);
		document.querySelectorAll(".footer-div")[1].setAttribute('data-rate', 0);
		document.querySelectorAll(".footer-div")[2].setAttribute('data-rate', 0);
	}
};

addEventListener("resize", e => {
    var vw = window.innerWidth

    if (vw > 1000) {
        var standard = document.getElementById("footerDivStandard").offsetHeight;

		document.querySelectorAll('.footer-div')[0].style.minHeight = standard + "px";
		document.querySelectorAll('.footer-div')[1].style.minHeight = standard + "px";
    } else {
		document.querySelectorAll('.footer-div')[0].style.minHeight = "auto";
		document.querySelectorAll('.footer-div')[1].style.minHeight = "auto";

		document.querySelector(".footer-ice").setAttribute('data-rate', 0);
		document.querySelectorAll(".footer-div")[0].setAttribute('data-rate', 0);
		document.querySelectorAll(".footer-div")[1].setAttribute('data-rate', 0);
		document.querySelectorAll(".footer-div")[2].setAttribute('data-rate', 0);
    }
});