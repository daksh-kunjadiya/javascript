const handledata = (e) => {
    e.preventDefault();

    const form = document.getElementById("userdata");

    let data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        password: document.getElementById("password").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        city: document.getElementById('city').value,
    };

    let usernamePattern = /^[A-Z][a-zA-Z0-9]{1,}$/;
    if (!usernamePattern.test(data.username)) {
        alert("Username start with a capital letter, contain only letters and digits, and be at least 2 characters long. Spaces are not allowed.");
        return;
    }

    let phoneNumberPattern = /^(?:\+91|91)?[6789]\d{9}$/;
    if (!phoneNumberPattern.test(data.number)) {
        alert("Phone number should be exactly 10 digits long and start with 6, 7, 8, or 9.");
        return;
    }

    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(data.password)) {
        alert("Password should be at least 8 characters long and include at least one letter, one number, and one special character.");
        return;
    }

    if (!data.gender) {
        alert("Please select your gender.");
        return;
    }
    if (!data.city) {
        alert("Please select your city.");
        return;
    }
    console.log(data);
};

document.getElementById("userdata").addEventListener("submit", handledata);