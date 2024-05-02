var $sldeInfo = $(".testi-sldeInfo");
var $slickElement = $(".testimonial_innersec_footer");
$(window).on("load", function() {
    if (currentUrlLang == "de" || currentUrlLang == "es-xl" || currentUrlLang == "fr") {
        $(".zcrm-cust-mainsec .cstmr-img-sec img, .prdcty-sec .prdcty-img-sec img, .bluegrad-sec .analytics-img img, .bluebg-sec .slide-img-sec .slds-img img").not(".zcrm-cust-mainsec .cstmr-img-sec picture img, .prdcty-sec .prdcty-img-sec picture img").each(function() {
            var a = $(this).attr("data-src").split("zcrm").join("" + currentUrlLang + "-zcrm").split(".svg").join(".png");
            $(this).attr("data-src", a)
        });
        reload_img();
        if ($(window).width() < 767) {
            $(".customer-main-rlsec .cstmr-img-sec source, .prdcty-sec .prdcty-img-sec source").each(function() {
                var a = $(this).attr("data-srcset").split("zcrm").join("" + currentUrlLang + "-zcrm");
                $(this).attr("data-srcset", a)
            });
            reloadmob_img()
        }
    }
});

function reload_img() {
    $(".zcrm-cust-mainsec .cstmr-img-sec img, .prdcty-sec .prdcty-img-sec img, .bluegrad-sec .analytics-img img, .bluebg-sec .slide-img-sec .slds-img img").not(".zcrm-cust-mainsec .cstmr-img-sec picture img, .prdcty-sec .prdcty-img-sec picture img").each(function() {
        var a = $(this).attr("data-src");
        $(this).attr("src", a)
    })
}

function reloadmob_img() {
    $(".customer-main-rlsec .cstmr-img-sec source, .prdcty-sec .prdcty-img-sec source").each(function() {
        var a = $(this).attr("data-srcset");
        $(this).attr("srcset", a)
    })
}
var winWdthEle, tstmnl_detailSecHgt, tsti_hgt, leftSldrConWidt, leftConElCount;
$(window).on("resize", function() {
    if (winWdthEle > 1024) {
        $(".trust-para").css({
            bottom: Math.ceil($(".cust-lgocnt").outerHeight(true) - ($(".trust-para").outerHeight(true) / 2)),
            top: "unset"
        })
    } else {
        $(".trust-para").css("top", "-" + Math.ceil($(".trust-para").outerHeight(true)) + "px")
    }
});
$(document).ready(function() {
    winWdthEle = $(window).width();
    langDropDown();
    if (!$("body").hasClass("other-lang")) {
        // $(".ztopstrip-container").html('<div class="zcrm-topstrip"><p class="zcrm-banner-strip">Get the 2023 GartnerÂ® Magic Quadrantâ„¢ for Sales Force Automation Platforms <a class="zcrm-learnmore" href="/crm/gartner-sfa-mq-2023.html?source_from=crm_header" target="_blank" rel="noopener">Report<span></span></a></p><span class="zwf_close_icn">X</span></div>').show()
    }
    if ($(".actSldr2").outerHeight() > $(".actSldr1").outerHeight()) {
        tsti_hgt = $(".actSldr2").outerHeight()
    } else {
        tsti_hgt = $(".actSldr1").outerHeight()
    }
    tstmnl_detailSecHgt = $(".testimonial-detail-con.con2").outerHeight();
    leftSldrConWidt = $(".slder-left-con").outerWidth();
    leftConElCount = $(".tst-top-txt").length;
    if (winWdthEle > 1024) {
        $(".trust-para").css({
            bottom: Math.ceil($(".cust-lgocnt").outerHeight(true) - ($(".trust-para").outerHeight(true) / 2)),
            top: "unset"
        })
    }
    if (winWdthEle <= 1024) {
        $(".trust-para").css("top", "-" + Math.ceil($(".trust-para").outerHeight(true)) + "px");
        $(".slds-img").removeAttr("onclick");
        $(".slide-img-sec>div").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 4000,
            dots: true
        });
        zcp_lazy()
    }
    if (winWdthEle <= 992) {
        $(".max-img2").remove();
        $(".max-img1.lst").insertAfter($(".max-img3"))
    }
    if (winWdthEle <= 767) {
        $(".max-img,.max-img3").remove();
        $(".cstmr-img-sec").html('<picture><source class="webp" data-srcset="/sites/zweb/images/crm/zcrm-multichnl-mob.webp" type="image/webp"><img src="/sites/zweb/images/crm/zcrm-workflow_mobile_easy.png" data-src="/sites/zweb/images/crm/zcrm-multichnl-mob.png" class="zcp_lazy zcp_loading" width="410" height="378" alt="Happy customers"></picture>');
        $(".prdcty-img-sec").html('<picture><source class="webp" data-srcset="/sites/zweb/images/crm/zcrm-workflow-mob.webp" type="image/webp"><img src="/sites/zweb/images/crm/zcrm-workflow_mob.png" data-src="/sites/zweb/images/crm/zcrm-workflow-mob.jpg" class="zcp_lazy zcp_loading" width="410" height="449" alt="Happy teams"></picture>');
        zcp_lazy();
        setTimeout(function() {
            $(".analytics-img").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 4000,
                dots: true,
                adaptiveHeight: true
            });
            zcp_lazy()
        }, 600)
    }
    $(".tst-top-txt").css("width", leftSldrConWidt);
    $(".sldr-left-con-inner").css("width", leftSldrConWidt * leftConElCount);
    $(".tst-top-txt").css("height", tsti_hgt + 50);
    $(".sldr-right-con").css("height", tstmnl_detailSecHgt + 100);
    if (winWdthEle <= 1024) {
        $(".vdo-txts").insertAfter($(".vdo-para"));
        if ($(".sldr-right-con .testimonial-detail-con").length > 1) {
            $(".sldr-right-con").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 8500,
                dots: true
            })
        }
    }
    if ($(body).hasClass("i18n-en-in") || $(body).hasClass("i18n-en-au") || $(body).hasClass("i18n-en")) {
        $slickElement.on("init reInit afterChange", function(c, a, e, d) {
            var b = (e ? e : 0) + 1;
            $sldeInfo.html('<span class="curnt-slde">' + b + '</span><span class="total-slde">/' + a.slideCount + "</span>")
        });
        $slickElement.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            infinite: true,
            dots: false,
            autoplaySpeed: 8500,
            adaptiveHeight: true
        });
        $slickElement.append($sldeInfo)
    }
    if (CountryCode == "SG") {
        $(".sg-cover").addClass("sg-act")
    }
});
window.onload = function() {
    langDropDown()
};

