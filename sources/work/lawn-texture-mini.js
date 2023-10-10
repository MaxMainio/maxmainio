// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
const textField = document.getElementById('lawn1');

const lawnObj = {};
const flowersObj = {};

let lawnIndex = 0;
let allLawnPatches = [];
let activeLawnPatches = [];

let flwoerIndex = 0;
let allFlowerPatches = [];
let activeFlowerPatches = [];

let isRefreshing = false;









// JSON FETCH   ====================================================================================================================
fetch('../../work/lawn-texture/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        prepLawnObject(json.lawn);
        prepFlowerObject(json.flowers);

        prepTextField();
});









// DOCUMENT SETUP   ================================================================================================================
function prepTextField(){
    highlightLawn();
    highlightFlowers();
    wrapRest();
    
    updateLawnArrays();
    updateFlowerArrays();
};



// Setup flora objects  ------------------------------------------------------------------------------------------------------------
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



// Highlight functions  ------------------------------------------------------------------------------------------------------------
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

    defineBushes(searchFor, types, typeKeys);
};



// Suplimentary functions   --------------------------------------------------------------------------------------------------------
function defineBushes(searchFor, types, typeKeys) {
    for (let i = 0; i < searchFor.length; i++) {
        const regex = new RegExp('((?<!<[^>]+>)' + searchFor[i] + '(?![^<]*>))', 'gi');
        
        textField.innerHTML = textField.innerHTML.replace(regex, function(match) {
            let chosenType = typeKeys[getRandomInt(0, (typeKeys.length - 1))];

            let newHTML = splitBushes(match, chosenType);

            return(newHTML);
        });
    };
};

function splitBushes(match, chosenType){
    let newHTML = [];
    const regex = new RegExp('([' + match + '])', 'gi');

    match.replace(regex, function(matched){
        flowerColor = flowersObj.types[chosenType][getRandomInt(0, (chosenType.length - 1))];
        wrappedGlyph = '<span class="flower" style="background-color: ' + flowerColor + '"; data-color="' + chosenType + '">' + matched + '</span>';

        newHTML.push(wrappedGlyph);

        return newHTML;
    });

    newHTML = '<span>' + newHTML.join('') + '</span>';

    return newHTML;
};



// Wrap wrest function  ------------------------------------------------------------------------------------------------------------
function wrapRest(){
    textField.innerHTML = textField.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
};









// MAIN FUNCTIONS   ================================================================================================================
function runLawnSpread(){
    spreadLawn();
    updateLawnArrays();

    stopTrigger(activeLawnPatches, 'lawn');
};

function runFlowerSpread(){
    spreadFlowers();
    updateFlowerArrays();

    stopTrigger(activeFlowerPatches, 'flower');
};


// Spread functions ----------------------------------------------------------------------------------------------------------------
function spreadLawn(){
    for (let i = 0; i < activeLawnPatches.length; i++){
        let target = getTargetInfo(activeLawnPatches[i]);
        
        if (target.color === '0') {
            continue;
        };
        
        let newColor = target.color - 1;
        
        let coordinates = getCoordinates(target, 'lawn');
        let tagged = getSurroundings(coordinates, 'lawn');

        promoteLawn(tagged, newColor);
    };
};

function spreadFlowers() {
    for (let i = 0; i < activeFlowerPatches.length; i ++){
        let target = getTargetInfo(activeFlowerPatches[i]);
        let coordinates = getCoordinates(target, 'flower');
        let tagged = getSurroundings(coordinates, 'flower');

        promoteFlowers(tagged, target.color);
    };
};



// Promotion functions  ------------------------------------------------------------------------------------------------------------
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

function promoteFlowers(promotable, colors){
    for (let i = 0; i < promotable.length; i++) {
        if (promotable[i].classList.contains('sprout')){
            promotable[i].style.backgroundColor = flowersObj.types[colors][getRandomInt(0, flowersObj.types[colors].length)];
            promotable[i].classList.remove('sprout');
            promotable[i].classList.add('flower');
            promotable[i].setAttribute('data-color', colors);
        };
    };
};



// Array maintenance    ------------------------------------------------------------------------------------------------------------
function updateLawnArrays(){
    activeLawnPatches = [];

    document.querySelectorAll('.lawn').forEach((element) => {
        if (!allLawnPatches.includes(element)) {
            allLawnPatches.push(element);
            activeLawnPatches.push(element);
        };
    });
};

function updateFlowerArrays(){
    activeFlowerPatches = [];

    document.querySelectorAll('.flower').forEach((element) => {
        if (!allFlowerPatches.includes(element)) {
            allFlowerPatches.push(element);
            activeFlowerPatches.push(element);
        };
    });
};

function refreshAllArrays(){
    isRefreshing = true;
    activeLawnPatches = [];
    activeFlowerPatches = [];
    
    activeLawnPatches.push(...allLawnPatches);
    activeFlowerPatches.push(...allFlowerPatches);

    clearInterval(lawnSpreadInterval);
    clearInterval(flowerSpreadInterval);
    lawnSpreadInterval = setInterval(runLawnSpread, 2000);
    flowerSpreadInterval = setInterval(runFlowerSpread, 1000);

    isRefreshing = false;
};









// UTILITY FUNCTIONS    ============================================================================================================
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



function getSurroundings(coordinates, type){
    let surroundings = [];

    if (type === 'lawn'){
        for (let i = 0; i < coordinates.length; i = i + 2){
            if (coordinates[i] < 0 || coordinates[i + 1] < 0 || coordinates[i] > window.innerWidth || coordinates[i + 1] > window.innerHeight){
                continue;
            };
            
            let tagged = document.elementFromPoint(coordinates[i], coordinates[i + 1]);
    
            if (tagged !== null && tagged.tagName === 'SPAN' && tagged.classList.contains('offlimits') === false){
                surroundings.push(tagged);
            };
        };
    }
    
    else if (type === 'flower') {
        for (let i = 0; i < coordinates.length; i = i + 2){
            if (coordinates[i] < 0 || coordinates[i + 1] < 0 || coordinates[i] > window.innerWidth || coordinates[i + 1] > window.innerHeight){
                continue;
            };

            let current = document.elementFromPoint(coordinates[i], coordinates[i + 1]);

            if (!current){
                continue;
            };

            if (current.classList.contains('flower')){
                continue;
            };

            if (current.tagName === 'SPAN' && current.classList.length === 0 && current.children.length === 0){
                const regex = new RegExp('(.)', 'gi');
                let split = current.innerHTML.match(regex);

                for (let j = 0; j < split.length; j++) {
                    split[j] = '<span class="sprout">' + split[j] + '</span>';
                };

                let newHTML = split.join('');
                current.innerHTML = newHTML;

                surroundings.push(document.elementFromPoint(coordinates[i], coordinates[i + 1]));
            };

            if (current.classList.contains('sprout')) {
                surroundings.push(current);
            };
        };
    };

    return (surroundings);
};









// METRONOME    ====================================================================================================================
var lawnSpreadInterval = setInterval(runLawnSpread, 2000);
var flowerSpreadInterval = setInterval(runFlowerSpread, 1000);

function stopTrigger(activeArray, type){
    if (activeArray.length === 0 && type === 'lawn'){
        clearInterval(lawnSpreadInterval);
    } else if (activeArray.length === 0 && type === 'flower'){
        clearInterval(flowerSpreadInterval);
    };
};









// EVENT TRIGGERS & OBSERVERS   ====================================================================================================
window.addEventListener('resize', refreshAllArrays);



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            refreshAllArrays();
        };
    });
});

observer.observe(textField);









// GLOBAL FUNCTIONS ================================================================================================================
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};