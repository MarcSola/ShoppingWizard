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
const resetButton = document.getElementsByName("reset");

const profileButtons = document.querySelectorAll("#profile-li .buttons");
const addressButtons = document.querySelectorAll("#address-li .buttons");
const shippingButtons = document.querySelectorAll("#shipping-li .buttons");
const finishButton = document.querySelector("#finish-li .buttons");

const timerMessage = document.querySelector("#timer-msg");
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');


const profileInputs = document.querySelectorAll(".profile-p");
console.log(profileInputs)
buyButton.addEventListener("click", clickBuy);
nextButton[0].addEventListener("click", goToAddress);
nextButton[1].addEventListener("click", goToShipping);
nextButton[2].addEventListener("click", goToFinish);
toggleSwitch.addEventListener("change", changeTheme);

console.log(resetButton)

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
  profileInputs[0].style.display = "block"
  displayProfile();
  registerTimer();
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
  profileInputs[0].style.display = "none"
}




function displayProfile() {
  profileBar.style.backgroundColor = "rgb(250, 184, 4)";
  
}

function displayAddress() {
  addressBar.style.backgroundColor = "rgb(250, 184, 4)";
  profileInputs[0].style.display = "none"
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

// function clickNext() {
//     const nextButton = document.getElementById("next");
//     nextButton.addEventListener("click", clickNext)

//      main.className = "address-background"
//      progressBar.style.width = "50%";

//     addressFooter();
// }

// profile
// function profileFooter() {
//   footerSection.removeChild(mainFooterPicture);
//   footerSection.removeChild(mainFooterDisc);
//   footerButtons.removeChild(buyButton)

//   progressName.removeChild(progressName.firstChild);
//   progressName.setAttribute("class", "progressText");

//   profileFooterStyle();

//   addProfile();
//   addAddress();
//   addShipping();
//   addFinish();

//   createButtons();

// buyButton.removeEventListener("click", clickBuy);

// }

// address footer

// create reset and next buttons

// function createButtons() {
//   let resetBtn = document.createElement("input");
//   footerButtons.appendChild(resetBtn);
//   resetBtn.setAttribute("type", "reset");
//   resetBtn.setAttribute("id", "reset");
//   resetBtn.setAttribute("value", "CLEAR");
//   resetBtn.setAttribute("class", "buttons");
//   resetBtn.style.backgroundColor = "#ddd";
//   let nextBtn = document.createElement("input");
//   footerButtons.appendChild(nextBtn);
//   nextBtn.setAttribute("type", "submit");
//   nextBtn.setAttribute("id", "next");
//   nextBtn.setAttribute("value", "NEXT");
//   nextBtn.setAttribute("class", "buttons");
// }

// style

// function profileFooterStyle() {
//   mainFooterBox.style.width = "100%";
//   mainFooterBox.style.backgroundColor="transparent"
//   progress.style.width = "86%";
//   progress.style.margin = "0 7%";
//   progressBar.style.width = "25%";
//   footerButtons.style.margin = "0 10%"
// }

// function addressFooterStyle() {
// // footerButtons.className = "address-buttons"

// }

// adding progress bar steps in text
