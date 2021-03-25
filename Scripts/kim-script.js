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
