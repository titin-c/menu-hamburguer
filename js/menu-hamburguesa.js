// JavaScript Document Titín Colomer 

//abrir y cerrar menú principal
function toggleMenuPpal() {
    const getHeader = document.getElementById("header-menus");
    getHeader.classList.toggle("cerrado")
    const getMenuOpen= document.getElementById("menuOpen");
    getMenuOpen.classList.toggle("cerrado");
    
    //la capa que oscurece el fondo
    const capaOff = document.getElementById("capa-off");
    capaOff.classList.toggle("off")
    capaOff.addEventListener("click",toggleMenuPpal , false);
  }
  
  const cerrarMenu = document.getElementById("menuOpen");
cerrarMenu.addEventListener("click",toggleMenuPpal , false);	

//funcion para cerrar concualquier clic en el documento



//MENU-BURGUER

//obtenemos todos los objetos que tengan la classe 'menu' 
let getMenu = document.getElementsByClassName('menu');
// de ellos obtenemos todos los objetos que tengan dentro alguna classe 'menu' // .menu .menu
for ( i = 0; i < getMenu.length; i++) {
    getMenu = getMenu[i].getElementsByClassName('menu');
    
    for ( i = 0; i < getMenu.length; i++) {
    // y le añadimos la class 'children' // .menu.children
    getMenu[i].classList.add('children');
}
}

//obtenemos todos los objetos que tengan la class 'children'  // .menu.children
const getChildren = document.querySelectorAll('ul.children ');
//añadimos a su padre la class page_item_has_children
for ( i = 0; i < getChildren.length; i++) {
    getChildren[i].parentElement.classList.add('page_item_has_children');

    
    //camptamos el contenido del li padre para que luego sea el título del submenú
    const getTitulos= getChildren[i].parentElement.innerHTML;
    
    //generamos el li de cerrar el submenú con su título y todo
    const createLi = document.createElement('li');
    createLi.className = 'volver-toggle';
    createLi.innerHTML = '<span class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.19 47.19"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M23.6,47.19A23.6,23.6,0,1,0,0,23.6,23.61,23.61,0,0,0,23.6,47.19ZM23.6,2A21.6,21.6,0,1,1,2,23.6,21.62,21.62,0,0,1,23.6,2Z"/><polygon class="cls-1" points="14.6 23.77 26.82 35.26 28.19 33.8 17.11 23.38 27.68 13.38 26.31 11.93 14.2 23.38 14.6 23.77 14.6 23.77"/></g></g></svg></span> ' + getTitulos;
    
    getChildren[i].insertAdjacentElement("afterbegin", createLi);
    
 }


//generamos todos los botones de volver de los submenús
    const volver =  document.querySelectorAll('.volver-toggle');
    for ( i=0; i < volver.length ; i++){
        //les añadimos la funcion cerrar al parent element
        volver[i].addEventListener("click", function(){this.parentElement.classList.toggle('active');}, false);
}

//obtenemos todos los objetos que tengan la class 'page_item_has_children'  
const getItemsHasChildren = document.getElementsByClassName('page_item_has_children');
//añadimos a sus enlaces la clase 'item-link'
for ( i = 0; i < getItemsHasChildren.length; i++) {
    getItemsHasChildren[i].querySelector('a').className='item-link';
}



//seleccionamos todos los a que hay en los li con class 'page_item_has_children'
const getItemLink = document.body.querySelectorAll('.item-link');
//a cada uno de ellos le añadimos el botón de togglear
for (i = 0; i < getItemLink.length; i++) {

    const navArrow = document.createElement('span');
    navArrow.className = 'sub-nav-toggle';
    navArrow.innerHTML = ' <span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.19 47.19"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M23.6,0A23.6,23.6,0,1,0,47.19,23.6,23.62,23.62,0,0,0,23.6,0Zm0,45.19A21.6,21.6,0,1,1,45.19,23.6,21.62,21.62,0,0,1,23.6,45.19Z"/><polygon class="cls-1" points="32.59 23.42 20.37 11.93 19 13.39 30.08 23.81 19.51 33.81 20.89 35.26 33 23.81 32.59 23.42 32.59 23.42"/></g></g></svg></span> ';
    getItemLink[i].parentNode.insertBefore(navArrow, getItemLink[i].nextSibling);

    if(getItemLink.hasOwnProperty(i)) {
    getItemLink[i].onclick = function() {
        this.parentElement.querySelector('.children').classList.toggle("active");
        }
    }
}

//al boton de togglear le añadimos la funcion de cambiar class 'active'
const getSubNavToogle = document.querySelectorAll('.sub-nav-toggle');

for( i in getSubNavToogle) {
    if(getSubNavToogle.hasOwnProperty(i)) {
        getSubNavToogle[i].onclick = function() {
            this.parentElement.querySelector('.children').classList.toggle("active");
        }
    }
} 



start();
window.onresize = start;
function start(){


//tamaño del menu hamburguesa
const tamañoMenuTotal = document.getElementById("site-navigation").clientHeight ;
let tamañoPantalla = document.querySelector("body").clientHeight ;
const tamañoBuscador = document.querySelector(".header-menu-top").clientHeight ;
const tamañoPie = document.querySelector(".header-menu-pie").clientHeight ;

tamañoPantalla  = tamañoPantalla-tamañoBuscador-tamañoPie-2; // 2 para corregir

if(tamañoMenuTotal!=tamañoPantalla){
    //document.getElementById("site-navigation").style.height = tamañoPantallaPx/2 ;
    const canvas = document.getElementById("site-navigation");
    canvas.setAttribute("style", "height:"+tamañoPantalla+"px");
   }
}