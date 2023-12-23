document.addEventListener("DOMContentLoaded", function () {
    var contents = document.querySelectorAll(".content");

    contents.forEach(function (content) {
        content.style.opacity = 1;
        content.style.transform = "translateY(0)";
    });
});