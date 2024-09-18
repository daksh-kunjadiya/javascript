import getValue, { createTag } from "../components/Helper.js";
import navbar from "../components/Navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const isExist = (id) => {
    let flag = false;
    cart.map((ele, i) => {
        if (ele.id == id) {
            cart[i].qty = cart[i].qty + 1;
            flag = true;
            alert("Quantity Added");
        }
    });
    return flag;
};
const handleCart = (ele) => {
    if (!isExist(ele.id)) {
        cart.push({ ...ele, qty: 1 });
        alert("Added to cart");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
let products = JSON.parse(localStorage.getItem("products")) || [];
const mapper = (data) => {
    document.getElementById("productList").innerHTML = "";
    data.map((ele) => {
        let img = createTag("img", ele.img);
        let price = createTag("h2", ele.price);
        let title = createTag("h4", ele.title);
        let category = createTag("p", ele.category);
        let buyBtn = createTag("button", "Buy");
        buyBtn.addEventListener("click", () => handleCart(ele))
        let div = document.createElement("div");
        div.append(img, title, price, category, buyBtn);    
        document.getElementById("productList").append(div);
    });
};
mapper(products);
const handleSort = (orderBy) => {
    if (orderBy == "lth") {
        let temp = products.sort((a, b) => a.price - b.price);
        mapper(temp);
    } else {
        let temp = products.sort((a, b) => b.price - a.price);
        mapper(temp);
    }
};
const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category);
    mapper(temp);
};
document.getElementById("filterSelect").addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "lth" || value === "htl") {
        handleSort(value);
    } else {
        handleCategory(value);
    }
});
document.getElementById("search-icon").addEventListener("submit", search);