const altTexts = {
    1: "the transformation the city’s greenery—parks, forests, and other natural areas—seemingly dissolves away as if subtly edged out of existence. This visual shift represents a real-world human mindset: the prioritization of human living space over natural landscapes. When the image expands, revealing newfound space, the instinct isn't to restore nature. Instead, it's seen as room for more urban development, reinforcing the narrative of human dominance and expansion over nature.",
    10: "this change, the city's urban infrastructure—buildings, streets, and other man-made structures—seemingly vanish as if subtly pushed out of existence. This visual shift represents a counter-narrative to the real-world human mindset: the prioritization of nature over human living space. When the image expands, revealing newfound space, the instinct isn't to fill it with more urban development. Instead, it's seen as an opportunity for nature to reclaim and flourish within the newly opened space, challenging the typical narrative of human dominance and expansion over nature."
}

var counter = 0;






window.onload = (event) => {
    window.activeContainers = initializeActive();
    window.allContainers = initializeObjectList(activeContainers);
};

// var activeUpdateInterval = window.setInterval(function(){
// 	counter ++

//     for (let i = 0; i < activeContainers.length; i ++) {
//         updateActiveImages()
//     };



//     // for (let i = 0; i < contents.length; i++) {
//     //     updateCollectiveImages(counter, i);
//     // };
// }, 1500);









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

        current.source = 'assets/maps/' + current.tag + '/' + current.tag + '-'
        current.altText = 'Animated triplet of images, starting with a satellite view of ' + current.id + ', unaltered in the first frame, the image then undergoes a striking transformation, compressing horizontally, and with ' + altTexts[current.priority];

        allContainers[current.tag] = current;
    };

    return(allContainers);
};









window.addEventListener('click', function(){
    console.log(activeContainers);
    console.log(allContainers);
});











































// var contents = [].slice.call(document.getElementsByClassName('content-container'));
// const contentObjs = [];

// const altTexts = {
//     1: "the transformation the city’s greenery—parks, forests, and other natural areas—seemingly dissolves away as if subtly edged out of existence. This visual shift represents a real-world human mindset: the prioritization of human living space over natural landscapes. When the image expands, revealing newfound space, the instinct isn't to restore nature. Instead, it's seen as room for more urban development, reinforcing the narrative of human dominance and expansion over nature.",
//     10: "this change, the city's urban infrastructure—buildings, streets, and other man-made structures—seemingly vanish as if subtly pushed out of existence. This visual shift represents a counter-narrative to the real-world human mindset: the prioritization of nature over human living space. When the image expands, revealing newfound space, the instinct isn't to fill it with more urban development. Instead, it's seen as an opportunity for nature to reclaim and flourish within the newly opened space, challenging the typical narrative of human dominance and expansion over nature."
// };

// const scaleBtns = [].slice.call(document.getElementsByClassName('scalers'));
// const prioBtns = [].slice.call(document.getElementsByClassName('prioritizors'));

// scaleBtns.forEach((button) => {
//     let container = button.parentElement.parentElement.parentElement;
//     let target = button.parentElement.parentElement.parentElement.children[0].children[0];
//     let value = button.value;

//     button.addEventListener('click', () => changeScale(container, target, value));
// });

// prioBtns.forEach((button) => {
//     let target = button.parentElement.parentElement.parentElement.children[0].children[0];
//     let value = button.value;

//     button.addEventListener('click', () => changePriority(target, value));
// });

// var counter = 0;









// window.onload = (event) => {
//     prepObjects();
// };

// var intervalId = window.setInterval(function(){
// 	counter ++

//     for (let i = 0; i < contents.length; i++) {
//         updateCollectiveImages(counter, i);
//     };
// }, 1500);









// function prepObjects() {
//     for (let i = 0; i < contents.length; i++) {
//         let current = contents[i].children[0].children[0];
//         let obj = {
//             location: current.dataset.name,
//             source: 'assets/maps/' + current.id + '/' + current.id + '-',
//             alt: 'Animated triplet of images, starting with a satellite view of ' + current.id + ', unaltered in the first frame, the image then undergoes a striking transformation, compressing horizontally, and with ',
//             priority: '1'
//         };
    
//         obj.alt = obj.alt + altTexts[obj.priority];
//         contentObjs.push(obj);

//         current.alt = obj.alt;
//         current.title = obj.alt;
//         current.dataset.index = i;
//     };
// };



// function updateCollectiveImages(counter, i) {
//     let container = contents[i];
//     let current = contents[i].children[0].children[0];
//     let info = contentObjs[current.dataset.index];
//     let individualCounter = counter - i;

//     if (individualCounter % 4 === 0) {
//         var frame = 0;
//         document.getElementById(info.location.toLowerCase() + 'Original').checked = true;
//     } else if (individualCounter % 4 === 2) {
//         var frame = (individualCounter % 4) * contentObjs[current.dataset.index].priority;
//         document.getElementById(info.location.toLowerCase() + 'Stretch').checked = true;
//     } else {
//         var frame = contentObjs[current.dataset.index].priority;
//         document.getElementById(info.location.toLowerCase() + 'Squeeze').checked = true;
//     };

//     current.src = contentObjs[current.dataset.index].source + frame + '.jpg';
// };



// function changePriority(current, value) {
//     let index = current.dataset.index;

//     if (value === 'nature') {
//         contentObjs[index].priority = 10;
//     } else {
//         contentObjs[index].priority = 1;
//     };

//     updateSingleImage(current, contentObjs[index], counter);
// };



// function updateSingleImage(current, info, counter) {
//     let individualCounter = counter - current.dataset.index;

//     if (individualCounter % 4 === 0) {
//         var frame = 0;
//     } else if (individualCounter % 4 === 2) {
//         var frame = (individualCounter % 4) * info.priority;
//     } else {
//         var frame = info.priority;
//     };

//     current.src = info.source + frame + '.jpg';
//     current.alt = 'Animated triplet of images, starting with a satellite view of ' + info.location + ', unaltered in the first frame, the image then undergoes a striking transformation, compressing horizontally, and with ' + altTexts[info.priority];
// };



// function changeScale(container, current, value) {

//     if (contents.includes(container) && contents.length > 1) {
//         contents.splice(current.dataset.index, 1);
//     } else if (contents.includes(container) && contents.length <= 1) {
//         contents = [];
//         clearInterval(intervalId);
//     }









//     // if (value === 'original') {
//     //     current.
//     // } else if (value === 'stretch') {

//     // } else {

//     // };

//     console.log(value);
//     console.log(contents);
//     console.log(contentObjs);
// };