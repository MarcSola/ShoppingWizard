var imgArray = document.querySelectorAll('div input');
[].forEach.call(imgArray, function(moveImages) {
    // do whatever
    moveImages.addEventListener('mouseover', hov)
    moveImages.addEventListener('mouseleave', no_hov)

    function no_hov(event) {
        option = event.target;
        option.style.transform = '';
        option.style.transition = '0.5s';
        option.style.borderRadius = '';
        option.style.border = '';
    }

    function hov(event) {
        option = event.target;
        option.style.transform = 'translateY(-125px) translateX(+125px) scale(2.2)';
        option.style.transition = '0.8s';
        option.style.borderRadius = '10px';
        option.style.border = '5px solid gray'
    }

});