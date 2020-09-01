// This code below is if you want to add the script source in title. Adding script at the end before body is better.
// $(document).ready(function () {
//     $("h1").css("color", "red");
// });


// $("h1").text("Bye");

// // $("button").html("<em>Hey</em>");

// // console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");


// $("h1").click(function () {
//     $("h1").css("color", "purple");
// });


// $("button").click(function () {
//     $("h1").css("color", "purple");
// });

// $("input").keypress(function (event) {
//     console.log(event.key);
// });

// $(document).keypress(function (event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function () {
//     $("h1").css("color", "purple");
// });


$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});