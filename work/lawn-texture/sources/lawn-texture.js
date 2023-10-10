// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
const textField = document.querySelectorAll('p, h1, h2, h3:not(.offlimits), h4, h5, h6');

const lawnColors = [];
const waterColors = [];
const flowerTypes = {};
const colorsMapping = {
    'lawn': lawnColors,
};

const illegibleBtn = document.getElementById('legibility-btn');
var toggleCount = 0;









// JSON FETCH   ====================================================================================================================
fetch('../lawn-texture/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        const lawn = json.lawn;
        lawnColors.push(...json.lawn.colors);

        const flowers = json.flowers;
        const { purples, reds, yellows } = json.flowers.types;
        flowerTypes.purples = purples;
        flowerTypes.reds = reds;
        flowerTypes.yellows = yellows;

        initialHighLight(lawn, flowers);
});









// DOCUMENT SETUP   ================================================================================================================
function initialHighLight(lawn, flowers) {
    highlightWords(lawn);
    highlightGlyphs(flowers);

    wrapRest();
};



// Highlight functions  ------------------------------------------------------------------------------------------------------------
function highlightWords(currentPass) {
    const subject = currentPass.key;
    const search = currentPass.words;
    const colors = colorsMapping[subject];

    for (let i = 0; i < search.length; i++) {
        textField.forEach(element => {
            let replace = search[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');
            let colorNum = getRandomInt(0, (colors.length) - 1);

            element.innerHTML = element.innerHTML.replace(regex, '<span class="' + subject + '" style="background-color: ' + colors[colorNum] + ';" data-color="' + colorNum + '">$1</span>');
        });
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



// Suplimentary functions   --------------------------------------------------------------------------------------------------------
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



// Wrap wrest function  ------------------------------------------------------------------------------------------------------------
function wrapRest() {
    textField.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
    });
};









// SPREAD FUNCTIONS ================================================================================================================
function spreadFlowers(){
    let flowers = document.querySelectorAll('.flower')

    for (let i = 0; i < flowers.length; i++) {
        let target = getTargetInfo(flowers[i]);
        let coordinates = getCoordinates(target, 'flower');
        let tagged = getSurroundingFlower(coordinates, target.color);

        promoteFlower(tagged, target.color);
    };
};


function spreadLawn(){
    let turf = document.querySelectorAll('.lawn');
    
    for (let i = 0; i < turf.length; i++) {
        let target = getTargetInfo(turf[i]);
        
        if (target.color === '0') {
            continue;
        };
        
        let newColor = target.color - 1;

        let coordinates = getCoordinates(target, 'lawn');
        let tagged = getSurroundingLawn(coordinates);

        promoteLawn(tagged, newColor);
    };
};



// Promotion functions  ------------------------------------------------------------------------------------------------------------
function promoteLawn(tagged, newColor){
    for (let i = 0; i < tagged.length; i++) {
        if (tagged[i].classList.contains('lawn') || tagged[i].classList.contains('offlimits')) {
            continue;

        } else if (tagged[i].classList.contains('flower') || tagged[i].classList.contains('sprout')) {
            tagged[i].parentNode.classList.add('lawn');
            tagged[i].parentNode.style.backgroundColor = lawnColors[newColor];
            tagged[i].parentNode.setAttribute('data-color', newColor);

        } else {
            tagged[i].classList.add('lawn');
            tagged[i].style.backgroundColor = lawnColors[newColor];
            tagged[i].setAttribute('data-color', newColor);
        };
    };
};

function promoteFlower(promotable, color){
    for (let i = 0; i < promotable.length; i++) {
        if (promotable[i].classList.contains('sprout')){
            promotable[i].style.backgroundColor = flowerTypes[color][getRandomInt(0, flowerTypes[color].length)];
            promotable[i].classList.remove('sprout');
            promotable[i].classList.add('flower');
        };
    };
};









// UTILITY FUNCTIONS    ============================================================================================================
function getTargetInfo(turf){
    const style = getComputedStyle(turf);
    const fontSizeInPx = parseFloat(style.fontSize);
    const lineHeightValue = style.lineHeight === 'normal' ? fontSizeInPx * 1.2 : parseFloat(style.lineHeight);
    const letterSpacingValue = style.letterSpacing === 'normal' ? 0 : parseFloat(style.letterSpacing);
    
    let target = {};

    target['color'] = turf.dataset.color;
    target['location'] = [turf.getBoundingClientRect().left, turf.getBoundingClientRect().top];
    target['size'] = [turf.offsetWidth, turf.offsetHeight];
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
}



// Lawn specific  ------------------------------------------------------------------------------------------------------------
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



// Flower specific  ----------------------------------------------------------------------------------------------------------
function getSurroundingFlower(coordinates, color){
    let surroundings = [];

    for (let i = 0; i < coordinates.length; i = i + 2) {
        if (coordinates[i] < 0 || coordinates[i + 1] < 0 || coordinates[i] > window.innerWidth) {
            continue;
        }

        let current = document.elementFromPoint(coordinates[i], coordinates[i + 1]);

        if (!current) {
            continue;
        }

        if (current.classList.contains('flower')) {
            continue;
        };

        if (current.tagName === 'SPAN' && current.classList.length === 0 && current.children.length === 0) {
            const regex = new RegExp('(.)', 'gi');
            let split = current.innerHTML.match(regex);

            for (let j = 0; j < split.length; j++) {
                split[j] = '<span class="sprout" data-color="' + color + '">' + split[j] + '</span>';
            };

            let newHTML = split.join('');
            current.innerHTML = newHTML;

            surroundings.push(document.elementFromPoint(coordinates[i], coordinates[i + 1]));
        };

        if (current.classList.contains('sprout')) {
            surroundings.push(current);
        };
    };

    return (surroundings);
};









// METRONOME    ====================================================================================================================
var intervalId = window.setInterval(function(){
    spreadFlowers();
}, 1000);

var intervalTwoId = window.setInterval(function(){
    spreadLawn();
}, 2000);









// ILLEGIBILITY ====================================================================================================================
illegibleBtn.addEventListener('click', event => {
    let toWipe = document.querySelectorAll('.lawn, .flower');
    toggleCount++

    if (toggleCount % 2 === 1){
        toWipe.forEach(element => {
            clearSpans(element);
        });

        illegibleBtn.innerHTML = '<h3>Restart growth!<h3/>';
        illegibleBtn.title = 'If you want to restart the growth simulation you can click this button and it will refresh the page.';

    } else {
        location.reload();
    };
});

function clearSpans(toWipe){
    clearInterval(intervalId);
    clearInterval(intervalTwoId);

    toWipe.classList.remove('lawn');
    toWipe.classList.remove('flower');
    toWipe.removeAttribute('style');
    toWipe.removeAttribute('data-color');
};









// GLOBAL FUNCTIONS ================================================================================================================
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};