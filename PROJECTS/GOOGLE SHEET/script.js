let url = "https://script.google.com/macros/s/AKfycbz5zTXPsX2SFCuR-1H4lUEKuBlRlEGNSRtXLeGQYYDKyhrtA9u_kkCSrbDb55_gqqRczg/exec";
let form = document.querySelector("#UserData");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let params = new URLSearchParams();
    formData.forEach((value, key) => {
        params.append(key, value);
    });
    fetch(url, {
        method: "POST",
        body: params
    }).then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Data Saved");
        }).catch(error => {
            console.error("Error:", error);
            alert("Error Saving Data");
        });
});
