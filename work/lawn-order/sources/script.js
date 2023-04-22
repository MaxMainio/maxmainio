const allTexts = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-order/sources/data.json')
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
            element.innerHTML = element.innerHTML.replace(regex, '<span class="col-' + getRandomInt(1,30) + '">$1</span>');
        });
    };
};



function wrapRest(){
    allTexts.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
    });
};









window.addEventListener('click', event => {
    let targetClass = event.target.className;
    let targetCol = targetClass.match(/(\d+)/);


    
    /* CHECK IF COLORED ------------------------------------------------------------------------------- */
    if (targetClass === '') {
        console.log('no class');
    } else {
        console.log(targetCol[0]);
    }



    /* TARGET INFO ------------------------------------------------------------------------------------ */
    let targetX = event.target.offsetLeft;
    let targetY = event.target.offsetTop;

    let targetWidth = event.target.offsetWidth;
    let targetHeight = event.target.offsetHeight;



    /* SELECTION GRID --------------------------------------------------------------------------------- */
    let leftLine = targetX - (spaceWidth + 5);
    let centerLine = targetX + (targetWidth / 2);
    let rightLine = targetX + targetWidth + spaceWidth + 5;

    let topLine = targetY - 1;
    let midLine = targetY + (targetHeight / 2);
    let bottomLine = targetY + targetHeight + 1;

    
    
    /* SURROUNDING WORDS ------------------------------------------------------------------------------ */
    let surroundingWords = [document.elementFromPoint(leftLine, topLine), document.elementFromPoint(centerLine, topLine), document.elementFromPoint(rightLine, topLine), document.elementFromPoint(leftLine, midLine), document.elementFromPoint(rightLine, midLine), document.elementFromPoint(leftLine, bottomLine), document.elementFromPoint(centerLine, bottomLine), document.elementFromPoint(rightLine, bottomLine)];

    // console.log(surroundingWords);
});









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};