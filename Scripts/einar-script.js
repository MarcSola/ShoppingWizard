/* /////////////////////////// */


/* This function is related with aside imgs   */


/* /////////////////////////// */

var imgArray = document.querySelectorAll('section.asideContainerEinar div.asideImgContainerClassEinar input');
//console.log(imgArray)
imgArray.forEach(function(moveImages) {
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
        option.style.transform = 'translateY(-2px) translateX(+2px) scale(1.1)';
        option.style.transition = '0.5s';
        option.style.borderRadius = '10px';
        option.style.border = '5px solid rgb(255, 204, 0)';
    }
    //closing of moveImages
});

/* /////////////////////////// */


/* This function is for the menu selector related with bike prices   */


/* /////////////////////////// */


var AllOptionprices = document.querySelectorAll("#priceSelectorEinar");
//console.log(AllOptionprices)

AllOptionprices.forEach(function(showSelectedPrice) {

    //Tendrás que gestionar el evento del select y manualmente hacer un innerHTML para ponerle el value dentro
    console.log(showSelectedPrice)
    showSelectedPrice.addEventListener('mouseover', hov)
    showSelectedPrice.addEventListener('mouseleave', no_hov)
    showNewPrice.addEventListener('click', clickf)

    function no_hov(event) {
        option = event.target;
        option.style.borderRadius = '';
        option.style.border = '';

    }

    function hov(event) {
        option = event.target;
        option.style.borderRadius = '10px';
        option.style.border = '5px solid rgb(184, 29, 168)';

    }

    function clickf() {
        option = event.target;
        for (var i = 0; i < AllOptionprices.length; i++) {
            AllOptionprices[i].onclick = function() {
                alert(this.innerHTML);
            }
        }

    }

    //closing of showSelectedPrice
});
var mainPRice = document.getElementsByClassName("finalPriceEinarClass");

mainPRice.forEach(function(showNewPrice) {

    showNewPrice.addEventListener('click', clickf)
    showNewPrice.addEventListener('click', noclickf)

    function noclickf(event) {
        option = event.target;
        option.element.innerHTML = ""
    }

    function clickf(event) {
        option = event.target;
        option.element.innerHTML = "Hola"

    }
    //closing of showNewPrice
});