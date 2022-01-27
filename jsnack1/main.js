
let somma = 0;
let numero;

let i = 0;

while (i < 10) {
    numero = parseInt(prompt('Inserisci il ' + (i+1) + '° numero: '));
    if (!/^[0-9]+$/.test(numero)){
        alert("Inserisci solo numeri!");
        break
    }
    somma += numero;
    i++;
}

console.log(somma);

document.querySelector('.contenitore').innerHTML = 'La somma di tutti i numeri che hai inserito è: ' + somma;