const mainBackground = document.querySelector("main.main");
const footer = document.getElementById("footer");

const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");
const buyButton = document.getElementById("buyButton");

const footerSection = document.querySelector(".footer section");
const mainFooterBox = document.getElementById("main-footer-box");
const progressName = document.getElementById("progress-name");
const footerButtons = document.getElementById("footer-buttons");

const mainFooterPicture = document.getElementById("main-footer-picture");
const mainFooterDisc = document.getElementById("main-footer-disc");

const productPage = document.getElementById("product-p");
const profilePage = document.getElementById("profile-p");


const progressInBox = document.querySelectorAll(".progress-box ul")[0].children;
const profileBar = document.getElementById("profile").childNodes[1];
const addressBar = document.getElementById("address").childNodes[1];
const shippingBar = document.getElementById("shipping").childNodes[1];
const finishBar = document.getElementById("finish").childNodes[1];
const adressForm = document.querySelector(' div.adress');
const all_Imputs_Adress=document.querySelectorAll(' div.adress input');
const all_message_Adress=document.querySelectorAll(' div.adress form div span');

const nextButton = document.getElementsByName("next");

const profileClearButton = document.getElementById("profile-reset");

const profileButtons = document.querySelectorAll("#profile-li .buttons");
const addressButtons = document.querySelectorAll("#address-li .buttons");
const shippingButtons = document.querySelectorAll("#shipping-li .buttons");
const finishButton = document.querySelector("#finish-li .buttons");

const timerMessage = document.querySelector("#timer-msg");
const warningMessage = document.querySelector(".warning-message");
console.log(warningMessage)

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

const profileBody = document.querySelectorAll(".profile-p");
const profileForm = document.getElementById("profile-form");

const userName = document.getElementById("username");



// jon slide and text hidden in profile 
const slideHidden = document.querySelector(".jon_slide");
const textHidden = document.querySelector(".jon_text");

// Shipping form variables
const shipping_time = document.querySelectorAll(".shipping-radio");
const min_date = document.getElementById("min-date");
const max_date = document.getElementById("max-date");
var current_date = new Date();
var current_minutes = current_date.getMinutes();
var current_hour = current_date.getHours();
var current_day = current_date.getDate();
var current_month = current_date.getMonth() + 1;
var current_year = current_date.getFullYear();
const gift = document.getElementById("gift");
const shipping_gift = document.getElementById("shipping-gift");
const gift_textarea = document.getElementById("gift-textarea");
const gift_wrapper_file = document.getElementById("gift-wrapper-file");
var allowedExtensions = /(\.jpeg|\.png)$/i;

// Shipping form event listeners

// radio listeners
shipping_time.forEach(function (element){
  element.addEventListener("click", shippingInterval);
});

//shipping_gift.style.display = "none";
console.log("gift: ", gift.checked);
console.log("gift_wrapper_file: ", gift_wrapper_file.accept = "image/png");

function shippingInterval(){
  let shipping_time_range = 0;
  
  for(let i=0; i<shipping_time.length; i++){
    
    if(shipping_time[i].checked){

      shipping_time_range =  shipping_time[i].value / 24;

    }
  }

  let minutes = current_minutes;

  if(minutes < 10){

    minutes = "0"+`${minutes}`;
    
  }

  let min_date_day = current_day;

  if(current_hour >=18){

    min_date_day = min_date_day + 1;

  }

  let max_date_day = min_date_day + shipping_time_range;
  let final_shipping_hour = current_hour;
  let final_shipping_minutes = minutes;

  if(final_shipping_hour < 9 && final_shipping_hour>=0){

    final_shipping_hour = 9;
    final_shipping_minutes = "00";
    current_hour = 9;
    minutes = "00";

  }else{

    final_shipping_minutes = minutes;

  }

  min_date.innerHTML = `${current_month}` + "/" + `${min_date_day}` + "/" + `${current_year}` + " at " + `${current_hour}` + ":" + `${minutes}`;
  max_date.innerHTML = `${current_month}` + "/" + `${max_date_day}` + "/" + `${current_year}` + " at " + `${final_shipping_hour}` + ":" + `${final_shipping_minutes}`;

}













buyButton.addEventListener("click", clickBuy);

