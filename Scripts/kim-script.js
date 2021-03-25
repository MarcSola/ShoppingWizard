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



const nextButton = document.getElementsByName("next");

const clearButton = document.getElementsByName("reset");



const profileButtons = document.querySelectorAll("#profile-li .buttons");
const addressButtons = document.querySelectorAll("#address-li .buttons");
const shippingButtons = document.querySelectorAll("#shipping-li .buttons");
const finishButton = document.querySelector("#finish-li .buttons");

const timerMessage = document.querySelector("#timer-msg");
const warningMessage = document.querySelectorAll(".warning-message");

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

const profileBody = document.querySelectorAll(".profile-p");
const profileForm = document.getElementById("profile-form");
const profileInputs = document.querySelectorAll("#profile-form input");

const userName = document.getElementById("username");
const userEmail = document.getElementById("user-email");
const userPassword1 = document.getElementById("password1");
const userPassword2 = document.getElementById("password2");


const adressForm = document.querySelector(' div.adress');
const address_Form = document.getElementById("adress-form")
const all_Imputs_Adress=document.querySelectorAll(' div.adress input');
const all_message_Adress=document.querySelectorAll(' div.adress form div span');
const Final=document.querySelector('section.finish')

// jon slide and text hidden in profile
const slideHidden = document.querySelector(".jon_slide");
const textHidden = document.querySelector(".jon_text");

//shipping form div
const shippingForm = document.querySelector('div.shipping');

// Shipping form variables
const shipping_time = document.querySelectorAll(".shipping-radio");
const shipping_interval_error_box = document.getElementById("shipping-interval-box");
const shipping_interval_error_msg = document.getElementById("shipping-interval-alert-msg");
const min_date = document.getElementById("min-date");
const max_date = document.getElementById("max-date");
var shipping_date_interval_string = '';
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

// gift checkbox listener
gift.addEventListener("click", toggleGiftArea);

// preparing shipping interval to display
function shippingInterval(){
  let shipping_time_range = 0;
  
  for(let i=0; i<shipping_time.length; i++){
    
    if(shipping_time[i].checked){
      shipping_time_range =  shipping_time[i].value / 24;
    }

  }

  let minutes = current_minutes;

  // adjusting minutes value when it's less than 10
  if(minutes < 10){
    minutes = "0"+ minutes;
  }

  let min_date_day = current_day;
  let shipping_hour = current_hour;
  let max_date_day = min_date_day + shipping_time_range;

  
  // adjusting shipping day and hour depending on working shift and day of the month
  if(shipping_hour >=19){

    min_date_day = min_date_day + 1;
    shipping_hour = 9;
    max_date_day = max_date_day + 1;

  }

  if(min_date_day < 10){

    min_date_day = "0" + min_date_day;

    if (max_date_day < 10){

      max_date_day = "0" + max_date_day;

    }

  }

  let final_shipping_hour = shipping_hour;
  let final_shipping_minutes = minutes;

  // adjusting hour depending on working shift
  if(final_shipping_hour < 9 && final_shipping_hour>=0){

    final_shipping_hour = 9;
    final_shipping_minutes = "00";
    shipping_hour = 9;
    minutes = "00";

  }else{
    final_shipping_minutes = minutes;
  }

  let month = current_month;

  if(current_month<10){
    month = "0" + current_month;
  }

  min_date.innerHTML = `${month}` + "/" + `${min_date_day}` + "/" + `${current_year}` + " at " + `${shipping_hour}` + ":" + `${minutes}`;
  max_date.innerHTML = `${month}` + "/" + `${max_date_day}` + "/" + `${current_year}` + " at " + `${final_shipping_hour}` + ":" + `${final_shipping_minutes}`;

  shipping_date_interval_string = "Between: " + min_date.innerHTML + " and " + max_date.innerHTML;

}


// triggering the function for the first time without
// click event to create free shipping date interval string
shippingInterval()


// toggle to display gift area
function toggleGiftArea(){

  if(gift.checked === true){
    shipping_gift.style.visibility = "visible";
  }else{
    shipping_gift.style.visibility = "hidden";
  }

}



























buyButton.addEventListener("click", clickBuy);

nextButton[0].addEventListener("click", checkUserProfile);
nextButton[1].addEventListener("click", checkAdress);
nextButton[2].addEventListener("click", goToFinish);



toggleSwitch.addEventListener("change", changeTheme);



function changeTheme() {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute("mode-changes", "light");
  } else {
    document.documentElement.setAttribute("mode-changes", "dark");
  }
}



clearButton.forEach(ele=> {
  ele.addEventListener("click", () => {
  profileForm.reset();
  address_Form.reset();
});
})


