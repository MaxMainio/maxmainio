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
fetch('https://maxmain.io/work/lawn-texture/v3/sources/data.json')
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









/* INITIAL SETUP ============================================================================================= */
/* HIGHLIGHT FLOWERS ----------------------------------------------------------------------------------------- */
function highLightFlowers(flowers, flowerColors){
    for (let i = 0; i < flowers.length; i++) {
        textField.forEach(element => {
            let replace = flowers[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');

            element.innerHTML = element.innerHTML.replace(regex, '<span class="iris">$1</span>');
        });

        let tagged = document.querySelectorAll('.iris');

        tagged.forEach(element => {
            let replace = flowers[i];
            const regex = new RegExp('([' + replace + '])', 'gi');
            let split = element.innerHTML.match(regex);

            let flowerType = flowerColorList[getRandomInt(0, 2)];
            let flowerGroup = flowerColors[flowerType];
            
            for (let j = 0; j < split.length; j++) {
                split[j] = '<span class="flower" style="background-color: ' + flowerGroup[getRandomInt(0, (flowerGroup.length) - 1)] + ';" data-color="' + flowerType + '">' + split[j] + '</span>';
            }

            let newHTML = split.join('');
            element.innerHTML = newHTML;
        });

        tagged.forEach(element => {
            element.classList.remove('iris');
        });
    };
};



/* HIGHLIGHT LAWN -------------------------------------------------------------------------------------------- */
function highlightLawn(lawn, lawnColors){
    for (let i = 0; i < lawn.length; i++) {
        textField.forEach(element => {
            var replace = lawn[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');
            let colorNum = getRandomInt(0, (lawnColors.length) - 1);

            element.innerHTML = element.innerHTML.replace(regex, '<span class="lawn" style="background-color: ' + lawnColors[colorNum] + ';" data-color="' + colorNum + '">$1</span>');
        });
    };
};



/* HIGHLIGHT WATER ------------------------------------------------------------------------------------------- */
function highlightWater(water, waterColors){
    for (let i = 0; i < water.length; i++) {
        textField.forEach(element => {
            var replace = water[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');
            let colorNum = getRandomInt(0, (waterColors.length) - 1);

            element.innerHTML = element.innerHTML.replace(regex, '<span class="water" style="background-color: ' + waterColors[getRandomInt(0, colorNum)] + ';" data-color="' + colorNum + '">$1</span>');
        });
    };
};



/* WRAP THE REST OF THE TEXT --------------------------------------------------------------------------------- */
function wrapRest(){
    textField.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
    });
};









/* AUTOMATIC SPREAD ========================================================================================== */
/* SPREAD FLOWERS -------------------------------------------------------------------------------------------- */
function spreadFlowers(){
    let patches = document.querySelectorAll('.flower');
    console.log(patches);
};



/* SPREAD LAWN ----------------------------------------------------------------------------------------------- */
function spreadLawn(){
    let turf = document.querySelectorAll('.lawn');
    
    for (let i = 0; i < turf.length; i++) {
    /* CHECK IF COLORED ------------------------------------------------------------------------------- */
    let targetColor = turf[i].dataset.color;
    let newColorIndex = (targetColor - 1).toString();



    /* TARGET INFO ------------------------------------------------------------------------------------ */
    let targetX = turf[i].offsetLeft;
    let targetY = turf[i].offsetTop;

    let targetWidth = turf[i].offsetWidth;
    let targetHeight = turf[i].offsetHeight;



    /* SELECTION GRID --------------------------------------------------------------------------------- */
    let leftLine = targetX - (spaceWidth + 5);
    let centerLine = targetX + (targetWidth / 2);
    let rightLine = targetX + targetWidth + spaceWidth + 5;

    let topLine = targetY - 1;
    let midLine = targetY + (targetHeight / 2);
    let bottomLine = targetY + targetHeight + 1;

    
    
    /* SURROUNDING WORDS ------------------------------------------------------------------------------ */
    let surroundingWords = [document.elementFromPoint(leftLine, topLine), 
                            document.elementFromPoint(centerLine, topLine), 
                            document.elementFromPoint(rightLine, topLine), 
                            document.elementFromPoint(leftLine, midLine), 
                            document.elementFromPoint(rightLine, midLine), 
                            document.elementFromPoint(leftLine, bottomLine), 
                            document.elementFromPoint(centerLine, bottomLine), 
                            document.elementFromPoint(rightLine, bottomLine)];



    /* SPREAD ----------------------------------------------------------------------------------------- */
    for (let i = 0; i < surroundingWords.length; i++) {
        let currentWord = surroundingWords[i];

        if (currentWord === null || currentWord.tagName !== 'SPAN' || currentWord.classList.contains('lawn')) {
            // console.log(currentWord, 'is not worthy');

        } else if (currentWord.classList.contains('flower') === true){
            // console.log(currentWord, 'is flower');

            let currentParent = currentWord.parentElement;
            currentParent.classList.add('lawn');
            currentParent.style.backgroundColor = lawnColors[0][newColorIndex];
            currentParent.setAttribute('data-color', newColorIndex);

        } else if (currentWord.className === '' && targetColor > 0){
            // console.log(currentWord, 'is worthy');

            currentWord.classList.add('lawn');
            currentWord.style.backgroundColor = lawnColors[0][newColorIndex];
            currentWord.setAttribute('data-color', newColorIndex);
        };
    };
    };
};



/* SPREAD WATER ---------------------------------------------------------------------------------------------- */
function spreadWater(){
    let spring = document.querySelectorAll('.water');
    console.log(spring);
};









/* TARGETED SPREAD =========================================================================================== */
/* SPREAD TARGETED FLOWER ------------------------------------------------------------------------------------ */
function spreadTargetedFlower(target){
    /* TARGET INFO ------------------------------------------------------------------------------------ */
    let flowerType = target.dataset.color;
    let colorGroup = flowerColors[0][flowerType];

    let targetX = target.offsetLeft;
    let targetY = target.offsetTop;

    let targetWidth = target.offsetWidth;
    let targetHeight = target.offsetHeight;



    /* SELECTION GRID --------------------------------------------------------------------------------- */
    let leftX = targetX - (spaceWidth + 1);
    let centerX = targetX + (targetWidth / 2);
    let rightX = targetX + targetWidth + spaceWidth + 1;

    let topY = targetY - 1;
    let centerY = targetY + (targetHeight / 2);
    let bottomY = targetY + targetHeight + 1;



    /* CHECK POINTS ----------------------------------------------------------------------------------- */
    let coordinates = [
        centerX, topY,
        rightX, centerY,
        centerX, bottomY,
        leftX, centerY];

    let tagged = getSurroundings(coordinates);

    for (let i = 0; i < tagged.length; i++) {
        if (tagged[i].tagName !== 'SPAN' || tagged[i].classList.contains('lawn') || tagged[i].classList.contains('water') || tagged[i].classList.contains('flower')) {
            // console.log(tagged[i], 'not worthy of promotion');

        } else if (tagged[i].classList.contains('sprout')) {
            // console.log(tagged[i], 'is worthy of promotion');
            promoteToFlower(tagged[i], colorGroup);

        } else {
            // console.log(tagged[i], 'needs to be split');
            splitIntoSprout(tagged[i], flowerType);

            let reCheck = [coordinates[i], coordinates[i + 1]]
            tagged[i] = getSurroundings(reCheck);
            
            promoteToFlower(tagged[i][0]);
        }
    };
};



function getSurroundings(coordinates) {
    let surroundings = [];

    for (let i = 0; i < coordinates.length; i = i + 2) {
        surroundings.push(document.elementFromPoint(coordinates[i], coordinates[i + 1]));
    }

    return (surroundings);
};



function splitIntoSprout(tagged, flowerType){
    const regex = new RegExp('(.)', 'gi');
    let split = tagged.innerHTML.match(regex);

    for (let i = 0; i < split.length; i++) {
        split[i] = '<span class="sprout" data-color="' + flowerType + '">' + split[i] + '</span>';
    };

    let newHTML = split.join('');
    tagged.innerHTML = newHTML;
};



function promoteToFlower(sprout){
    let colorGroup = flowerColors[0][sprout.dataset.color];

    sprout.classList.remove('sprout');
    sprout.classList.add('flower');
    sprout.style.backgroundColor = colorGroup[getRandomInt(0, (colorGroup.length - 1))];
};









/* SPREAD TARGETED LAWN -------------------------------------------------------------------------------------- */
function spreadTargetedLawn(target){
    let targetColor = target.dataset.color;
    let newColorIndex = (targetColor - 1).toString();



    /* TARGET INFO ------------------------------------------------------------------------------------ */
    let targetX = target.offsetLeft;
    let targetY = target.offsetTop;

    let targetWidth = target.offsetWidth;
    let targetHeight = target.offsetHeight;



    /* SELECTION GRID --------------------------------------------------------------------------------- */
    let leftX = targetX - (spaceWidth + 5);
    let centerX = targetX + (targetWidth / 2);
    let rightX = targetX + targetWidth + spaceWidth + 5;

    let topY = targetY - 1;
    let centerY = targetY + (targetHeight / 2);
    let bottomY = targetY + targetHeight + 1;

    
    
    /* SURROUNDING WORDS ------------------------------------------------------------------------------ */
    let surroundingWords = [document.elementFromPoint(leftX, topY), 
                            document.elementFromPoint(centerX, topY), 
                            document.elementFromPoint(rightX, topY), 
                            document.elementFromPoint(leftX, centerY), 
                            document.elementFromPoint(rightX, centerY), 
                            document.elementFromPoint(leftX, bottomY), 
                            document.elementFromPoint(centerX, bottomY), 
                            document.elementFromPoint(rightX, bottomY)];



    /* SPREAD ----------------------------------------------------------------------------------------- */
    for (let i = 0; i < surroundingWords.length; i++) {
        let currentWord = surroundingWords[i];

        if (currentWord === null || currentWord.tagName !== 'SPAN' || currentWord.classList.contains('lawn')) {

        } else if (currentWord.classList.contains('flower') === true){

            let currentParent = currentWord.parentElement;
            currentParent.classList.add('lawn');
            currentParent.style.backgroundColor = lawnColors[0][newColorIndex];
            currentParent.setAttribute('data-color', newColorIndex);

        } else if (currentWord.className === '' && targetColor > 0){

            currentWord.classList.add('lawn');
            currentWord.style.backgroundColor = lawnColors[0][newColorIndex];
            currentWord.setAttribute('data-color', newColorIndex);
        };
    };
};









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};