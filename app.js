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
        position("red", "Tu es haut !");
    }
    if (input1 < random) {
        position("red", "Tu es bas !");
    }
    if (isNaN(input1)) {
        position("red", "Ce n'est pas un chiffre !");
    }
    if (input1 === random) {
        position("green", "Tu as trouvé le bon nombre, en " + nbEssais + " essais." );
    }
    if (input1 === 10) {
        position("red", "Fini ! Le nombre correct était " + random + ".");
    }

    for (let i = 0; i < input1; i++) {
        let nombreDit = document.createElement('li');
        nombreDit.innerHTML = "Nombre utilisé: " + document.getElementById("input1").value;
        nombreDit.style.color = "blue"
        repeter.item(i).append(nombreDit);
    }
}

button.addEventListener("click", bouton);

function position (color, text) {
    let position = document.createElement('p');
    position.innerHTML = text;
    position.style.color = color;
    donner.append(position);
}