let button = document.getElementById("entrer")

let donner = document.getElementById("donner")

let random = Math.random() * (100 - 1) + 1;
random = Math.trunc(random);
console.log(random);

function boutton () {


    let input1 = document.getElementById("input1").value;
    input1 = parseInt(input1);

    if (input1 > random) {
        let position = document.createElement('p');
        position.innerHTML = "Tu es haut";
        donner.append(position);
        donner.insertBefore(input1, position)
    }

    else if (input1 < random) {
        let position = document.createElement('p');
        position.innerHTML = "Tu es bas";
        donner.append(position);
        donner.insertBefore(input1, position)
    }

    else if (isNaN(input1)){
        let position = document.createElement('p');
        position.innerHTML = "Ce n'est pas un chiffre";
        donner.append(position);
        donner.insertBefore(position, input1)
    }

    else {
        let position = document.createElement('p');
        position.innerHTML = "Tu as trouver le bon nombre";
        donner.append(position);
        donner.insertBefore(input1, position)
    }

    let nombreDit = document.createElement('p');
    nombreDit.innerHTML = "Nombre déja utilisé: " + document.getElementById("input1").value;
    donner.append(nombreDit);

}

button.addEventListener("click", boutton);