/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;
const flowerColorList = ['purples', 'reds', 'yellows'];

const lawnColors = [];
const flowerTypes = {};
const waterColors = [];









/* ON CLICK EVENT ------------------------------------------------------------------------------------- */
window.addEventListener('click', event => {
    // spreadLawn();
});









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-texture/v5/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        const lawn = json[0].words.plants;
        lawnColors.push(...json[0].colors.plants);
        // console.log(lawn);
        // console.log(lawnColors);

        const flowers = json[0].words.flowers;
        const { purples, reds, yellows } = json[0].colors.flowers;
        flowerTypes.purples = purples;
        flowerTypes.reds = reds;
        flowerTypes.yellows = yellows;
        // console.log(flowers);
        // console.log(flowerTypes);

        const water = json[0].words.water;
        waterColors.push(...json[0].colors.water);
        // console.log(water);
        // console.log(waterColors);



        initialHighlight(lawn, flowers, water);
});



function initialHighlight(lawn, flwoers, water){
    highlightLawn(lawn);
    highlightWater(water);
}









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};