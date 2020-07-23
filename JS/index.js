console.log("JS init worked");


$("#btn1").on("click", function() {
    $(".modal").css("display", "inline");
    $(".content").css("display", "none");
});

$(".modal").on("click", function() {
    $(".modal").css("display", "none");
    $(".content").css("display", "block");
});
