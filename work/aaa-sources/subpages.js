window.onload = (event) => {
    var vw = window.innerWidth

    if (vw > 685) {
        var contextHeight = document.querySelector(".title-wrapper").offsetHeight;
        var titleHeight = document.querySelector(".title").offsetHeight;
    
        document.querySelector(".first").style.minHeight = contextHeight + "px";
        document.querySelector(".sub-title").style.marginTop = titleHeight + "px";
    } else {
        document.querySelector(".sub-title").style.marginTop = "0px";
    }
};

addEventListener("resize", e => {
    var vw = window.innerWidth

    if (vw > 685) {
        var contextHeight = document.querySelector(".title-wrapper").offsetHeight;
        var titleHeight = document.querySelector(".title").offsetHeight;
    
        document.querySelector(".first").style.minHeight = contextHeight + "px";
        document.querySelector(".sub-title").style.marginTop = titleHeight + "px";
    } else {
        document.querySelector(".sub-title").style.marginTop = "0px";
    }
});