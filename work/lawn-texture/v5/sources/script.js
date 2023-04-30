/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;
const flowerColorList = ['purples', 'reds', 'yellows'];

const lawnColors = [];
const flowerColors = [];
const waterColors = [];









/* ON CLICK EVENT ------------------------------------------------------------------------------------- */
window.addEventListener('click', event => {
    // spreadLawn();

    if (event.target.classList.contains('lawn') === true) {
        spreadTargetedLawn(event.target);
    } else if (event.target.classList.contains('flower') === true) {
        spreadTargetedFlower(event.target);
    } else if (event.target.classList.contains('water') === true) {
        console.log('water');
    };
});









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-texture/v5/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        const lawn = json[0].words.plants;
        const lawnCol = json[0].colors.plants;
        lawnColors.push(json[0].colors.plants);

        const flowers = json[0].words.flowers;
        const flowerCol = json[0].colors.flowers;
        flowerColors.push(json[0].colors.flowers);

        const water = json[0].words.water;
        const waterCol = json[0].colors.water;
        waterColors.push(json[0].colors.water);

        highLightFlowers(flowers, flowerCol);
        highlightLawn(lawn, lawnCol);
        highlightWater(water, waterCol);

        wrapRest();
});









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};