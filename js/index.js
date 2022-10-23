console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

const indexBtn = document.querySelector("#index-btn")
const indexSection = document.querySelector("#index-section")

indexBtn.addEventListener("click", e => {
	indexSection.classList.toggle("hide")
})

document.querySelector("#crosswalk-projection").playbackRate = 0.20;