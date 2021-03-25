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
const all_Imputs_Adress = document.querySelectorAll(' div.adress input');
const all_message_Adress = document.querySelectorAll(' div.adress form div span');
const Final = document.querySelector('section.finish')

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
  var regTypeUser = /^[A-Za-z0-9*]{5,20}$/
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
    } else {
      warningMessage.classList.remove("warning-message");
      goToAddress();
    }
  }
}
/*______________________________Adress*/
x=0;
function checkAdress() {


  for (i = 0; i < all_Imputs_Adress.length; i++) {

    if (all_Imputs_Adress[i].checkValidity() === false) {
      if (i === 2) {
        all_message_Adress[i].style.visibility = 'visible';
        all_message_Adress[i].innerText = "Please writeby this format: dd/mm/aaaa";
      } else {

        all_message_Adress[i].style.visibility = 'visible';
        all_message_Adress[i].innerText = "Please Enter the " + all_Imputs_Adress[i].name;
        console.log(all_message_Adress[i].innerText);
      }



    } else if (all_Imputs_Adress[i].checkValidity() === true) {
      x = x + 1;
      all_message_Adress[i].style.visibility = 'hidden';
      if (x === all_Imputs_Adress.length) {
        goToShipping();
      }
    }
  }

}




function removeEventProfile() {
  nextButton[0].removeEventListener("click", goToAddress);
}


function goToAddress() {
  mainBackground.className = "address-background";
  adressForm.style.display = 'block'

  profileButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  addressButtons.forEach((ele) => (ele.style.visibility = "visible"));
  displayAddress();
}

function goToShipping() {

  mainBackground.className = "shipping-background";
  addressButtons.forEach((ele) => (ele.style.visibility = "hidden"));
  shippingButtons.forEach((ele) => (ele.style.visibility = "visible"));
  adressForm.style.display = 'none'
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
  adressForm.style.display = 'block'
  addressBar.style.backgroundColor = "rgb(250, 184, 4)";
  profileBody[0].style.display = "none"
}

function displayShipping() {
  shippingBar.style.backgroundColor = "rgb(250, 184, 4)";
}

function displayFinish() {
  Final.style.display = 'block';
  finishBar.style.backgroundColor = "rgb(250, 184, 4)";
}

function registerTimer() {
  var time = 5;
  var min = 0;

  var x = setInterval(function () {
    time--;
    timerMessage.style.visibility = "visible"
    timerMessage.style.backgroundColor = "rgb(39, 38, 38)"
    timerMessage.innerHTML = `You started registering ${(min += 1)} minutes ago!`;

    setTimeout(function () {
      timerMessage.style.visibility = "hidden"
    }, 5000);

    if (time === 0) {
      clearInterval(x);
      goBackToProduct();
    }
  }, 60000);
}


