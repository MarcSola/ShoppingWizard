document.addEventListener('DOMContentLoaded', function(){
//everything that is inside here will be executed JUST when the html is all charged.


	var nav_list = document.getElementById("erick-nav-list");
	var childs = nav_list.getElementsByTagName("li");


	for(li of  childs){
		li.addEventListener('click', function(){
			if(this.classList.contains('active')){
				this.classList.remove("active");
			} else {
				this.classList.add("active");
			}
		})
	}
























})