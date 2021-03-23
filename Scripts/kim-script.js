const mainBackground = document.querySelector(".main-background");
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

const profileClearButton = document.getElementById("profile-reset");

const profileButtons = document.querySelectorAll("#profile-li .buttons");
const addressButtons = document.querySelectorAll("#address-li .buttons");
const shippingButtons = document.querySelectorAll("#shipping-li .buttons");
const finishButton = document.querySelector("#finish-li .buttons");

const timerMessage = document.querySelector("#timer-msg");
const warningMessage = document.querySelector(".warning-message");

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

const profileBody = document.querySelectorAll(".profile-p");
const profileForm = document.getElementById("profile-form");

const userName = document.getElementById("username");



// jon slide hidden in profile 
const slideHidden = document.querySelector(".jon_slide");












buyButton.addEventListener("click", clickBuy);

nextButton[0].addEventListener("click", checkUsername);
nextButton[1].addEventListener("click", goToShipping);
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
  profilePage.style.display = "block"
  profileBody[0].style.display = "block"
  displayProfile();
  registerTimer();

  // jon slide hidden 
  slideHidden.style.display = "none"
}


function checkUsername() {
  var regType =  /^[A-Za-z0-9*]{5,20}$/;
  if (userName.validity.valueMissing) {
    warningMessage.classList.add("warning-message");
    warningMessage.textContent = "Please Enter the Username";
    
  } else {
    if (!regType.test(userName.value)) {
      warningMessage.classList.add("warning-message");
      warningMessage.textContent = "Only letters (either case), numbers, between 5 and 20 characters."
      removeEventProfile();
    }else {
      warningMessage.classList.remove("warning-message");
      goToAddress();
    }
  }
}

function removeEventProfile(){
  nextButton[0].removeEventListener("click", goToAddress);
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


