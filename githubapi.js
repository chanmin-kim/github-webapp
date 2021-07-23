const githubForm = document.querySelector(".githubSearchbar"),
    githubInput = githubForm.querySelector("input")

async function getUsers(keyword){
    const headers = {
        Accept: "application/vnd.github.v3+json"
    }
    let url = `https://api.github.com/search/users/${keyword}`
    let response = await fetch(url, {
        method:"GET",
        headers: headers
    })
    let result = await response.json();
    console.log(result);
    // console.log("객체를 잘 가져오고 있습니다");
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = githubInput.value;
    getUsers(currentValue);
    // githubInput.value = "";
}

function init(){
    githubForm.addEventListener("submit", handleSubmit)
}

init();