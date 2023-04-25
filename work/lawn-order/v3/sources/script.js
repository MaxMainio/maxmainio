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
        const plants = json[0].plants;
        const flowers = json[1].flowers;
        const water = json[2].water;

        highLightFlowers(flowers);
});









function highLightFlowers(flowers){
    for (let i = 0; i < flowers.length; i++) {
        textField.forEach(element => {
            let replace = flowers[i];
            const regex = new RegExp('(' + replace + ')', 'gi');
            element.innerHTML = element.innerHTML.replace(regex, '<span class="col-30 iris">$1</span>');
        });

        let tagged = document.querySelectorAll('.iris');
        let currentFlower = flowers[i];
        let splitName = currentFlower.split('');

        tagged.forEach(element => {

        });




        // console.log(tagged);
        // console.log(flowers[i]);
        // console.log(splitName);

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