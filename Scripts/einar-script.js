/* /////////////////////////// */
 
/* This function is related with aside imgs */
 
/* /////////////////////////// */
 
/*var imgArray = document.querySelectorAll('section.asideContainerEinar div.asideImgContainerClassEinar input');
//console.log(imgArray)
imgArray.forEach(function(moveImages) {
 moveImages.addEventListener('mouseover', hovimg)
 moveImages.addEventListener('mouseleave', no_hovimg)
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
 option.style.border = '5px solid rgb(255, 204, 0)';
}
//closing of moveImages*/
 
/* /////////////////////////// */
 
/* This function is for the menu selector related with bike prices */
 
/* /////////////////////////// */
 
// AllOptionprices.forEach(function(showSelectedPrice) {
 
// //Tendrás que gestionar el evento del select y manualmente hacer un innerHTML para ponerle el value dentro
// //console.log(showSelectedPrice)
// /*showSelectedPrice.addEventListener('mouseover', hovprice)
// showSelectedPrice.addEventListener('mouseleave', no_hovprice)*/
// showSelectedPrice.addEventListener('click', sele)
 
// });
 
var myPriceSelector = document.querySelector(".customSelectEinarDiv");
console.log(myPriceSelector, "aksjhdlksjd")
myPriceSelector.addEventListener('click', priceSelectedForCostumer)
 
function priceSelectedForCostumer(event) {
 
 var AllOptionprices = document.querySelector(".priceSelectorEinarClass");
 console.log(AllOptionprices.value)
 replaceMainPrice(AllOptionprices.value)
 
}
 
/*function no_hovprice(event) {
 option = event.target;
 option.style.borderRadius = '';
 option.style.border = '';
 
}
 
function hovprice(event) {
 option = event.target;
 option.style.borderRadius = '5px';
 option.style.border = '5px solid rgb(184, 29, 168)';
 
}*/
 
function replaceMainPrice(price) {
 document.getElementById("finalPriceEinar").innerHTML = price;
}
 
/*
//closing of showSelectedPrice
console.log(AllOptionprices)
 
var mainPRice = document.getElementsByClassName("finalPriceEinarClass");
 
mainPRice.forEach(function(showNewPrice) {
 
 showNewPrice.addEventListener('click', clickfnwprice)
 showNewPrice.addEventListener('click', noclickfnwprice)
 
 function noclickfnwprice(event) {
 option = event.target;
 option.element.innerHTML = ""
 }
 
 function clickfnwprice(event) {
 opt = event.target;
 opt.element.innerHTML = "Hola"
 
 }
 //closing of showNewPrice
});*/
