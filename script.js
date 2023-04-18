const encriptacion = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

const desencriptacion = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
};


const elementos = {
    inputEncriptar: document.querySelector('#encryt'),
    botonEncriptar: document.querySelector('#btn-encryt'),
    botonDesencriptar: document.querySelector('#btn-desencryt'),            
    botonCopiar: document.querySelector('#btn_copy'),
    resultado: document.getElementById('#resultado'),
    span: document.querySelector("#span")
    
    
};

const operacionEncriptar = (palabra) => {
    const exploit = '[aeiou]';
    const regex = new RegExp(exploit, "g");
    return palabra.replace(regex, key => encriptacion[key]);
};

const operacionDesencriptar = (palabra) => {
    const exploit = '(ai|enter|imes|ober|ufat)';
    const regex = new RegExp(exploit, "g");
    return palabra.replace(regex, key => desencriptacion[key]);
};

const encriptarPalabra = () => {
    var exploit = document.getElementById("result")
    
    const palabraEncriptar = elementos.inputEncriptar.value; 
    elementos.span.textContent =  operacionEncriptar(palabraEncriptar);
    elementos.inputEncriptar.value = "";

    if (exploit.style.display === "none") {
        exploit.style.display = "block";
    } else {
        exploit.style.display = "none";
    }
 
 


};

const desencriptarPalabra = () => {
    const palabraDesencriptar = elementos.inputEncriptar.value;
    elementos.span.textContent = operacionDesencriptar(palabraDesencriptar)
    elementos.inputEncriptar.value = "";

 
    
};

elementos.botonEncriptar.addEventListener('click', encriptarPalabra);
elementos.botonDesencriptar.addEventListener('click', desencriptarPalabra);



elementos.botonCopiar.onclick = function () {
    navigator.clipboard.writeText(elementos.span.textContent)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar texto al portapapeles: ', err);
      });
  }
  

function views() {
        var xelemento = document.getElementById("result");
        var elementocopy = document.getElementById("copy");
        if (xelemento.style.display === "none") {
            xelemento.style.display = "block";
           
                

        } else {

            xelemento.style.display = "none";
        }
        if (elementocopy.style.display = true) {
            elementocopy.style.display = "none";
                
        } else {

            elementocopy.style.display = "block";
        }
        
   
}  