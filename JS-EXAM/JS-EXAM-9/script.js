const Data = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    products(data.products);
};
Data();
const products = (productData) => {
    document.getElementById("products").innerHTML = "";
    productData.map((product) => {
        let div = document.createElement("div");
        div.className = "Main.div";
        let img = document.createElement("img");
        img.src = product.images;
        let title = document.createElement("h2");
        title.innerHTML = product.title;
        let description = document.createElement("p");
        description.innerHTML = product.description;
        let category = document.createElement("p");
        category.innerHTML = product.category
        let price = document.createElement("h2");
        price.innerHTML = `$ ${product.price}`;
        div.append(img, title, description, category, price);
        document.getElementById("products").append(div);
    });
};