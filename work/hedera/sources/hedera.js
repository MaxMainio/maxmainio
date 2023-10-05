const sampleContainer = document.getElementById('sample-container');



const allSliders = document.querySelectorAll('.slider');
const sampleFontSizeSlider = document.getElementById('sampleFontSize');
const sampleLineHeightSlider = document.getElementById('sampleLineHeight');
const sampleOffsetSlider = document.getElementById('sampleOffset');

const sampleContextualCheck = document.getElementById('sampleContextual');
const sampleColorPicker = document.getElementById('sampleColorizor');



const sampleBG = document.getElementById('sampleBG');
const textSample = document.getElementById('textSample');

var allScalers = document.querySelectorAll('.sample-anatomy');

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);



var sampleFontSize = 10;
var sampleLineHeight = 1.1;
var sampleElementSize = sampleFontSize * rem * sampleLineHeight;
var sampleRenderedSize = sampleFontSize * 1.1 * rem;

var sampleRowsNumber = Math.round(textSample.offsetHeight / sampleElementSize);;
var overShoot = (sampleElementSize - sampleRenderedSize) / 2;









// GLOBAL TRIGGERS	----------------------------------------------------------------------------------------------------------------
window.addEventListener('load', e => {
    setSampleBG();
});

window.addEventListener('pageshow', e => {
    heroSwap();
    fitHeroIvy();
});

window.addEventListener('resize', e => {
    viewerHeight = window.innerHeight;
	viewerWidth = window.innerWidth;

    setSampleBG();
    fitHeroIvy();
});









// GLOBAL ELEMENTS  ----------------------------------------------------------------------------------------------------------------
var viewerHeight = window.innerHeight;
var viewerWidth = window.innerWidth;









// HERO ----------------------------------------------------------------------------------------------------------------------------
const heroFlower = document.getElementById('hero-flower');
const heroIvy = document.getElementById('hero-ivy');

// Hero Texts
heroTxt = new Array();
heroTxt[0] = "Hedera: A unique typeface blending structured design with organic ivy-inspired dynamics. Experience the fusion of human craftsmanship and nature's unpredictability";
heroTxt[1] = "Where Ivy truly shines is in its embodiment of a delicate balance. At its core, the typeface is a testament to human design - structured, precise, and meticulously crafted. Yet, it draws its vitality from the capricious patterns of nature. Mirroring the spontaneous growth of ivy plants, the connections between letters don't just follow but intertwine, mimicking the winding tendrils of creeping vines.";
heroTxt[2] = "These dynamic connections, enabled through inventive OpenType features, make the text come alive, reminiscent of flora seeking its path, wrapping and climbing structures. It's this intricate dance.a collaboration between the methodical strokes of human design and the wild, unrestrained spirit of nature.that defines Ivy.";
heroTxt[3] = "At the heart of Project Ivy is an evolution that mirrors the natural world. Drawing inspiration from the resilient growth of ivy plants, the typeface exhibits an organic dynamism. As one types, the letters do not merely follow one another but instead interlace, intertwine, and overlap.";
heroTxt[4] = "The connections between glyphs mimic the intricate and unpredictable pathways of climbing vines, each character searching for its foothold and meandering its way across the canvas. This transformative feature, where letters don't just succeed but merge and meld, celebrates the harmony between structured design and the free spirit of nature.";



function heroSwap(){
    const selectedIMG = getRandomInt(1, 4);
    const selectedTXT = getRandomInt(0, (heroTxt.length - 1));

    heroFlower.src = 'assets/content/flowers/flower-' + selectedIMG + '.webp';
    heroFlower.style.backgroundImage = 'url(assets/no-index/flower-' + selectedIMG + '-small.webp)';

    heroIvy.innerHTML = heroTxt[selectedTXT];
};



function fitHeroIvy(){
    let width = heroFlower.offsetWidth;
    let newMeasurements = width * 0.06;

    heroIvy.style.fontSize = newMeasurements + 'px';
    heroIvy.style.lineHeight = newMeasurements + 'px';
};









// GLOBAL   ------------------------------------------------------------------------------------------------------------------------
allSliders.forEach((element) => {
    element.addEventListener('mousedown', e => {
        document.documentElement.style.setProperty('--sliderCursor', 'grabbing');
    });

    element.addEventListener('mouseup', e => {
        document.documentElement.style.setProperty('--sliderCursor', 'grab');
    });
});









// TYPE PREVIEW --------------------------------------------------------------------------------------------------------------------
// PREVIEW Interactivity
sampleFontSizeSlider.oninput = function() {
    sampleFontSize = sampleFontSizeSlider.value / 10;
    document.documentElement.style.setProperty('--sampleSize', sampleFontSize + 'rem');
    setSampleBG();
};

sampleLineHeightSlider.oninput = function() {
    sampleLineHeight = sampleLineHeightSlider.value / (10 / 1.1);
    document.documentElement.style.setProperty('--sampleHeight', sampleLineHeight);
    setSampleBG();
};

sampleOffsetSlider.oninput = function() {
    document.documentElement.style.setProperty('--sampleOffset', sampleOffsetSlider.value);
};



