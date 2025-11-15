/* SCRIPT PER OBRIR I TANCAR EL POPUP*/

let nou= true;  //Ens permet només mostrar el popup una vegada

/*OBRIR POPUP QUAN ES FA SCROLL*/

document.addEventListener('scroll', function(e) {
    let currScroll = window.scrollY;
    if(currScroll > 300 && nou){
        obrePopup();
        nou = false;
    }
});

function obrePopup(){
    const popup = document.getElementById('popup');
    popup.style.display="flex";
}

/*TANCAR POPUP EN CLICKAR "TANCAR"*/

document.getElementById('tancar-popup').addEventListener("click", tancaPopup);

function tancaPopup(event){
    event.preventDefault();
    const popup = document.getElementById('popup');
    popup.style.display="none";
}

/*TANCAR EL POPUP AMB UN DOBLECLICK*/

document.getElementById('popup').addEventListener("dblclick", tancaPopup);

/*TANCAR EL POPUP EN APRETAR ESC*/

document.addEventListener("keydown", tancaEsc);

function tancaEsc(e){
    if(e.code == "Escape"){popup.style.display="none";}
}
