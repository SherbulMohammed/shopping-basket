let shop = document.getElementById('shop')

let shopItemsData = [
    {
    id:"one",
    name:"Casual Shirt",
    price: 40,
    desc: "Relaxed style, comfortable fit. Shop our casual shirts now.",
    img: "images/img-1.jpg"
},
{
    id:"two",
    name:"Smart Shirt",
    price: 45,
    desc: "Elevate your wardrobe with our smart shirt - suitable for any occasion.",
    img: "images/img-2.jpg"
},
{
    id:"three",
    name:"T-Shirt",
    price: 25,
    desc: "Classic comfort meets everyday style with our soft, versatile T-shirts",
    img: "images/img-3.jpg" 
},
{
    id:"four",
    name:"Formal Shirt",
    price: 50,
    desc: "Elevate your style with our formal shirts, designed for a sharp, polished look",
    img: "images/img-4.jpg" 
}];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x
        return ` 
        <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement()"class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="increment()" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`;
      })
      .join(""));
  };

generateShop();

// Created increment and decrement function to add and remove clothing items

let increment = () => {};
console.log("increment");

let decrement = () => {};
console.log("decrement");

let update = () => {};

