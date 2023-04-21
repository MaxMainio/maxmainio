const allTexts = document.querySelectorAll("p");









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









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};