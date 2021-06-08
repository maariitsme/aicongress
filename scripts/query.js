$(document).ready(function() {
    $('.navbar-collapse  li  a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
});

function register() {
    window.location = "/aicongress/register.html";
}