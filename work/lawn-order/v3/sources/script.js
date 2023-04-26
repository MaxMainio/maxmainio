/* CONSTANTS ------------------------------------------------------------------------------------------ */
const textField = document.querySelectorAll('p');
const spaceWidth = document.getElementById('space').offsetWidth;









/* POPUP WINDOW --------------------------------------------------------------------------------------- */
// window.addEventListener('click', event => {
//     window.open('../v2/index.html', '', 'menubar=no, status=no, height=200, width=400, scrollbars=no');
// });









/* JSON FETCH ----------------------------------------------------------------------------------------- */
fetch('https://maxmain.io/work/lawn-order/v3/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        const plants = json[0].words.plants;
        const plantColors = json[0].colors.plants;

        const flowers = json[0].words.flowers;
        const flowerColors = json[0].colors.flowers;

        const water = json[0].words.water;
        const waterColors = json[0].colors.water;

        highLightFlowers(flowers, flowerColors);
});









function highLightFlowers(flowers){
    for (let i = 0; i < flowers.length; i++) {
        textField.forEach(element => {
            let replace = flowers[i];
            const regex = new RegExp('(' + replace + ')', 'gi');
            element.innerHTML = element.innerHTML.replace(regex, '<span class="iris">$1</span>');
        });

        let tagged = document.querySelectorAll('.iris');

        tagged.forEach(element => {
            let replace = flowers[i];
            const regex = new RegExp('([' + replace + '])', 'gi');
            let split = element.innerHTML.match(regex);
            
            for (let j = 0; j < split.length; j++) {
                split[j] = '<span class="fcol-' + getRandomInt(0, 7) + '">' + split[j] + '</span>';
            }

            let newHTML = split.join('');
            element.innerHTML = newHTML;
        });

        tagged.forEach(element => {
            element.classList.remove('iris');
        });
    };
};









/* SUPPORT -------------------------------------------------------------------------------------------- */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};