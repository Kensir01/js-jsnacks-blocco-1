
let numero = parseInt(prompt('Inserisci un numero!'));

while (!/^[0-9]+$/.test(numero)){
    alert("Inserisci solo numeri!");
    break
}

let i = 0;

while (i <= numero) {
    
    console.log(Math.pow(i, 3));
    i++;
}

let risultato = document.querySelector('.contenitore');

if(isNaN(numero)){
    risultato.innerHTML = 'Non hai inserito un numero!';
}   else {
    risultato.innerHTML = "Il cubo di " + numero + " è: " + (Math.pow(numero, 3));
}
