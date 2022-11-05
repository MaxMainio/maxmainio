console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

window.onload = () => {
    const tulossaElement = document.querySelector(".fader-in");
    const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');

    console.log(innerLinks);

    tulossaElement.classList.remove("tulossa");
    
    setTimeout(() => {
        tulossaElement.remove();
    }, 500);

    for (let i = 0; i < innerLinks.length; i++) {
        const innerLink = innerLinks[i];

        innerLink.addEventListener("click", e => {
            e.preventDefault();

            var target = e.target.href;
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