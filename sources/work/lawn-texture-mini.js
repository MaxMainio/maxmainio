/* CONSTANTS ========================================================================================================================= */
const textField = document.getElementById('lawn1');

const lawnObj = {};
const flowersObj = {};

let lawnIndex = 0;
let activeLawnPatches = [];

let flwoerIndex = 0;
const flowerPatches = [];









/* JSON FETCH ======================================================================================================================== */
fetch('https://maxmainio.github.io/studio/projects/lawn-texture/v6/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        prepLawnObject(json.lawn);
        prepFlowerObject(json.flowers);

        prepTextField();
});





function prepLawnObject(lawnData){
    const {key, words, colors} = lawnData;
    lawnObj.key = key;
    lawnObj.words = words;
    lawnObj.colors = colors;
};

function prepFlowerObject(flowersData){
    const {key, words, types} = flowersData;
    flowersObj.key = key;
    flowersObj.words = words;
    flowersObj.types = types;
};









/* DOCUMENT SETUP ==================================================================================================================== */
function prepTextField(){
    highlightLawn();
    // highlightFlowers();
};





function highlightLawn(){
    const subject = lawnObj.key;
    const searchFor = lawnObj.words;
    const colors = lawnObj.colors;

    for (let i = 0; i < searchFor.length; i++) {
        let replace = searchFor[i];
        const regex = new RegExp('((?<!<[^>]+>)' + replace + '(?![^<]*>))', 'gi');
        let seedColor = getRandomInt(0, (colors.length) - 1);
    
        textField.innerHTML = textField.innerHTML.replace(regex, '<span class="' + subject + '" style="background-color: ' + colors[seedColor] + ';" data-color="' + seedColor + '">$1</span>');
    };

    updateLawnArray();
    console.log(activeLawnPatches);
};



function updateLawnArray(){
    document.querySelectorAll('.lawn').forEach((element) => {
        activeLawnPatches.push(element);
        lawnIndex ++
    });
};









/* SUPPORT =========================================================================================================================== */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};