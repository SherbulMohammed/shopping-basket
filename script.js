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
        <div class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>"Relaxed style, comfortable fit. Shop our casual shirts now."</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`;
      })
      .join(""));
  };

generateShop();