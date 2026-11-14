console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

// GLOBAL VARIABLES & CONSTANTS ====================================================================================================
var vw = window.innerWidth;









// PAGE TRANSITIONS ===============================================================================================================
// Documents are visible by default. Only this controller activates the decorative overlay.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

(() => {
    const transitionViewport = window.matchMedia('(min-width: 801px) and (hover: hover)');
    const hasInitialOverlay = !!document.querySelector('#fader');
    let overlay = null;
    let finishTimer;
    let recoveryTimer;
    let pendingURL = null;
    let navigating = false;

    function resetTransition() {
        clearTimeout(finishTimer);
        clearTimeout(recoveryTimer);
        document.querySelectorAll('.fader').forEach(element => element.remove());
        overlay = null;
        pendingURL = null;
        navigating = false;
    }

    function motionEnabled() {
        return transitionViewport.matches && !motionPreference.matches;
    }

    function createOverlay(covered) {
        const element = document.createElement('div');
        element.className = 'fader is-active' + (covered ? ' motion' : '');
        element.setAttribute('aria-hidden', 'true');
        document.body.append(element);
        overlay = element;
        // Recover even when navigation is stopped or a destination does not replace this page.
        recoveryTimer = setTimeout(resetTransition, 1800);
        return element;
    }

    function afterTransition(element, callback) {
        function finish(event) {
            if (event && (event.target !== element || event.propertyName !== 'transform')) return;
            if (overlay !== element) return;
            clearTimeout(finishTimer);
            element.removeEventListener('transitionend', finish);
            callback();
        }
        element.addEventListener('transitionend', finish);
        finishTimer = setTimeout(() => finish(), 650);
    }

    function revealPage() {
        resetTransition();
        const historyVisit = performance.getEntriesByType('navigation')[0]?.type === 'back_forward';
        if (!hasInitialOverlay || !motionEnabled() || historyVisit) return;
        const element = createOverlay(true);
        // Commit the start position before animating; do not wait for images or window.load.
        element.getBoundingClientRect();
        afterTransition(element, resetTransition);
        element.classList.remove('motion');
    }

    function navigate() {
        if (!pendingURL || navigating) return;
        navigating = true;
        window.location.assign(pendingURL);
    }

    // Bubble at window level so document and element handlers can retain event ownership.
    window.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest?.('a[href]');
        if (!link || link.hasAttribute('download')) return;
        const target = link.getAttribute('target') || document.querySelector('base[target]')?.target || '';
        if (target && target.toLowerCase() !== '_self') return;
        let url;
        try {
            url = new URL(link.href, document.baseURI);
        } catch {
            return;
        }
        if (!/^https?:$/.test(url.protocol) || url.origin !== window.location.origin) return;
        // Same-document links (including fragments) and non-document resources stay native.
        if (url.pathname === window.location.pathname && url.search === window.location.search) return;
        if (!url.pathname.endsWith('/') && !/\.html?$/i.test(url.pathname)) return;
        if (!motionEnabled()) return;

        event.preventDefault();
        // A second eligible click selects the latest destination without queuing another fade.
        if (pendingURL && !navigating) {
            pendingURL = url.href;
            return;
        }
        resetTransition();
        pendingURL = url.href;
        const element = createOverlay(false);
        element.getBoundingClientRect();
        afterTransition(element, navigate);
        element.classList.add('motion');
    });

    window.addEventListener('pagehide', resetTransition);
    window.addEventListener('pageshow', event => {
        if (event.persisted) resetTransition();
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) resetTransition();
    });
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') resetTransition();
    });
    function updateMotion() {
        const destination = pendingURL;
        const alreadyNavigating = navigating;
        resetTransition();
        if (destination && !alreadyNavigating) window.location.assign(destination);
    }
    motionPreference.addEventListener('change', updateMotion);
    transitionViewport.addEventListener('change', updateMotion);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', revealPage, { once: true });
    } else {
        revealPage();
    }
})();









// BLURRY LOAD  ====================================================================================================================
const previewImages = new WeakSet();

function clearPreview(media, failed = false) {
    media.classList.remove('blur-load', 'blur-vid', 'loaded');
    media.style.removeProperty('background-image');
    media.dataset.mediaState = failed ? 'error' : 'ready';
}

