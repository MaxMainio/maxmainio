/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;
const flowerColorList = ['purples', 'reds', 'yellows'];

const lawnColors = [];
const waterColors = [];
const flowerTypes = {};









/* ON CLICK EVENT ------------------------------------------------------------------------------------- */
window.addEventListener('click', event => {
    // spreadLawn();
});









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-texture/v5/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        const lawn = json.lawn.words;
        lawnColors.push(...json.lawn.colors);
        console.log(json.lawn);

        const water = json.water.words;
        waterColors.push(...json.water.colors);

        const flowers = json.flowers.words;
        const { purples, reds, yellows } = json.flowers.types;
        flowerTypes.purples = purples;
        flowerTypes.reds = reds;
        flowerTypes.yellows = yellows;



        initialHighLight(lawn, water, flowers);
});




function initialHighLight(lawn, water,flowers) {
    highlightWords(lawn);
    highlightWords(water);
    // highlightGlyphs(flowers);

    // wrapWrest();
};



function highlightWords(keyWords) {

}












/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};