// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
const altTexts = {
    1: "the transformation the city’s greenery—parks, forests, and other natural areas—seemingly dissolves away as if subtly edged out of existence. This visual shift represents a real-world human mindset: the prioritization of human living space over natural landscapes. When the image expands, revealing newfound space, the instinct isn't to restore nature. Instead, it's seen as room for more urban development, reinforcing the narrative of human dominance and expansion over nature.",
    10: "this change, the city's urban infrastructure—buildings, streets, and other man-made structures—seemingly vanish as if subtly pushed out of existence. This visual shift represents a counter-narrative to the real-world human mindset: the prioritization of nature over human living space. When the image expands, revealing newfound space, the instinct isn't to fill it with more urban development. Instead, it's seen as an opportunity for nature to reclaim and flourish within the newly opened space, challenging the typical narrative of human dominance and expansion over nature."
}









// INITIALIZERS & EVENT TRIGGERS    ================================================================================================
document.addEventListener('DOMContentLoaded', function() {
    window.activeContainers = initializeActive();
    window.allContainers = initializeObjectList(activeContainers);
    activeContainers.forEach(container => {
        const city = container.querySelector('h2').textContent;
        container.querySelectorAll('.radio-button').forEach((group, index) => {
            group.setAttribute('role', 'group');
            group.setAttribute('aria-label', `${city}: ${index === 0 ? 'Size' : 'Prioritize'}`);
        });
    });
});









// SETUP    ========================================================================================================================
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
        current.altText = 'Triplet of images, starting with a satellite view of ' + current.location + ', unaltered in the first frame, the image then undergoes a striking transformation, compressing horizontally, and with ';

        allContainers[current.tag] = current;
    };

    return(allContainers);
};









// INTERACTIONS ===============================================================================================================
// ACTION   -------------------------------------------------------------------------------------------------------------------
document.querySelectorAll('.interaction-container input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
        const container = input.closest('.content-container');
        const image = container.querySelector('.img-container img');
        const info = allContainers[image.id];
        if (input.name.endsWith('-scaler')) scaleImage(image, info, input.value);
        else rePrioritizemage(image, info, input.value);
    });
});

// REACTION -------------------------------------------------------------------------------------------------------------------
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
};