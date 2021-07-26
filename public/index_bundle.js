/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/favorite.js":
/*!****************************!*\
  !*** ./source/favorite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favorite\": () => (/* binding */ favorite)\n/* harmony export */ });\nlet FAVORITES_LS = 'favorites';\r\nlet favorites = [];\r\n\r\nfunction favorite(event){    \r\n    console.log(\"클릭한 객체의 id값:\",event.target.id);\r\n\r\n    let loadedFavorites = localStorage.getItem(FAVORITES_LS);\r\n    \r\n    if (loadedFavorites !== null){\r\n        let parsedFavorites = JSON.parse(loadedFavorites);\r\n        let findId = parsedFavorites.filter(function(eachFavorite){\r\n            return eachFavorite.id === event.target.id;\r\n        })\r\n\r\n        if (!findID){\r\n            console.log(\"즐겨찾기에 해당 유저가 없으므로 추가하겠습니다\");\r\n            \r\n            selectUser = document.getElementsByClassName(event.target.id);\r\n            userProfile = selectUser.img.src;\r\n            userName = event.target.className;\r\n            userId = event.target.id;\r\n            \r\n            var newFavorite = {\r\n                id : userId,\r\n                profile : userProfile,\r\n                name : userName\r\n            }\r\n\r\n            favorites.push(newFavorite);\r\n            localStorage.removeItem(FAVORITES_LS);\r\n            localStorage.setItem(FAVORITES_LS, JSON.stringify(favorites));\r\n            \r\n            userStar = document.getElementById(event.target.id);\r\n            userStar.innerText = \"★\"\r\n\r\n\r\n        } else {\r\n            console.log(\"즐겨찾기에 해당 유저가 있으므로 삭제하겠습니다\");\r\n\r\n            // parsedFavorites에서 객체의 id와 동일한 id를 가진 데이터를 찾고 그 데이터를 삭제한다\r\n            // parsedFavorites를 favorites라는 배열에 담는다 (그 전에 favorites라는 배열은 비워두어야 한다)\r\n            // 업데이트된 favorites 배열을 로컬스토리지에 저장한다 (그 전에 로컬스토리지를 비워두어야 한다)\r\n\r\n            let selectUser = parsedFavorites.findIndex(obj => obj.id == event.target.id);\r\n            updateFavorites = parsedFavorites.splice(selectUser, 1);\r\n            favorites.length = 0;\r\n            favorites.push(updateFavorites);\r\n            localStorage.removeItem(FAVORITES_LS);\r\n            localStorage.setItem(FAVORITES_LS, JSON.stringify(favorites));\r\n\r\n            userStar = document.getElementById(event.target.id);\r\n            userStar.innerText = \"☆\"\r\n\r\n        }\r\n    }else {\r\n        console.log(\"즐겨찾기 목록이 존재하지 않습니다\");\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://github-webapp/./source/favorite.js?");

/***/ }),

/***/ "./source/githubapi.js":
/*!*****************************!*\
  !*** ./source/githubapi.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _favorite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.js */ \"./source/favorite.js\");\n\r\n\r\nconst githubForm = document.querySelector(\".githubSearchbar\"),\r\n    githubInput = githubForm.querySelector(\"input\"),\r\n    githubList = document.querySelector(\".github-userList\");\r\n\r\nlet USERS_LS = 'users';\r\nlet users = [];\r\n\r\n// 검색한 내용을 로컬스토리지에 저장\r\nfunction saveUsers(){\r\n    localStorage.setItem(USERS_LS, JSON.stringify(users));\r\n}\r\n\r\n// 입력받은 키워드로 githubAPI를 통해 유저정보 검색\r\nasync function getUsers(keyword){\r\n    const headers = {\r\n        Accept: \"application/vnd.github.v3+json\",\r\n        Authorization: `token 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`\r\n    }\r\n    let url = `https://api.github.com/search/users?q=${keyword}&per_page=100`\r\n    let response = await fetch(url, {\r\n        method:\"GET\",\r\n        headers: headers\r\n    })\r\n    let result = await response.json();\r\n    users.push(result);\r\n    saveUsers();\r\n    location.reload();\r\n}\r\n\r\n// 검색창에서 엔터를 누르면, 입력한 값을 가져와서 검색어로 전달\r\nfunction handleSubmit(event){\r\n    event.preventDefault();\r\n    const currentValue = githubInput.value;\r\n    getUsers(currentValue);\r\n    githubInput.value = \"\";\r\n}\r\n\r\n// 검색한 결과를 화면에 출력\r\nfunction paintUsers(eachUser){\r\n    const li = document.createElement(\"li\");\r\n    const profile = document.createElement(\"img\");\r\n    const userName = document.createElement(\"span\");\r\n    const starMarker = document.createElement(\"span\");\r\n\r\n    profile.src = eachUser.avatar_url;\r\n    profile.style.width = \"100px\";\r\n    profile.style.height = \"100px\";\r\n    userName.innerText = eachUser.login;\r\n    starMarker.id = eachUser.id;\r\n    starMarker.className = eachUser.login;\r\n    starMarker.innerText = \"★\";\r\n    starMarker.addEventListener(\"click\", _favorite_js__WEBPACK_IMPORTED_MODULE_0__.favorite);\r\n\r\n    li.appendChild(profile);\r\n    li.appendChild(userName);\r\n    li.appendChild(starMarker);\r\n    li.className = eachUser.id;\r\n\r\n    githubList.appendChild(li);\r\n}\r\n\r\n// 로컬스토리지에 저장된 검색 결과를 불러옴\r\n// 그 후 각각의 항목을 paintUser에 전달하여 검색결과물 표시\r\nfunction loadUsers(){\r\n    let loadedUsers = localStorage.getItem(USERS_LS);\r\n    if (loadedUsers !== null){\r\n        let parsedUsers = JSON.parse(loadedUsers);\r\n        // console.log(parsedUsers);\r\n        let selectedUsers = parsedUsers[0][\"items\"];\r\n        for (var i=0; i < 100; i++){\r\n            console.log(selectedUsers[i]);\r\n            paintUsers(selectedUsers[i]);\r\n        }\r\n    }\r\n}\r\n\r\n// 사이트를 실행시킬 때 작동하는 실행함수\r\nfunction init(){\r\n    loadUsers();\r\n    githubForm.addEventListener(\"submit\", handleSubmit)\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://github-webapp/./source/githubapi.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _githubapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./githubapi */ \"./source/githubapi.js\");\n/* harmony import */ var _localsearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localsearch */ \"./source/localsearch.js\");\n/* harmony import */ var _localsearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_localsearch__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://github-webapp/./source/index.js?");

/***/ }),

/***/ "./source/localsearch.js":
/*!*******************************!*\
  !*** ./source/localsearch.js ***!
  \*******************************/
/***/ (() => {

eval("// favorites라는 로컬스토리지에서 유저정보를 검색한다\r\n// 검색한 결과를 표시한다. 표시하는 방식은 github검색과 동일하다\r\n// 그렇게 해야 favorite의 기능을 계속 사용할 수 있다. \r\n// githubapi와 마찬가지로 여기에도 favorite 함수를 import 하여 사용한다. (이를 위해선 모듈화가 필요함)\n\n//# sourceURL=webpack://github-webapp/./source/localsearch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/index.js");
/******/ 	
/******/ })()
;