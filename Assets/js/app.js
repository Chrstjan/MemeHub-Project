//#region GLOBAL

//#endregion GLOBAL

//#region Model Code
function getPostsData() {
  fetch("https://dummyjson.com/posts?limit=0")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      //recivedPostsData(json);
    })
    .catch((error) => {
      console.log("Error fetching posts data:", error);
    });
}

function getUsersData() {
  fetch("https://dummyjson.com/users?limit=0")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      //recivedUsersData(json);
    })
    .catch((error) => {
      console.log("Error fetching users data:", error);
    });
}

function getCommentsData() {
  fetch("https://dummyjson.com/comments?limit=0")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      //recivedCommentsData(json);
    })
    .catch((error) => {
      console.log("Error fetching comments data", error);
    });
}
//#endregion Model Code

//#region Controller Code

//#endregion Controller Code

//#region View Code

//#endregion View Code
