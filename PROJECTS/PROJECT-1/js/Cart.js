import { createTag } from "../components/Helper.js";
import navbar from "../components/Navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const remove = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    mapper(cart);
};
const handleQty = (opr, index) => {
    if (opr === "+") {
        cart[index].qty += 1;
    } else if (opr === "-") {
        if (cart[index].qty > 1) {
            cart[index].qty -= 1;
        } else {
            remove(index);
            return;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    mapper(cart);
};
const mapper = (cart) => {
    document.getElementById("cartItem").innerHTML = "";
    cart.map((ele, i) => {
        let tr = createTag("tr", "");
        let td1 = createTag("td", "");
        let img = createTag("img", ele.img);
        img.setAttribute("class", "img");
        td1.append(img);
        let td2 = createTag("td", ele.title);
        let td3 = createTag("td", "");
        let btn1 = createTag("button", "-");
        let btn2 = createTag("button", ele.qty);
        let btn3 = createTag("button", "+");
        td3.append(btn1, btn2, btn3);
        btn1.addEventListener("click", () => handleQty("-", i));
        btn3.addEventListener("click", () => handleQty("+", i));
        let td4 = createTag("td", ele.price + " ₹");
        let td5 = createTag("td", ele.qty * ele.price + " ₹"
        );
        let td6 = createTag("td", `<i class="fa-solid fa-xmark"></i>`);
        td6.addEventListener("click", () => remove(i));
        tr.append(td1, td2, td3, td4, td5, td6);
        document.getElementById("cartItem").append(tr);
    });
};
mapper(cart);

