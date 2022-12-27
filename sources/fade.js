console.log('https://www.youtube.com/watch?v=NuAKnbIr6TE');

var vw = window.innerWidth
const innerLinks = document.querySelectorAll('a:not([target="_self"], [target="_blank"])');
const faderElement = document.querySelector('#fader');

if (vw > 800) {
    window.onpageshow = () => {
        faderElement.classList.remove('motion');

        setTimeout(() => {
            faderElement.remove();
        }, 500);

        innerLinks.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();

                var target = e.currentTarget.href;
                const faderDiv = document.createElement('div');
                faderDiv.classList.add('fader');

                document.body.append(faderDiv);
                setTimeout(() => {
                    faderDiv.classList.add('motion');
                }, 1);

                setTimeout(() => {
                    window.location.href = target;
                }, 499);
            })
        })
    }
} else {
    faderElement.remove();
}