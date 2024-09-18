var carr = 1;
document.addEventListener("DOMContentLoaded", function() {

});

function clickC(c){
    let imagenes = document.querySelectorAll('.image');
    imagenes.forEach(function(imagen) {
        imagen.style.zIndex = '-1';
    });

    let valor = Number(c.getAttribute('value'));
    carr = carr + valor;
    if (carr>3){
        carr = 1;
    }
    else if(carr < 1){
        carr = 3;
    }
    valor = "image"+carr;
    let image = document.getElementById(valor);
    image.style.zIndex = "1";
    

};