let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');


let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let basketIcon = document.getElementById("basketAmount");
    basketIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        shoppingCart.innerHTML = basket
        .map((x) => {
            console.log(x);
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id);
            if (!search) {
                return `<div class="cart-item">Item details not found</div>`;
            }
            return `
            <div class="cart-item">
                <img width="100" src="${search.img}" alt="">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.name}</p>
                            <p class="cart-item-price">$ ${search.price}</p>
                        </h4>
                        <i class="bi bi-x-lg"></i>
                    </div>
                    <div class="cart-buttons">
                    </div>
                    <h3></h3>
                </div>
            </div>`;
        })
        .join("");
    } else {
        // Clear shoppingCart and show message if the basket is empty
        shoppingCart.innerHTML = "";
        label.innerHTML = `
            <h2>Basket is Empty</h2>
            <a href="index.html">
                <button class="HomeBtn">Back to Home</button>
            </a>`;
    }
};



generateCartItems();
