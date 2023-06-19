const contents = document.getElementsByClassName('content-container');
const contentObjs = [];
const altTexts = {
    1: "the transformation the city’s greenery—parks, forests, and other natural areas—seemingly dissolves away as if subtly edged out of existence. This visual shift represents a real-world human mindset: the prioritization of human living space over natural landscapes. When the image expands, revealing newfound space, the instinct isn't to restore nature. Instead, it's seen as room for more urban development, reinforcing the narrative of human dominance and expansion over nature.",
    10: "this change, the city's urban infrastructure—buildings, streets, and other man-made structures—seemingly vanish as if subtly pushed out of existence. This visual shift represents a counter-narrative to the real-world human mindset: the prioritization of nature over human living space. When the image expands, revealing newfound space, the instinct isn't to fill it with more urban development. Instead, it's seen as an opportunity for nature to reclaim and flourish within the newly opened space, challenging the typical narrative of human dominance and expansion over nature."
};

var counter = 0;









window.onload = (event) => {
    prepObjects();
};

var intervalId = window.setInterval(function(){
	counter ++
    updateImgs(counter);
}, 1500);









function prepObjects() {
    for (let i = 0; i < contents.length; i++) {
        let current = contents[i].children[0].children[0];
        let obj = {
            location: current.id,
            source: 'assets/maps/' + current.id + '/' + current.id + '-',
            alt: 'Starting with a satellite view of ' + current.id + ', unaltered in the first frame, the image then undergoes a striking transformation, compressing horizontally, and with ',
            priority: '1'
        };
    
        obj.alt = obj.alt + altTexts[obj.priority];
        contentObjs.push(obj);

        current.alt = obj.alt;
        current.title = obj.alt;
    };
};



function updateImgs(counter) {
    for (let i = 0; i < contents.length; i++) {
        let current = contents[i].children[0].children[0];
        let individualCounter = counter - i;

        if (individualCounter % 4 === 0) {
            var frame = 0;
        } else if (individualCounter % 4 === 2) {
            var frame = (individualCounter % 4) * contentObjs[i].priority;
        } else {
            var frame = contentObjs[i].priority;
        };

        current.src = contentObjs[i].source + frame + '.jpg';
    };
};