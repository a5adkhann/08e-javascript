fetch("../api/products.json")
.then(response => response.json())
.then((data) => {
    let product = "";
    data.forEach(p => {
        product += `
        <div class="product">
            <div class="product-img">
                <img src = "${p.image}"/>
            </div>
            <div class="product-content">
                <p>${p.title}</p>
                <p>${p.price}</p>
            </div>
        </div>
        `;
    });

    document.getElementById("products").innerHTML = product;
});