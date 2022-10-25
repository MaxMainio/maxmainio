console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

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