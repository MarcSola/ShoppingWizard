var imagArry=document.querySelectorAll('main.main section.jon_slide div input');
imagArry.forEach(function(elem){
    elem.addEventListener('mouseover',hov)
    elem.addEventListener('mouseleave',no_hov)
    elem.addEventListener('click',change)
    console.log(elem.parentNode)
    
});


function no_hov(event){
    option=event.target;
    option.style.transform='';
    option.style.transition='0.5s';
}


function hov(event){
    
    
    option=event.target;
    option.style.transform='translateY(-20px) translateX(20px)';
    option.style.transition='0.5s';
}


function change(event){
//selecciono los elemntos HTML mediante DOM

    var frst_picture=document.querySelector('.uno');
        //por un lado la que esta primera
        
    var imag=event.target;
        //por otro lado la imagen que recive el click
    var back="url('"+imag.getAttribute('src')+"')";
    console.log(back)
    var container=imag.parentNode;
        //con este apunto al div que contiene el input
    var total_cont=container.parentNode;


    //Las imagenes intercambian posiciones y classes.
   
    total_cont.insertBefore(container, total_cont.firstChild);
    frst_picture.classList=container.classList;
    container.classList='uno';
    document.querySelector('main section.blackgrnd').style.backgroundImage=back;
    document.querySelector('main section.blackgrnd').style.opacity='0';
    
    document.querySelector('main section.blackgrnd').style.opacity='1';
    
       

}