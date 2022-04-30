function encriptar () {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace (/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
var boton1 = document.querySelector("#boton-encriptar"); boton1.onclick = encriptar;


function desencriptar(){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;    
}
var boton2 = document.querySelector("#boton-desencriptar"); boton2.onclick = desencriptar;