function checkImagePreview(img) {
    if (!img.complete) return;
    clearPreview(img, img.naturalWidth === 0);
}

function trackImagePreview(img) {
    if (previewImages.has(img)) return;
    previewImages.add(img);
    // Keep listeners for later source changes, including cached replacements.
    img.addEventListener('load', () => checkImagePreview(img));
    img.addEventListener('error', () => checkImagePreview(img));
    previewSourceObserver.observe(img, { attributes: true, attributeFilter: ['src', 'srcset'] });
    checkImagePreview(img);
}

const previewSourceObserver = new MutationObserver(records => {
    new Set(records.map(record => record.target)).forEach(img => {
        img.dataset.mediaState = 'loading';
        img.classList.add('blur-load');
        checkImagePreview(img);
    });
});

document.querySelectorAll('img.blur-load').forEach(trackImagePreview);

// Dynamic artwork supplies its matching preview before starting each request.
function setPreviewSource(img, source, preview) {
    if (!img) return;
    trackImagePreview(img);
    img.dataset.mediaState = 'loading';
    img.classList.add('blur-load');
    img.style.backgroundImage = preview ? `url("${preview}")` : '';
    img.src = source;
    checkImagePreview(img);
}

document.querySelectorAll('video.blur-load, video.blur-vid').forEach(video => {
    const preview = video.style.backgroundImage;
    function ready() {
        // Metadata alone does not guarantee a displayable frame.
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) clearPreview(video);
    }
    video.addEventListener('loadeddata', ready);
    video.addEventListener('canplay', ready);
    video.addEventListener('error', () => clearPreview(video, true));
    video.addEventListener('loadstart', () => {
        video.dataset.mediaState = 'loading';
        video.classList.add('blur-load');
        video.style.backgroundImage = preview;
        ready();
    });
    if (video.error) clearPreview(video, true);
    else ready();
});









// IMG CAROUSEL ====================================================================================================================
document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const slides = [...carousel.querySelector('[data-slides]').children];
    if (!slides.length) return;
    carousel.querySelector('[data-slides]').setAttribute('role', 'presentation');
    carousel.setAttribute('role', 'group');
    carousel.setAttribute('aria-roledescription', 'carousel');
    carousel.setAttribute('aria-label', carousel.dataset.carouselLabel || 'Images');
    const status = document.createElement('p');
    status.className = 'visually-hidden';
    status.setAttribute('role', 'status');
    carousel.append(status);
    let active = Math.max(0, slides.findIndex(slide => slide.hasAttribute('data-active')));

    function showSlide(index, announce = true) {
        active = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.toggleAttribute('data-active', i === active);
            slide.setAttribute('aria-hidden', String(i !== active));
            slide.inert = i !== active;
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-roledescription', 'slide');
            slide.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
        });
        if (announce) status.textContent = `Image ${active + 1} of ${slides.length}. ${slides[active].querySelector('img')?.alt || ''}`;
    }

    carousel.querySelectorAll('[data-carousel-button]').forEach(button => {
        button.type = 'button';
        button.setAttribute('aria-label', button.dataset.carouselButton === 'next' ? 'Next image' : 'Previous image');
        button.addEventListener('click', () => showSlide(active + (button.dataset.carouselButton === 'next' ? 1 : -1)));
        button.addEventListener('keydown', event => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            showSlide(active + (event.key === 'ArrowRight' ? 1 : -1));
        });
    });
    showSlide(active, false);
});


// ARTWORK INSPECTION ------------------------------------------------------------------------------------------------------------
// Pointer users keep press-and-hold inspection; keyboard users toggle it and close with Escape.
let activeArtworkZoom = null;
let artworkCursor;
let artworkCursorPriority;

function closeArtworkZoom() {
    if (!activeArtworkZoom) return;
    const { element, className, containerClass } = activeArtworkZoom;
    element.classList.remove(className);
    if (containerClass) element.parentElement.classList.remove(containerClass);
    element.setAttribute('aria-pressed', 'false');
    if (artworkCursor) document.body.style.setProperty('cursor', artworkCursor, artworkCursorPriority);
    else document.body.style.removeProperty('cursor');
    activeArtworkZoom = null;
}