nextButton[0].addEventListener("click", checkUsername);
nextButton[1].addEventListener("click", checkAdress);
nextButton[2].addEventListener("click", goToFinish);


toggleSwitch.addEventListener("change", changeTheme);




function changeTheme() {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute("mode-changes", "dark");
  } else {
    document.documentElement.setAttribute("mode-changes", "light");
  }
}




function clickBuy() {
  // go to the profile page.
  // background changes
  mainBackground.className = "profile-background";
  footer.style.background = "none";
  productPage.style.display = "none";
  profilePage.style.display = "block";
  profileBody[0].style.display = "block";
  displayProfile();
  registerTimer();

  // jon slide hidden 
  slideHidden.style.display = "none";
  textHidden.style.display = "none";
}
/*_____________VALIDACIONES______________*/

/*_________________________________UserName*/

function checkUsername() {
  var regTypeUser =  /^[A-Za-z0-9*]{5,20}$/
  var regTypeEmail = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])"
  if (userName.validity.valueMissing) {
    warningMessage.style.visibility = "visible"
    //warningMessage.className ="warning-message";
    warningMessage.textContent = "Please Enter the Username";
    
  } else {
    if (!regTypeUser.test(userName.value)) {
      warningMessage.style.visibility = "visible"
      warningMessage.textContent = "Only letters (either case), numbers, between 5 and 20 characters."
      removeEventProfile();
      console.log()
    }else {
      warningMessage.classList.remove("warning-message");
      goToAddress();
    }
  }
}
/*______________________________Adress*/

function checkAdress() {
  
x=0;
for(i=0;i<all_Imputs_Adress.length;i++){

  if (all_Imputs_Adress[i].checkValidity()===false) {
        if (i===2){
        all_message_Adress[i].style.visibility='visible';
        all_message_Adress[i].innerText = "Please writeby this format: dd/mm/aaaa";
        }else{
        
        all_message_Adress[i].style.visibility='visible';
        all_message_Adress[i].innerText = "Please Enter the "+all_Imputs_Adress[i].name;
        console.log(all_message_Adress[i].innerText);
        }
      
    
  
  }else if(all_Imputs_Adress[i].checkValidity()===true){
      x=x+1;
      all_message_Adress[i].style.visibility='hidden';
      if(x===all_Imputs_Adress.length){
        goToShipping();
      }
  }
    
    
}
  
  
  
 

}

  


function removeEventProfile(){
  nextButton[0].removeEventListener("click", goToAddress);
}


function goToAddress() {
  mainBackground.className = "address-background";
  adressForm.style.display='block'

  profileButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  addressButtons.forEach((ele) => (ele.style.visibility = "visible"));
  displayAddress();
}

function goToShipping() {

    mainBackground.className = "shipping-background";
    addressButtons.forEach((ele) => (ele.style.visibility = "hidden"));
    shippingButtons.forEach((ele) => (ele.style.visibility = "visible"));
    adressForm.style.display='none'
    displayShipping();
  
}

function goToFinish() {
  mainBackground.className = "finish-background";
  shippingButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  finishButton.style.visibility = "visible";
  displayFinish();
}

function goBackToProduct() {
  mainBackground.className = "main-background"
  main.style.display = "block";
  productPage.style.display = "flex"
  profileBody[0].style.display = "none"
}




function displayProfile() {
  profileBar.style.backgroundColor = "rgb(250, 184, 4)";
  
}

function displayAddress() {
  adressForm.style.display='block'
  addressBar.style.backgroundColor = "rgb(250, 184, 4)";
  profileBody[0].style.display = "none"
}

function displayShipping() {
  shippingBar.style.backgroundColor = "rgb(250, 184, 4)";
}

function displayFinish() {
  finishBar.style.backgroundColor = "rgb(250, 184, 4)";
}

function registerTimer() {
  var time = 5;
  var min = 0;

  var x = setInterval(function () {
    time--;
    timerMessage.style.visibility = "visible"
    timerMessage.style.backgroundColor = "rgb(39, 38, 38)"
    timerMessage.innerHTML =`You started registering ${(min += 1)} minutes ago!`;
    
    setTimeout(function () {
        timerMessage.style.visibility = "hidden"
    }, 5000);

    if (time === 0) {
      clearInterval(x);
      goBackToProduct();
    }
  }, 60000);
}


