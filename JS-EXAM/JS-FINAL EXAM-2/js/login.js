let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    let isMatched = users.filter(
        (ele) => ele.email === user.email && ele.password === user.password
    );
    if (isMatched.length > 0) {
        localStorage.setItem("username", isMatched[0].username);
        localStorage.setItem("isLogin", true);
        alert("Login Successful");
        window.location.href = "/JS-EXAM/JS-FINAL%20EXAM-2/index.html";
    } else {
        alert("Login Failed, Please try again");
    }
};

document.getElementById("UserData").addEventListener("submit", handleData);