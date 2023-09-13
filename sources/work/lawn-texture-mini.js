/* CONSTANTS ========================================================================================================================= */
const textField = document.getElementById('lawn1');

const lawnObj = {};
const flowersObj = {};

let lawnIndex = 0;
let allLawnPatches = [];
let activeLawnPatches = [];

let flwoerIndex = 0;
let allFlowerPatches = [];
let activeFlowerPatches = [];








// var lawnSpreadInterval = window.setInterval(function(){
//     lawnSpread();
//     updateLawnArrays();
// }, 2000);

// var flowerSpreadInterval = window.setInterval(function(){
//     spreadFlowers();
// }, 1000);

// window.addEventListener('resize', (event) => {
//     refreshAllArrays();
// });









/* JSON FETCH ======================================================================================================================== */
fetch('https://maxmain.io/work/lawn-texture/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        prepLawnObject(json.lawn);
        prepFlowerObject(json.flowers);

        prepTextField();
});









function prepLawnObject(lawnData){
    const {key, words, colors} = lawnData;
    lawnObj.key = key;
    lawnObj.words = words;
    lawnObj.colors = colors;
};

function prepFlowerObject(flowersData){
    const {key, words, types} = flowersData;
    flowersObj.key = key;
    flowersObj.words = words;
    flowersObj.types = types;
};









/* DOCUMENT SETUP ==================================================================================================================== */
function prepTextField(){
    // highlightLawn();
    highlightFlowers();
    // wrapRest();
    
    // updateLawnArrays();
};





function highlightLawn(){
    const subject = lawnObj.key;
    const searchFor = lawnObj.words;
    const colors = lawnObj.colors;

    for (let i = 0; i < searchFor.length; i++) {
        let replace = searchFor[i];
        const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');
        let seedColor = getRandomInt(0, (colors.length) - 1);
    
        textField.innerHTML = textField.innerHTML.replace(regex, '<span class="' + subject + '" style="background-color: ' + colors[seedColor] + ';" data-color="' + seedColor + '">$1</span>');
    };
};



function highlightFlowers(){
    const subject = flowersObj.key;
    const searchFor = flowersObj.words;
    const types = flowersObj.types;
    const typeKeys = Object.keys(types);

    const clumps = defineBushes(searchFor, types, typeKeys);
};

function defineBushes(searchFor, types, typeKeys) {
    for (let i = 0; i < searchFor.length; i++) {
        // Iterate through all flower words and look for them in the text.
        const regex = new RegExp('((?<!<[^>]+>)' + searchFor[i] + '(?![^<]*>))', 'gi');
        
        // For each instance found, do the following:
        textField.innerHTML = textField.innerHTML.replace(regex, function(match) {
            // Select random color type and assign to variable:
            let chosenType = typeKeys[getRandomInt(0, (typeKeys.length - 1))];

            // Split this word into letters, pass on chosen type:
            let newHTML = splitBushes(match, chosenType);

            return(newHTML);
        });
    };
};

function splitBushes(match, chosenType){
    // Collect individual glyph spans in this array:
    let newHTML = [];
    const regex = new RegExp('([' + match + '])', 'gi');

    // For every individual glyph in the word:
    match.replace(regex, function(matched){
        // Get random color from type and wrap the glyph:
        flowerColor = flowersObj.types[chosenType][getRandomInt(0, (chosenType.length - 1))];
        wrappedGlyph = '<span class="flower" style="background-color: ' + flowerColor + '"; data-color="' + chosenType + '">' + matched + '</span>';

        newHTML.push(wrappedGlyph);

        return newHTML;
    });

    return newHTML.join('');
};



function wrapRest(){
    textField.innerHTML = textField.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
};









function updateLawnArrays(){
    activeLawnPatches = [];

    document.querySelectorAll('.lawn').forEach((element) => {
        if (!allLawnPatches.includes(element)) {
            allLawnPatches.push(element);
            activeLawnPatches.push(element);
        };
    });
};

function refreshAllArrays(){
    activeLawnPatches = [];
    activeLawnPatches.push(...allLawnPatches);
};









function lawnSpread(){
    for (let i = 0; i < activeLawnPatches.length; i++) {
        let target = getTargetInfo(activeLawnPatches[i]);
        
        if (target.color === '0') {
            continue;
        };
        
        let newColor = target.color - 1;
        
        let coordinates = getCoordinates(target, 'lawn');
        let tagged = getSurroundingLawn(coordinates);

        promoteLawn(tagged, newColor);
    };
};









function getTargetInfo(current){
    const style = getComputedStyle(current);

    const fontSizeInPx = parseFloat(style.fontSize);
    const lineHeightValue = style.lineHeight === 'normal' ? fontSizeInPx * 1.2 : parseFloat(style.lineHeight);
    const letterSpacingValue = style.letterSpacing === 'normal' ? 0 : parseFloat(style.letterSpacing);

    let target = {};

    target['color'] = current.dataset.color;
    target['location'] = [current.getBoundingClientRect().left, current.getBoundingClientRect().top];
    target['size'] = [current.offsetWidth, current.offsetHeight];
    target['style'] = [fontSizeInPx, lineHeightValue, letterSpacingValue];

    return(target);
};


function getCoordinates(target, type) {
    let leftX = target.location[0] - (target.style[0] / 2);
    let centerX = target.location[0] + (target.size[0] / 2);
    let rightX = target.location[0] + target.size[0] + (target.style[0] / 2);

    let topY = target.location[1] + target.size[1] - (target.style[1] + 1);
    let centerY = target.location[1] + (target.size[1] / 2);
    let bottomY = target.location[1] + target.style[1] + 1;

    let coordinates = type === 'lawn' ? [
        centerX, topY,
        rightX, topY,
        rightX, centerY,
        rightX, bottomY,
        centerX, bottomY,
        leftX, bottomY,
        leftX, centerY,
        leftX,topY
    ] : [
        centerX, topY,
        rightX, centerY,
        centerX, bottomY,
        leftX, centerY,
    ];

    return coordinates;
};

function getSurroundingLawn(coordinates){
    let surroundings = [];

    for (let i = 0; i < coordinates.length; i = i + 2) {
        let tagged = document.elementFromPoint(coordinates[i], coordinates[i + 1]);

        if (tagged !== null && tagged.tagName === 'SPAN') {
            surroundings.push(tagged);
        }
    };

    return (surroundings);
};

function promoteLawn(tagged, newColor){
    for (let i = 0; i < tagged.length; i++) {
        if (tagged[i].classList.contains('lawn')) {
            continue;

        } 
        else if (tagged[i].classList.contains('flower') || tagged[i].classList.contains('sprout')) {
            tagged[i].parentNode.classList.add('lawn');
            tagged[i].parentNode.style.backgroundColor = lawnObj.colors[newColor];
            tagged[i].parentNode.setAttribute('data-color', newColor);

        } 
        else {
            tagged[i].classList.add('lawn');
            tagged[i].style.backgroundColor = lawnObj.colors[newColor];
            tagged[i].setAttribute('data-color', newColor);
        };
    };
};









/* SUPPORT =========================================================================================================================== */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};