//! Changing flag and contact no. on selected country
var country = document.getElementById("country");
var mobileNo = document.getElementById("mobileNo.");

//! Changing phone no. by using "addEventListener" for country "canada".
var changeText= document.getElementById("canada");
    changeText.addEventListener("click", function(){
    document.getElementById("mobileNo.").textContent=("+1 123-456-7890");
    country.innerHTML=(`<i class="fa-brands fa-canadian-maple-leaf"> Canada</i>`)
})

//! Try to change phone no. without addEventListener.
//* onclick event in HTML function is calling... instead of addEventlistener in JS file
function india(){
    mobileNo.textContent=("+91 8996656777");
    country.innerHTML=(`<i class="fa-solid fa-flag"> India</i>`)
    console.log("Working")
}
function usa(){
    mobileNo.textContent=("+12 163547758");
    country.innerHTML=(`<i class="fa-solid fa-flag-usa"> USA</i>`)
    console.log("Working")
}
function russia(){
    mobileNo.textContent=("+7 9633426853");
    country.innerHTML=(`<i class="fa-solid fa-flag-checkered"> RUSSIA</i>`)
    console.log("Working")
}

//! "Back to top" button on scroll of 300px
var backToTopButton= document.getElementById("backToTop");
document.addEventListener("scroll",function(){
    if (window.pageYOffset > 300){
        backToTopButton.style.display= "block";
    }
    else{
        backToTopButton.style.display= "none"
    }
})
backToTopButton.addEventListener("click", function(){
    window.scrollTo(0,0);
});
