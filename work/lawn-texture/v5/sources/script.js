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
        const lawn = json.lawn;
        lawnColors.push(...json.lawn.colors);

        const water = json.water;
        waterColors.push(...json.water.colors);

        const flowers = json.flowers;
        const { purples, reds, yellows } = json.flowers.types;
        flowerTypes.purples = purples;
        flowerTypes.reds = reds;
        flowerTypes.yellows = yellows;



        initialHighLight(lawn, water, flowers);
});



function initialHighLight(lawn, water,flowers) {
    highlightWords(lawn);
    highlightWords(water);
    highlightGlyphs(flowers);

    wrapRest();
};









function highlightWords(currentPass) {
    const subject = currentPass.key;
    const search = currentPass.words;
    const colors = eval(subject + 'Colors');

    for (let i = 0; i < search.length; i++) {
        textField.forEach(element => {
            let replace = search[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');
            let colorNum = getRandomInt(0, (colors.length) - 1);

            element.innerHTML = element.innerHTML.replace(regex, '<span class="' + subject + '" style="background-color: ' + colors[colorNum] + ';" data-color="' + colorNum + '">$1</span>');
        })
    };
};









function highlightGlyphs(currentPass) {
    const subject = currentPass.key;
    const search = currentPass.words;
    const types = currentPass.types;
    const typeKeys = Object.keys(types);



    const clumps = defineClumps(search);

    for (let i = 0; i < clumps.length; i++) {
        splitClumps(clumps[i], types, typeKeys);
    }


    clumps.forEach(element => element.removeAttribute('class'));
};



function defineClumps(search) {
    for (let i = 0; i < search.length; i++) {
        textField.forEach(element => {
            let replace = search[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');

            element.innerHTML = element.innerHTML.replace(regex, '<span class="clump">$1</span>');
        })
    };
    
    let clumps = document.querySelectorAll('.clump');
    return (clumps);
};



function splitClumps(clump, types, typeKeys) {
    let replace = clump.innerHTML;
    const regex = new RegExp('([' + replace + '])', 'gi');
    let split = clump.innerHTML.match(regex);

    let chosenType = typeKeys[getRandomInt(0, (typeKeys.length - 1))];
    let colors = types[chosenType];

    for (let i = 0; i < split.length; i++) {
        split[i] = '<span class="flower" style="background-color: ' + colors[getRandomInt(0, (colors.length) - 1)] + ';" data-color="' + chosenType + '">' + split[i] + '</span>';
    };

    let newHTML = split.join('');
    clump.innerHTML = newHTML;
};









function wrapRest() {
    textField.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
    });
};









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};