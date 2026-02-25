let cart = [];

// Load products
fetch("products.json")
.then(response => response.json())
.then(products => {

    let container = document.getElementById("products");

    products.forEach(product => {

        let div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
        `;

        container.appendChild(div);
    });

});

function addToCart(name, price){

    cart.push({name, price});

    updateCart();
}

function updateCart(){

    let cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartDiv.innerHTML += `
            <p>${item.name} - $${item.price}</p>
        `;
    });

    cartDiv.innerHTML += `<h3>Total: $${total}</h3>`;
}
