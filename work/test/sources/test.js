window.onload = () => {
    const tulossaElement = document.querySelector(".fader-in");
    const innerLinks = document.querySelectorAll('a:not([target="_blank"])');

    tulossaElement.classList.remove("tulossa");
    
    setTimeout(() => {
        tulossaElement.remove();
    }, 500);

    for (let i = 0; i < innerLinks.length; i++) {
        const innerLink = innerLinks[i];

        innerLink.addEventListener("click", e => {
            e.preventDefault();

            var target = e.target.href;
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