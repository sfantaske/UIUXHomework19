console.log("JS init worked");


$("#btn1").on("click", function() {
    $(".modal").css("display", "block");
});

$(".modal").on("click", function() {
    $(".modal").css("display", "none");
});
