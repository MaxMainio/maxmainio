window.onload = () => {
    const transitionElement = document.querySelector(".fader-in");

    const innerLinks = document.querySelectorAll('a:not([target="_blank"])');
    console.log(innerLinks);

    transitionElement.classList.remove("is-active");
    
    setTimeout(() => {
        transitionElement.remove();
    }, 500);
}