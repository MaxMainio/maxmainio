const images = document.querySelectorAll('.work-img');

images.forEach(function (item){
    item.addEventListener("mousedown", (event) => {
        let current = event.target;
        let container = event.target.parentNode.parentNode;

        current.classList.add('focused');
        container.classList.add('focusedcontainer');

        document.body.style.cursor = 'zoom-in';



        document.addEventListener("mouseup", (event) => {
            current.classList.remove('focused');
            container.classList.remove('focusedcontainer');

            document.body.removeAttribute('style');
        });
    });
});