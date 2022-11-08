console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

var vw = window.innerWidth
console.log(vw);

if (vw > 800) {
    window.onpageshow = () => {
        const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
        const tulossaElement = document.querySelector(".fader-in");
        tulossaElement.classList.remove("tulossa");
        
        setTimeout(() => {
            tulossaElement.remove();
        }, 500);
    
        for (let i = 0; i < innerLinks.length; i++) {
            const innerLink = innerLinks[i];
    
            innerLink.addEventListener("click", e => {
                e.preventDefault();
    
                var target = e.currentTarget.href;
                console.log(target);
                const menossaDiv = document.createElement("div");
                menossaDiv.classList.add("fader-out");
    
                document.body.append(menossaDiv);
                setTimeout(() => {
                    menossaDiv.classList.add("menossa");
                },1);
                
                setTimeout(() => {
                    window.location.href = target;
                }, 499);
            });
        }
    }
} else {
    const tulossaElement = document.querySelector(".fader-in");
    tulossaElement.remove();
    const bodyElement = document.querySelector("body");
    bodyElement.removeAttribute("onunload");
}










// window.onpageshow = () => {
//     const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
//     const tulossaElement = document.querySelector(".fader-in");
//     tulossaElement.classList.remove("tulossa");
    
//     setTimeout(() => {
//         tulossaElement.remove();
//     }, 500);

//     for (let i = 0; i < innerLinks.length; i++) {
//         const innerLink = innerLinks[i];

//         innerLink.addEventListener("click", e => {
//             e.preventDefault();

//             var target = e.currentTarget.href;
//             console.log(target);
//             const menossaDiv = document.createElement("div");
//             menossaDiv.classList.add("fader-out");

//             document.body.append(menossaDiv);
//             setTimeout(() => {
//                 menossaDiv.classList.add("menossa");
//             },1);
            
//             setTimeout(() => {
//                 window.location.href = target;
//             }, 499);
//         });
//     }
// }