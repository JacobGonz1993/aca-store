//stuff
//cart is an empty array you push items to
let cart=[];
//best practice to set this to null?
let addCartBtn = document.getElementById("btnAddToCart").innerHTML;

function listProducts(products){
    let productDivs = "";
    for(let i=0; i < products.length; i++){
        let product = products[i];
        productDivs +=`<div>${product.imgUrl},
        <br> ${product.name}, 
        <br> Category: ${product.category},
        <br> Description: ${product.description}, 
        <br> Rating: ${product.rating}, 
        <br> Price: ${product.price},
        <br> ${addCartBtn}</div>`
    }
    
    document.getElementById("products").innerHTML = productDivs;
    document.getElementById("btnAddToCart").onclick = function() {addToCart()};
}
//what happens on load
window.onload = function(){
    //products are listed
    listProducts(products);
}
//what happens when you return home
function returnHome(){
    listProducts(products);
}
//what happens when you add something to the cart
function addToCart(prod){
    cart.push(prod);
}
//see the cart
function goToCart(){
    listProducts(cart);
}
//what happens when you search
function search(){
    let filteredProducts = products.filter(p=>p.name.indexOf(state.searchText) > -1);
    listProducts(filteredProducts);
  }


//document.body.innerHTML = productDivs; //this will override a text input box

