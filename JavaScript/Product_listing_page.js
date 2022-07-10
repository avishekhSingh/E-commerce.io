$(document).ready(function () {
  
  //! fetching data from github server in Raw form then converted to json().
  fetch("https://gist.githubusercontent.com/avishekhSingh/07d76602fcbca3931a75f4def8c50cbc/raw/cf96addd023328270395d6e628bb3ad8c8266656/allProducts.json")
  .then(response =>{if(response.ok){return response.json()} else{throw response}})
  .then(allProducts=>{
    // console.log(allProducts)
    let cards = "";
    allProducts.forEach((product) => {
      // console.log(product);
      //!  Creating star ratings
      var stars = "";
      const ratings = Math.round(+product.ratings); // "+" is used to changed data-type.
      // console.log(typeof ratings);
      for (let i = 0; i < 5; i++) {
        if (i < ratings) {
          stars += '<i class="fa-regular fa-star text-warning"></i>';
        } else {
          stars += '<i class="fa-regular fa-star grey"></i>';
        }
      }
      // console.log(stars);
      //! Creating our card which is goint to insert inside page.

      cards =
        cards +
        `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card text-center mb-2 justify-content-space-between" style="width: 18rem; position: relative">
          <img src="${product.imgURL}" height="250px" width="100%" alt="${product.name}" tabindex="0"
            class="card-img">
          <div class="col absolute">
            <i onclick="addToWishlist(${product.id})" class='fa-solid fa-heart'></i><i class='fa-solid fa-eye'></i><i onclick="saveToCart(${product.id})" class='fa-solid fa-cart-shopping'></i>
          </div>
          <div class="row">
            <div class="row">
              <h4>${stars}</h4>
            </div>
            <div class="row">
              <h4><Strong>${product.name}</Strong></h4>
            </div>
            <div class="row">
              <p><strong>Rs ${product.price} <del>RS 2748.00</del> (<span class="text-danger">60% Off</span>)</strong>
              </p>
            </div>
          </div>
        </div>
      </div>`;
    });
    // console.log(cards);
    document.getElementById("card-container").innerHTML = cards;
  }).catch((error)=>{console.log("Error Message:- ", error)});
});
