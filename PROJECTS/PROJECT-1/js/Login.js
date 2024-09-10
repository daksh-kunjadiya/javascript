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
    alert("Login Successfully");
    localStorage.setItem("username", isMatched[0].username);
    localStorage.setItem("isLogin", true);
    window.location.href = "/index.html";
  } else {
    alert("Login Failed");
  }
};
document.querySelector("#UserData").addEventListener("submit", handleData);