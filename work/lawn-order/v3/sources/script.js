/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;
const flowerColorList = ['purples', 'reds', 'yellows'];

const lawnColors = [];
const flowerColors = [];
const waterColors = [];









/* POPUP WINDOW --------------------------------------------------------------------------------------- */
window.addEventListener('click', event => {
    // window.open('../v2/index.html', '', 'menubar=no, status=no, height=200, width=400, scrollbars=no');
    // spreadLawn();
    spreadTarget(event.target);
});









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-order/v3/sources/data.json')
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









/* SPREAD FLOWERS -------------------------------------------------------------------------------------------- */
function spreadFlowers(){
    let patches = document.querySelectorAll('.flower');
    console.log(patches);
};



/* SPREAD LAWN ----------------------------------------------------------------------------------------------- */
function spreadLawn(){
    let turf = document.querySelectorAll('.lawn');
    console.log(turf);
};



/* SPREAD WATER ---------------------------------------------------------------------------------------------- */
function spreadWater(){
    let spring = document.querySelectorAll('.water');
    console.log(spring);
};



/* SPREAD TARGET --------------------------------------------------------------------------------------------- */
function spreadTarget(target){
    /* CHECK IF COLORED ------------------------------------------------------------------------------- */
    let targetColor = target.dataset.color;
    let newColorIndex = (targetColor - 1).toString();



    /* TARGET INFO ------------------------------------------------------------------------------------ */
    let targetX = target.offsetLeft;
    let targetY = target.offsetTop;

    let targetWidth = target.offsetWidth;
    let targetHeight = target.offsetHeight;



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









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};