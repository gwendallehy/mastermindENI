const loginForm = document.getElementById("login");
loginForm.addEventListener("click", login);
let email, password
let arrlog = [];

function login(event) {
  event.preventDefault();
  const emailEntree = document.getElementById("email").value;
  const passwordEntree = document.getElementById("mdp").value;
  const usersJSON = localStorage.getItem("users");

  if (usersJSON) {
    const users = JSON.parse(usersJSON);
    const utilisateur = users.find(user => user.email === emailEntree);
    if (utilisateur) {
      if (utilisateur.password === passwordEntree) {
        console.log("Mot de passe correct ! Connexion réussie.");
        console.log("je rentre ds fonction");
        setStatus(emailEntree)
        cancel()
        window.location.href = "account.html";
      } else {
        console.log("Mot de passe incorrect !");
        // Afficher un message d'erreur
      }
    } else {
      console.log("Aucun utilisateur trouvé avec cet email.");
    }
  } else {
    console.log("Aucun utilisateur enregistré dans le localStorage.");
  }
}

function cancel() {
  document.forms["login-user"].reset();
}

function verifierUtilisateur(event) {
  event.preventDefault();
  const emailEntree = document.getElementById("email").value;
  const passwordEntree = document.getElementById("mdp").value;
  const usersJSON = localStorage.getItem("users");

}


function setStatus(emailEntree) {
  // Récupérer la liste des utilisateurs stockés
  console.log("email" +emailEntree);
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Vérifier que `users` est bien un tableau
  if (!Array.isArray(users)) {
      console.error("Les données stockées ne sont pas valides.");
      return;
  }

  // Chercher l'utilisateur par son email
  let userFound = false;
  users = users.map(user => {
      if (user.email === emailEntree) {
          user.statut = "Active"; // Mettre à jour le statut
          userFound = true;
      }
      window.location.href = "account.html";
      return user;
  });
  if (!userFound) {
      console.warn("Utilisateur non trouvé.");
  }
  // Sauvegarder les utilisateurs mis à jour
  localStorage.setItem('users', JSON.stringify(users));
}