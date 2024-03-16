let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let basketIcon = document.getElementById("basketAmount");
    basketIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    
}
