//#region GLOBAL
const viewContainer = document.getElementById("viewContainer");

let allPostsArray = [];
let allCommentsArray = [];
let allUsersArray = [];

function Init() {
  getPostsData();
  getCommentsData();
  getUsersData();
}

Init();
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
      recivedPostsData(json);
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
      recivedUsersData(json);
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
      recivedCommentsData(json);
    })
    .catch((error) => {
      console.log("Error fetching comments data", error);
    });
}
//#endregion Model Code

//#region Controller Code
function recivedPostsData(userPosts) {
  // console.log(userPost);
  allPostsArray = userPosts.posts;

  console.log(allPostsArray);
  buildPost(allPostsArray);
}

function recivedCommentsData(userComments) {
  allCommentsArray = userComments;

  console.log(allCommentsArray);
}

function recivedUsersData(users) {
  allUsersArray = users;

  console.log(allCommentsArray);
}
//#endregion Controller Code

//#region View Code
function buildPost(userPost) {
  clearApp();

  userPost.forEach((post) => {
    let postElement = `
      <article>
        <header>
        <h4>${post.title}</h4>
        <span>User: ${post.userId}</<p>
        </header>
        <div>
          <p>${post.body}</p>
          <footer>
            ${post.tags.map((tag) => `<p>${tag}</p>`).join("")}
          </footer>
        </div>
        <footer>
          <span>
            <button>Updoot</button>
            <p>${post.reactions}</p>
            <button>Downdoot</button>
          </span>
          <button>Comments</button>

          <button>Report</button>
        </footer>
      </article>`;

    viewContainer.innerHTML += postElement;
  });
}

function clearApp() {
  viewContainer.innerHTML = "";
}
//#endregion View Code
