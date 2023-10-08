console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
// Values & measurements    --------------------------------------------------------------------------------------------------------
var vw = window.innerWidth;









// INITIALIZERS & EVENT TRIGGERS    ================================================================================================
window.addEventListener('pageshow', (event) => {
    inFade();
    setFooterText();


    handlePageShow(event);
});









// FADER    ========================================================================================================================
const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
const faderElement = document.querySelector('#fader');

// Internal link trigger    --------------------------------------------------------------------------------------------------------
innerLinks.forEach(item => {
    item.addEventListener('click', outFade);
});



function handlePageShow(event) {
    if (event.persisted || window.performance.navigation.type === 2) {
        document.addEventListener("DOMContentLoaded", () => {
            inFade();
            setFooterText();
        });
    };
};



// Fade functions   ----------------------------------------------------------------------------------------------------------------
function inFade(){
    faderElement.classList.remove('motion');

    setTimeout(() => {
        faderElement.remove();
    }, 500);
};

function outFade(e){
    e.preventDefault();

    const faderDiv = document.createElement('div');
    faderDiv.classList.add('fader');
    document.body.append(faderDiv);

    setTimeout(() => {
        faderDiv.classList.add('motion');
    }, 1);
    
    const targetURL = e.currentTarget.href;
    setTimeout(() => {
        window.location.href = targetURL;
    }, 499);
};



// if (vw > 800) {
//     window.onpageshow = () => {
//         faderElement.classList.remove('motion');

//         setTimeout(() => {
//             faderElement.remove();
//         }, 500);

//         innerLinks.forEach(item => {
//             item.addEventListener('click', e => {
//                 e.preventDefault();

//                 var target = e.currentTarget.href;
//                 const faderDiv = document.createElement('div');
//                 faderDiv.classList.add('fader');

//                 document.body.append(faderDiv);
//                 setTimeout(() => {
//                     faderDiv.classList.add('motion');
//                 }, 1);

//                 setTimeout(() => {
//                     window.location.href = target;
//                 }, 499);
//             });
//         });
//     };
// } else {
//     faderElement.remove();
// };









// BLURRY LOAD  ====================================================================================================================
const blurImg = document.querySelectorAll('img.blur-load');
const blurVid = document.querySelectorAll('video.blur-load');



// Blurry IMGs  --------------------------------------------------------------------------------------------------------------------
blurImg.forEach(img => {
    function loaded() {
        img.classList.add('loaded');
        
        setTimeout(() => {
            img.classList.remove('blur-load');
            img.classList.remove('loaded');
            img.removeAttribute('style');
        }, 200);
        
        img.removeEventListener('load', loaded);
    };
    
    if (img.complete) {
        loaded();
    } else {
        img.addEventListener('load', loaded);
    };
});


// Blurry MOVs  --------------------------------------------------------------------------------------------------------------------
blurVid.forEach(vid => {
    function videoLoaded() {
        vid.classList.add('loaded');

        setTimeout(() => {
            vid.classList.remove('blur-load');
            vid.classList.remove('loaded');
            vid.removeAttribute('style');
        }, 200);

        vid.removeEventListener('loadedmetadata', videoLoaded);
    };

    if (vid.complete) {
        videoLoaded();
    } else {
        vid.addEventListener('loadedmetadata', videoLoaded);
    };
});









// IMG CAROUSEL ====================================================================================================================
const  buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
		const slides = button
			.closest('[data-carousel]')
			.querySelector('[data-slides]');

		const activeSlide = slides.querySelector('[data-active]');
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});









// ZOOM IMGs    ====================================================================================================================
const zoomable = document.querySelectorAll('.zoomable');

if (vw > 1000) {
    zoomable.forEach(function (item){
        item.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                let current = event.target;
                let container = event.target.parentNode;
        
                current.classList.add('focused');
                container.classList.add('focusedcontainer');
        
                document.body.style.cursor = 'zoom-in';
        
    
        
                document.addEventListener("mouseup", (event) => {
                    current.classList.remove('focused');
                    container.classList.remove('focusedcontainer');
        
                    document.body.removeAttribute('style');
                });
            };
        });
    });
};









// FOOTER SECTION   ================================================================================================================
// FOOTER CATCHPHRASES  ------------------------------------------------------------------------------------------------------------
footerTxt = new Array();
footerTxt[0] = 'More being added here and there...';
footerTxt[1] = 'This website is in a constant state of &ldquo;work in progress.&rdquo;';
footerTxt[2] = 'This website is forever in the making.';
footerTxt[3] = 'A never-ending journey of website enhancement.';
footerTxt[4] = 'Content blooms here regularly... Keep checking back!';
footerTxt[5] = 'Always adding, always refining.';
footerTxt[6] = 'Work in progress, masterpiece in making...';
footerTxt[7] = 'Forever in progress... Enjoy the transformation.';
footerTxt[8] = 'Always under construction in the pursuit of excellence.';
footerTxt[9] = 'A personal journey of perpetual web crafting...';

// Elements ------------------------------------------------------------------------------------------------------------------------
const footerField = document.getElementById('footer-field');
const backToTop = document.getElementById('top-btn');



// Set footer text  ----------------------------------------------------------------------------------------------------------------
function setFooterText(){
    let newInnerHTML = '<h3>' + footerTxt[getRandomInt(0, (footerTxt.length - 1))] + '</h3>';
    footerField.appendChild(document.createElement('h3')).innerHTML = newInnerHTML;
};



// Back to top button   ------------------------------------------------------------------------------------------------------------
backToTop.addEventListener('click', e => {
	document.querySelector('html').style.scrollBehavior = 'smooth'
	
    setTimeout(() => {
		window.scrollTo(0, 0);
	}, 1);
});









// GLOBAL FUNCTIONS	================================================================================================================
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};