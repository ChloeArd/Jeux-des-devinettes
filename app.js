let button = document.getElementById("entrer");
let donner = document.getElementById("donner");
let repeter = document.getElementsByClassName("repet");

let random = Math.random() * (100 - 1) + 1;
random = Math.trunc(random);
console.log(random);

let nbEssais = 0;

function bouton () {

    let input1 = document.getElementById("input1").value;
    input1 = parseInt(input1);
    nbEssais++;

    if (input1 > random) {
        alert("Tu es haut !");
    }
    if (input1 < random) {
        alert("Tu es bas !");
    }
    if (isNaN(input1)) {
        alert("T'as cru m'avoir ? Ce n'est pas un chiffre !");
    }
    if (input1 === random) {
        alert("Tu as trouver le bon nombre, en " + nbEssais + " essais, BRAVOOO !");
        location.reload();
    }
    if (nbEssais === 10) {
        alert("Ahah Loupé ! Le nombre correct était " + random + " lol.");
        location.reload();
    }

    for (let i = 0; i < input1; i++) {
        let nombreDit = document.createElement('li');
        nombreDit.innerHTML = "Nombre déjà utilisé: " + document.getElementById("input1").value;
        nombreDit.style.color = "grey";
        repeter.item(i).append(nombreDit);
    }
}

button.addEventListener("click", bouton);
