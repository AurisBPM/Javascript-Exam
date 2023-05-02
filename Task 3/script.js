/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById("output");
const getBtn = document.getElementById("btn");
const message = document.getElementById("message");


const getUsers = async () => {

try {


    const response = await fetch(ENDPOINT);
    const data = await response.json();

    const usersFlex = document.createElement("div");
    usersFlex.className = "users-flex";
    output.append(usersFlex);

data.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    const login = document.createElement("div");
login.textContent = user.login;
const avatar = document.createElement("img");
avatar.src = user.avatar_url;
const avatarDiv = document.createElement("div");
avatarDiv.append(avatar);
card.append(login, avatarDiv);
usersFlex.append(card);

    
});



  message.style.display = "none"

}catch(error){
    console.log(error);
}



}

getBtn.addEventListener("click", getUsers);
