/* /////////////////////////// */

/* This function is related with aside imgs */

/* /////////////////////////// */

var imgArray = document.querySelectorAll('div.asideImgContainerClassEinar input');
//console.log(imgArray)
imgArray.forEach(function(moveImages) {
    moveImages.addEventListener('mouseover', hovimg)
    moveImages.addEventListener('mouseleave', no_hovimg)
    moveImages.addEventListener('click', no_hovimg)
});

function no_hovimg(event) {
    option = event.target;
    option.style.transform = '';
    option.style.transition = '0.5s';
    option.style.borderRadius = '';
    option.style.border = '';
}

function hovimg(event) {
    option = event.target;
    option.style.transform = 'translateY(-2px) translateX(+2px) scale(1.1)';
    option.style.transition = '0.5s';
    option.style.borderRadius = '10px';
    option.style.border = '5px solid #FF00E6';
}

//closing of moveImages*/

/* /////////////////////////// */

/* This function brings data to PRICE */

/* /////////////////////////// */


var myPriceSelector = document.querySelector(".customSelectEinarDiv");
myPriceSelector.addEventListener('click', priceSelectedForCostumer)

function priceSelectedForCostumer(event) {

    var AllOptionprices = document.querySelector(".priceSelectorEinarClass");
    replaceMainPrice(AllOptionprices.value)

}

function replaceMainPrice(price) {
    document.getElementById("finalPriceEinar").innerHTML = price;
}

/* /////////////////////////// */

/* This function brings data to COLOR */

/* /////////////////////////// */

var myColorSelector = document.querySelector(".customSelectColorEinarDiv");
myColorSelector.addEventListener('click', colorSelectedForCostumer)

function colorSelectedForCostumer(event) {

    var AllOptioncolors = document.querySelector(".colorSelectorEinarClass");
    replaceMainColor(AllOptioncolors.value)

}

function replaceMainColor(color) {
    document.getElementById("finalColorEinar").innerHTML = color;
}