var windowWidth = $(window).outerWidth(),
    initFlag = 1,
    tabSec = 0,
    prceTabWdth = $(".pricing-tab").width(),
    yrboxWdth = Math.round($(".yr-save-box").outerWidth(true)),
    yrboxVal = $(".yr-save-box").css("right", "-" + yrboxWdth + "px");
$(document).ready(function() {
    if (yrboxWdth < prceTabWdth - 10) {
        $(".yr-save-box").css("right", "-" + yrboxWdth + "px")
    } else {
        $(".yr-save-box").css({
            right: "-" + yrboxWdth / 1.8 + "px",
            "max-width": yrboxWdth / 1.8 + "px"
        })
    }
    $(".cmp_cell .yr-save-box").removeAttr("style");
    if (CountryCode == "IN") {
        $(".indc-hide").hide()
    }
    if (CountryCode == "US") {
        $(".cmp_lastSec").removeClass("cmp_lastSec");
        $(".cmp_ftr_lists.hide-lyte").addClass("cmp_lastSec");
        $(".hide-lyte").removeClass("hide-lyte")
    }
    if ($("body").hasClass("i18n-en") && (CountryCode != "IN")) {
        $(".pricing-main-con").addClass("crmflex-con");
        $(".yr-save-box").removeAttr("style");
        tabSec = $(".tab-container").offset().top;
        $(".othr-prdcts.crmplus").addClass("hide-prdct");
        $(".othr-prdcts.desk").removeClass("hide-prdct")
    }
    if ($(".pricing-main-con").hasClass("crmflex-con")) {
        if (windowWidth <= 1140 && windowWidth > 767) {
            $(".cxbox-main-con").each(function() {
                $(this).find(".cxbox-ans-con .cxplan-initVal").html($(this).find(".cxhdr-main-ele .cxplan-initVal").html());
                $(this).find(".cxhdr-main-ele .cxplan-deftxt1").addClass("opcty-hide")
            })
        } else {
            if (windowWidth <= 767) {
                $(".cxhdr-main-ele .cxplan-deftxt1").removeClass("opcty-hide")
            }
        }
    }
    $(".testi-sldr-con").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $(".slick-prev"),
        nextArrow: $(".slick-next"),
        infinite: true,
        dots: true,
        autoplaySpeed: 8500,
        responsive: [{
            breakpoint: 992,
            settings: {
                adaptiveHeight: true
            }
        }]
    });
    if (windowWidth <= 992) {
        $(".bottom_move").removeClass("bottom_move");
        $(".othr-prdcts picture").remove()
    }
    if (windowWidth <= 767) {
        $(".cmp_ftr_lists").each(function(a) {
            $this = $(this);
            $(".prce-features-list").each(function() {
                var c = $(this).find(".prce-ftrs-list:eq(" + a + ")");
                var b = $this.find(".cmp_row .cmp_cell:first-child");
                b.each(function(d) {
                    c.find(".prce-ftrs-inrlst li:eq(" + d + ")").append($(this).find(".pricing-tooltip-sec").clone())
                })
            })
        });
        $(".prce-ftrs-inrlst li").append('<span class="info-tooltip-icon"></span>');
        $(".testimonial-con").insertAfter($(".whtbg-con"));
        $(".business_icons,.slick-arrow,.testimonial-main-con").remove();
        $('<img class="zcp_lazy business_icons" data-src="/sites/zweb/images/crm/zpricing-brands-mob.svg" alt="customer-logos">').insertAfter(".business_sec .scroll_top_prcng.access-btn");
        zcp_lazy();
        if ($(".table-right-main").length > 0) {
            $(".table-right-main").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false,
                infinite: false,
                outerEdgeLimit: true,
                dots: false,
                asNavFor: ".slickSlideCon>div"
            });
            $(".slickSlideCon>div").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false,
                asNavFor: ".table-right-main"
            });
            setTimeout(function() {
                $(".table-right .slick-next,.tableheading-fixed .slick-next").append('<img src="/sites/zweb/images/crm/images/support-slick-arrow.svg" alt="Next Arrow">');
                $(".table-right .slick-prev,.tableheading-fixed .slick-prev").append('<img src="/sites/zweb/images/crm/images/support-slick-arrow.svg" alt="prev Arrow">')
            }, 500)
        } else {
            $(".cmpr-table-sec").remove();
            $(".cmn-links").insertAfter($(".pricing-wrap"))
        }
        if ($("body").hasClass("other-lang")) {
            hgtEleUpdate()
        }
    }
});
$(window).on("load", function() {
    setTimeout(function() {
        if ($("#zplan-crm-lyte1").attr("data-price") == "") {
            $("#zplan-lyte-enmonthly1,#zplan-lyte-ulmonthly1,#zplan-crm-lyte1").html($("#zplan-crm-lyte").html());
            $("#zplan-lyte-enmonthly1,#zplan-lyte-ulmonthly1,#zplan-crm-lyte1").attr("data-price", $("#zplan-crm-lyte").attr("data-price"));
            if (windowWidth <= 767) {
                $(".cmp_Table").remove()
            }
        }
        $("#zplan-Standard2,#zplan-Standard3,#zplan-Standard4,#zplan-Standard6").html($("#zplan-Standard").html());
        $("#zplan-professional2,#zplan-professional3,#zplan-professional4").html($("#zplan-professional").html());
        $("#zplan-enterprise2,#zplan-enterprise3,#zplan-enterprise4").html($("#zplan-enterprise").html());
        $("#zplan-Ultimate2,#zplan-Ultimate3,#zplan-Ultimate4").html($("#zplan-Ultimate").html());
        $("#zplan-Standard5 .zcurrency-symbol").html($("#zplan-Standard .zcurrency-symbol").html());
        $("#zplan-Standard5 .z-price-text").html($("#zplan-Standard .z-price-text").html());
        $("#surveyplan-plus1").html($("#surveyplan-plus").html());
        $("#projectsplan-premium1").html($("#projectsplan-premium").html());
        $("#salesiqplan-basic1").html($("#salesiqplan-basic").html());
        $("#socialplan-standard1").html($("#socialplan-standard").html());
        $("#zplan-email1-500").html($("#zplan-email-500").html());
        $("#deskplan-standard1").html($("#deskplan-standard").html());
        $("#analyticsplan-basic1").html($("#analyticsplan-basic").html());
        $("#zplan-Standard2,#zplan-Standard3,#zplan-Standard4,#zplan-Standard5,#zplan-Standard6").attr("data-price", $("#zplan-Standard").attr("data-price"));
        $("#zplan-professional2,#zplan-professional3,#zplan-professional4").attr("data-price", $("#zplan-professional").attr("data-price"));
        $("#zplan-enterprise2,#zplan-enterprise3,#zplan-enterprise4").attr("data-price", $("#zplan-enterprise").attr("data-price"));
        $("#zplan-Ultimate2,#zplan-Ultimate3,#zplan-Ultimate4").attr("data-price", $("#zplan-Ultimate").attr("data-price"));
        $("#surveyplan-plus1").attr("data-price", $("#surveyplan-plus").attr("data-price"));
        $("#projectsplan-premium1").attr("data-price", $("#projectsplan-premium").attr("data-price"));
        $("#salesiqplan-basic1").attr("data-price", $("#salesiqplan-basic").attr("data-price"));
        $("#socialplan-standard1").attr("data-price", $("#socialplan-standard").attr("data-price"));
        $("#analyticsplan-basic1").attr("data-price", $("#analyticsplan-basic").attr("data-price"));
        $("#zplan-email1-500").attr("data-price", $("#zplan-email-500").attr("data-price"));
        $("#deskplan-standard1").attr("data-price", $("#deskplan-standard").attr("data-price"));
        $(".cmpr-table-sec .zcurrency-symbol").html($(".product-block .zcurrency-symbol").html());
        $(".cx-price-popup .zcurrency-symbol").html($("#zplan-Standard .zcurrency-symbol").html());
        $("#zplan-Standard1").html($("#zplan-Standard").html());
        $("#zplan-professional1").html($("#zplan-professional").html());
        $("#zplan-enterprise1").html($("#zplan-enterprise").html());
        $("#zplan-Ultimate1").html($("#zplan-Ultimate").html());
        $("#zplan-Standard1").attr("data-price", $("#zplan-Standard").attr("data-price"));
        $("#zplan-professional1").attr("data-price", $("#zplan-professional").attr("data-price"));
        $("#zplan-enterprise1").attr("data-price", $("#zplan-enterprise").attr("data-price"));
        $("#zplan-Ultimate1").attr("data-price", $("#zplan-Ultimate").attr("data-price"));
        if ($(".pricing-main-con").hasClass("crmflex-con")) {
            $("#crmplan-Standard").html($("#zplan-Standard").html());
            $("#crmplan-professional").html($("#zplan-professional").html());
            $("#crmplan-enterprise").html($("#zplan-enterprise").html());
            $("#crmplan-Ultimate").html($("#zplan-Ultimate").html());
            $("#crmplan-Standard").attr("data-price", $("#zplan-Standard").attr("data-price"));
            $("#crmplan-professional").attr("data-price", $("#zplan-professional").attr("data-price"));
            $("#crmplan-enterprise").attr("data-price", $("#zplan-enterprise").attr("data-price"));
            $("#crmplan-Ultimate").attr("data-price", $("#zplan-Ultimate").attr("data-price"))
        }
    }, 300)
});
$(document).on("mouseover", ".info-tooltip-icon.cx-plan", function() {
    $(this).closest(".price-sec").find(".pricing-tooltip-sec").addClass("active")
});
$(document).on("mouseout", ".info-tooltip-icon.cx-plan", function() {
    $(this).closest(".price-sec").find(".pricing-tooltip-sec").removeClass("active")
});
$(document).on("mouseover", ".info-tooltip-icon", function() {
    $(this).parent("li").find(".pricing-tooltip-sec").addClass("active")
});
$(document).on("mouseout", ".info-tooltip-icon", function() {
    $(this).parent("li").find(".pricing-tooltip-sec").removeClass("active")
});
$(window).scroll(function() {
    var j = $(this).scrollTop(),
        a = $(window).outerHeight(),
        l = $(".business_sec img").offset().top + 100,
        e = j + a;
    if (windowWidth <= 767) {
        if ((j > 100) && j < $(".othr-prdcts.bigin a").offset().top) {
            $(".z-bottom-cta-menu a").hide()
        } else {
            $(".z-bottom-cta-menu a").removeAttr("style")
        }
        if ($(".compar-main-table").length > 0) {
            if ($(window).scrollTop() > $(".compar-main-table").offset().top && $(window).scrollTop() < $(".other-prsec").offset().top - 200) {
                $(".tableheading-fixed").addClass("opcty-vsb")
            } else {
                $(".tableheading-fixed").removeClass("opcty-vsb")
            }
        }
    }
    if (windowWidth > 767) {
        var h = $(".cmp_Table"),
            c = h.offset().top,
            d = 0;
        if ($(window).width() > 1140) {
            d = parseInt($(".product-header-top").outerHeight(true))
        }
        var f = j + d;
        var b = h.outerHeight(true) + c + (h.outerHeight(true)),
            g = $(".cmp_row.brdn.fst");
        if (c < f && b > f) {
            g.addClass("cmp_Fixed")
        } else {
            g.removeClass("cmp_Fixed")
        }
    }
    if (windowWidth > 992) {
        if (e > l) {
            $(".bottom_move").removeClass("bottom_move")
        }
    }
    if ($(".pricing-main-con").hasClass("crmflex-con")) {
        var i = $(".greybg-con.fst").offset().top + $(".greybg-con.fst").height(),
            k = $(".whtbg-con").offset().top + 100;
        ftrSec = $("footer").offset().top;
        if (windowWidth > 1140) {
            if (j < i) {
                $(".product-header-top").addClass("opcty_vsb")
            }
            if (j > tabSec && (j < ftrSec - 100)) {
                $(".tab-container").addClass("fixed");
                $(".product-header-top").removeClass("opcty_vsb");
                $(".zgh-accounts, .product-nav-links").addClass("show_vsb")
            } else {
                $(".tab-container").removeClass("fixed");
                if (j > tabSec) {
                    $(".product-header-top").removeClass("opcty_vsb")
                }
                $(".zgh-accounts, .product-nav-links").removeClass("show_vsb")
            }
        } else {
            if (j > tabSec && (j < k - 300)) {
                $(".tab-container").addClass("fixed")
            } else {
                $(".tab-container").removeClass("fixed")
            }
        }
    }
});

