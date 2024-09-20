import getValue from "../components/Helper.js";

let users = JSON.parse(localStorage.getItem("users")) || [];
const handleData = (e) => {
  e.preventDefault();
  let user = {
    username: getValue(".username"),
    email: getValue(".email"),
    password: getValue(".password"),
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "/PROJECTS/PROJECT-1/pages/Login.html";
};
document.querySelector("#UserData").addEventListener("submit", handleData);
