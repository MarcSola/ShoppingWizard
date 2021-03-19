const main = document.getElementById("main");
const profile = document.getElementById("profile")
const buyButton = document.getElementById("buyButton")


const displayMain = () => {
main.style.display = "block";
  profile.style.display = "none";
}

buyButton.addEventListener("click", changePages);
function changePages() {
  main.style.display = "none";
  profile.style.display = "block";
  
}



displayMain();
