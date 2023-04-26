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
        tituloImagen4.innerText = "PERSONALIZADAS"

    }
}


//                                      EVENTOS PARA BOTON

const botonVelasGrandes = document.querySelector("#boton-grandes")
    botonVelasGrandes.addEventListener("click", catalogoVelasGrandes)

//                                       VARIABLES GLOBALES
let tituloVelas

function catalogoVelasGrandes(){
    let tituloVelas = document.querySelector("#titulo-velas")

    const velasBig = document.querySelector("#velas-big")
    let imgVelasBig = document.createElement("img")
    imgVelasBig.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")
 

    const velasBig2 = document.querySelector("#velas-big2")
    let imgVelasBig2 = document.createElement("img")
    imgVelasBig2.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")


    const velasBig3= document.querySelector("#velas-big3")
    let imgVelasBig3 = document.createElement("img")
    imgVelasBig3.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")


    const velasBig4 = document.querySelector("#velas-big4")
    let imgVelasBig4 = document.createElement("img")
    imgVelasBig4.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")
    

    const velasBig5 = document.querySelector("#velas-big5")
    let imgVelasBig5 = document.createElement("img")
    imgVelasBig5.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")
   

    const velasBig6 = document.querySelector("#velas-big6")
    let imgVelasBig6 = document.createElement("img")
    imgVelasBig6.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")


    const velasBig7 = document.querySelector("#velas-big7")
    let imgVelasBig7 = document.createElement("img")
    imgVelasBig7.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")

    const velasBig8 = document.querySelector("#velas-big8")
    let imgVelasBig8 = document.createElement("img")
    imgVelasBig8.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")

    const velasBig9 = document.querySelector("#velas-big9")
    let imgVelasBig9 = document.createElement("img")
    imgVelasBig9.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")

    const velasBig10 = document.querySelector("#velas-big10")
    let imgVelasBig10 = document.createElement("img")
    imgVelasBig10.setAttribute("src", "https://m.media-amazon.com/images/I/71NfrX-X+KL._AC_UF894,1000_QL80_.jpg")
    

    if(botonVelasGrandes){
        tituloVelas.innerText = "VELAS GRANDES"
        velasBig.append(imgVelasBig)
        velasBig2.append(imgVelasBig2)
        velasBig3.append(imgVelasBig3)
        velasBig4.append(imgVelasBig4)
        velasBig5.append(imgVelasBig5)
        velasBig6.append(imgVelasBig6)
        velasBig7.append(imgVelasBig7)
        velasBig8.append(imgVelasBig8)
        velasBig9.append(imgVelasBig9)
        velasBig10.append(imgVelasBig10)
    }
    botonVelasGrandes.disabled = true// Deshabiitar el boton cuando cumple su condicion
}
    

const botonVelasPequeñas = document.querySelector("#boton-pequeñas")
botonVelasPequeñas.addEventListener("click", catalogoVelasPequeñas)


function catalogoVelasPequeñas(){
    let esconderCatalogo = document.querySelector(".catalogo-velas-grandes")
    esconderCatalogo.style.display = "none" // Esto es para esconder una section cuando active otro boton o funcion

    let tituloVelas = document.querySelector("#titulo-velas")

    const velasSmall = document.querySelector("#velas-small")
    let imgVelasSmall = document.createElement("img")
    imgVelasSmall.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")
 

    const velasSmall2 = document.querySelector("#velas-small2")
    let imgVelasSmall2 = document.createElement("img")
    imgVelasSmall2.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall3 = document.querySelector("#velas-small3")
    let imgVelasSmall3 = document.createElement("img")
    imgVelasSmall3.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall4 = document.querySelector("#velas-small4")
    let imgVelasSmall4 = document.createElement("img")
    imgVelasSmall4.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall5 = document.querySelector("#velas-small5")
    let imgVelasSmall5 = document.createElement("img")
    imgVelasSmall5.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall6 = document.querySelector("#velas-small6")
    let imgVelasSmall6 = document.createElement("img")
    imgVelasSmall6.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall7 = document.querySelector("#velas-small7")
    let imgVelasSmall7 = document.createElement("img")
    imgVelasSmall7.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall8 = document.querySelector("#velas-small8")
    let imgVelasSmall8 = document.createElement("img")
    imgVelasSmall8.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall9 = document.querySelector("#velas-small9")
    let imgVelasSmall9 = document.createElement("img")
    imgVelasSmall9.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    const velasSmall10 = document.querySelector("#velas-small10")
    let imgVelasSmall10 = document.createElement("img")
    imgVelasSmall10.setAttribute("src", "https://img.freepik.com/fotos-premium/velas-pequenas-encendidas-candelabros-vidrio-decoracion-navidad-o-ano-nuevo-enfoque-selectivo-estilo-vintage_630207-3662.jpg")

    if(botonVelasPequeñas){
        tituloVelas.innerText = "VELAS PEQUEÑAS"
        velasSmall.append(imgVelasSmall)
        velasSmall2.append(imgVelasSmall2)
        velasSmall3.append(imgVelasSmall3)
        velasSmall4.append(imgVelasSmall4)
        velasSmall5.append(imgVelasSmall5)
        velasSmall6.append(imgVelasSmall6)
        velasSmall7.append(imgVelasSmall7)
        velasSmall8.append(imgVelasSmall8)
        velasSmall9.append(imgVelasSmall9)
        velasSmall10.append(imgVelasSmall10)
    }
    botonVelasPequeñas.disabled = true 
}