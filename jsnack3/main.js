
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somma = 0;
let media = '';

// calcolo la somma
for (let i = 0; i < numeri.length; i++) {

    somma = somma + numeri [i];

    console.log(numeri[i] + ' +');
}

console.log("La somma totale vale: " + somma);

media = somma / numeri.length;

console.log("La media vale: " + media.toFixed(2));

let resultSomma = document.querySelector('.contenitore-uno');
resultSomma.innerHTML = "La somma dei primi dieci numeri è: " + somma;

let resultMedia = document.querySelector('.contenitore-due');
resultMedia.innerHTML = "La media dei primi dieci numeri è: " + media.toFixed(2);