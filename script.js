document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "Macbook pro", price: "$999", image: "edit1.jpg" },
    { name: "Macbook", price: "$1,199", image: "edit2.jpg" },
    { name: "Macbook air", price: "$1,399", image: "edit3.jpg" },
    ];
   
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });