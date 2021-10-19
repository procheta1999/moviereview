$("body").addClass("body_img");
$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("body").addClass("body_img");
        $(".change").text("OFF");
        $(".para").css("background-color", "white");
    } else {
        $("body").removeClass("body_img");
        // $(".item").removeClass("light");
        $("body").addClass("dark");
        $(".para").css("background-color", "#222");
        $(".change").text("ON");
    }
});

console.log("hello");