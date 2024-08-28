let users = JSON.parse(localStorage.getItem("users")) || [];
const handledatas = (e) => {
    e.preventDefault();

    let datas = {
        title: document.getElementById("title").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value,
    };
    users.push(datas);
    localStorage.setItem("users", JSON.stringify(users));
};

document.getElementById("userdatas").addEventListener("submit", handledatas);