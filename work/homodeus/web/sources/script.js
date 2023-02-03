console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

// LOADING BAR
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("loading-bar").style.height = scrolled + "%";
}









// FOOTNOTES
const footnotes = document.querySelectorAll('.footnote');

for (var i = footnotes.length-1; i >=0  ; i--) {
  footnotes[i].addEventListener('mouseover', function() {
    var arrows = this.id + '-arrows'

    document.getElementById(arrows).classList.toggle('hidden')
  })

  footnotes[i].addEventListener('mouseout', function() {
    var arrows = this.id + '-arrows'

    document.getElementById(arrows).classList.toggle('hidden')
  })
}