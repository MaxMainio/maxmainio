const docuvizElements = document.querySelectorAll('.docuviz');
const remToPixels = parseFloat(getComputedStyle(document.documentElement).fontSize) * 3;



function adjustHeights() {
    docuvizElements.forEach(docuviz => {
        let sibling = docuviz.previousElementSibling;
        while (sibling && !sibling.classList.contains('docuinfo')) {
            sibling = sibling.previousElementSibling;
        }

        if (sibling) {
            const siblingHeight = sibling.offsetHeight;
            const docuvizHeight = docuviz.offsetHeight;

            if (siblingHeight === docuvizHeight) {
                docuviz.style.height = siblingHeight + remToPixels + 'px';
            }
        }
    });
}



document.addEventListener("DOMContentLoaded", () => {
    adjustHeights();
});

window.addEventListener("resize", () => {
    adjustHeights();
});