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
        const plants = json[0];
        const flowers = json[1];
        const water = json[2];

        highLightFlowers(flowers);
        console.log(flowers);
});









function highLightFlowers(flowers){
    for (let i = 0; i < flowers.length; i++) {
        textField.forEach(element => {
            // var replace = json[i].baseWord;
            // const regex = new RegExp('(' + replace + ')', 'gi');
            // element.innerHTML = element.innerHTML.replace(regex, '<span class="active col-' + getRandomInt(1,30) + '">$1</span>');

            let replace = flowers[i];
        });
    };
}