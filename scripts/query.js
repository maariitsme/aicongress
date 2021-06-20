$(document).ready(function() {
    $('.navbar-collapse  li  a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
});

function register() {
    // window.location = "/aicongress/register.html";
    window.location = "/register";
}

var acc = document.getElementsByClassName("accordion");
var pan = document.getElementsByClassName("drop-down");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = pan[this.id];
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        for (let j = 0; j < acc.length; j++) {
            if (this.id != j) {
                pan[j].style.display = "none";
                acc[j].classList.remove("active");
            }
        }
    });

}