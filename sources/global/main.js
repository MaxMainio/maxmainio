console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');





// CONSTANTS    --------------------------------------------------------------------------------------------------------------------
var vw = window.innerWidth

const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
const faderElement = document.querySelector('#fader');

const  buttons = document.querySelectorAll('[data-carousel-button]')

const footerField = document.getElementById('footer-field');









// FADER    ------------------------------------------------------------------------------------------------------------------------
if (vw > 800) {
    window.onpageshow = () => {
        faderElement.classList.remove('motion');

        setTimeout(() => {
            faderElement.remove();
        }, 500);

        innerLinks.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();

                var target = e.currentTarget.href;
                const faderDiv = document.createElement('div');
                faderDiv.classList.add('fader');

                document.body.append(faderDiv);
                setTimeout(() => {
                    faderDiv.classList.add('motion');
                }, 1);

                setTimeout(() => {
                    window.location.href = target;
                }, 499);
            })
        })
    }
} else {
    faderElement.remove();
}









// IMG CAROUSEL ------------------------------------------------------------------------------------------------------------------------
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1
		const slides = button
			.closest('[data-carousel]')
			.querySelector('[data-slides]')

		const activeSlide = slides.querySelector('[data-active]')
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})









// IMG ZOOM ------------------------------------------------------------------------------------------------------------------------
const zoomable = document.querySelectorAll('.zoomable');

if (vw > 1000) {
    zoomable.forEach(function (item){
        item.addEventListener("mousedown", (event) => {
            let current = event.target;
            let container = event.target.parentNode.parentNode;
    
            current.classList.add('focused');
            container.classList.add('focusedcontainer');
    
            document.body.style.cursor = 'zoom-in';
    
    
    
            document.addEventListener("mouseup", (event) => {
                current.classList.remove('focused');
                container.classList.remove('focusedcontainer');
    
                document.body.removeAttribute('style');
            });
        });
    });
};









// BLURRY LOAD  --------------------------------------------------------------------------------------------------------------------
const blurdivs = document.querySelectorAll('.blur-load');

blurdivs.forEach(div => {
    const img = div.querySelector('img');

    function loaded() {
        div.classList.add('loaded');

        setInterval(() => {
            div.removeAttribute('class');
            div.removeAttribute('style');
        }, 200);
    }

    if (img.complete) {
        loaded();
    } else {
        img.addEventListener('load', loaded);
    };
});









// FOOTER   ------------------------------------------------------------------------------------------------------------------------
window.addEventListener('load', function() {
    footerField.appendChild(document.createElement('h3')).innerHTML += '<h3>' + footerTxt[Math.round(Math.random() * (footerTxt.length - 1))] + '<h3>';
});



// BACK TO TOP BUTTON
const backToTop = document.querySelector('#top-btn');

backToTop.addEventListener('click', e => {
	document.querySelector('html').style.scrollBehavior = 'smooth'
	
    setTimeout(() => {
		window.scrollTo(0, 0);
	}, 1);
});



// FOOTER CATCHPHRASES
footerTxt = new Array();
footerTxt[0] = 'More being added here and there...';
footerTxt[1] = 'This website is in a constant state of "work in progress."';
footerTxt[2] = 'This website is forever in the making.';
footerTxt[3] = 'A never-ending journey of website enhancement.';
footerTxt[4] = 'Content blooms here regularly... Keep checking back!';
footerTxt[5] = 'Always adding, always refining.';
footerTxt[6] = 'Work in progress, masterpiece in making...';
footerTxt[7] = 'Forever in progress... Enjoy the transformation.';
footerTxt[8] = 'Always under construction in the pursuit of excellence.';
footerTxt[9] = 'A personal journey of perpetual web crafting...';