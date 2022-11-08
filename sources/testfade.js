console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

window.onpageshow = () => {
    // Entering page fade in
    const tulossaDiv = document.createElement("div");
    tulossaDiv.classList.add("fader-in", "tulossa");
    document.body.append(tulossaDiv);

    const tulossaElement = document.querySelector(".fader-in");
    setTimeout(() => {
        tulossaElement.classList.remove("tulossa");

        setTimeout(() => {
            tulossaElement.remove();
        }, 499);
    }, 1);

    const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');

    // Exiting page fade out
    for (let i = 0; i < innerLinks.length; i++) {
        const innerLink = innerLinks[i];

        innerLink.addEventListener("click", e => {
            e.preventDefault();

            var target = e.currentTarget.href;
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