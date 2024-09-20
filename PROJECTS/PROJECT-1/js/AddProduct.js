import getValue from "../components/Helper.js";
import navbar from "../components/Navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let isLogin = localStorage.getItem("isLogin") || false;
if (isLogin == false) {
    window.location.href = "/PROJECTS/PROJECT-1/pages/Login.html";
}
let products = JSON.parse(localStorage.getItem("products")) || [];
const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
        title: getValue(".title"),
        price: getValue(".price"),
        category: getValue(".category"),
        img: getValue(".img"),
        id: Date.now(),
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
};
document.getElementById("productData").addEventListener("submit", handleSubmit);