function contextToggle(){
    console.log('clicked');
    if (sampleContextualCheck.checked == true){
        document.documentElement.style.setProperty('--caltToggle', 1);
        sampleContextualCheck.nextElementSibling.innerHTML = 'Disconnect';

    } else {
        document.documentElement.style.setProperty('--caltToggle', 0);
        sampleContextualCheck.nextElementSibling.innerHTML = 'Reconnect';
    };
};

sampleColorPicker.oninput = function() {
    document.documentElement.style.setProperty('--sampleColor', sampleColorPicker.value);
};









// Auto scale the background
function setSampleBG(){
    let newHeight = textSample.offsetHeight;
    
    sampleElementSize = sampleFontSize * rem * sampleLineHeight;
    sampleRenderedSize = sampleFontSize * 1.1 * rem;

    sampleRowsNumber = Math.round(newHeight / sampleElementSize);
    overShoot = (sampleElementSize - sampleRenderedSize) / 2;



    document.documentElement.style.setProperty('--overshoot', (overShoot * -1) + 'px');
    sampleBG.style.height = newHeight - (overShoot * 2) + 'px';

    let differenceOfRows = sampleRowsNumber - allScalers.length;

    if(differenceOfRows === 0){
        return;
    };

    if(differenceOfRows > 0){
        addSampleScale(Math.abs(differenceOfRows));
        return;
    };

    if(differenceOfRows < 0){
        removeSampleScale(Math.abs(differenceOfRows));
        return;
    };
};



function addSampleScale(repetitionNumber){
    for(let i = 0; i < repetitionNumber; i++){
        sampleBG.innerHTML += '<div class="sample-anatomy"><hr><hr><hr><hr></div>';
    };
    
    allScalers = document.querySelectorAll('.sample-anatomy');
};

function removeSampleScale(repetitionNumber){
    for(let i = 0; i < repetitionNumber; i++){
        allScalers[i].remove();
    };
    
    allScalers = document.querySelectorAll('.sample-anatomy');
};









// Sample area and typing
textSample.addEventListener('input', function() {
    setSampleBG();
}, false);

textSample.addEventListener('paste', function(event){
    event.preventDefault();
    var pastedText = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, pastedText);

    setSampleBG();
});









// SHOWCASE ------------------------------------------------------------------------------------------------------------------------
const showcaseSearch = document.getElementById('showcaseSearch');
const showcaseOffsetSlider = document.getElementById('showcaseOffset');
const showcaseColorPicker = document.getElementById('showcaseColorizor');

const allShowcaseContainers = document.querySelectorAll('.test2');
const allShowcaseGlyphs = document.querySelectorAll('.showcase-glyph');

const allZoomableGlyphs = document.querySelectorAll('p.showcase-glyph');



const smallSet = [8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 24];

const uSet = [8, 9, 15, 16, 21, 22];
const uSetPrime = [17, 18, 19, 20, 22];

const ftSet = [9, 16, 22];
const ftSetPrime = [8, 15, 17, 18,19, 20, 21, 24];



// SHOWCASE Interactivity
showcaseSearch.addEventListener("input", function(event) {
    const inputValue = event.target.value;

    if (/^[a-zA-ZåäöÅÄÖ]$/.test(inputValue)) {
        event.target.value = inputValue;
        validCharacterAction(inputValue);
    } else {
        const lastChar = inputValue.charAt(inputValue.length - 1);
        if (/^[a-zA-ZåäöÅÄÖ]$/.test(lastChar)) {
            event.target.value = lastChar;
            validCharacterAction(lastChar);
        } else {
            event.target.value = 'ä';
            validCharacterAction('ä');
        };
    };
});

function validCharacterAction(character) {
    allShowcaseGlyphs.forEach((element) => {
        element.innerHTML = character;
    });

    handleGlyphVisibility(character);
};



allZoomableGlyphs.forEach(function (element){
    element.addEventListener("mousedown", (event) => {
        if (event.button === 0) {
            let current = event.target;

            current.classList.add('focused-glyph');
            document.body.style.cursor = 'zoom-out';

            document.addEventListener("mouseup", (event) => {
                current.classList.remove('focused-glyph');
                document.body.style.cursor = 'auto';
            });
        };
    });
});



showcaseOffsetSlider.oninput = function(){
    document.documentElement.style.setProperty('--showcaseOffset', showcaseOffsetSlider.value);
};

showcaseColorPicker.oninput = function(){
    document.documentElement.style.setProperty('--showcaseColor', showcaseColorPicker.value);
};



function handleGlyphVisibility(character){
    let glyphsToTurnOff = [];
    makeAllGlyphsVisible();

    if (['i', 'j', 'ä', 'ö'].includes(character)) {
        return;
    } else if (['f', 't'].includes(character)) {
        glyphsToTurnOff = ftSet;
    } else if (character === 'u') {
        glyphsToTurnOff = uSet;
    } else {
        glyphsToTurnOff = smallSet;
    }
    
    turnOffGlyphs(glyphsToTurnOff);
};

function makeAllGlyphsVisible(){
    for(let i = 0; i < smallSet.length; i++){
        allShowcaseContainers[smallSet[i] - 1].classList.remove('invalid');
    };
};

function turnOffGlyphs(remove){
    for(let i = 0; i < remove.length; i++){
        allShowcaseContainers[remove[i] - 1].classList.add('invalid');
    };
};








// GLOBAL FUNCTIONS	----------------------------------------------------------------------------------------------------------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};