function enableArtworkZoom(element, { className = 'focused', containerClass = 'focusedcontainer', label } = {}) {
    const nativeButton = element.tagName === 'BUTTON';
    if (!nativeButton) {
        element.tabIndex = 0;
        element.setAttribute('role', 'button');
    }
    element.setAttribute('aria-label', label || `Enlarge image: ${element.alt}`);
    element.setAttribute('aria-pressed', 'false');
    element.setAttribute('aria-describedby', 'artwork-zoom-help');
    if (!document.getElementById('artwork-zoom-help')) {
        const help = document.createElement('p');
        help.id = 'artwork-zoom-help';
        help.className = 'visually-hidden';
        help.textContent = 'Press Enter or Space to enlarge, then press again or Escape to return. You can also press and hold with the mouse.';
        document.body.append(help);
    }
    function open(pointer = false) {
        closeArtworkZoom();
        artworkCursor = document.body.style.getPropertyValue('cursor');
        artworkCursorPriority = document.body.style.getPropertyPriority('cursor');
        activeArtworkZoom = { element, className, containerClass, pointer };
        element.classList.add(className);
        if (containerClass) element.parentElement.classList.add(containerClass);
        element.setAttribute('aria-pressed', 'true');
        document.body.style.cursor = 'zoom-out';
    }
    function toggle() {
        if (activeArtworkZoom?.element === element) closeArtworkZoom();
        else open();
    }
    element.addEventListener('mousedown', event => {
        if (event.button === 0) open(true);
    });
    element.addEventListener('click', event => {
        // Native keyboard and assistive-technology clicks have no pointer click count.
        if (event.detail === 0) toggle();
    });
    if (!nativeButton) element.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        if (!event.repeat) toggle();
    });
    element.addEventListener('blur', () => {
        if (activeArtworkZoom?.element === element) closeArtworkZoom();
    });
}

document.querySelectorAll('.zoomable').forEach(element => enableArtworkZoom(element));
window.addEventListener('mouseup', () => {
    if (activeArtworkZoom?.pointer) closeArtworkZoom();
});
window.addEventListener('blur', closeArtworkZoom);
window.addEventListener('pagehide', closeArtworkZoom);
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && activeArtworkZoom) {
        event.preventDefault();
        closeArtworkZoom();
    }
});


// FOOTER SECTION   ================================================================================================================
// FOOTER CATCHPHRASES  ------------------------------------------------------------------------------------------------------------
const footerTxt = new Array();
footerTxt[0] = 'More being added here and there...';
footerTxt[1] = 'This website is in a constant state of &ldquo;work in progress.&rdquo;';
footerTxt[2] = 'This website is forever in the making.';
footerTxt[3] = 'A never-ending journey of website enhancement.';
footerTxt[4] = 'Content blooms here regularly... Keep checking back!';
footerTxt[5] = 'Always adding, always refining.';
footerTxt[6] = 'Work in progress, masterpiece in making...';
footerTxt[7] = 'Forever in progress... Enjoy the transformation.';
footerTxt[8] = 'Always under construction in the pursuit of excellence.';
footerTxt[9] = 'A personal journey of perpetual web crafting...';

// Elements ------------------------------------------------------------------------------------------------------------------------
const footerField = document.getElementById('footer-field');
const backToTop = document.getElementById('top-btn');
const footerDate = document.getElementById('footer-date');
const currentYear = new Date().getFullYear();



// Set footer date  ----------------------------------------------------------------------------------------------------------------
if (footerDate) footerDate.textContent = `©${currentYear} MMB`;



// Set footer text  ----------------------------------------------------------------------------------------------------------------
function setFooterText() {
    if (!footerField || footerField.childElementCount) return;
    const h3 = document.createElement('h3');
    h3.innerHTML = footerTxt[getRandomInt(0, footerTxt.length - 1)];
    footerField.appendChild(h3);
}



// Back to top button   ------------------------------------------------------------------------------------------------------------
if (backToTop) {
    backToTop.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        document.getElementById('top')?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: motionPreference.matches ? 'instant' : 'smooth' });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setFooterText, { once: true });
} else {
    setFooterText();
}









// GLOBAL FUNCTIONS	================================================================================================================
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
