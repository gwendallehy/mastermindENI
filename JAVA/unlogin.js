function logout() {
    // Récupérer la liste des utilisateurs stockés
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Vérifier que `users` est bien un tableau
    if (!Array.isArray(users)) {
        console.error("Les données stockées ne sont pas valides.");
        return;
    }
    // Mettre à jour le statut des utilisateurs actifs
    let userFound = false;
    users = users.map(user => {
        if (user.statut === "Active") {
            user.statut = null; // Changer le statut à null
            userFound = true;
        }
        return user;
    });
    if (!userFound) {
        console.warn("Aucun utilisateur actif trouvé.");
    }
    // Sauvegarder les utilisateurs mis à jour
    localStorage.setItem('users', JSON.stringify(users));
    console.log("Déconnexion réussie.");
 }
 // Ajouter un event listener au bouton logout
 document.getElementById("logoutButton").addEventListener("click", logout);