// contacto btn
const contacto = document.querySelector('#menu-contacto')
const contactouno = document.querySelector('#contactouno')
const contactodos = document.querySelector('#contactodos')

//menu principal
const sobreMi = document.querySelector('#sobre-mi')
const experiencia = document.querySelector('#experiencia')
const portafolio = document.querySelector('#portafolio')
const certificados = document.querySelector('#certificados')
const recomendaciones = document.querySelector('#recomendaciones')
//mi-experiencia
const tuno = document.querySelector('.tuno')
const tdos = document.querySelector('.tdos')
const ttres = document.querySelector('.ttres')
const tcuatro = document.querySelector('.tcuatro')
const sistemas = document.querySelector('.sistemas')
//portafolio
const ahorcado = document.querySelector('#ahorcado')
const encriptador = document.querySelector('#encriptador')
const numsecreto = document.querySelector('#numsecreto')
const barberia = document.querySelector('#barberia')
const spa = document.querySelector('#spa')
const docodoo = document.querySelector('#docodoo')
const sisodoo = document.querySelector('#sisodoo')
const pagmantenimiento = document.querySelector('#pagmantenimiento')
const secmuestra = document.querySelector('#sec-muestra')
const secmuestrados = document.querySelector('#sec-muestra-dos')
//certificados
const cuno = document.querySelector('#cuno')
const cdos = document.querySelector('#cdos')
const ctres = document.querySelector('#ctres')
const ccuatro = document.querySelector('#ccuatro')
const ccinco = document.querySelector('#ccinco')
const cseis = document.querySelector('#cseis')
const csiete = document.querySelector('#csiete')
const cocho = document.querySelector('#cocho')
// recomendaciones

//asteriscos
const auno = document.querySelector('#auno')
const ados = document.querySelector('#ados')
const atres = document.querySelector('#atres')
const acuatro = document.querySelector('#acuatro')

// menu contacto

function btncontactouno(){
    contacto.style.display = "block";
    contactouno.style.display = "none";
    contactodos.style.display = "block";
}
function btncontactodos(){
    contacto.style.display = "none";
    contactouno.style.display = "block";
    contactodos.style.display = "none";
}
//botones menu principal
function btnSobreMi(){
    sobreMi.style.display = "block";
    experiencia.style.display = "none";
    portafolio.style.display = "none";
    certificados.style.display = "none";
    recomendaciones.style.display = "none";
    
    secmuestra.style.display = "none";
    secmuestrados.style.display = "none";
}
function btnExperiencia(){
    sobreMi.style.display = "none";
    experiencia.style.display = "block";
    portafolio.style.display = "none";
    certificados.style.display = "none";
    recomendaciones.style.display = "none";

    secmuestra.style.display = "none"
    
}
function btnPortafolio(){
    sobreMi.style.display = "none";
    experiencia.style.display = "none";
    portafolio.style.display = "block";
    certificados.style.display = "none";
    recomendaciones.style.display = "none";
    
    secmuestra.style.display = "none";
}
function btnCertificados(){
    sobreMi.style.display = "none";
    experiencia.style.display = "none";
    portafolio.style.display = "none";
    certificados.style.display = "block";
    recomendaciones.style.display = "none";

    secmuestra.style.display = "none";
    secmuestrados.style.display = "block";
}

function btnRecomendaciones(){
    sobreMi.style.display = "none";
    experiencia.style.display = "none";
    portafolio.style.display = "none";
    certificados.style.display = "none";
    recomendaciones.style.display = "block";

    secmuestra.style.display = "none";
    secmuestrados.style.display = "block";
}

//botones experiencia
function btnIngenieroEnSistemas(){
    tuno.style.display = "none";
    tdos.style.display = "none";
    ttres.style.display = "none";
    tcuatro.style.display = "none";
    sistemas.style.display = "block";
    
}

function btntcuatro(){
    tuno.style.display = "none";
    tdos.style.display = "none";
    ttres.style.display = "none";
    tcuatro.style.display = "block";
    sistemas.style.display = "none";
    
}

function btnttres(){
    tuno.style.display = "none";
    tdos.style.display = "none";
    ttres.style.display = "block";
    tcuatro.style.display = "none";
    sistemas.style.display = "none";
    
}
function btntdos(){
    tuno.style.display = "none";
    tdos.style.display = "block";
    ttres.style.display = "none";
    tcuatro.style.display = "none";
    sistemas.style.display = "none";
    
}
function btntuno(){
    tuno.style.display = "block";
    tdos.style.display = "none";
    ttres.style.display = "none";
    tcuatro.style.display = "none";
    sistemas.style.display = "none";
    
}
//botones portafolio

