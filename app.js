// Menu lateral

let menu_visible = false;

let menu = document.getElementById("nav");

function mostrarOcultarMenu(){//Si esta oculto

    if(menu_visible == false){
        menu.style.display = "block";

    menu_visible = true;
    }else{
    menu.style.display = "none";
    menu_visible =false;
}
}

// Oculto el menu una vez seleccione una opcion

let links = document.querySelectorAll("nav a");

for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


// Creo las barritas de una barra particular identificada por su id

function crearBarra(id_barra){
    for(let i = 0; i <= 16; i++){
        let div = document.createElement("div")
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Selecciono todas las barras generales para luego manipularlas

let html = document.getElementById("html");
crearBarra(html)
let javascript = document.getElementById("javascript");
crearBarra(javascript)
let java = document.getElementById("java");
crearBarra(java)
let mysql = document.getElementById("mysql");
crearBarra(mysql);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    let habilidades = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 11, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 7, 1, intervalJavascript);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 7, 2, intervalJava);
        },100);
        const intervalMysql = setInterval(function(){
            pintarBarra(mysql, 9, 3, intervalMysql);
        },100);
       
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