function expandCollapse() {
    if (initFlag) {
        $(".expand-all-sec").hide();
        $(".collapse-btn").show();
        $(".ga-fq-cont").addClass("faq_active");
        $(".gd-fqa").find(".pricing-sprite").addClass("close-icon");
        $(".gd-ans").slideDown(200);
        initFlag = 0
    } else {
        $(".expand-all-sec").hide();
        $(".expand-btn").show();
        $(".ga-fq-cont").not(".fst_elem").removeClass("faq_active");
        $(".ga-fq-cont").not(".fst_elem").find(".pricing-sprite").removeClass("close-icon");
        $(".ga-fq-cont").not(".fst_elem").find(".gd-ans").slideUp(200);
        initFlag = 1
    }
}

function showans(a) {
    var b = $(a);
    if (event.target.id !== "lite_popup") {
        if (!b.find(".gd-ans").is(":visible")) {
            $(".gd-fqa").find(".faq_active").removeClass("faq_active");
            b.addClass("faq_active");
            $(".gd-fqa").find(".close-icon").removeClass("close-icon");
            $(".gd-ans").slideUp();
            b.find(".gd-ans").slideDown(200);
            b.find(".pricing-sprite").toggleClass("close-icon")
        } else {
            $(".gd-fqa").find(".faq_active").removeClass("faq_active");
            b.find(".gd-ans").slideUp(200);
            b.find(".pricing-sprite").toggleClass("close-icon")
        }
        if ($(".gd-ans:visible").length == 7) {
            $(".expand-all-sec").hide();
            $(".collapse-btn").show();
            initFlag = 0
        } else {
            if ($(".gd-ans:visible").length == 1) {
                $(".expand-all-sec").hide();
                $(".expand-btn").show();
                initFlag = 1
            }
        }
    }
}