function langDropDown() {
    var a = setInterval(function() {
        if ($(".zgh-localization").hasClass("init")) {
            if ($("body").hasClass("i18n-en-in") || $("body").hasClass("i18n-en-au")) {
                $(".zgh-localBox ul,.zlang-container-inner ul").html("");
                var b = '<li><a href="/crm/index.html?zredirect=f">English (Global)</a></li><li><a data-lang="es-xl" href="/es-xl/crm/">EspaÃ±ol</a></li><li><a data-lang="pt-br" href="/pt-br/crm/">PortuguÃªs (Brasil)</a></li><li><a data-lang="de" href="/de/crm/">Deutsch</a></li><li><a data-lang="fr" href="/fr/crm/">FranÃ§ais</a></li><li><a data-lang="nl" href="/nl/crm/">Nederlands</a></li><li><a data-lang="ar" href="/ar/crm/">Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©</a></li><li><a data-lang="id"  href="/id/crm/">Bahasa Indonesia</a></li><li><a data-lang="th" href="/th/crm/">à¸ à¸²à¸©à¸²à¹„à¸—à¸¢</a></li><li><a data-lang="vi" href="https:/vi/crm/">Tiáº¿ng Viá»‡t</a></li><li><a target="_blank" rel="noopenner" data-lang="zh-hans" href="">ç®€ä½“ä¸­æ–‡</a></li><li><a data-lang="jp" href="https:/jp/crm/">æ—¥æœ¬èªž</a></li><li><a data-lang="he" href="https:/he/crm/">×¢×‘×¨×™×ª</a></li>';
                $(".zgh-localBox ul,.zlang-container-inner ul").append(b);
                $(".zgh-localSelect").html("English")
            }
            clearInterval(a)
        }
    }, 10)
}
var flagChk = true;
$(window).scroll(function() {
    var b = $(this).scrollTop(),
        c = $(window).outerHeight(),
        a = b + c;
    var d = $(".slide-img-sec").offset().top - 200;
    if (!$(".product-header-top").hasClass("slide") && winWdthEle > 1140) {
        $(".zwf_success_alert").fadeOut(350)
    }
    if (winWdthEle > 992) {
        if (b > d && !$('.slds-img[data-sld="0"]').hasClass("act-sld") && flagChk) {
            $(".act-sld").removeClass("act-sld");
            if ($("body").hasClass("i18n-ar") || $("body").hasClass("i18n-he")) {
                $(".slide-imgs").css("margin-right", "-90%")
            } else {
                $(".slide-imgs").css("margin-left", "-90%")
            }
            $('.slds-img[data-sld="0"]').addClass("act-sld");
            flagChk = false
        }
    }
    $(".anim-con").each(function() {
        var e = $(this).offset().top + 180;
        if (a > e) {
            $(this).find(".anim-init").each(function(f) {
                f = f + 1;
                var h = (f - 1) * 280;
                var g = this;
                setTimeout(function() {
                    $(g).closest(".anim-con").find(".anim" + f).removeClass("anim-elem")
                }, h)
            })
        }
    })
});

