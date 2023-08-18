$( function() {
    $( ".draggable" ).draggable();
} );









const blends = [].slice.call(document.getElementsByName("blend-mode"));
const docElements = document.querySelectorAll('.work-div');

blends.forEach((radioBtn) => {
    radioBtn.addEventListener('click', () => pickBlendMode(radioBtn, docElements));
});

const pickBlendMode = (blendMode, elem) => {
    let chosenMode;
    if (blendMode.checked) {
        chosenMode = blendMode.value;
        for (var i = 0, max = elem.length; i < max; i++) {
            elem[i].style.setProperty('--blend-mode', chosenMode);
        }
    }
};