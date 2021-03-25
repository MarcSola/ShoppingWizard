/* /////////////////////////// */

/* This function is related with aside imgs */

/* /////////////////////////// */
//GLOBALS
var globalprice = ""

var imgArray = document.querySelectorAll('div.asideImgContainerClassEinar input');
//console.log(imgArray)
imgArray.forEach(function(moveImages) {
    moveImages.addEventListener('mouseover', hovimg)
    moveImages.addEventListener('mouseleave', no_hovimg)
    moveImages.addEventListener('click', changeimg)
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
    option.style.borderRadius = '15px';
    option.style.border = '5px solid #FF00E6';
}

function changeimg(event) {
    option = event.target;
    option.style.border = '8px solid #FFB300';
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
var moto_price=0
function replaceMainPrice(price) {
    document.getElementById("finalPriceEinar").innerHTML = price;
   document.querySelector("section.finish div.precios span.base_price").innerText=price;
   if(price==="4.500 €"){moto_price=4500}
   else if(price==="4.500 €"){moto_price=4500}
   else if(price==="5.300 €"){moto_price=5300}
   else if(price==="6.000 €"){moto_price=6000}
   else if(price==="6.500 €"){moto_price=6500}
   else{price='Choose one!!'};
   

}
console.log(globalprice)
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