//    VARIABLEs GLOBALES

let tituloVelas = document.querySelector("#titulo-velas")
let esconderCatalogo = document.querySelector(".catalogo-velas-grandes")
let esconderCatalogo2 = document.querySelector(".catalogo-velas-pequeñas")
let esconderCatalogo3 = document.querySelector(".catalogo-velas-aroma")
let esconderCatalogo4 = document.querySelector(".catalogo-velas-infantiles")

function iniciarCatalogo(){
    esconderCatalogo.style.display = "none"
    esconderCatalogo2.style.display = "none"
    esconderCatalogo3.style.display = "none"
    esconderCatalogo4.style.display = "none"
}

const imagenVelasGrandes = document.querySelector("#imagen-grandes")
imagenVelasGrandes.addEventListener("mousemove", cambiarTexto)

function cambiarTexto(){
    const tituloImagen = document.querySelector("#titulo-imagen")

    if(imagenVelasGrandes){
        tituloImagen.innerText = "PERSONALIZADAS"

    }
}

const imagenVelasPequeñas = document.querySelector("#imagen-pequeñas")
imagenVelasPequeñas.addEventListener("mousemove", cambiarTexto2)

function cambiarTexto2(){
    const tituloImagen2 = document.querySelector("#titulo-imagen2")

    if(imagenVelasPequeñas){
        tituloImagen2.innerText = "PERSONALIZADAS"
    }
}

const imagenVelasAroma = document.querySelector("#imagen-aroma")
imagenVelasAroma.addEventListener("mousemove", cambiarTexto3)

function cambiarTexto3(){
    const tituloImagen3 = document.querySelector("#titulo-imagen3")

    if(imagenVelasAroma){
        tituloImagen3.innerText = "PERSONALIZADAS"

    }
}

const imagenVelasInfantiles = document.querySelector("#imagen-infantiles")
imagenVelasInfantiles.addEventListener("mousemove", cambiarTexto4)

function cambiarTexto4(){
    const tituloImagen4 = document.querySelector("#titulo-imagen4")

    if(imagenVelasInfantiles){
        tituloImagen4.innerHTML = "PERSONALIZADAS"

    }
}


//                                      EVENTOS PARA BOTON

const botonVelasGrandes = document.querySelector("#boton-grandes")
    botonVelasGrandes.addEventListener("click", catalogoVelasGrandes)


function catalogoVelasGrandes(){
    esconderCatalogo2.style.display = "none"
    esconderCatalogo3.style.display = "none"
   
    const velasBig = document.querySelector("#velas-big")
    const velasBig2 = document.querySelector("#velas-big2")
    const velasBig3= document.querySelector("#velas-big3")
    const velasBig4 = document.querySelector("#velas-big4")
    const velasBig5 = document.querySelector("#velas-big5")
    const velasBig6 = document.querySelector("#velas-big6")
    const velasBig7 = document.querySelector("#velas-big7")
    const velasBig8 = document.querySelector("#velas-big8")
    const velasBig9 = document.querySelector("#velas-big9")
    const velasBig10 = document.querySelector("#velas-big10")

    if(botonVelasGrandes){
        tituloVelas.innerText = "VELAS GRANDES"
        esconderCatalogo.style.display = "flex"
    }
}
    

const botonVelasPequeñas = document.querySelector("#boton-pequeñas")
botonVelasPequeñas.addEventListener("click", catalogoVelasPequeñas)


function catalogoVelasPequeñas(){
    esconderCatalogo.style.display = "none" // Esto es para esconder una section cuando active otro boton o funcion
    esconderCatalogo3.style.display = "none"

    const velasSmall = document.querySelector("#velas-small")
    const velasSmall2 = document.querySelector("#velas-small2")
    const velasSmall3 = document.querySelector("#velas-small3")
    const velasSmall4 = document.querySelector("#velas-small4")
    const velasSmall5 = document.querySelector("#velas-small5")
    const velasSmall6 = document.querySelector("#velas-small6")
    const velasSmall7 = document.querySelector("#velas-small7")
    const velasSmall8 = document.querySelector("#velas-small8")
    const velasSmall9 = document.querySelector("#velas-small9")
    const velasSmall10 = document.querySelector("#velas-small10")

    if(botonVelasPequeñas){
        tituloVelas.innerText = "VELAS PEQUEÑAS"
        esconderCatalogo2.style.display = "flex"
    }
  
}

const botonVelasAroma = document.querySelector("#boton-aroma")
botonVelasAroma.addEventListener("click", catalogoVelasAroma)

function catalogoVelasAroma(){
   esconderCatalogo.style.display = "none"
   esconderCatalogo2.style.display = "none"

    const velasAroma = document.querySelector("#velas-aroma")
    const velasAroma2 = document.querySelector("#velas-aroma2")
    const velasAroma3 = document.querySelector("#velas-aroma3")
    const velasAroma4 = document.querySelector("#velas-aroma4")
    const velasAroma5 = document.querySelector("#velas-aroma5")
    const velasAroma6 = document.querySelector("#velas-aroma6")
    const velasAroma7 = document.querySelector("#velas-aroma7")
    const velasAroma8 = document.querySelector("#velas-aroma8")
    const velasAroma9 = document.querySelector("#velas-aroma9")
    const velasAroma10 = document.querySelector("#velas-aroma10")

    if(botonVelasAroma){
        tituloVelas.innerText = "VELAS AROMA"
        esconderCatalogo3.style.display = "flex"
    }
}

const botonVelasInfantiles = document.querySelector("#boton-infantiles")
botonVelasInfantiles.addEventListener("click", catalogoVelasInfantiles)

function catalogoVelasInfantiles(){
    const  tituloVelas2 = document.querySelector("#titulo-velas2")

    const velasInfantiles = document.querySelector("#velas-infantil")
    const velasInfantiles2 = document.querySelector("#velas-infantil2")
    const velasInfantiles3 = document.querySelector("#velas-infantil3")
    const velasInfantiles4 = document.querySelector("#velas-infantil4")
    const velasInfantiles5 = document.querySelector("#velas-infantil5")
    const velasInfantiles6 = document.querySelector("#velas-infantil6")
    const velasInfantiles7 = document.querySelector("#velas-infantil7")
    const velasInfantiles8 = document.querySelector("#velas-infantil8")
    const velasInfantiles9 = document.querySelector("#velas-infantil9")
    const velasInfantiles10 = document.querySelector("#velas-infantil10")

    if(botonVelasInfantiles){
        tituloVelas2.innerText = "VELAS INFANTILES"
        esconderCatalogo4.style.display = "flex"

    }
}

window.addEventListener("load", iniciarCatalogo)