function btnjuegodelahorcado(){
    ahorcado.style.display = "block";
    encriptador.style.display = "none";
    numsecreto.style.display = "none";
    barberia.style.display = "none";
    spa.style.display = "none";
    docodoo.style.display = "none";
    sisodoo.style.display = "none";
    pagmantenimiento.style.display = "none";

    secmuestra.style.display = "block";

    auno.style.color = "orange"
    ados.style.color = "white"
    atres.style.color = "white"
    acuatro.style.color = "white"
}

function btnencriptador(){
    ahorcado.style.display = "none";
    encriptador.style.display = "block";
    pagmantenimiento.style.display = "none";
    numsecreto.style.display = "none";
    barberia.style.display = "none";
    spa.style.display = "none";
    docodoo.style.display = "none";
    sisodoo.style.display = "none";
    pagmantenimiento.style.display = "none";
    secmuestra.style.display = "block";

    auno.style.color = "white"
    ados.style.color = "orange"
    atres.style.color = "white"
    acuatro.style.color = "white"
}

function btnnumsecreto(){
    ahorcado.style.display = "none";
    encriptador.style.display = "none";
    pagmantenimiento.style.display = "none";
    numsecreto.style.display = "block";
    barberia.style.display = "none";
    spa.style.display = "none";
    docodoo.style.display = "none";
    sisodoo.style.display = "none";

    secmuestra.style.display = "block";

    auno.style.color = "white"
    ados.style.color = "white"
    atres.style.color = "orange"
    acuatro.style.color = "white"
}

function btnbarberia(){
    ahorcado.style.display = "none";
    encriptador.style.display = "none";
    pagmantenimiento.style.display = "none";
    numsecreto.style.display = "none";
    barberia.style.display = "block";
    spa.style.display = "none";
    sisodoo.style.display = "none";
    docodoo.style.display = "none";
    
    secmuestra.style.display = "block";

    auno.style.color = "white"
    ados.style.color = "white"
    atres.style.color = "white"
    acuatro.style.color = "orange"
}

function btnspa(){
    ahorcado.style.display = "none";
    encriptador.style.display = "none";
    pagmantenimiento.style.display = "none";
    numsecreto.style.display = "none";
    barberia.style.display = "none";
    spa.style.display = "block";
    sisodoo.style.display = "none";
    docodoo.style.display = "none";
    
    secmuestra.style.display = "block";

    auno.style.color = "white"
    ados.style.color = "white"
    atres.style.color = "white"
    acuatro.style.color = "orange"
}

//botones certificado

function btncuno(){
    cuno.style.display = "block";
    cdos.style.display = "none";
    ctres.style.display = "none";
    ccuatro.style.display = "none";
    ccinco.style.display = "none";
    cseis.style.display = "none";
    csiete.style.display = "none";
    cocho.style.display = "none";
}
function btncdos(){
    cuno.style.display = "none";
    cdos.style.display = "block";
    ctres.style.display = "none";
    ccuatro.style.display = "none";
    ccinco.style.display = "none";
    cseis.style.display = "none";
    csiete.style.display = "none";
    cocho.style.display = "none";
}function btnctres(){
    cuno.style.display = "none";
    cdos.style.display = "none";
    ctres.style.display = "block";
    ccuatro.style.display = "none";
    ccinco.style.display = "none";
    cseis.style.display = "none";
    csiete.style.display = "none";
    cocho.style.display = "none";
}function btnccuatro(){
    cuno.style.display = "none";
    cdos.style.display = "none";
    ctres.style.display = "none";
    ccuatro.style.display = "block";
    ccinco.style.display = "none";
    cseis.style.display = "none";
    csiete.style.display = "none";
    cocho.style.display = "none";
}function btnccinco(){
    cuno.style.display = "none";
    cdos.style.display = "none";
    ctres.style.display = "none";
    ccuatro.style.display = "none";
    ccinco.style.display = "block";
    cseis.style.display = "none";
    csiete.style.display = "none";
    cocho.style.display = "none";
}function btncseis(){
    cuno.style.display = "none";
    cdos.style.display = "none";
    ctres.style.display = "none";
    ccuatro.style.display = "none";
    ccinco.style.display = "none";
    cseis.style.display = "block";
    csiete.style.display = "none";
    cocho.style.display = "none";
}function btncsiete(){
    cuno.style.display = "none";
    cdos.style.display = "none";
    ctres.style.display = "none";
    ccuatro.style.display = "none";
    ccinco.style.display = "none";
    cseis.style.display = "none";
    csiete.style.display = "block";
    cocho.style.display = "none";
}function btncocho(){
    cuno.style.display = "none";
    cdos.style.display = "none";
    ctres.style.display = "none";
    ccuatro.style.display = "none";
    ccinco.style.display = "none";
    cseis.style.display = "none";
    csiete.style.display = "none";
    cocho.style.display = "block";
}

//asteriscos
