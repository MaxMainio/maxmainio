const images = document.querySelectorAll('.work-img');

console.log(images);

images.forEach(function (item){
    item.addEventListener("mousedown", (event) => {
        let current = event.target;
        let container = event.target.parentNode.parentNode;

        current.setAttribute('id','focused');
        container.setAttribute('id', 'focusedcontainer');

        document.body.style.cursor = 'zoom-in';



        document.addEventListener("mouseup", (event) => {
            current.removeAttribute('id', 'focused');
            container.removeAttribute('id', 'focusedcontainer');

            document.body.style.cursor = 'auto';
        });
    });
});