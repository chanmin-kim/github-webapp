let FAVORITES_LS = 'favorites';
let favorites = [];

function favorite(event){    
    console.log("클릭한 객체의 id값:",event.target.id);

    let loadedFavorites = localStorage.getItem(FAVORITES_LS);
    
    if (loadedFavorites !== null){
        let parsedFavorites = JSON.parse(loadedFavorites);
        let findId = parsedFavorites.filter(function(eachFavorite){
            return eachFavorite.id === event.target.id;
        })

        if (!findID){
            console.log("즐겨찾기에 해당 유저가 없으므로 추가하겠습니다");
            
            selectUser = document.getElementsByClassName(event.target.id);
            userProfile = selectUser.img.src;
            userName = event.target.className;
            userId = event.target.id;
            
            var newFavorite = {
                id : userId,
                profile : userProfile,
                name : userName
            }

            favorites.push(newFavorite);
            localStorage.removeItem(FAVORITES_LS);
            localStorage.setItem(FAVORITES_LS, JSON.stringify(favorites));
            
            userStar = document.getElementById(event.target.id);
            userStar.innerText = "★"


        } else {
            console.log("즐겨찾기에 해당 유저가 있으므로 삭제하겠습니다");

            // parsedFavorites에서 객체의 id와 동일한 id를 가진 데이터를 찾고 그 데이터를 삭제한다
            // parsedFavorites를 favorites라는 배열에 담는다 (그 전에 favorites라는 배열은 비워두어야 한다)
            // 업데이트된 favorites 배열을 로컬스토리지에 저장한다 (그 전에 로컬스토리지를 비워두어야 한다)

            let selectUser = parsedFavorites.findIndex(obj => obj.id == event.target.id);
            updateFavorites = parsedFavorites.splice(selectUser, 1);
            favorites.length = 0;
            favorites.push(updateFavorites);
            localStorage.removeItem(FAVORITES_LS);
            localStorage.setItem(FAVORITES_LS, JSON.stringify(favorites));

            userStar = document.getElementById(event.target.id);
            userStar.innerText = "☆"

        }
    }else {
        console.log("즐겨찾기 목록이 존재하지 않습니다");
    }
}

export {favorite};
