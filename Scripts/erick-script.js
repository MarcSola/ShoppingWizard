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
				elemento.classList.add("active");
			}else{
				elemento.classList.remove("active");
			}
		})

	};























})