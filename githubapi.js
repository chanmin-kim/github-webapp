const githubForm = document.querySelector(".githubSearchbar"),
    githubInput = githubForm.querySelector("input"),
    githubList = document.querySelector(".github-userList");

let USERS_LS = 'users';
let users = [];

function saveUsers(){
    localStorage.setItem(USERS_LS, JSON.stringify(users));
}

async function getUsers(keyword){
    const headers = {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token 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`
    }
    let url = `https://api.github.com/search/users?q=${keyword}&per_page=100`
    let response = await fetch(url, {
        method:"GET",
        headers: headers
    })
    let result = await response.json();
    users.push(result);
    saveUsers();
    location.reload();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = githubInput.value;
    getUsers(currentValue);
    githubInput.value = "";
}

function paintUsers(eachUser){
    const li = document.createElement("li");
    const profile = document.createElement("img");
    const userName = document.createElement("span");
    const starMarker = document.createElement("span");

    profile.src = eachUser.avatar_url;
    profile.style.width = "100px";
    profile.style.height = "100px";
    userName.innerText = eachUser.login;
    starMarker.id = eachUser.id;
    starMarker.innerText = "★";

    li.appendChild(profile);
    li.appendChild(userName);
    li.appendChild(starMarker);

    githubList.appendChild(li);
}

function loadUsers(){
    let loadedUsers = localStorage.getItem(USERS_LS);
    if (loadedUsers !== null){
        let parsedUsers = JSON.parse(loadedUsers);
        let selectedUsers = parsedUsers[0]["items"];
        for (var i=0; i < 100; i++){
            console.log(selectedUsers[i]);
            paintUsers(selectedUsers[i]);
        }
    }
}

function init(){
    loadUsers();
    githubForm.addEventListener("submit", handleSubmit)
}

init();