function sld_clk(a) {
    var b = parseInt($(a).attr("data-sld"));
    $(".act-sld").removeClass("act-sld");
    if (b == 0) {
        if ($("body").hasClass("i18n-ar") || $("body").hasClass("i18n-he")) {
            $(".slide-imgs").css("margin-right", "0")
        } else {
            $(".slide-imgs").css("margin-left", "0")
        }
        $('.slds-img[data-sld="1"]').addClass("act-sld")
    } else {
        if ($("body").hasClass("i18n-ar") || $("body").hasClass("i18n-he")) {
            $(".slide-imgs").css("margin-right", "-90%")
        } else {
            $(".slide-imgs").css("margin-left", "-90%")
        }
        $('.slds-img[data-sld="0"]').addClass("act-sld")
    }
}

function DotClk(d) {
    var c = $(d).attr("data-id"),
        e = $(".testimonial-detail-con").length,
        b = "con" + e;
    $(d).closest(".dot-con").find(".active").removeClass("active");
    $(d).addClass("active");
    $(".left-arrow,.right-arrow").addClass("arrow-active");
    var a = $(d).index();
    if ($("body").hasClass("i18n-ar") || $("body").hasClass("i18n-he")) {
        $(".sldr-left-con-inner").css("margin-right", -(a * leftSldrConWidt))
    } else {
        $(".sldr-left-con-inner").css("margin-left", -(a * leftSldrConWidt))
    }
    setTimeout(function() {
        $(".testimonial-detail-con").fadeOut(0);
        $(d).closest(".testimonial-sldr-con").find(".testimonial-detail-con." + c).fadeIn(400)
    }, 400);
    if (c == "con1") {
        $(".left-arrow").removeClass("arrow-active")
    } else {
        if (c == b) {
            $(".right-arrow").removeClass("arrow-active")
        }
    }
}

function next_sld() {
    $(".testimonial-sldr-con").find(".sldr-dots.active").next().trigger("click")
}

function prev_sld() {
    $(".testimonial-sldr-con").find(".sldr-dots.active").prev().trigger("click")
}
$(document).ready(function() {
    if (currentUrlLang == "th") {
        var a = '<div class="vdo-cntnt-sec"><div class="crmvdoc-sec"><img src="/sites/zweb/images/crm/crm-minor-hotel.png" class="minor-hotel"/></span><p class="vdo-para">Minor Hotels à¹€à¸ˆà¹‰à¸²à¸‚à¸­à¸‡à¸à¸¥à¸¸à¹ˆà¸¡à¹‚à¸£à¸‡à¹à¸£à¸¡à¸£à¸°à¸”à¸±à¸šà¸ªà¸²à¸à¸¥ à¹€à¸¥à¸·à¸­à¸à¹ƒà¸Šà¹‰ Zoho CRM à¹ƒà¸™à¸à¸²à¸£à¸”à¸³à¹€à¸™à¸´à¸™à¸‡à¸²à¸™à¸”à¹‰à¸²à¸™à¸à¸²à¸£à¸‚à¸²à¸¢</p></div><div class="crmvdo-sec vimvideo" data-video="https://player.vimeo.com/video/852978790?autopause=1&amp;dnt=1&amp;autoplay=1"><p class="video-play-button"><span class="pause-icon"></span></p><picture><source class="webp" data-srcset="/sites/zweb/images/crm/crm-olga.webp" type="image/webp"><source class="other_format" data-srcset="/sites/zweb/images/crm/crm-olga.jpg" type="image/jpeg"> <img src="/sites/zweb/images/crm/crm-olga.jpg" data-src="/sites/zweb/images/crm/crm-olga.jpg" class="vdo-imgsec zcp_lazy zcp_loading" width="500" height="298" alt="à¸¥à¸¹à¸à¸„à¹‰à¸² Zoho CRM - à¸£à¸²à¸‡à¸§à¸±à¸¥à¹à¸¥à¸°à¸„à¸³à¸•à¸´à¸Šà¸¡"></picture></div></div>';
        $(".vdo-cntnt-sec").replaceWith(a)
    }
});