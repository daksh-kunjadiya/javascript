let url = "https://script.google.com/macros/s/AKfycbzhh80ItFFOGgrw0FYM0s1sAW8OcjOnrYtdEEQfaDC-6ICdGYy90f-J6nmxpN5m5HnuXQ/exec";
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
