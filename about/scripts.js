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


// const xpBtn = document.querySelector(".xp-btn")

// xpBtn.addEventListener("click", e => {
// 	var parent = xpBtn.closest(".xp-div")
// 	var xpText = parent.querySelector(".xp-text")

// 	xpText.classList.toggle("hide");

// 	if (xpBtn.innerHTML === "More...") {
// 		xpBtn.innerHTML = "Less...";
// 	} else {
// 		xpBtn.innerHTML = "More...";
// 	}
// })

// var allXpBtns = document.getElementsByClassName("xp-btn");

// for (var i = allXpBtns.length-1; i >=0  ; i--) {
// 	(function () {
// 		var modal = allXpBtns[i].id + "_modal"
// 		allXpBtns[i].addEventListener("mouseenter", function() { 
// 			document.getElementById(modal).style.display = "block"; }, false)
// 		allXpBtns[i].addEventListener("mouseleave", function() { 
// 			document.getElementById(modal).style.display = "none"; }, false)
// 	}()); // immediate invocation
// 	}

var allXpBtns = document.getElementsByClassName("xp-btn");

for (var i = allXpBtns.length-1; i >=0  ; i--) {
	(function () {
		var modal = allXpBtns[i].id + "_modal"
		allXpBtns[i].addEventListener("click", function() { 
			document.getElementById(modal).classList.toggle("hide")
			
			if (allXpBtns[i].innerHTML === "More..."){
				allXpBtns[i].innerHTML = "Less...";
			} else {
				allXpBtns[i].innerHTML = "More...";
			}
		

		
		}, false)


	}());
	}