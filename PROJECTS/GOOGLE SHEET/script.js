let url = "https://script.google.com/macros/s/AKfycbz5zTXPsX2SFCuR-1H4lUEKuBlRlEGNSRtXLeGQYYDKyhrtA9u_kkCSrbDb55_gqqRczg/exec"
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