function cmp_tbl_exp(b) {
    var c = $(b).parent(".cmp_ftr_lists"),
        a = $(".faq_active").outerHeight(true) + $(".brdn.fst").outerHeight(true);
    if (!c.find(".cmp_tbl_lsts").is(":visible")) {
        $(".cmp_Table").find(".faq_active").removeClass("faq_active");
        c.addClass("faq_active");
        $(".cmp_Table").find(".close-icon").removeClass("close-icon");
        $(".cmp_tbl_lsts").slideUp();
        if (!$(".cmp_Table").hasClass("cmp_Fixed") && !c.hasClass("fst-elm")) {
            $("body,html").animate({
                scrollTop: c.offset().top - a
            }, "500")
        }
        c.find(".cmp_tbl_lsts").slideDown(200);
        c.find(".pricing-sprite").toggleClass("close-icon")
    } else {
        c.find(".cmp_tbl_lsts").slideUp(200);
        c.find(".pricing-sprite").toggleClass("close-icon")
    }
}
$(document).on("click", ".zhd-hdr", function() {
    var a = $(this).parent(".prce-ftrs-list");
    if (!a.find(".prce-ftrs-inrlst").is(":visible")) {
        $(this).closest(".prce-features-list").find(".close-icon").removeClass("close-icon");
        $(this).closest(".prce-features-list").find(".prce-ftrs-inrlst").slideUp();
        a.find(".prce-ftrs-inrlst").slideDown(200);
        a.find(".open-icon").addClass("close-icon")
    } else {
        a.find(".prce-ftrs-inrlst").slideUp(200);
        a.find(".close-icon").removeClass("close-icon")
    }
});
$(document).on("click", ".zmore-features span", function(b) {
    b.preventDefault();
    var a = $(this).closest(".product-block");
    a.find(".prce-ftrs-inrlst").slideUp();
    a.find(".close-icon").removeClass("close-icon");
    a.find(".zmore-features>span").fadeOut(0);
    if (!a.find(".prce-features-list").is(":visible")) {
        a.find(".prce-features-list").slideDown(200);
        a.find(".zmore-features-hide").fadeIn(10);
        a.closest(".zmore-features").addClass("active")
    } else {
        a.find(".prce-features-list").slideUp();
        a.find(".zmore-features-show").fadeIn(10);
        a.closest(".zmore-features").removeClass("active")
    }
});
$(document).on("click", ".scroll_top_prcng,.z-bottom-cta-menu.withCW a", function(b) {
    b.preventDefault();
    var a = $(".pricing-wrap").offset().top;
    $("html,body").stop().animate({
        scrollTop: a - 30
    }, 700)
});
$(".tab-lst").click(function() {
    $(".act-tab").removeClass("act-tab");
    $(this).addClass("act-tab");
    var a = $(this).attr("data-id");
    $(".tab-con").fadeOut(0);
    $("#" + a).fadeIn();
    $("body,html").animate({
        scrollTop: 40
    }, "500")
});
$("#lite_popup").on("click", function(a) {
    a.preventDefault();
    $(".lyte-details-popup,.cx-page-overlay").slideDown();
    $("body").css("overflow-y", "hidden")
});
$(".lyte-close-icn").on("click", function() {
    $(".lyte-details-popup,.cx-page-overlay").slideUp();
    $("body").removeAttr("style")
});
$(".cx-page-overlay").on("click", function() {
    if ($(".cx-price-popup").is(":visible")) {
        $(".cx-price-popup,.cx-page-overlay").slideUp()
    } else {
        $(".lyte-details-popup,.cx-page-overlay").slideUp()
    }
    $("body").removeAttr("style")
});
$(".cx-popup").on("click", function() {
    $(".cx-price-popup,.cx-page-overlay").slideDown();
    $("body").css("overflow-y", "hidden")
});
$(".cx-close-icn").on("click", function() {
    $(".cx-price-popup,.cx-page-overlay").slideUp();
    $("body").removeAttr("style")
});
$(document).on("click", ".zinner-heading.zhd", function() {
    var b = $(this).parent("ul").attr("data-attr");
    if ($(this).parent("ul").hasClass("hide-elm")) {
        $(".cmp_row>ul,.slickcnt>ul").addClass("hide-elm");
        $(".cmpr-table-sec").find(".pricing-sprite").removeClass("close-icon");
        $("." + b).removeClass("hide-elm");
        $(this).parent("ul").removeClass("hide-elm").find(".zinner-heading .pricing-sprite").addClass("close-icon")
    } else {
        $("." + b).addClass("hide-elm");
        $(this).parent("ul").addClass("hide-elm").find(".pricing-sprite").removeClass("close-icon")
    }
    if ($("body").hasClass("other-lang")) {
        hgtEleUpdate()
    }
});
$(".cxhdr-main-ele").on("click", function() {
    var a = $(this).parent(".cxbox-main-con");
    if (!a.find(".cxbox-ans-con").is(":visible")) {
        $(".cxhdr-main-ele").find(".close-icon").removeClass("close-icon");
        $(".cxbox-ans-con").slideUp();
        a.find(".cxbox-ans-con").slideDown(200);
        a.find(".pricing-sprite").toggleClass("close-icon");
        $(".cxplan-deftxt1").hide();
        a.find(".cxplan-deftxt1").show();
        $(".cxplan-deftxt").show();
        a.find(".cxplan-deftxt").hide()
    } else {
        a.find(".cxbox-ans-con").slideUp(200);
        a.find(".pricing-sprite").toggleClass("close-icon");
        a.find(".cxplan-deftxt1").hide();
        a.find(".cxplan-deftxt").show()
    }
});

function hgtEleUpdate() {
    $(".table-left .cmp_row").each(function() {
        $(this).find(">ul").each(function(a) {
            $(this).find(".cmp_cell:not(.grey-heading)").each(function(b) {
                var e = $(this).outerHeight(true),
                    c = $(this).index();
                $(".cur-hgtele").removeClass("cur-hgtele");
                $(".table-left .cmp_row,.table-right .cmp_row").find(">ul:eq(" + a + ") .cmp_cell:eq(" + c + ")").addClass("cur-hgtele");
                var d = 0;
                $(".cur-hgtele").height("auto");
                $(".cur-hgtele").each(function(f) {
                    if ($(this).height() > d) {
                        d = $(this).height()
                    }
                });
                $(".cur-hgtele").height(d)
            })
        })
    })
}
if (currentUrlLang != "") {
    $(".business_sec .business_icons").attr("src", "/sites/zweb/images/crm/zpricing-brands-bg-ot.svg").attr("data-src", "/sites/zweb/images/crm/zpricing-brands-bg-ot.svg")
};