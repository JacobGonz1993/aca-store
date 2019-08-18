//stuff
//just checking
// let prod=require("products.js");
let products=[];

//cart is an empty array you push items to
let cart=[];
//best practice to set this to null?
let addCartBtn = document.getElementById("btnAddToCart").innerHTML;

function listProducts(prods){
    let productDivs = "";
    for(let i=0; i < prods.length; i++){
        let product = prods[i];
        productDivs +=`<div class="item">
        <img src="${product.imgUrl}">,
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
    fetch("https://acastore.herokuapp.com/products")
        .then(res => res.json())
        .then(parsedData => listProducts(parsedData))


    // listProducts(products);
    // mainDiv = document.getElementById("main");
    // register = document.getElementById("register");
    // btnSignUp = document.getElementById("btnSignUp");
    // btnSignUp.onclick = signUp;
    // txtEmail = document.getElementById("email");
    // txtPassword = document.getElementById("password");
}
//what happens when you return home
function returnHome(){
    fetch("https://acastore.herokuapp.com/products")
    .then(res => res.json())
    .then(parsedData => listProducts(parsedData))

    listProducts(prod);
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
    let searchText = document.getElementById("btnSearch").value;
    fetch("https://acastore.herokuapp.com/products")
        .then(res => res.json())
        .then(parsedData => {
            let filteredProducts = parsedData.filter(p=>p.name.toLowerCase().includes(searchText));
            listProducts(filteredProducts);
        })
    
   
  }

  //user info
class UserInfo {
    constructor(email, password, cartId){
        this.email= email;
        this.password= password;
        this.cartId= cartId;
    }
}
//sign up
function signUp(){
    mainDiv.style.display = "block";
    register.style.display = "none";
   let newUser = new UserInfo(txtEmail.value, txtPassword.value, null);
   //learn this bs its called fetch and its wild
   fetch("https://acastore.herokuapp.com/users", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(newUser)
   }).then(response => response.json());
   console.log(newUser);
   localStorage.setItem('newUser', JSON.stringify(newUser));

}



//document.body.innerHTML = productDivs; //this will override a text input box

