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

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x;
            let search = basket.find((x) => x.id === id) || []
        return ` 
        <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                ${search.item === undefined? 0: search.item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`;
      })
      .join(""));
  };

generateShop();

// Created increment and decrement function to add and remove clothing items

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }

    // Added local storage so browser keeps basket as how it is


    //console.log(basket);
    update(selectedItem.id);

localStorage.setItem("data", JSON.stringify(basket));
};



let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined) return;

    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

     
    update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0);

   // console.log(basket);

// Added local storage so browser keeps basket as how it is
localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id)
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

// Added function 'calculation' so users can see how many items are currently in the basket

let calculation = () => {
    let basketIcon = document.getElementById("basketAmount");
    basketIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
};

calculation();


