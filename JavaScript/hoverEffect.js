// Adding effects on hovering....
var img = $(".card-img-top");

// todo
/*img.on()("hover",function(){
    console.log("You are hovering on me")
});
*/ 
img.hover(function(){
    $(this).css("opacity",0.15)
    $(this).next().children().addClass("hover")
})
$(".card").mouseleave(function(){
    img.css("opacity",1)
    img.next().children().removeClass("hover")
})

$(".fa-solid").hover(function(){
    $(this).css("background","orange")
    $(this).addClass("text-white")
})
$(".fa-solid").mouseleave(function(){
    $(this).css("background","white")
    $(this).removeClass("text-white")
})