let allProducts = [];

//! fetching data from github server and return as json and then use that json data.
fetch("https://gist.githubusercontent.com/avishekhSingh/07d76602fcbca3931a75f4def8c50cbc/raw/cf96addd023328270395d6e628bb3ad8c8266656/allProducts.json")
  .then(data=>data.json()).then((data)=>{
    allProducts=data;
  })

//! Saving item to the cart page via local storage.
function saveToCart(idNumber) {
//! fetching all Previous stored data... from local storage.
    const myCartItems = getCartItems();                       //? after parse return Array
//!   Creating new array list of already stored in local storage.
    const itemAlreadyExists = myCartItems.filter((items) => items.id == idNumber);
    if (itemAlreadyExists.length == 0) {
        console.log(allProducts)
        const newProductAdding = allProducts.filter((item) => item.id == idNumber);

        //todo ==>> Dought:- There is only one element in array, so why use spread & not array[0] is wrong
        // console.log(newProductAdding[0]);
    //* Adding to my cart items ...                      
        myCartItems.push({...newProductAdding[0], qty: 1, available: "yes" });
        // How above is able to insert new method inside array element.
    } else {
        itemAlreadyExists[0].qty += 1;
        // console.log(itemAlreadyExists[0])
    }
//! Saving data to local storage.
    localStorage.setItem("MY_CART", JSON.stringify(myCartItems));
    
    //* Showing aleart message dialogs after item added to cart.
    $(".cartAdd").fadeIn()
    $(".cartAdd").fadeOut(1500)
    
    //* Changing number of items in cart when new item added.
    $("#total-items").text(` ${myCartItems.length}`)
}
//! Getting all data from local storage after parse/ change to object.
function getCartItems() {
  const myCartItems = JSON.parse(localStorage.getItem("MY_CART")) || [];
  return myCartItems;
}

//! Rendering all cart item to Cart_Page.html
function renderCartItems(){
  const myCartItems = getCartItems();
  let cards = "";

myCartItems.forEach((cartItem) => {
  cards += `<div class="card-container border rounded-3">
  <div class="row">
      <div class="col">
          <img src="${cartItem.imgURL}" alt="Product" height="150px" width="200px"
              class="border p-2 rounded-3">
      </div>
      <div class="col-6">
          <p><strong>${cartItem.name}</strong></p>
          <p class="grey">Sold-by : Macmerise Private Limited</p>
          <p class="text-orange">Rating: ${cartItem.ratings}</p>
          <form action="#">
              <label for="size">Size :</label>
              <select name="size" id="size">
                  <option value="small">Small</option>
                  <option value="small">Midium</option>
                  <option value="small">Large</option>
              </select>
              <label for="Quantity"> Quantity :</label><button class="border quantity-minus" onclick="quantityDecrease(${cartItem.id})">-</button>
              <select name="quantity" id="quantity">
                  <option value="1" id="itemQty">${cartItem.qty}</option>
              </select>
              <button class="border quantity-plus" onclick="quantityIncrease(${cartItem.id})">+</button>
          </form>
      </div>
      <div class="col">
      <p><del>Rs ${cartItem.actualprice}</del><span class="text-orange"> (60% Off)</span></p>
      <p><strong>Rs ${cartItem.price}</strong></p>
      <small class="grey">Delivery in 4-6 days</small>
      </div>
  </div>
  <hr>
  <div class="row">
      <div class="col mb-2">
          <button class="btn btn-outline-secondary rounded-pill" onclick="removeFromCart(${cartItem.id})">Remove</button>
          <button class="btn btn-outline-secondary rounded-pill" onclick="moveToWishlist(${cartItem.id})">Add to Wishlist</button>
      </div>
  </div>
</div>`;
});

//* Inserting created card to HTML page.
document.getElementById("cart-items-wrapper").innerHTML = cards;
document.getElementById("total-items").innerHTML = `(${myCartItems.length} items)`;
}
//* finally calling... render function.
renderCartItems();

//! Number of item present in the carts.
function numOfItemInCart(){
  var allItems=getCartItems();
//* Changing number of items in cart.
 $("#total-items").text(` ${allItems.length}`)
 $("#cart-items").text(` ${allItems.length}`)
 const wishlist= JSON.parse(localStorage.getItem("MY_WISHLIST"))
 $("#wishlist-items").text(` ${wishlist.length}`)
};
//* calling function to update number of items in the cart
numOfItemInCart();

//! Calculation of price of item available in the cart.
function priceCalculate(){
var totalItems= 0;
const myCartItems= getCartItems();
myCartItems.forEach((items)=>{
totalItems += items.qty;
})
document.getElementById("price-detail").innerText = `${totalItems*1049}`
document.getElementById("total").innerText = `${totalItems*1049-1549}`
}
//* Calling calculation function...
priceCalculate()

//! Try to increase and decrease quantity of items in cart;
function quantityIncrease(idNum){
  const myCartItems= getCartItems();
  const selectedItems= myCartItems.filter((cartItems)=> cartItems.id == idNum);
  selectedItems[0].qty += 1;
  localStorage.setItem("MY_CART",JSON.stringify(myCartItems));
  renderCartItems();
  priceCalculate()
}
function quantityDecrease(idNum){
  const myCartItems= getCartItems();
  const selectedItems= myCartItems.filter((cartItems)=> cartItems.id == idNum);
  selectedItems[0].qty -= 1;
  localStorage.setItem("MY_CART",JSON.stringify(myCartItems));
  renderCartItems();
  priceCalculate();
}

//! Removing item from cart and updating all details after deleting items from carts.
function removeFromCart(idNum) {
  const myCartItems = getCartItems();
  const filteredItems = myCartItems.filter((item) => item.id != idNum);
//* Filter all rest element which id is not "this" and then saved to local storage.
  localStorage.setItem("MY_CART", JSON.stringify(filteredItems));
//* Showing aleart message dialogs after removed item.
  $(".cartRemove").fadeIn();
  $(".cartRemove").fadeOut(1000);

//? Refresh item present in cart after deleting and calculating current price also
renderCartItems();
priceCalculate();
numOfItemInCart();
}

//! Moving items to the Wishlist page and then updating all item left in the cart.
function moveToWishlist(idNumb){
  const myCartItems = getCartItems();
  const myWishlist = myCartItems.filter((item)=> item.id == idNumb);
  const restOtherItems = myCartItems.filter((item)=> item.id != idNumb);

  //* Saving all the rest items to the cart page 
  localStorage.setItem("MY_CART",JSON.stringify(restOtherItems));

  //* Pushing item as wishlist items
  const wishlist= getWishlist();
  wishlist.push(myWishlist[0]);
  localStorage.setItem("MY_WISHLIST",JSON.stringify(wishlist))
  
  //* Refresh page after item moved to wishlist
  renderCartItems();
  priceCalculate();
  numOfItemInCart();
}

//* Saving wishlist
function getWishlist(){
const myWishlist = JSON.parse(localStorage.getItem("MY_WISHLIST")) || [];
return myWishlist;
}

