/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;
const flowerColorList = ['purples', 'reds', 'yellows'];









/* POPUP WINDOW --------------------------------------------------------------------------------------- */
// window.addEventListener('click', event => {
//     window.open('../v2/index.html', '', 'menubar=no, status=no, height=200, width=400, scrollbars=no');
// });









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-order/v3/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        const lawn = json[0].words.plants;
        const lawnColors = json[0].colors.plants;

        const flowers = json[0].words.flowers;
        const flowerColors = json[0].colors.flowers;

        const water = json[0].words.water;
        const waterColors = json[0].colors.water;

        highLightFlowers(flowers, flowerColors);
        highlightLawn(lawn, lawnColors);
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
                split[j] = '<span class="flower ' + flowerType + '" style="background-color: ' + flowerGroup[getRandomInt(0, (flowerGroup.length) - 1)] + ';">' + split[j] + '</span>';
            }

            let newHTML = split.join('');
            element.innerHTML = newHTML;
        });

        tagged.forEach(element => {
            element.classList.remove('iris');
        });
    };
};









/* HIGHLIGHT FLOWERS ----------------------------------------------------------------------------------------- */
function highlightLawn(lawn, lawnColors){
    for (let i = 0; i < lawn.length; i++) {
        textField.forEach(element => {
            var replace = lawn[i];
            const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');

            element.innerHTML = element.innerHTML.replace(regex, '<span class="lawn" style="background-color: ' + lawnColors[getRandomInt(0, (lawnColors.length) - 1)] + ';">$1</span>');
        });
    };
};









/* WRAP THE REST OF THE TEXT --------------------------------------------------------------------------------- */
function wrapRest(){
    textField.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/((?<!<[^>]+>)\b\w+\b(?![^<]*>))/gi, '<span>$1</span>');
    });
};









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};