var imgArray = document.querySelectorAll('section.asideContainerEinar div.asideImgContainerClassEinar input');
console.log(imgArray)
imgArray.forEach(function(moveImages) {
    // do whatever
    
    moveImages.addEventListener('mouseover', hov)
    moveImages.addEventListener('mouseleave', no_hov)
});

    function no_hov(event) {
        option = event.target;
        option.style.transform = '';
        option.style.transition = '0.5s';
        option.style.borderRadius = '';
        option.style.border = '';
    }

    function hov(event) {
        option = event.target;
        option.style.transform = ' scale(1.1)';
        option.style.transition = '0.8s';
        
        option.style.border = '0.2px solid gray'
    }

