//! Review page scripts
    var star1 = document.getElementById("star1");
    star1.addEventListener("click", () => {
      star1.classList.add("text-warning");
      star2.classList.remove("text-warning");
      star3.classList.remove("text-warning");
      star4.classList.remove("text-warning");
      star5.classList.remove("text-warning");
    });
    var star2 = document.getElementById("star2");
    star2.addEventListener("click", () => {
      star1.classList.add("text-warning");
      star2.classList.add("text-warning");
      star3.classList.remove("text-warning");
      star4.classList.remove("text-warning");
      star5.classList.remove("text-warning");
    });
    var star3 = document.getElementById("star3");
    star3.addEventListener("click", () => {
      star1.classList.add("text-warning");
      star2.classList.add("text-warning");
      star3.classList.add("text-warning");
      star4.classList.remove("text-warning");
      star5.classList.remove("text-warning");
    });
    var star4 = document.getElementById("star4");
    star4.addEventListener("click", () => {
      star1.classList.add("text-warning");
      star2.classList.add("text-warning");
      star3.classList.add("text-warning");
      star4.classList.add("text-warning");
      star5.classList.remove("text-warning");
    });
    var star5 = document.getElementById("star5");
    star5.addEventListener("click", () => {
      star1.classList.add("text-warning");
      star2.classList.add("text-warning");
      star3.classList.add("text-warning");
      star4.classList.add("text-warning");
      star5.classList.add("text-warning");
    });

    // Try to save data from this page
    var post = document.getElementById("postButton");
    post.addEventListener("click", () => {
      var message = document.getElementById("writeReview").value;
      var rating = document.querySelector(".ratings").innerHTML;
      if (message == "") {
        alert("Please write a proper review.");
      } else {
        // Try to export module  variable name newPost
        var newPostPlace= document.getElementById("newPostPlace");
        var newPost = `<div class="row">
            <div class="col d-flex">
              <img src="Image/Group 2592.png" alt="profie picture" />
              <p class="py-3 mx-3">
                <strong>Er. Abhishek kumar singh</strong>
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col d-flex" id="new-rating">
            ${rating}
              <p class="mx-5 mb-0"><strong>Early delivery, Very resonable price</strong></p>
            </div>
          </div>
          <div class="row">
            <p class="mb-0">Review in india on 2 june 2020</p>
            <p class="text-danger"><strong>Verified Purchase</strong></p>
            <p id="posted-review">${message}</p>
            <input type="button" value="Helpful" class="w-25">
            <p><a href="#">Comment</a> | <a href="#">Report abuse</a></p>`;
        console.log(newPost);
        // document.write(newPost);
        newPostPlace.innerHTML +=newPost;
        // location.href = "Product_view_Page.html"
      }
    });