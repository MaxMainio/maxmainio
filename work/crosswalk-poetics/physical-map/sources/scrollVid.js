// CANVAS INITIALIZATION  ==========================================================================================================
const canvas = document.getElementById('moss-sim');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 1000;









// SIMULATION SETUP ================================================================================================================
const selectedSim = randomIntFromInterval(1, 3).toString();
const frameCount = 80;
const currentFrame = index => (
  `https://maxmain.io/work/crosswalk-poetics/physical-map/assets/content/moss-sim-${selectedSim}/moss-${(index + 1).toString().padStart( '0')}.png`
);



// Image preloading ----------------------------------------------------------------------------------------------------------------
const images = []
const moss = {frame: 0};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
};









// SCROLL ANIMATION WITH GSAP ======================================================================================================
images[0].onload = render;

gsap.to(moss, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render
});

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[moss.frame], 0, 0); 
}









// GLOBAL FUNCTIONS ================================================================================================================
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}