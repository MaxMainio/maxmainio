// EXPERIENCE TOGGLES
var allXpBtns = document.getElementsByClassName('xp-btn');

for (var i = allXpBtns.length-1; i >=0  ; i--) {
	allXpBtns[i].addEventListener('click', function() {
		var modal = this.id + '_modal'
		document.getElementById(modal).classList.toggle('hide')

		if (this.innerHTML === 'More...') {
			this.innerHTML = 'Less...'
		} else {
			this.innerHTML = 'More...'
		}
	})
}