addEventListener("resize", e => {
    var vw = window.innerWidth

    console.log("changing");

    if (vw > 685) {
        var contextHeight = document.querySelector(".title-wrapper").offsetHeight;
        var titleHeight = document.querySelector(".title").offsetHeight;
    
        document.querySelector(".first").style.minHeight = contextHeight + "px";
        document.querySelector(".sub-title").style.marginTop = titleHeight + "px";

        console.log("larger");
    } else {
        document.querySelector(".sub-title").style.marginTop = "0px";

        console.log("smaller");
    }
});