var imgArray = document.querySelectorAll('section.asideContainerEinar div.asideImgContainerClassEinar input');
//console.log(imgArray)
imgArray.forEach(function(moveImages) {
    moveImages.addEventListener('mouseover', hov)
    moveImages.addEventListener('mouseleave', no_hov)
        // moveImages.addEventListener('click',updateValue);

    function no_hov(event) {
        option = event.target;
        option.style.transform = '';
        option.style.transition = '0.5s';
        option.style.borderRadius = '';
        option.style.border = '';
        option.style.animation = '';

    }

    function hov(event) {
        option = event.target;
        option.style.transform = 'translateY(-2px) translateX(+2px) scale(1.1)';
        option.style.transition = '0.5s';
        option.style.borderRadius = '10px';
        option.style.border = '5px solid rgb(255, 204, 0)'
        option.style.animation = 'glitch1 2.5s infinite'
    }
});

/* /////////////////////////// */


/* This function is for the menu selector related with bike prices   */


/* /////////////////////////// */

var AllOptionprices = document.getElementsByTagName("option");
//console.log(AllOptionprices)
AllOptionprices.forEach(function(showSelectedPrice) {
    showSelectedPrice.addEventListener('click', clickf)

    function clickf(event) {
        document.getElementById("finalPriceEinar").innerHTML = "change this price";
    }
});