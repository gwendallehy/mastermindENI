window.onload = step0()

const submit = document.getElementById("register");
submit.addEventListener("click", register);

const secu = document.getElementById("mdp");
secu.addEventListener("click", security);

let nom, email, password, confirmPassword
console.log(nom, email, password, confirmPassword);
let arr = [];

function register(event) {
    event.preventDefault();
    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("mdp").value;
    let confirmPassword = document.getElementById("mdp_confirm").value;

    console.log(nom, email, password, confirmPassword);

    if (nom.length < 3) {
        alert("Le nom d'utilisateur doit contenir au moins 3 caractères.");
        return false;
    }
    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return false;
    }
    if (security() == false) {
        return false;
    }
    alert("Inscription réussie !");
    saveToLocal(nom, email, password)
    cancel()
    // window.location.href = "account.html";
    return true

}

function saveToLocal(nom, email, password) {
    const usersJSON = localStorage.getItem("users");
    let lastFive = [];

    let users = usersJSON ? JSON.parse(usersJSON) : []; // Récupérer la liste existante

    // Vérifier si l'utilisateur existe déjà
    const exists = users.some(user => user.nom === nom);
    if (exists) {
        console.log("Ce nom existe déjà.");
        return; // On empêche l'écrasement si l'utilisateur existe déjà
    }

    console.log("Ce nom est disponible.");

    // Ajouter le nouvel utilisateur à la liste existante
    users.push({
        nom: nom,
        email: email,
        password: password,
        lastFive: lastFive,
    });

    // Sauvegarder la liste mise à jour dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));
}


function cancel() {
    document.forms["register-user"].reset();
}



function security() {
    let password = document.getElementById("mdp").value;
    const caracteres = {
        majuscule: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minuscule: "abcdefghijklmnopqrstuvwxyz",
        chiffre: "0123456789",
        special: `!"#$%&'()*+,-./`
    };
    let nbCarac = password.length;
    let minCheck = false, maxCheck = false, numCarac = false, speCarac = false;

    for (let i = 0; i < nbCarac; i++) {
        const char = password[i];
        if (!minCheck && caracteres.minuscule.includes(char)) {
            minCheck = true;
        }
        if (!maxCheck && caracteres.majuscule.includes(char)) {

            maxCheck = true;
        }
        if (!numCarac && caracteres.chiffre.includes(char)) {
            numCarac = true;
        }
        if (!speCarac && caracteres.special.includes(char)) {
            speCarac = true;
        }
    }

    let base = 0;
    if (minCheck) {
        base += 26;
    }
    if (maxCheck) {
        base += 26;
    }
    if (numCarac) {
        base += 10;
    }
    if (speCarac) {
        base += 15;
    }

    let securityValue = Math.pow(base, nbCarac);
    console.log("Valeur de sécurité :", securityValue);

    // Appel des fonctions en fonction de la force du mot de passe

    // Ces fonctions (step0, step1, step2, step3) devront être définies ailleurs

    if (!securityValue) {
        window.onload =step0();  // Aucune sécurité détectée (mot de passe vide ou non conforme)
    } else if (securityValue <= 8503056) {
        // Faible sécurité
        window.onload =step1();
    } else if (securityValue > 8503056 && securityValue < 62523502209) {
        // Sécurité moyenne
        window.onload =step2();
    } else if (securityValue > 62523502209 && securityValue < 1235736291547681) {
        // Bonne sécurité
        window.onload =step3();
    }

}

