init();
function init() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(user => {
        if (user.statut == "Active") {
            console.log(user.lastFive);
            score(user.lastFive)
            profile()
        }
    });
  }

function score(liste) {
    console.log("bien ds fonction");
    let scorePrint = document.getElementById("scoretable")
    if (liste) {
        console.log("bien ds fonction 2");
        for (let i = 0; i <= 4; i++) {
            let indice = liste[i]
            console.log(indice);
            scorePrint.insertAdjacentHTML("afterend", 
            `<tr>
                <th scope="row">`+(i+1)+`</th>
                <td>`+indice+`</td>
                <td>none</td>
            </tr>`)
        } 
    }
}
function profile() {
    let profil = document.getElementsByClassName("profile")
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(user => {
        if (user.statut == "Active") {
            console.log(user.nom,user.email,user.password);
            profil.insertAdjacentHTML("afterbegin",
                `<div class="user-name">`+user.nom+`</div>
                <div class="user-email">`+user.email+`</div>
                <div class="user-password">`+user.password+`</div>
            `)
        }
    });
} 

