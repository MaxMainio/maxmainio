console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

// Splash
const splash = document.querySelector("#splash")

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("hide", entry.isIntersecting === false)
	})
	console.log(entries)
})

observer.observe(splash)

// Index
const indexBtn = document.querySelector("#index-btn")
const indexSection = document.querySelector("#index-section")

indexBtn.addEventListener("click", e => {
	indexSection.classList.toggle("hide")
})

// Crosswalk poetics
document.querySelector("#crosswalk-projection").playbackRate = 0.20;