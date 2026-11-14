// DRAGGABLE INTERACTIVITY WITH JQUERY  ============================================================================================
if (window.jQuery?.fn.draggable) $( function() {
    $( ".draggable" ).draggable();
} );









// BLENDING MODE INTERACTIVITY  ====================================================================================================
const blends = [].slice.call(document.getElementsByName("blend-mode"));
const docElements = document.querySelectorAll('.draggable');

blends.forEach((radioBtn) => {
    radioBtn.addEventListener('change', () => pickBlendMode(radioBtn, docElements));
});

const pickBlendMode = (blendMode, elem) => {
    let chosenMode;
    if (blendMode.checked) {
        chosenMode = blendMode.value;
        for (var i = 0, max = elem.length; i < max; i++) {
            elem[i].style.setProperty('--blend-mode', chosenMode);
        };
    };
};
// Keyboard positioning works independently of the optional pointer-dragging library.
docElements.forEach(element => {
    const originalLeft = element.style.left;
    const originalTop = element.style.top;
    element.addEventListener('keydown', event => {
        const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
        if (event.key === 'Home') {
            event.preventDefault();
            element.style.left = originalLeft;
            element.style.top = originalTop;
            return;
        }
        if (!directions[event.key] || event.altKey || event.ctrlKey || event.metaKey) return;
        event.preventDefault();
        const step = event.shiftKey ? 1 : 10;
        const [x, y] = directions[event.key];
        const styles = getComputedStyle(element);
        element.style.left = `${(parseFloat(styles.left) || 0) + x * step}px`;
        element.style.top = `${(parseFloat(styles.top) || 0) + y * step}px`;
    });
});
