import getValue from "../components/Helper.js";

let users = JSON.parse(localStorage.getItem("users")) || [];
const handleData = (e) => {
  e.preventDefault();
  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };
  let isMatched = users.filter(
    (ele) => ele.email == user.email && ele.password == user.password
  );
  if (isMatched.length > 0) {
    localStorage.setItem("username", isMatched[0].username);
    localStorage.setItem("isLogin", true);
    window.location.href = "/JS-EXAM/JS-FINAL%20EXAM-2/index.html";
  } else {
    alert("Login Failed,Please try again");
  }
};
document.querySelector("#UserData").addEventListener("submit", handleData);
