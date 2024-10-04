let url = "https://script.google.com/macros/s/AKfycbyHfH-jA_wePmnAbLqoCMJzp8CoOEi8ZBuT5N1iOtJwFI7r_whFTqipJ2Xz5W9mFi6LkQ/exec"
let form = document.querySelector("#UserData");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let Data = new FormData(form);
    fetch(url, {
        method: "POST",
        body: Data
    }).then((res) => res.text())
        .then((finaLRes) => console.log(finaLRes))
    alert("DATA SAVED")
})