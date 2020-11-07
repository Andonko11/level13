function toogle_mobile_menu(){
    $(".mob_act_btn").click(function(){
        $(".mob_menu").toggleClass("active")
        $("header").toggleClass("active")
        $(".mob_menu").slideToggle(300);
    })
}

$(document).ready(function () {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();

        if (scroll >= 40) {
            $('header').addClass('active')
        } else if (scroll <= 40) {
            $('header').removeClass('active')
        }
    });
    toogle_mobile_menu();
});