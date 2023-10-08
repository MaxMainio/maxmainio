// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
var vh = window.innerHeight;
var scrollPos = window.pageYOffset;
const slScroll = document.getElementById('sortlaterscroll');








// INITIALIZERS & EVENT TRIGGERS    ================================================================================================
window.addEventListener('resize', e => {
    vh = window.innerHeight;
    scrollPos = window.pageYOffset;
});

window.addEventListener('scroll', (event) => {
    scrollPos = window.pageYOffset;

    if(scrollPos < vh){
        let offset = normalizeBetween(scrollPos, 0, vh, 0, -75);
        slScroll.style.transform = 'translateY(' + offset + '%)'; 
    };
});









// GLOBAL FUNCTIONS ================================================================================================================
function normalizeBetween(m, rmin, rmax, tmin, tmax){
    let normalizedValue = ((m - rmin)/(rmax - rmin)) * (tmax - tmin) + tmin;
    let roundedNormal = Math.round(normalizedValue * 100) / 100;
    return (roundedNormal);
};