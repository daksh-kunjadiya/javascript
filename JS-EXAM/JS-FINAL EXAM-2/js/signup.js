let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
  e.preventDefault();
  let user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successfully!");
  window.location.href = "/JS-EXAM/JS-FINAL%20EXAM-2/index.html";
};

document.querySelector("#UserData").addEventListener("submit", handleData);
