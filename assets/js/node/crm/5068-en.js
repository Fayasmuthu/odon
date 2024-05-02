$(document).ready(function() {
    if ($(window).outerWidth() <= 1160) {
        $(".solu-banner-img").insertAfter(".solu-header-rit p");
        $(".solu-banner-img").show()
    }
    if ($(window).outerWidth() <= 767) {
        $(".product-icon").attr("src", "")
    }
});
$(window).on("load", function() {
    if ($(window).outerWidth() >= 1920) {
        $(".solu-industri").addClass("im-header")
    }
    if ($(window).outerWidth() <= 767) {
        $(".product-icon").attr("src", "g")
    }
    setTimeout(function() {
        $(".crm-solution-main").addClass("bg_lazy_loaded")
    }, 300);
    $(".im-header").find(".animated-showing").each(function(a, b) {
        $(this).removeClass("animated-initial")
    })
});
$(window).on("scroll", function() {
    var a = $(window).scrollTop() + $(window).outerHeight();
    if ($(window).outerWidth() >= 1160) {
        $(".im-anim").find(".animated-showing").each(function(b, c) {
            if (($(this).offset().top - 100) < a) {
                $(this).removeClass("animated-initial")
            }
        })
    }
});