/* CONSTANTS ------------------------------------------------------------------------------------------ */
const allTexts = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-texture/v2/sources/data.json')
    .then((response) => response.json())
    .then((json) => {

    highlightWords(json);
    wrapRest();
});



function highlightWords(json){
    for (let i = 0; i < json.length; i++) {
        allTexts.forEach(element => {
            var replace = json[i].baseWord;
            const regex = new RegExp('(' + replace + ')', 'gi');
            element.innerHTML = element.innerHTML.replace(regex, '<span class="active col-' + getRandomInt(1,30) + '">$1</span>');
        });
    };
};



function wrapRest(){
    allTexts.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
    });
};









var intervalId = window.setInterval(function(){
    spreadLawn();
}, 1000);

function spreadLawn(){
    let turf = document.querySelectorAll('.active');

    for (let i = 0; i < turf.length; i++) {
        /* CHECK IF COLORED ------------------------------------------------------------------------------- */
        let targetClass = turf[i].className;
        let targetCol = targetClass.match(/(\d+)/);



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
        let surroundingWords = [document.elementFromPoint(leftLine, topLine), document.elementFromPoint(centerLine, topLine), document.elementFromPoint(rightLine, topLine), document.elementFromPoint(leftLine, midLine), document.elementFromPoint(rightLine, midLine), document.elementFromPoint(leftLine, bottomLine), document.elementFromPoint(centerLine, bottomLine), document.elementFromPoint(rightLine, bottomLine)];



        /* SPREAD ----------------------------------------------------------------------------------------- */
        for (let i = 0; i < surroundingWords.length; i++) {
            let currentWord = surroundingWords[i];
    
            if (currentWord === null) {
            } else  if (currentWord.className === '' && targetCol[0] > 1 && currentWord.tagName === 'SPAN') {
                currentWord.classList.add('active');
    
                let className = 'col-' + (targetCol[0] - 1);
                currentWord.classList.add(className);
            };
        };
    };
};









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};