function checkUserProfile() {
  var regTypeUser = /^[A-Za-z0-9*]{5,20}$/;
  var regTypeEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  var regTypePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;

  if (userName.validity.valueMissing) {
    warningMessage[0].style.visibility = "visible";
    warningMessage[0].textContent = "Please Enter your username";
    //removeEventProfile();
  } else if (!regTypeUser.test(userName.value)) {
    warningMessage[0].style.visibility = "visible";
    warningMessage[0].textContent =
      "Only letters (either case), numbers, between 5 and 20 characters.";
  //  removeEventProfile();
  } else {
    warningMessage[0].style.visibility = "hidden";
  }

  if (userEmail.validity.valueMissing) {
    warningMessage[1].style.visibility = "visible";
    warningMessage[1].textContent = "Please enter your email address.";
   // removeEventProfile();
  } else if (!regTypeEmail.test(userEmail.value) || userEmail.value.length >= 50) {
    warningMessage[1].style.visibility = "visible";
    warningMessage[1].textContent =
      "Only letters, numbers and (_), (.), less than 50 characters. example_@example.com, example.2@example.com.es";
   // removeEventProfile();
  } else {
    warningMessage[1].style.visibility = "hidden";
  }

  if (userPassword1.validity.valueMissing) {
    warningMessage[2].style.visibility = "visible";
    warningMessage[2].textContent = "Please enter your password.";
   // removeEventProfile();
  } else if (!regTypePassword.test(userPassword1.value)) {
    warningMessage[2].style.visibility = "visible";
    warningMessage[2].textContent =
      "Password should contain at least one number, one uppercase, one lowercase, one special character. Between 8 and 20 characters.";
  //  removeEventProfile();
  } else {
    warningMessage[2].style.visibility = "hidden";
  }

  if (userPassword2.validity.valueMissing) {
    warningMessage[3].style.visibility = "visible";
    warningMessage[3].textContent = "Please enter your confirm password.";
   // removeEventProfile();
  } else if (userPassword1.value !== userPassword2.value) {
    warningMessage[3].style.visibility = "visible";
    warningMessage[3].textContent = "Passwords do not match.";
  //  removeEventProfile();
  } else {
    warningMessage[3].style.visibility = "hidden";
  }
 removeEventProfile();
 nextButton[0].addEventListener("click", goToAddress);
}



    

// function checkAdress() {​​​​​​​​
//   for(i=0;i<all_Imputs_Adress.length;i++){​​​​​​​​
//     if (all_Imputs_Adress[i].checkValidity()===false) {​​​​​​​​
//       if (i===2){​​​​​​​​
//         all_message_Adress[i].style.visibility='visible';
//         all_message_Adress[i].innerText = "Please writeby this format: dd/mm/aaaa";
//       }​​​​​​​​ else {​​​​​​​​
//         all_message_Adress[i].style.visibility='visible';
//         all_message_Adress[i].innerText = "Please Enter the "+all_Imputs_Adress[i].name;
//         console.log(all_message_Adress[i].innerText);
//       }​​​​​​​​
//     }​​​​​​​​ else if(all_Imputs_Adress[i].checkValidity()===true){​​​​​​​​
//       x=x+1;
//       all_message_Adress[i].style.visibility='hidden';
//       if(x===all_Imputs_Adress.length){​​​​​​​​
//         goToShipping();
//       };​​​​​​​​
//     };​​​​​​​​
//   };​​​​​​​​
// };​​​​​​​​


function checkAdress() {
  var x = 0
  for(var i = 0; i < all_Imputs_Adress.length; i++){
    if(all_Imputs_Adress[i].checkValidity() === false) {
      if( i === 2) {
        all_message_Adress[i].style.visibility = "visible";
        all_message_Adress[i].innerText = "Please write by this format : dd/mm/aaaa";
      } else {
        all_message_Adress[i].style.visibility = "visible";
        all_message_Adress[i].innerText = "Please Enter the" + all_Imputs_Adress[i].name;
      }
    } else if(all_Imputs_Adress[i].checkValidity()=== true) {
      x = x + 1;
      all_message_Adress[i].style.visibility = "hidden";
      if( x === all_Imputs_Adress.length) {
        goToShipping();
      }
    }
  }
}

function clickBuy() {
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



function removeEventProfile() {
  nextButton[0].removeEventListener("click", checkUserProfile);
}

function goToAddress() {
  mainBackground.className = "address-background";
  profileButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  addressButtons.forEach((ele) => (ele.style.visibility = "visible"));
  displayAddress();

 
}

function goToShipping() {
  mainBackground.className = "shipping-background";
  addressButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  shippingButtons.forEach((ele) => (ele.style.visibility = "visible"));
  adressForm.style.display = "none";
  displayShipping();
}

function goToFinish() {
  mainBackground.className = "finish-background";
  shippingButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  finishButton.style.visibility = "visible";
  shippingForm.style.display = "none";
  displayFinish();
}

function goBackToProduct() {
  productPage.style.display = "flex";
  productPage.style.flexDirection = "row";
  mainBackground.className = "main";
  slideHidden.style.display = "grid";
  textHidden.style.display = "block";
  profileBody[0].style.display = "none";
  change();     //when you call this function here from jon's javascript, it works but error appears on console.

  mainBackground.style.display = "block";
  profilePage.style.display = "none";
  progressInBox.style.display="none"
  
 
}


function displayProfile() {
  profileBar.style.backgroundColor = "var(--progress-bar)";
}

function displayAddress() {
  addressBar.style.backgroundColor = "var(--progress-bar)";
  adressForm.style.display ="block"
  profileBody[0].style.display = "none";
}

function displayShipping() {
  shippingBar.style.backgroundColor = "var(--progress-bar)";
  shippingForm.style.display = "flex";
  shippingBar.style.backgroundColor = "rgb(250, 184, 4)";
}

function displayFinish() {
  Final.style.display = "flex"
  finishBar.style.backgroundColor = "var(--progress-bar)";
}

function registerTimer() {
  var time = 5;
  var min = 0;

  var x = setInterval(function () {
    time--;
    timerMessage.style.visibility = "visible";
    timerMessage.style.backgroundColor = "rgb(39, 38, 38)";
    timerMessage.innerHTML = `You started registering ${(min += 1)} minutes ago!`;

    setTimeout(function () {
      timerMessage.style.visibility = "hidden";
    }, 5000);

    if (time === 0) {
      clearInterval(x);
      goBackToProduct();
    }
  }, 60000);
}


