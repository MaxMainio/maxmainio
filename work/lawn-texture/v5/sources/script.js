/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = getSpaceWidth();

const lawnColors = [];
const waterColors = [];
const flowerTypes = {};









/* ON CLICK EVENT ------------------------------------------------------------------------------------- */
window.addEventListener('click', event => {
    // spreadLawn();
    spreadFlowers();
});









function getSpaceWidth() {
    const regex = new RegExp('( )', '');
    textField[0].innerHTML = textField[0].innerHTML.replace(regex, '<span id="space">$1</span>');
    
    const target = document.getElementById('space');
    const spaceWidth = target.offsetWidth;

    const newRegex = new RegExp('(<span id="space"> </span>)', '');
    textField[0].innerHTML = textField[0].innerHTML.replace(newRegex, ' ');

    return spaceWidth;
};









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
    // highlightWords(water);
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









/* SPREAD --------------------------------------------------------------------------------------------- */
function spreadFlowers(){
    let flowers = document.querySelectorAll('.flower')

    for (let i = 0; i < flowers.length; i++) {
        let target = getTargetInfo(flowers[i]);

        let coordinates = getFlowerCoordinates(target);
        let tagged = getSurroundings(coordinates);

        fertalize(tagged);

        console.log(tagged);

        // console.log(flowers[i]);
        // console.log(tagged);
    }
}



function spreadLawn(){
    let turf = document.querySelectorAll('.lawn');
    
    for (let i = 0; i < turf.length; i++) {
        let target = getTargetInfo(turf[i]);
        
        if (target.color === '0') {
            continue;
        }
        
        let newColor = target.color - 1;

        let coordinates = getLawnCoordinates(target);
        let tagged = getSurroundings(coordinates);

        promoteLawn(tagged, newColor);
    };
};



// OBJECTIVE
function getTargetInfo(turf){
    let target = {};

    target['color'] = turf.dataset.color;
    target['location'] = [turf.offsetLeft, turf.offsetTop];
    target['size'] = [turf.offsetWidth, turf.offsetHeight];

    return(target);
}



function getLawnCoordinates(target){
    let leftX = target.location[0] - (spaceWidth + 5);
    let centerX = target.location[0] + (target.size[0] / 2);
    let rightX = target.location[0] + target.size[0] + spaceWidth + 5;

    let topY = target.location[1] - 5;
    let centerY = target.location[1] + (target.size[1] / 2);
    let bottomY = target.location[1] + target.size[1] + 5;

    

    let coordinates = [
        centerX, topY,
        rightX, topY,
        rightX, centerY,
        rightX, bottomY,
        centerX, bottomY,
        leftX, bottomY,
        leftX, centerY,
        leftX,topY
    ];

    return(coordinates);
}



function getFlowerCoordinates(target){
    let leftX = target.location[0] - (spaceWidth + 1);
    let centerX = target.location[0] + (target.size[0] / 2);
    let rightX = target.location[0] + target.size[0] + spaceWidth + 1;

    let topY = target.location[1] - 1;
    let centerY = target.location[1] + (target.size[1] / 2);
    let bottomY = target.location[1] + target.size[1] + 1;

    

    let coordinates = [
        centerX, topY,
        rightX, centerY,
        centerX, bottomY,
        leftX, centerY,
    ];

    return(coordinates);
}









// OBJECTIVE
function getSurroundings(coordinates){
    let surroundings = [];

    for (let i = 0; i < coordinates.length; i = i + 2) {
        let tagged = document.elementFromPoint(coordinates[i], coordinates[i + 1]);

        if (tagged !== null && tagged.tagName === 'SPAN') {
            surroundings.push(tagged);
        }
    }

    return (surroundings);
};



function promoteLawn(tagged, newColor){
    for (let i = 0; i < tagged.length; i++) {
        if (tagged[i].classList.contains('lawn')) {
            continue;

        } else if (tagged[i].classList.contains('flower')) {
            tagged[i].parentNode.classList.add('lawn');
            tagged[i].parentNode.style.backgroundColor = lawnColors[newColor];
            tagged[i].parentNode.setAttribute('data-color', newColor);

        } else {
            tagged[i].classList.add('lawn');
            tagged[i].style.backgroundColor = lawnColors[newColor];
            tagged[i].setAttribute('data-color', newColor);
        }
    }
};



function fertalize(tagged){
    for (let i = 0; i < tagged.length; i++) {
        // if (!tagged[i].classList.contains('lawn') && !tagged[i].classList.contains('flower')) {
        //     console.log(tagged[i]);
        //     console.log('is viable');

        //     tagged[i] = 'is viable';
        // }
        if (tagged[i].classList.contains('lawn') || tagged[i].classList.contains('flower')) {
            tagged.splice(i, 1);
        }
    }
}









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};