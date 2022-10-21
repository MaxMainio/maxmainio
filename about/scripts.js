console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

const  buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1
		const slides = button
			.closest("[data-carousel]")
			.querySelector("[data-slides]")

		const activeSlide = slides.querySelector("[data-active]")
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})


var allXpBtns = document.getElementsByClassName("xp-btn");

for (var i = allXpBtns.length-1; i >=0  ; i--) {
	(function () {
		var modal = allXpBtns[i].id + "_modal"
		allXpBtns[i].addEventListener("click", function() { 
			document.getElementById(modal).classList.toggle("hide")		
		}, false)
	}());
}


var elements = document.getElementsByClassName("xp-btn");

for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener("click", function() {
		var selected = this.id;

		if (document.getElementById(selected).innerHTML === "More...") {
			document.getElementById(selected).innerHTML = "Less...";
		} else {
			document.getElementById(selected).innerHTML = "More...";
		}
    }, true);
}