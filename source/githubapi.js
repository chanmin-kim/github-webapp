import { favorite } from './favorite.js';

const githubForm = document.querySelector(".githubSearchbar"),
    githubInput = githubForm.querySelector("input"),
    githubList = document.querySelector(".github-userList");

let USERS_LS = 'users';
let users = [];

// 검색한 내용을 로컬스토리지에 저장
function saveUsers(){
    localStorage.setItem(USERS_LS, JSON.stringify(users));
}

// 입력받은 키워드로 githubAPI를 통해 유저정보 검색
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

// 검색창에서 엔터를 누르면, 입력한 값을 가져와서 검색어로 전달
function handleSubmit(event){
    event.preventDefault();
    const currentValue = githubInput.value;
    getUsers(currentValue);
    githubInput.value = "";
}

// 검색한 결과를 화면에 출력
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
    starMarker.className = eachUser.login;
    starMarker.innerText = "★";
    starMarker.addEventListener("click", favorite);

    li.appendChild(profile);
    li.appendChild(userName);
    li.appendChild(starMarker);
    li.className = eachUser.id;

    githubList.appendChild(li);
}

// 로컬스토리지에 저장된 검색 결과를 불러옴
// 그 후 각각의 항목을 paintUser에 전달하여 검색결과물 표시
function loadUsers(){
    let loadedUsers = localStorage.getItem(USERS_LS);
    if (loadedUsers !== null){
        let parsedUsers = JSON.parse(loadedUsers);
        // console.log(parsedUsers);
        let selectedUsers = parsedUsers[0]["items"];
        for (var i=0; i < 100; i++){
            console.log(selectedUsers[i]);
            paintUsers(selectedUsers[i]);
        }
    }
}

// 사이트를 실행시킬 때 작동하는 실행함수
function init(){
    loadUsers();
    githubForm.addEventListener("submit", handleSubmit)
}

init();