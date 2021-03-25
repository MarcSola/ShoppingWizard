document.addEventListener('DOMContentLoaded', function(){
//everything that is inside here will be executed JUST when the html is all charged.


/* Fuction that changes the color of the link selected on the nav bar*/
	var childs = document.querySelectorAll("ul.erick-nav-list li");

	childs.forEach(function (clicked){
		//this, actives a listener for every li
		clicked.addEventListener("click", pinkStyle);

	})

	function pinkStyle(clicked){

		selected = clicked.target;
		childs.forEach(function(elemento){

			if(elemento == selected){
				elemento.classList.add("active")
				elemento.classList.add("glitch");
			}else{
				elemento.classList.remove("active");
				elemento.classList.remove("glitch");
			}
		})

	};

})


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileHiddenNav() {
	const nav = document.getElementById("erick-nav-mobile");
	if (nav.style.display === "none") {
		nav.style.display = "block";
	} else {
		nav.style.display = "none";
	}
}





