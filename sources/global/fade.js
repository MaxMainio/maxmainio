console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

var vw = window.innerWidth
const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
const faderElement = document.querySelector('#fader');

// TRIGGER FADER WHEN ENTERING AND EXITING EACH PAGE
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









// IMG ZOOM ------------------------------------------------------------------------------------------------------------------------
const images = document.querySelectorAll('.work-img');

if (vw > 1000) {
    images.forEach(function (item){
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









// BLURRY LOAD ---------------------------------------------------------------------------------------------------------------------
// const blurdivs = document.querySelectorAll('.blur-load');

// blurdivs.forEach(div => {
//     const img = div.querySelector('img');

//     function loaded() {
//         div.classList.add('loaded');

//         setInterval(() => {
//             div.removeAttribute('class');
//             div.removeAttribute('style');
//         }, 200);
//     }

//     if (img.complete) {
//         loaded();
//     } else {
//         img.addEventListener('load', loaded);
//     };
// });