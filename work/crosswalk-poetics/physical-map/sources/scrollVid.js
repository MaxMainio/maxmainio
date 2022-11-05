var frameNumber = 0, // start video at frame 0
playbackConst = 500, // lower numbers = faster playback
setHeight = document.getElementById("set-height"), // get page height from video duration			
vid = document.getElementById('v0'); // select video element

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
	setHeight.style.height = Math.floor(vid.duration) * playbackConst * 2.8 + "px";
	console.log(Math.floor(vid.duration));
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
	var frameNumber  = window.pageYOffset/playbackConst;
	vid.currentTime  = frameNumber;
	window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);