let button = document.getElementById("entrer");
let butJeu =  document.getElementsByClassName("butJeu");
let donner = document.getElementById("donner");
let repeter = document.getElementsByClassName("repet");

let random = Math.random() * (100 - 1) + 1;
random = Math.trunc(random);
console.log(random);

function boutton () {

    let input1 = document.getElementById("input1").value;
    input1 = parseInt(input1);


    if (input1 > random) {
        let position = document.createElement('p');
        position.innerHTML = "Tu es haut";
        position.style.color = "red";
        donner.append(position);
    }

    else if (input1 < random) {
        let position = document.createElement('p');
        position.innerHTML = "Tu es bas";
        position.style.color = "red";
        donner.append(position);
    }

    else if (isNaN(input1)){
        let position = document.createElement('p');
        position.innerHTML = "Ce n'est pas un chiffre";
        position.style.color = "red";
        donner.append(position);
    }

    else {
        let position = document.createElement('p');
        position.innerHTML = "Tu as trouver le bon nombre";
        position.style.color = "green";
        donner.append(position);
    }

    for (let i = 0; i < input1; i++) {
        let nombreDit = document.createElement('li');
        nombreDit.innerHTML = "Nombre déjà utilisé: " + document.getElementById("input1").value;
        nombreDit.style.color = "blue"
        repeter.item(i).append(nombreDit);
    }


}

button.addEventListener("click", boutton);