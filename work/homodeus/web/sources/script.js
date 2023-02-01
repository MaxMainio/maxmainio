console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("loading-bar").style.height = scrolled + "%";
}