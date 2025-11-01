// Task 0
$(document).ready(function(){
    console.log("jQuery is ready!")
});

// Task 1
$("h2, p").css("color", "blue");
$(".pClass").text("Hi <b>there<b/>");
$("#pID").html("Hi <b>there<b/>");

// Task 2
$(".showMe").hide();
$(".hideBtn").click(function(){
    $(".hideMe").hide();
});

$(".showBtn").click(function () {  
    $(".showMe").show();
});

$(".toggleBtn").click(function () {  
    $(".toggleMe").toggle();
});

// Tasks 3,4 
$(".imgChange").css("width", "128px")
$("#fadeinImg").fadeOut();

$(".fadeInBtn").click(function(){
    $("#fadeinImg").fadeIn();
});
$(".slideUpBtn").click(function(){
    $("#fadeinImg").slideUp();
});

$(".fadeOutBtn").click(function(){
    $("#fadeoutImg").fadeOut();
});
$(".slideDownBtn").click(function(){
    $("#fadeoutImg").slideDown();
});

$(".fadeToggleBtn").click(function(){
    $("#toggleImg").fadeToggle();
});
$(".slideToggleBtn").click(function(){
    $("#toggleImg").slideToggle();
});

// Task 5
$("#addBtn").click(function(){
    $("ul").append("<li class='newLi'>This is a new &lt;li&gt; added with append");
    $("ul").prepend("<li class='newLi'>This is a new &lt;li&gt; added with prepend");
    
});
$("#removeBtn").click(function(){
    $("ul li:last").remove();
});
$("#emptyBtn").click(function(){
    $("ul").empty();
});

$("#changeSrc").click(function(){
    $("#myImg").attr("src", "Images/Ducky2.jpg");
});

$("#changeHref").click(function(){
    $("#goToLink").attr("href", "https://www.pinterest.com/pin/83738874315700389/").text("Go to second Ducky");
});

$("#name").on("input",function(){
    $("#nameInput").text($(this).val());
});
$("#email").on("input", function(){
    $("#emailInput").text($(this).val());
});


$("#box").css({
    "backgroundColor": "blue",
    "width": "128px",
    "height": "128px",
    "position": "relative"
});
$("#box2").css({
    "backgroundColor": "green",
    "width": "128px",
    "height": "128px",
    "position": "relative"
});
$("#box3").css({
    "backgroundColor": "red",
    "width": "128px",
    "height": "128px",
    "position": "relative"
});

$("#box").animate({left: "300"})
$("#box2")
    .animate({left: "300px"})
    .animate({top: "300px"})
    .animate({height: "20px", width: "20px"})
    .animate({left: "0px", top: "0px", height: "128px", width: "129px"});
$("#box3").animate({
    left: "300px",
    opacity: "50%",
    width: "256px",
    height: "256px"
})

$("#ball").css({
    "width": "80px",
    "height": "80px",
    "background": "crimson",
    "border-radius": "50%",
    "position": "relative",
    "margin-top": "100px"
});

let dir = 1;

function bounceBall(){
    if(($("#ball").width() + $("#ball").position().left) >= $(window).width() - 20){
        dir = -1;
    } else if($("#ball").position().left <= 20) dir = 1;
    $("#ball")
        .animate({top: "-90px", left: "+=" + 40 * dir})
        .animate({left: "+=" + 40 * dir, top: "0px"}, bounceBall)
};

$(function () {
    bounceBall();
});


