const githubForm = document.querySelector(".githubSearchbar"),
    githubInput = githubForm.querySelector("input")

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
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = githubInput.value;
    getUsers(currentValue);
    githubInput.value = "";
}

function loadUsers(){
    let loadedUsers = localStorage.getItem(USERS_LS);
    if (loadedUsers !== null){
        let parsedUsers = JSON.parse(loadedUsers);
        console.log(parsedUsers);
    }
}

function init(){
    loadUsers();
    githubForm.addEventListener("submit", handleSubmit)
}

init();