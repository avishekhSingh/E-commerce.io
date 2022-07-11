function renderWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("MY_WISHLIST"));
    var wishlistCard = "";
    wishlist.forEach((cartItem) => {
    wishlistCard += `<div class="card-container border rounded-3">
    <div class="row">
        <div class="col">
            <img src="${cartItem.imgURL}" alt="Product" height="150px" width="200px"
                class="border p-2 rounded-3">
        </div>
        <div class="col-6">
            <p><strong>${cartItem.name}</strong></p>
            <p class="grey">Sold-by : Macmerise Private Limited</p>
            <p class="text-orange">Rating: ${Math.floor(cartItem.ratings)}</p>
            <button class="btn btn-outline-secondary rounded-pill"
                onclick="removeWishlist(${cartItem.id})">Remove wishlist</button>
            <button class="btn btn-outline-secondary rounded-pill"
                onclick="addToCart(${cartItem.id})">Add to cart</button>
        </div>
        <div class="col">
            <p><del>Rs ${cartItem.actualprice}</del><span class="text-orange"> (60%
                    Off)</span></p>
            <p><strong>Rs ${cartItem.price}</strong></p>
        </div>
    </div>
</div>`;
    });

//! Adding Wishlist items html
document.getElementById("wishlist-items-wrapper").innerHTML = wishlistCard;
}
//* Calling to render wishlist page.
renderWishlist();

//! Removing item from wishlist and updating rest of items.
function removeWishlist(itemsId) {
const wishlist = JSON.parse(localStorage.getItem("MY_WISHLIST"));
const restWishlist = wishlist.filter((item) => item.id != itemsId);
localStorage.setItem("MY_WISHLIST", JSON.stringify(restWishlist));
renderWishlist();
}

//! Adding item to cart page again.
function addToCart(itemId){
    const myCartItems= JSON.parse(localStorage.getItem("MY_CART")) || [];
    const wishlist = JSON.parse(localStorage.getItem("MY_WISHLIST"));
    const selectedItem= wishlist.filter((item) => item.id == itemId);
    myCartItems.push({...selectedItem[0],qty:1});
    localStorage.setItem("MY_CART",JSON.stringify(myCartItems));
    const restWishlist = wishlist.filter((item) => item.id != itemId);
    localStorage.setItem("MY_WISHLIST", JSON.stringify(restWishlist));
    renderWishlist();
    numOfItemInCart();
}

//! Number of item present in wishlist.
function numOfItemInCart(){
    const wishlist = JSON.parse(localStorage.getItem("MY_WISHLIST"));
    const myCartItems= JSON.parse(localStorage.getItem("MY_CART"));
    
    //* Changing number of items in cart.
    $(".wishlist-items").text(` ${wishlist.length}`)
    $("#cart-items").text(` ${myCartItems.length}`)
};
//* calling function to update number of items in the cart
numOfItemInCart();

//! Adding item to wishlist page from product listing page by clicking on heart.
fetch("https://gist.githubusercontent.com/avishekhSingh/07d76602fcbca3931a75f4def8c50cbc/raw/cf96addd023328270395d6e628bb3ad8c8266656/allProducts.json").then(data => data.json())
.then(data => {
const allProducts= data;
})
function addToWishlist(idNum){
    const wishlist = JSON.parse(localStorage.getItem("MY_WISHLIST")) || [];
    const selectedItems = allProducts.filter((items)=> items.id == idNum);
    const itemAlreadyExists=wishlist.filter((items)=> selectedItems[0].id == items.id)
    if(itemAlreadyExists.length == 0){
    const restItems=wishlist.filter((items)=> selectedItems[0].id != items.id)
    restItems.push(selectedItems[0]);
    localStorage.setItem("MY_WISHLIST",JSON.stringify(restItems));
    const wishlistItems= JSON.parse(localStorage.getItem("MY_WISHLIST")) ;
    //* Updating number of item in wishlist.
    $("#products-wishlist").text(` ${wishlistItems.length}`)
    //* Showing alert when item is added to wishlist.
    $(".addTowishlist").fadeIn()
    $(".addTowishlist").fadeOut(1000)
    }
    else{
        alert("This item is already added to wishlisht")
    }
}
