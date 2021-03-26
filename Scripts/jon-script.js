var imagArry=document.querySelectorAll('main.main section.jon_slide div input');
var imagenFinish=document.querySelector('section.finish div.izq img')

imagArry.forEach(function(elem){
    elem.addEventListener('mouseover',hov)
    elem.addEventListener('mouseleave',no_hov)
    elem.addEventListener('click',change)
    elem.addEventListener('keydown',run)
    console.log(elem.parentNode)
});

function run(){
    var frst=document.querySelector('.uno');
    var sec=document.querySelector('.dos');
    var tree=document.querySelector('.tres');
    var forth=document.querySelector('.cuatr');
    var five=document.querySelector('.cinc');
    //por un lado la que esta primera
    total_cont=document.querySelector()
    total_cont.insertBefore(container, total_cont.firstChild);
    
    
    //por otro lado la imagen que recive el click
    var back="url('"+frst.childNodes.getAttribute('src')+"')";
    console.log(back)
    frst.classList='cinc';
    sec.classList='uno';
    tree.classList='dos';
    forth.classList='tres';
    five.classList='cuatr';
    document.querySelector('main section.blackgrnd').style.backgroundImage=back;
    document.querySelector('main section.blackgrnd').style.opacity='0';
    
    document.querySelector('main section.blackgrnd').style.opacity='1';
    
    
}
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

    //esa misma imagen la mando a la ultima pagina.
    imagenFinish.setAttribute("src",imag.getAttribute('src'))

}
