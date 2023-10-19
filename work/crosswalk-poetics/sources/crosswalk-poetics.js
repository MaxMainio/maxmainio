// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
// Elements ------------------------------------------------------------------------------------------------------------------------
const simulationPages = document.getElementById('simulation-pages');
const leftPage = document.getElementById('simulation-left');
const rightPage = document.getElementById('simulation-right');

// Values & measurements    --------------------------------------------------------------------------------------------------------
var isGenerating = false;

const horizontalIMGs = 10;
const verticalIMGs = 17;
const squareIMGs = 25;

// Strings  ------------------------------------------------------------------------------------------------------------------------
const path = 'assets/no-index/poem-imagery/'

poemClips = new Array();
poemClips[0] = 'Dreams <br> of 808s';
poemClips[1] = 'Heartbeat <br> of pavement';
poemClips[2] = 'Ruminations <br> in front';
poemClips[3] = 'Unthinkable <br> thought';
poemClips[4] = 'Traveling <br> soul';
poemClips[5] = 'Not a place of <br> rest. A passage.';
poemClips[6] = 'Not a <br> monument.';
poemClips[7] = 'Sign. Not signifier, <br> or imitation.';
poemClips[8] = 'A <br> measurement.';
poemClips[9] = 'This is not a place <br> where things grow.';
poemClips[10] = 'A procedure. <br> Not an opera.';
poemClips[11] = 'Not happening at its <br> own irrational pace';
poemClips[12] = 'It’s a <br> pulse';
poemClips[13] = 'No <br> illusion';
poemClips[14] = 'A flat <br> fence';
poemClips[15] = 'Void of romance <br> or ceremony';
poemClips[16] = 'Endless <br> metronome';
poemClips[17] = 'Stubborn <br> heartbeat';
poemClips[18] = 'Sender of <br> signals';
poemClips[19] = 'Not a <br> creature';
poemClips[20] = 'Keeping time of <br> nothing, for nothing.';
poemClips[21] = 'Imposing order <br> on oblivion.';
poemClips[22] = 'Cannot see <br> or hear';
poemClips[23] = 'Cyclical, <br> unresting';
poemClips[24] = 'No mood <br> or instinct';
poemClips[25] = 'A schedule with <br> no habits';
poemClips[26] = 'Fixed, impartial, <br> never-ending';
poemClips[27] = 'A from of <br> government';
poemClips[28] = 'A stopwatch, <br> not stochastic';
poemClips[29] = 'Instruction for <br> movement';
poemClips[30] = 'Not a container <br> but an empty space';









// INITIALIZERS & EVENT TRIGGERS    ================================================================================================
window.addEventListener('pageshow', (event) => {
    generatePoem();
});

window.addEventListener('afterprint', (event) => {
    let printCSS = document.querySelector("link[media~='print']");
    if (printCSS) {
        printCSS.remove();
    };
});

leftPage.addEventListener('click', (event) => {
    document.head.innerHTML += '<link rel="stylesheet" media="print" href="sources/print.css">';
    setTimeout(() => window.print(), 50);
});

rightPage.addEventListener('click', (event) => {
    generatePoem();
});









// POEM GENERATION  ================================================================================================================
function generatePoem(){
    if(isGenerating === true){
        return
    } else {
        isGenerating = true;

        prepTitle();
        poemLoop(0);
    }; 
};









// Title    ------------------------------------------------------------------------------------------------------------------------
function prepTitle(){
    let titleElement = document.createElement('h2');
    titleElement.innerHTML = 'Generating...';
    rightPage.appendChild(titleElement);
};



// Loop ----------------------------------------------------------------------------------------------------------------------------
function poemLoop(poemIndex){
    let stocastronome = getRandomInt(400, 800);

    if(probability(poemIndex)){
        transportPoem();

    } else {
        setTimeout(() => lineLoop(0, poemIndex), stocastronome);
    };
};

function lineLoop(lineIndex, poemIndex){
    let stocastronome = getRandomInt(400, 800);
    
    if(probability(lineIndex)){
        rightPage.innerHTML = rightPage.innerHTML + '<br>';
        poemIndex += 0.1;
        poemLoop(poemIndex);

    } else {
        createElement();
        lineIndex += 0.1;
        setTimeout(() => lineLoop(lineIndex, poemIndex), stocastronome);
    };
};



// Generate text or iamge elements  ------------------------------------------------------------------------------------------------
function createElement(){
    if(probability(0.4)){
        let textElement = document.createElement('p');
        textElement.innerHTML = poemClips[getRandomInt(0, poemClips.length - 1)];
        rightPage.appendChild(textElement);

    } else if (probability(0.4)){
        if(probability(0.5)){
            createIMG('square-', squareIMGs, 'xheight');

        } else {
            createIMG('horizontal-', horizontalIMGs, 'xheight');

        };
    } else{
        if(probability(0.5)){
            createIMG('vertical-', verticalIMGs, 'ascender');

        } else {
            createIMG('vertical-', verticalIMGs, 'descender');
        };
    };
};

function createIMG(type, array, className){
    let length = type;
    let index = getRandomInt(1, array).toString();
    
    let imgElement = document.createElement('img');
    imgElement.src = path + length + index + '.webp';
    imgElement.alt = '';
    imgElement.classList.add(className);

    rightPage.appendChild(imgElement);
};



// Poem is finished ----------------------------------------------------------------------------------------------------------------
function transportPoem(){
    rightPage.querySelector('h2').innerHTML = getTime();
    let poem = rightPage.innerHTML;

    rightPage.innerHTML = '';
    leftPage.innerHTML = poem;
    isGenerating = false;
};

function getTime(){
    let fullDate = new Date();

    let hour = fullDate.getHours();
    let minutes = fullDate.getMinutes();

    let day = fullDate.getDate();
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();

    let formattedTime = hour + ':' + minutes;
    let formattedDate = day + '/' + month + '/' + year;

    return('Generated: ' + formattedTime + ' ' + formattedDate);
};









// GLOBAL FUNCTIONS	================================================================================================================
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function probability(n){
    return Math.random() < n;
};