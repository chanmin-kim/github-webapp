let FAVORITES_LS = 'favorites';
let favorites = [];

function favorite(event){
    console.log("클릭한 객체의 id값:",event.target.id);
    // 별표를 눌렀을 때, 그 별표가 가진 id값으로 즐겨찾기 여부를 판별한다.
    // 가져온 id값이 로컬스토리지에 존재하면, 해당 정보를 삭제해주면 되고
    // 가져온 id값이 로컬스토리지에 존재하지 않으면, 해당 정보를 저장해주면 된다.
    // target_id = event.target.id;
    // let loadedFavorites = localStorage.getItem(FAVORITES_LS);
    // let parsedFavorites = JSON.parse(loadedFavorites);
    // 파싱한 즐겨찾기 목록에 내가 찾고자 하는 id가 존재하는지 체크. 
    // 만약 있다면, 파싱한 걸 삭제하고, 로컬스토리지를 업데이트.
}

export {favorite};
