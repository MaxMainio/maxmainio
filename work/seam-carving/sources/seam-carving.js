// CONSTANTS SET UP  ----------------------------------------------------------------------------------------------------------
const allScalerButtons = [].slice.call(document.getElementsByClassName('scalers'));
const allPriorityButtons = [].slice.call(document.getElementsByClassName('prioritizors'));

const altTexts = {
    1: "the transformation the city’s greenery—parks, forests, and other natural areas—seemingly dissolves away as if subtly edged out of existence. This visual shift represents a real-world human mindset: the prioritization of human living space over natural landscapes. When the image expands, revealing newfound space, the instinct isn't to restore nature. Instead, it's seen as room for more urban development, reinforcing the narrative of human dominance and expansion over nature.",
    10: "this change, the city's urban infrastructure—buildings, streets, and other man-made structures—seemingly vanish as if subtly pushed out of existence. This visual shift represents a counter-narrative to the real-world human mindset: the prioritization of nature over human living space. When the image expands, revealing newfound space, the instinct isn't to fill it with more urban development. Instead, it's seen as an opportunity for nature to reclaim and flourish within the newly opened space, challenging the typical narrative of human dominance and expansion over nature."
}









// INITIAL SET UP  ------------------------------------------------------------------------------------------------------------
window.addEventListener('load', function() {
    window.activeContainers = initializeActive();
    window.allContainers = initializeObjectList(activeContainers);
});



function initializeActive(){
    let active = [].slice.call(document.getElementsByClassName('content-container'));
    return(active);
}



function initializeObjectList(activeContainers){
    const allContainers = {};

    for (let i = 0; i < activeContainers.length; i++) {
        let current = {
            location: activeContainers[i].children[1].innerHTML,
            tag: activeContainers[i].children[1].innerHTML.toLowerCase(),
            map:  activeContainers[i].children[0].children[0],
            source: '',
            altText: '',
            priority: 1,
            index: i
        };

        current.source = 'assets/content/maps/' + current.tag + '/' + current.tag + '-'
        current.altText = 'Triplet of images, starting with a satellite view of ' + current.id + ', unaltered in the first frame, the image then undergoes a striking transformation, compressing horizontally, and with ';

        allContainers[current.tag] = current;
    };

    return(allContainers);
};









// INTERACTIVE LISTENERS  -----------------------------------------------------------------------------------------------------
allScalerButtons.forEach((button) => {
    button.addEventListener('click', (clicked) => {
        let influenced = clicked.target.parentElement.parentElement.parentElement.children[0].children[0];
        let info = allContainers[influenced.id];
        let value = clicked.target.innerHTML.toLowerCase();

        scaleImage(influenced, info, value);
    });
});



allPriorityButtons.forEach((button) => {
    button.addEventListener('click', (clicked) => {
        let influenced = clicked.target.parentElement.parentElement.parentElement.children[0].children[0];
        let info = allContainers[influenced.id];
        let value = clicked.target.innerHTML.toLowerCase();

        rePrioritizemage(influenced, info, value);
    });
});









// INTERACTION  ---------------------------------------------------------------------------------------------------------------
function scaleImage(target, info, value) {
    if (value === 'squeeze') {
        target.src = info.source + info.priority + '.jpg'
        target.dataset.frame = 1;

    } else if (value === 'stretch') {
        target.src = info.source + (2 * info.priority) + '.jpg'
        target.dataset.frame = 2;

    } else {
        target.src = info.source + '0.jpg'
        target.dataset.frame = 0;
    };
};



function rePrioritizemage(influenced, info, value) {
    if (value === 'nature') {
        info.priority = 10;
        updateSingleImage(influenced, info, 10);
    } else {
        info.priority = 1;
        updateSingleImage(influenced, info, 1);
    };
};



function updateSingleImage(target, info, priority) {
    let frame = target.dataset.frame;
    target.src = info.source + (frame * priority) + '.jpg';
    target.alt = info.altText + altTexts[priority];
    target.title = info.altText + altTexts[priority];
}









// AUTOMATED VERSION ----------------------------------------------------------------------------------------------------------
// var counter = 0;



// var activeUpdateInterval = window.setInterval(function(){
// 	counter ++

//     for (let i = 0; i < activeContainers.length; i ++) {
//         let target = activeContainers[i].children[0].children[0]

//         updateActiveImages(target);
//     };
// }, 1500);



// function updateActiveImages(target) {
//     let targetInfo = allContainers[target.id]
//     let priority = targetInfo.priority;
//     let individualCounter = counter + allContainers[target.id].index;

//     if (individualCounter % 4 === 0) {
//         target.src = targetInfo.source + '0' + '.jpg';
//         target.dataset.frame = 0;
//         document.getElementById(targetInfo.tag + 'Original').checked = true

//     } else if (individualCounter % 4 === 2) {
//         target.src = targetInfo.source + (2 * priority) + '.jpg';
//         target.dataset.frame = 2;
//         document.getElementById(targetInfo.tag + 'Stretch').checked = true

//     } else {
//         target.src = targetInfo.source + priority + '.jpg';
//         target.dataset.frame = 1;
//         document.getElementById(targetInfo.tag + 'Squeeze').checked = true
//     };
// };