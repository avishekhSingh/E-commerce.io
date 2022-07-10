//! Product view page start from here
// After 0.3 second this button take you to another page called review
var review = document.getElementById("review")
review.addEventListener("click",()=>{
  setTimeout(()=>{location.href = "Review_page.html"},300)  
})
// This button creating some HTML and append with scrollabel div for review page.
var nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click",()=>{
  var element= `<div class="col-3 text-center">
  <img src="Image/product-1.png" alt="green t-shirt" />
  <h4>Dummy Text Lorel</h4>
  <p>
    <strong>Rs 1099</strong><del class="grey">Rs 2748</del><span class="text-danger"> ( 60% off)</span>
  </p>
  <i class="fa-solid fa-star text-warning"></i>
  <i class="fa-solid fa-star text-warning"></i>
  <i class="fa-solid fa-star text-warning"></i>
  <i class="fa-solid fa-star text-warning"></i>
  <i class="fa-solid fa-star grey"></i>
</div>`
var element= element+element+element+element
var existingElement=document.getElementById("similar-product");;
existingElement.innerHTML += element;
existingElement.classList.add("scrollable")
})