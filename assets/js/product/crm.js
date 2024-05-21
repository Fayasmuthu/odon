var serviceURL, langChange = "",
    serviceNAME = "ZohoCRM",
    loginserviceNAME = "ZohoCRM",
    parameterChk = "",
    zcrm_loggedin = false,
    presentUrl = window.location.href,
    callbackParam = "",
    mbleInputFld = "",
    crmLoginurl = "https://www." + ZUrlDomain + ".com" + langsrc + "crm/signup.html",
    winHt = $(window).outerHeight(),
    zcrm_menuFlag = false,
    menuTimer = "",
    vertical_param = "",
    cxSrcAttr = "",
    cxHiddenFld = "",
    cxSrceAttr = "",
    cmnSrcAttr = "",
    cxsrcAttrMenu = "",
    cxsrcAttrMenu1 = "",
    cxsrcAttrparam = "";
crmServiceUrl = "https://crm." + Zdomain + "." + dcdomainOne + "/crm/ShowHomePage.do?" + customvar.refval();
if ((presentUrl.indexOf("/crm/cx-platform/") > -1) || presentUrl.indexOf("srcPlan=NewCRM") > -1 || $("body").find(".ncrm-btn").length > 0) {
    var cxParam = "organic";
    if (getParameterByName("cxsrc_param")) {
        cxParam = getParameterByName("cxsrc_param");
        cxsrcAttrMenu = "&cxsrc_param=" + cxParam;
        cxsrcAttrMenu1 = "?cxsrc_param=" + cxParam;
        cxSrcAttr = "&x_signUpSource=" + cxParam;
        cxSrcAttr = encodeURIComponent(cxSrcAttr);
        cxSrceAttr = "&source_from=" + cxParam;
        cmnSrcAttr = "?srcPlan=NewCRM&source_from=" + cxParam
    } else {
        if ($(".act-btn.cta-btn").attr("href") != undefined) {
            cxParam = $(".act-btn.cta-btn").attr("href").split("source_from=")[1];
            if (cxParam != undefined) {
                cxParam = cxParam.split("&")[0];
                cxSrcAttr = "&x_signUpSource=" + cxParam;
                cxSrcAttr = encodeURIComponent(cxSrcAttr);
                cxSrceAttr = "&source_from=" + cxParam;
                cmnSrcAttr = "?srcPlan=NewCRM&source_from=" + cxParam
            }
        } else {
            if ($("a[href*='/crm/cx-platform/signup.html']").attr("href") != undefined) {
                cxParam = $("a[href*='/crm/cx-platform/signup.html']").attr("href").split("source_from=")[1]
            } else {
                cxParam = getParameterByName("source_from")
            }
            cmnSrcAttr = "?srcPlan=NewCRM&source_from=" + cxParam;
            cxSrceAttr = "&source_from=" + cxParam
        }
    }
    loginserviceNAME = "NewCRM";
    crmLoginurl = "https://www." + ZUrlDomain + ".com" + langsrc + "crm/cx-platform/signup.html?source_from=" + cxParam, parameterChk = "cx-platform/";
    crmServiceUrl = "https://zcrm." + Zdomain + "." + dcdomainOne + "/index.do?" + customvar.refval() + cxSrcAttr;
    if (cxParam != undefined) {
        cxHiddenFld = '<input type="hidden" name="x_signUpSource" value="' + encodeURIComponent(cxParam) + '">'
    }
    if (ZUrlDomain == _lz) {
        crmServiceUrl = "https://newcrmplus." + Zdomain + "." + dcdomainOne + "/index.do?" + customvar.refval() + cxSrcAttr
    }
}
if (presentUrl.indexOf("/real-estate-test/") > -1) {
    parameterChk = "real-estate-test/";
    crmLoginurl = "https://www." + ZUrlDomain + ".com" + langsrc + "crm/" + parameterChk + "signup.html";
    vertical_param = "%26isTemplateSignup=true"
}
if ($(".zgh-accounts").length > 0) {
    $(".zgh-login").attr("href", "https://accounts." + Zdomain + "." + dcdomainOne + "/signin?" + customvar.clang + "servicename=" + loginserviceNAME + "&signupurl=" + crmLoginurl + "&serviceurl=" + encodeURIComponent(crmServiceUrl));
    $(".zgh-signup").attr("href", langsrc + "crm/" + parameterChk + "signup.html" + cmnSrcAttr)
}
customvar.nonlogged = function() {
    customvar.dynamicLinks({
        href: {
            ".zgh-login, .zlogin-apps": "https://accounts." + Zdomain + "." + dcdomainOne + "/signin?" + customvar.clang + "servicename=" + loginserviceNAME + "&signupurl=" + crmLoginurl + "&serviceurl=" + encodeURIComponent(crmServiceUrl + vertical_param),
            ".zgh-signup": langsrc + "crm/" + parameterChk + "signup.html" + cmnSrcAttr
        }
    });
    setSignupSrc()
};
var crm_instance = getParameterByName("local_instance");
customvar.logged = function() {
    if (getParameterByName("local_instance") != "" && getParameterByName("local_instance") != null && ZUrlDomain != "zoho") {
        crmServiceUrl = "https://crm." + Zdomain + "." + dcdomainOne + "/crm/tab/Home/begin?" + customvar.refval()
    } else {
        crmServiceUrl = "https://crm." + Zdomain + "." + dcdomainOne + "/crm/ShowHomePage.do?" + customvar.refval()
    }
    if (presentUrl.indexOf("/crm/zohocrm-pricing.html") > -1) {
        $(".ncrm-acsbtn").attr("href", "https://zcrm." + Zdomain + "." + dcdomainOne + "/index.do?" + customvar.refval() + encodeURIComponent("&x_signUpSource=crmpricing"));
        $(".crmplus-acsbtn").attr("href", "https://crmplus." + Zdomain + "." + dcdomainOne + "/index.do?" + customvar.refval())
    }
    if ((presentUrl.indexOf("/crm/cx-platform/") > -1) || presentUrl.indexOf("srcPlan=NewCRM") > -1 || $("body").find(".ncrm-btn").length > 0) {
        loginserviceNAME = "NewCRM";
        crmServiceUrl = "https://zcrm." + Zdomain + "." + dcdomainOne + "/index.do?" + customvar.refval() + cxSrcAttr;
        if (ZUrlDomain == _lz) {
            crmServiceUrl = "https://newcrmplus." + Zdomain + "." + dcdomainOne + "/index.do?" + customvar.refval() + cxSrcAttr
        }
    }
    customvar.dynamicLinks({
        href: {
            ".act-btn.cta-btn, .zgh-userAccess a, .trynow-plan, .loggedin, .access-apps": crmServiceUrl + vertical_param,
            ".zgh-userLogout a": "https://accounts." + Zdomain + "." + dcdomainOne + "/logout?serviceurl=" + encodeURI(presentUrl) + "&servicename=" + loginserviceNAME
        },
        html: {
            ".act-btn.cta-btn, .zgh-userAccess a, .trynow-plan, .loggedin, .access-apps": Drupal.t("Access Zoho") + " CRM"
        }
    })
};
customvar.supportId = function() {
    if (currentUrlLang == "pt-br") {
        return "vendas@zohocorp.com"
    } else {
        return "sales@zohocorp.com"
    }
};
var mobileSMjson = '{"Features":"crm/features.html", "Pricing":"crm/zohocrm-pricing.html", "Customers":"crm/customers/"}',
    url_src = "";
jQuery(document).ready(function() {
    setTimeout(function() {
        if (document.URL.indexOf("crm/enterprise/") > 0) {
            $(".zmenu-features").remove();
            $(".leaf.last").addClass("enterprise-last-leaf");
            $(".product-title a").attr("href", "/crm/enterprise/")
        }
    }, 1500);
    if (langsrc == "/") {
        setSlidingMenuMobile()
    }
});
if (document.URL.indexOf("crm/developer/") > 0) {
    $(".node-type-product-help-2-0-content-section .main-container-wrapper .product-nav-links .menu>li:nth-child(-n+5), .node-type-product-help-2-0-content-section .main-container-wrapper #mini-panel-product_menu .product-nav-links .menu>li:nth-child(-n+5)").css("display", "block")
}
jQuery(document).ready(function() {
    if (dcdomainOne == "com") {
        var e = document.createElement("script");
        e.className = "crminfoload";
        e.src = "https://accounts.zoho.com/u/info";
        document.getElementsByTagName("head")[0].appendChild(e);
        $(e).on("load", function() {
            if (typeof zohouser != "undefined") {
                if (typeof zohouser.DC_INFO != "undefined") {
                    zcrm_loggedin = true;
                    $("script.crminfoload").remove()
                }
            }
        })
    }
    if (location.href.indexOf("plan=free") > 0) {
        $(".signup-form h3").html(getStartednowTranslt)
    }
    if (jQuery(".popup-control").length > 0) {
        b();
        var d = document.createElement("script");
        d.src = "https://www.zoho.com/js/jquery.fitvids.js";
        document.getElementsByTagName("head")[0].appendChild(d)
    }

    function a(g, f) {
        if ($(window).width() < 767 && $(window).width() > 501) {
            $("#" + g).find("img").attr("src", f).css("max-width", 450)
        } else {
            if ($(window).width() < 500) {
                $("#" + g).find("img").attr("src", f).css("max-width", "100%");
                $(".zoholics-banner").css("width", "100%")
            }
        }
    }

    function c() {
        setTimeout(function() {
            jQuery(".z-pouup-wrap").fadeOut(function() {
                var f = jQuery(this).find(".z-popup-content-inner .popup-data").detach();
                f.find(".video-vendor").remove();
                jQuery(".z-pouup-wrap").removeClass("z-video-wrap")
            });
            jQuery("html").css("overflow", "auto")
        }, 100)
    }

    function b() {
        if (jQuery(".popup-control").length > 0) {
            jQuery("body").append('<div class="z-pouup-wrap"><div class="z-pouup-wrap-inner"><div class="z-popup-content-wrap"><div class="z-popup-content animated fadeInDown"><div class="z-popup-content-inner"><a href="#" class="z-popup-close">&nbsp;</a></div></div></div></div><div class="z-popup-overlay"></div></div>')
        }
        jQuery(document).on("click", ".popup-control", function(g) {
            g.preventDefault();
            var h = jQuery(this).attr("href");
            jQuery(".z-popup-content-inner").removeClass("video-wrap");
            if ((typeof h !== "undefined") && (Number(h.indexOf("#")) > -1)) {
                h = h.split("#");
                var f = jQuery("#" + h[1]).clone();
                jQuery(".z-popup-content-inner").append(f)
            } else {
                jQuery(".z-popup-content-inner").append('<div class="popup-data"><div class="video-vendor"><iframe width="490" height="290" src="' + h + '?rel=0&autoplay=1&showinfo=0&autohide=1" frameborder="0" allowfullscreen></iframe></div></div>').addClass("video-wrap");
                jQuery(".z-pouup-wrap").addClass("z-video-wrap")
            }
            jQuery(".z-popup-content-inner").fitVids();
            jQuery(".z-pouup-wrap").fadeIn(300);
            jQuery("html").css("overflow", "hidden");
            jQuery(window).trigger("z-popup-open")
        });
        jQuery(document).on("click", ".z-popup-close, .z-popup-overlay", function(f) {
            f.preventDefault();
            c()
        });
        jQuery(document).on("mouseup", ".z-pouup-wrap", function(f) {
            f.preventDefault();
            c()
        });
        jQuery(document).on("mouseup", ".z-popup-content", function() {
            return false
        });
        jQuery(document).keyup(function(f) {
            if (f.keyCode === 27 && jQuery(".z-pouup-wrap").is(":visible")) {
                jQuery(".z-popup-close").trigger("click")
            }
        })
    }
});
var currentURL = encodeURI(window.location.href);
var headerLinks = '<a href="/crm/cx-platform/features/?source_from=cx-header&srcPlan=NewCRM' + cxsrcAttrMenu + '" data-zcqa="cmn-ftrs-tab">Features<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="/crm/cx-platform/features/sales.html?source_from=cx-header&srcPlan=NewCRM' + cxsrcAttrMenu + '"> Sales </a></li><li><a href="/crm/cx-platform/features/service.html?source_from=cx-header&srcPlan=NewCRM' + cxsrcAttrMenu + '"> Service </a></li><li><a href="/crm/cx-platform/features/marketing.html?source_from=cx-header&srcPlan=NewCRM' + cxsrcAttrMenu + '"> Marketing </a></li><li><a href="/crm/cx-platform/features/?source_from=cx-header&srcPlan=NewCRM' + cxsrcAttrMenu + '">See all features </a></li></ul>';
jQuery(document).ready(function() {
    if ($(".hub-cmn-sprit").hasClass("hub-bakicn")) {
        $(".hub-bakicn").remove()
    }
    var c = '<div class="crm-hub-ctasec bottom-promo"><div class="btm-cta-inner"><div class="btm-cta-img-con"><picture><source class="webp" data-srcset="/sites/zweb/images/crm/zcrm_signup_promo.webp 2x, /sites/zweb/images/crm/zcrm_signup_promo_1x.webp 1x" type="image/webp"><source class="other_format" data-srcset="/sites/zweb/images/crm/zcrm_signup_promo.png 2x" type="image/jpeg"><img class="zcp_lazy zcp_loading" src="/sites/zweb/images/crm/zcrm_signup_promo_lazy.png" data-src="/sites/zweb/images/crm/zcrm_signup_promo_1x.png" alt="Sign up for CRM software | Zoho CRM" width="457" height="244"></picture></div><div class="btm-cta-txt-con"><h3>' + Drupal.t("Improved Sales.") + ' <span class="inner_wrap">' + Drupal.t("Lasting Relationships.") + '</span><span class="inner_wrap">' + Drupal.t("Faster Growth.") + '</span></h3><p class="btm-cta-para">' + Drupal.t("15-day free trial. No credit card required.") + '</p><a class="crm-hub-sinup zcrm-pricingtoggle " href="' + langsrc + 'crm/signup.html?plan=enterprise&source_from=btm_promo">' + Drupal.t("Sign Up For Free") + '</a><a class="crm-hub-sinup crm-hub-plansbtn " href="' + langsrc + 'crm/zohocrm-pricing.html?source_from=btm_promo">' + Drupal.t("SEE PLANS AND PRICING") + "</a></div></div></div>";
    priBanner = '<a href="https://blog.zoho.com/crm/quarter-1-2024-update.html?source_from=ftbanner" target="_blank"  rel="noopener"><picture><source class="webp" data-srcset="/sites/zweb/images/crm/footer_q4-2x.webp 2x, /sites/zweb/images/crm/footer_q4-1x.webp 1x" type="image/webp"><source class="other_format" type="image/jpeg" data-srcset="/sites/zweb/images/crm/footer_q4-2x.jpg 2x"><img alt="Whats-new-in-zoho-crm-2023" src="/sites/zweb/images/crm/footer_q4-lazy.jpg" data-src="/sites/zweb/images/crm/footer_q4-1x.jpg" width="350" height="210" class="zcp_lazy zcp_loading"></picture></a>';
    priBannerInner = '<a href="https://www.zoho.com/crm/webinars/?source_from=ftbanner" id="footer_sec_img"><picture><source class="webp" data-srcset="/sites/zweb/images/crm/images/crm-webinar-footer-2x.webp 2x, /sites/zweb/images/crm/images/crm-webinar-footer-1x.webp 1x" type="image/webp"><source class="other_format" type="image/jpeg" data-srcset="/sites/zweb/images/crm/images/crm-webinar-footer-2x.jpg 2x"><img alt="zoho-crm-live-webinars-2023-footer" src="/sites/zweb/images/crm/images/crm-webinar-footer-1kb.jpg" data-src="/sites/zweb/images/crm/images/crm-webinar-footer-1x.jpg" width="350px" height="210px" class="zcp_lazy zcp_loading"></picture></a>';
    secfooterBnr = "";
    if (CountryCode == "AU") {
        secfooterBnr = '<div class="zau-location"><h5>Australia Office </h5><p class="zau-address">Suite 4.04, Level 4,<br>30 Currie Street, <br>Adelaide SA 5000</p><p class="zau-toll-free zau-title">Interested in learning more about our product?</p><p class="zau-toll-free">We are just a phone call away. <span>Call us at <a href="tel:+61280662898">+61 280662898</a> (Toll-free)</span></p></div>'
    } else {
        secfooterBnr = ""
    }
    var f;
    f = '<div class="promo-section-wrap"> ' + priBannerInner + priBanner + secfooterBnr + "</div>";
    var e = "";
    var b = "https://forums.zoho.com/zoho-crm";
    var a = "https://www.zoho.com/crm/consultants/?source_from=ft";
    targetBlank = "";
    if (encodeURI(document.location).indexOf("/jp/") > 0) {
        targetBlank = 'target="blank"';
        b = "http://zjcrew.zohosites.com/";
        a = "https://www.zoho.com/jp/partner/"
    }
    if ((presentUrl.indexOf("srcPlan=NewCRM") == -1) && (presentUrl.indexOf("/crm/cx-platform/") == -1 && $("body").find(".ncrm-btn").length <= 0)) {
        e = '<div class="product-links three-column"><div class="product-about-box"><div class="features_box"><h4>' + Drupal.t("EXPLORE CRM") + '</h4><ul><li class="en-only"><a href="' + langsrc + 'crm/crm-essentials.html?source_from=crm-ft">' + Drupal.t("CRM Essentials") + '</a></li><li class="en-only"><a href="' + langsrc + 'crm/alternatives/?source_from=crm-ft">' + Drupal.t("CRM Alternatives") + '</a></li><li><a href="' + langsrc + 'crm/free-crm.html?source_from=crm-ft">' + Drupal.t("CRM for Free") + '</a></li><li><a href="' + langsrc + 'bigin/?source_from=crm-ft" target="_blank"  rel="noopener">' + Drupal.t("CRM for SMB") + '</a></li><li class="en-only"><a href="' + langsrc + 'crm/sales-pitch.html?source_from=crm-ft">' + Drupal.t("Sales Pitch") + '</a></li><li class="en-only"><a href="/crm/sales-funnel.html?source_from=crm-ft">' + Drupal.t("Sales Funnel") + '</a></li><li class="en-only"><a href="/crm/what-are-sales-pipelines.html?source_from=crm-ft">' + Drupal.t("Sales Pipeline") + '</a></li><li><a href="/crm/zoho-crm-for-google-workspace.html?source_from=crm-ft" >' + Drupal.t("Google Workspace CRM") + '</a></li><li><a href="' + langsrc + 'crm/social-crm.html?source_from=crm-ft&cxsrc_param=social-crm">' + Drupal.t("Social CRM") + '</a></li><li><a href="' + langsrc + 'crm/help-desk-crm.html?source_from=crm-ft&cxsrc_param=help-desk-crm">' + Drupal.t("Help Desk CRM") + '</a></li><li><a href="' + langsrc + 'crm/sales-assistant.html?source_from=crm-ft">' + Drupal.t("AI-Powered CRM") + '</a></li><li><a href="' + langsrc + 'crm/email-marketing-crm.html?source_from=crm-ft&cxsrc_param=email-marketing-crm">' + Drupal.t("Email Marketing CRM") + '</a></li><li><a href="' + langsrc + 'crm/sales-management-system.html?source_from=crm-ft">' + Drupal.t("Sales Management Software") + '</a></li><li class="en-only"><a href="/crm/opportunity-management.html?source_from=crm-ft">' + Drupal.t("Opportunity Management Software") + '</a></li></ul></div></div><div class="solution-links-box"><div class="solutions_box"><h4>' + Drupal.t("RESOURCES") + '</h4><ul><li><a href="' + langsrc + 'crm/what-is-crm.html?source_from=crm-ft">' + Drupal.t("What is CRM?") + '</a></li><li class="en-only"><a href="' + langsrc + 'crm/solutions.html?source_from=crm-ft">' + Drupal.t("Solutions & Verticals") + '</a></li><li><a href="/crm/resources/?source_from=crm-ft" id="res_lang_link">' + Drupal.t("Help Center") + '</a></li><li class="guide_tour en-only"><a href="/crm/resources/guided-tour/zoho-crm-overview.html?source_from=crm-ft" data-tb="true" target="_blank">Guided Tour</a></li><li><a href="/crm/consultants/?source_from=crm-ft">' + Drupal.t("Certified Consultants") + '</a></li><li><a href="https://help.zoho.com/portal/community/zoho-crm">' + Drupal.t("Customer Forum") + '</a></li><li class="en-only"><a href="/crm/whats-new/release-notes.html?source_from=crm-ft">' + Drupal.t("Release Notes") + '</a></li><li><a href="/crm/customer-success/?source_from=crm-ft">' + Drupal.t("Training") + '</a></li><li><a href="https://www.zoho.com/crm/crm-express/?source_from=crm-ft">' + Drupal.t("CRM Express - Blog") + '</a></li><li><a href="/crm/enterprise/?source_from=crm-ft">' + Drupal.t("CRM for Enterprises") + '</a></li></ul></div></div><div class="feature-resourse-box"><div class="more_product_box"><h4>' + Drupal.t("GET STARTED") + '</h4><ul><li class="en-only"><a href="' + langsrc + 'crm/request-callback.html?source_from=crm-ft">' + Drupal.t("Request Demo") + '</a></li><li><a href="' + langsrc + 'crm/why-choose-zoho-crm.html?source_from=crm-ft">' + Drupal.t("Why Zoho CRM?") + '</a></li><li><a href="' + langsrc + 'crm/integrations.html?source_from=crm-ft">' + Drupal.t("Integrations") + '</a></li><li class="en-only"><a href="' + langsrc + 'crm/compare?source_from=crm-ft&cxsrc_param=crmcomparepage">' + Drupal.t("Compare CRMs") + '</a></li><li><a href="/crm/edition-selector-quiz-zoho-crm.html?source_from=crm-ft">' + Drupal.t("Edition Selector Quiz") + '</a></li><li><a href="' + langsrc + 'crm/comparison.html?source_from=crm-ft">' + Drupal.t("Compare Plans") + '</a></li><li class="en-only"><a href="' + langsrc + 'crm/awards.html?source_from=crm-ft">' + Drupal.t("Awards & Titles") + '</a></li><li><a href="' + langsrc + 'crm/request-quote.html?source_from=crm-ft">' + Drupal.t("Get Price Quote") + '</a></li><li><a href="/contactus.html?source_from=crm-ft">' + Drupal.t("Contact Sales") + '</a></li></ul></div><div class="social_icons"><h4 class="connect_us_title">' + Drupal.t("Connect With Us") + '</h4><div><a class="new_crm_soc_sprite soc-icon2" href="https://linkedin.com/showcase/zohocrm/"  aria-label="Zoho CRM linkedin" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon1" href="https://twitter.com/zohocrm" aria-label="Zoho CRM twitter" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon3" href="https://www.instagram.com/zoho_crm/" aria-label="Zoho CRM instagram" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon4" href="https://youtube.com/c/ZohoCRMofficial" aria-label="Zoho CRM Youtube" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon5" href="https://www.facebook.com/crmzoho" aria-label="Zoho CRM facebook" rel="noopener" target="_blank">&nbsp;</a></div></div></div></div><div class="brand_icons"><span class="new_crm_soc_sprite footer-brand_icon1">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon2">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon3">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon4">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon5">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon6">&nbsp;</span></div>';
        if ($(".crm-hub-brdcrmb").length > 0) {
            $(c).insertBefore(".crm-hub-brdcrmb");
            c = ""
        } else {
            if ($(".Ncrm_relateSec").length > 0) {
                $(c).insertBefore(".Ncrm_relateSec");
                c = ""
            }
        }
        var g = "<section id='block-zoho-navigation-links-product-pages-footer-links'><div class='footer-sec-wrap two-column'>" + c + "<div class='content-wrap'>" + f + "<div class='footer-links-wrap zcp_lazy_bg'>" + e + "</div></div></div></section>"
    } else {
        e = '<div class="product-links three-column"><div class="feature-resourse-box"><div class="features_box"><h4>' + Drupal.t("Features") + '</h4><ul><li><a href="' + langsrc + 'crm/cx-platform/features/sales.html?source_from=cx-ft">' + Drupal.t("Sales Force Automation") + '</a> </li><li><a href="' + langsrc + 'crm/cx-platform/features/marketing.html?source_from=cx-ft">' + Drupal.t("Marketing Automation") + '</a></li><li><a href="' + langsrc + 'crm/cx-platform/features/service.html?source_from=cx-ft">' + Drupal.t("Customer service capabilities") + '</a></li><li class = "sub-level  nodrop en-only"><a href = "' + langsrc + 'canvas/?source_from=cx-ft" > ' + Drupal.t("Canvas Design Studio") + '</a></li><li><a href="' + langsrc + 'crm/analytics.html?source_from=cx-ft">' + Drupal.t("Analytics") + '</a></li><li><a href="' + langsrc + 'crm/process-management.html?source_from=cx-ft">' + Drupal.t("Process Management") + '</a> </li><li><a href = "' + langsrc + 'crm/commandcenter/?source_from=cx-ft" > ' + Drupal.t("Journey Orchestration") + ' </a></li><li><a href="' + langsrc + 'crm/omnichannel.html?source_from=cx-ft">' + Drupal.t("Omnichannel") + '</a> </li><li><a href="' + langsrc + 'crm/zia.html?source_from=cx-ft">' + Drupal.t("Intelligent CRM") + '</a></li><li><a href="' + langsrc + 'crm/customization.html?source_from=cx-ft">' + Drupal.t("Customization") + '</a></li></ul></div></div><div class="solution-links-box"><div class="quick_links_box"><h4>' + Drupal.t("Quick Links") + '</h4><ul><li><a href="' + langsrc + 'crm/cx-platform/pricing.html?source_from=cx-ft">' + Drupal.t("Pricing") + '</a></li><li><a href="/crm/cx-platform/contact-sales.html?source_from=cx-ft">' + Drupal.t("Contact Sales") + '</a></li><li><a href="/crm/what-is-zoho-crm.html?source_from=cx-ft">' + Drupal.t("What is Zoho CRM?") + '</a></li><li><a href="/crm/why-choose-zoho-crm.html?source_from=cx-ft">' + Drupal.t("Why Zoho CRM?") + '</a></li><li><a href="/crm/customers/?source_from=cx-ft">' + Drupal.t("Case Studies") + '</a></li><li><a href="' + langsrc + 'crm/integrations.html?source_from=cx-ft">' + Drupal.t("Integrations") + '</a></li><li><a href="' + langsrc + 'crm/awards.html?source_from=cx-ft">' + Drupal.t("Zoho CRM Awards") + '</a></li></ul></div><div class="social_icons"><h4 class="connect_us_title">' + Drupal.t("Connect With Us") + '</h4><div><a class="new_crm_soc_sprite soc-icon2" href="https://linkedin.com/showcase/zohocrm/"  aria-label="Zoho CRM linkedin" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon1" href="https://twitter.com/zohocrm" aria-label="Zoho CRM twitter" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon3" href="https://www.instagram.com/zoho_crm/" aria-label="Zoho CRM instagram" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon4" href="https://youtube.com/c/ZohoCRMofficial" aria-label="Zoho CRM Youtube" rel="noopener" target="_blank">&nbsp;</a><a class="new_crm_soc_sprite soc-icon5" href="https://www.facebook.com/crmzoho" aria-label="Zoho CRM facebook" rel="noopener" target="_blank">&nbsp;</a></div></div></div></div><div class="brand_icons"><span class="new_crm_soc_sprite footer-brand_icon1">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon2">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon3">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon4">&nbsp;</span><span class="new_crm_soc_sprite footer-brand_icon5">&nbsp;</span></div>';
        var g = "<section id='block-zoho-navigation-links-product-pages-footer-links'><div class='footer-sec-wrap one-column'><div class='content-wrap'><div class='footer-links-wrap zcp_lazy_bg'>" + e + "</div></div></div></section>"
    }
    // jQuery(".zw-product-footer").append(g);
    // if ($("body").hasClass("node-tnid-27970")) {
    //     $(".partner-banner").prev().find("img").attr("alt", "Zoho CRM Overview")
    // }
    // if (!$("body").hasClass("i18n-en")) {
    //     $(".product-links.three-column .footer-quicklinks li:last-child").css("display", "none")
    // }
    $(".footer-links-wrap").addClass("zen");
    $('<span class="zfooter-toggle"></span>').insertBefore($(".zfooter-submenu-header"));
    $("body").on("click", ".zfooter-submenu-header", function() {
        if (!$(this).parent().hasClass("zactive")) {
            $(".zfooter-submenu-header").parent().removeClass("zactive");
            $(this).parent().addClass("zactive");
            $(".zfooter-submenu").slideUp(300);
            $(this).siblings(".zfooter-submenu").slideDown(300)
        } else {
            $(".zfooter-submenu-header").parent().removeClass("zactive");
            $(".zfooter-submenu").slideUp(300)
        }
    });
    if (currentUrlLang == "fr" || currentUrlLang == "de" || currentUrlLang == "pt-br" || currentUrlLang == "es-xl" || currentUrlLang == "nl" || currentUrlLang == "id" || currentUrlLang == "jp" || currentUrlLang == "th" || currentUrlLang == "ar" || currentUrlLang == "vi" || currentUrlLang == "it") {
        $(".product-links.three-column .footer-resources-box, .product-links.three-column .footer-quicklinks li").css("display", "none");
        $(".product-links.three-column .footer-quicklinks li:nth-child(1), .product-links.three-column .footer-quicklinks li:nth-child(3), .product-links.three-column .footer-quicklinks li:nth-child(12)").css("display", "block");
        $("#zdemo-req-link").css("display", "none")
    }
    if (langsrc == "/fr/") {
        $("#web_lang_link").attr("href", "/fr/crm/webinars/?source_from=ft");
        $("#res_lang_link").attr("href", "/fr/crm/resources/?source_from=ft");
        $("#resv_lang_link").attr("href", "/fr/crm/resources/videos/?source_from=ft")
    }
    if (langsrc == "/nl/") {
        $("#resv_lang_link").attr("href", "/nl/crm/resources/videos/?source_from=ft")
    }
    if (langsrc != "/") {
        $(".en-only").hide()
    }
    if (document.URL.indexOf("crm/enterprise/") < 0 && document.URL.indexOf("crm/developer/") < 0) {
        if (currentUrlLang == "fr" || currentUrlLang == "de" || currentUrlLang == "pt-br" || currentUrlLang == "es-xl") {
            if (window.innerWidth > 767) {
                $(".product-nav-links > ul.menu").append('<li class="leaf"><a href="' + langsrc + 'crm/resources/" target="_blank"  rel="noopener">' + Drupal.t("Resources") + "</a></li>");
                $(".product-nav-links > ul.menu li:last-child").prev().removeClass("last")
            } else {
                $('<li class="leaf"><a href="' + langsrc + 'crm/resources/" target="_blank"  rel="noopener">' + Drupal.t("Resources") + "</a></li>").insertBefore(".product-nav-links > ul.menu li.featured-apps-part")
            }
        }
        if (currentUrlLang == "nl" || currentUrlLang == "id" || currentUrlLang == "th" || currentUrlLang == "ar" || currentUrlLang == "vi" || currentUrlLang == "it") {
            if (window.innerWidth > 767) {
                $(".product-nav-links > ul.menu").append('<li class="leaf"><a href="/crm/resources/" target="_blank"  rel="noopener">Resources</a></li>');
                $(".product-nav-links > ul.menu li:last-child").prev().removeClass("last")
            } else {
                $('<li class="leaf"><a href="/crm/resources/" target="_blank"  rel="noopener">Resources</a></li>').insertBefore(".product-nav-links > ul.menu li.featured-apps-part")
            }
        }
    }
    if (currentUrlLang == "ar" || currentUrlLang == "he") {
        if ($(".product-nav-links .menu > li:first-child").hasClass("dropdown")) {
            $(".product-nav-links .menu > li:first-child").removeClass("expanded dropdown")
        }
    }
    // if (currentUrlLang == "id") {
    //     var d = $(".zw-product-footer .social_icons");
    //     d.find(".soc-icon2").attr("href", "https://www.linkedin.com/showcase/zohoindonesia/");
    //     d.find(".soc-icon3").attr("href", "https://www.instagram.com/zohoindonesia/");
    //     d.find(".soc-icon4").attr("href", "https://www.youtube.com/@ZohoIndonesia");
    //     d.find(".soc-icon5").attr("href", "https://www.facebook.com/ZohoIndonesia")
    // }
});
jQuery(document).ready(function() {
    jQuery(".node-type-product-help-2-0-content-section .main-container-wrapper").append('<div class="quick-connect-links-wrap"><span class="show-links-btn">&nbsp;</span><div class="quick-connect-links"><span class="hide-links-btn">&nbsp;</span><h4>' + Drupal.t("Quick Links") + '</h4><ul><li><a href="https://www.zoho.com/crm/customer-success/?source_from=quicklinks" rel="noopener"  target="_blank">' + Drupal.t("Training") + '</a></li><li><a href="/crm/resources/videos/?source_from=quicklinks" rel="noopener"  target="_blank">' + Drupal.t("Videos") + '</a></li><li><a href="/crm/resources/ebooks/?source_from=quicklinks" rel="noopener" target="_blank">' + Drupal.t("Ebooks") + '</a></li><li><a href="/crm/webinars/?source_from=quicklinks" rel="noopener" target="_blank">' + Drupal.t("Webinars") + "</a></li></ul></div></div>");
    var a = document.referrer;
    if (a == "") {
        jQuery(".quick-connect-links").show()
    } else {
        jQuery(".quick-connect-links").hide();
        jQuery(".quick-connect-links-wrap .show-links-btn").show()
    }
    $(".node-type-product-help-2-0-content-section .quick-connect-links-wrap").show()
});

function new_label() {
    if (window.location.href.indexOf("crm/webinars") > 0) {
        var a = '<span class="zwp_labelnew">New</span>';
        if ($(".zhead-menu ul li").length > 3) {
            $(".zhead-menu ul li:nth-child(4)").append(a)
        }
    }
}
$(document).ready(function() {
    $("#crm_users_cnt").html(customvar.numberOfUsers);
    $("#zcrm_integrations_cnt").html("800");
    new_label();
    if ((presentUrl.indexOf("srcPlan=NewCRM") > -1 || presentUrl.indexOf("/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) && presentUrl.indexOf("/crm/zohocrm-pricing.html") == -1) {
        mbleInputFld = '<input type="hidden" name="x_contactnumber" value="">';
        $("body").addClass("ncrm-page");
        callbackParam = "&srcPlan=NewCRM";
        menuTimer = setInterval(function() {
            if ($(".zmenu-solutions,.zmenu-customers,.zmenu-resources").length > 0) {
                $(".zmenu-solutions,.zmenu-customers,.zmenu-resources,.zmenu-bulletin,.zmenu-contactus").remove();
                $(".zmenu-features").html(headerLinks);
                $(".zmenu-pricing a").attr("href", "/crm/cx-platform/pricing.html?srcPlan=NewCRM" + cxsrcAttrMenu);
                $(".product-nav-links-new>ul").append('<li class="leaf zmenu-contactus"><a href="/crm/cx-platform/contact-sales.html?srcPlan=NewCRM' + cxsrcAttrMenu + '">Contact Us</a></li>').addClass("zmenu-contactus");
                clearInterval(menuTimer)
            }
        }, 600);
        setTimeout(function() {
            cxSignupLnkUpdate();
            urlNewCRMParam();
            $("body").find(".btm-promo-signup,.crm-hub-sinup.act-btn,.loggedout").attr("href", "/crm/cx-platform/signup.html?srcPlan=NewCRM" + cxSrceAttr);
            $("body.body-umain").find(".btm-promo-signup,.crm-hub-sinup.act-btn,.loggedin, .zgh-userAccess a,.access-apps,.trynow-plan,.ncrm-btn").attr("href", crmServiceUrl);
            if (cxsrcAttrMenu1 != "") {
                $(".product-title a,.menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cxsrcAttrMenu1 + cxSrceAttr)
            } else {
                $(".product-title a,.menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cmnSrcAttr)
            }
            if ($("body").attr("data-lang-list") != undefined) {
                $(".ZF-dlsel, .zgh-localBox, .zlang-container-inner, .zgh-localization").addClass("ncrm-lang")
            }
            $(".footer-terms a").attr("href", "/crm/terms.html?srcPlan=NewCRM");
            $('a[href*="/crm/zohocrm-pricing.html"]').each(function() {
                if ($(this).attr("href").indexOf("servicename") == -1) {
                    $(this).attr("href", "/crm/cx-platform/pricing.html?srcPlan=NewCRM" + cxsrcAttrMenu)
                }
            });
            $('a[href*="features.html"]').each(function() {
                if ($(this).attr("href").indexOf("?") == -1) {
                    $(this).attr("href", "/crm/cx-platform/features/" + cxsrcAttrMenu1)
                } else {
                    var b = $(this).attr("href").split("?");
                    if (b[1].indexOf("cxsrc_param") == -1) {
                        $(this).attr("href", "/crm/cx-platform/features/?" + b[1] + cxsrcAttrMenu)
                    } else {
                        $(this).attr("href", "/crm/cx-platform/features/?" + b[1])
                    }
                }
            })
        }, 1200)
    }
    if (presentUrl.indexOf("srcPlan=NewCRM") > -1 || presentUrl.indexOf("/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) {
        setTimeout(function() {
            if (cxsrcAttrMenu1 != "") {
                $(".product-title a,.menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cxsrcAttrMenu1 + cxSrceAttr)
            } else {
                $(".product-title a,.menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cmnSrcAttr)
            }
        }, 2000)
    }
    a();

    function a() {
        if (typeof zohouser != "undefined") {
            var b = zohouser.DISPLAY_NAME;
            if (b) {
                jQuery(".footer-sec-wrap .bottom-promo .ct-action-btn").html("Access Zoho CRM");
                jQuery(".footer-sec-wrap .bottom-promo .ct-action-btn").attr("href", "https://crm.zoho.com/")
            }
        }
    }
});

function cxSignupLnkUpdate() {
    $(".cta-btn").each(function() {
        if ($(this).attr("href") != undefined) {
            if ($(this).attr("href").indexOf("?") == -1) {
                $(this).attr("href", "/crm/cx-platform/signup.html" + cmnSrcAttr)
            } else {
                var a = $(this).attr("href").split("?");
                if (a[1].indexOf("cxsrc_param") == -1) {
                    $(this).attr("href", "/crm/cx-platform/signup.html?" + a[1] + cxsrcAttrMenu)
                } else {
                    $(this).attr("href", "/crm/cx-platform/signup.html?" + a[1])
                }
            }
        }
    })
}
$(document).on("keyup", "#mobile", function() {
    var b = $(this).val();
    $("input[name=x_contactnumber]").val(b)
});

function setSignupSrc() {
    var b = window.location.pathname,
        c = "";
    if (b.substring(b.lastIndexOf("/") + 1) != "" && b.substring(b.lastIndexOf("/") + 1) != "index.html") {
        var a = b.substring(b.lastIndexOf("/") + 1);
        url_src = a.split(".")[0]
    } else {
        var d = b.split("/");
        url_src = d[d.length - 2] + "-home"
    }
    if (presentUrl.indexOf("srcPlan=NewCRM") > -1 || presentUrl.indexOf("/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) {
        url_src = "ncrm-" + url_src
    }
    $('a[href*="signup.html"').each(function() {
        var e = $(this).attr("href").split("?")[0];
        if ($(this).attr("data-zcqa") == "top-right-getstarted" && cxParam == undefined) {
            $(this).attr("href", $(this).attr("href") + "?source_from=" + url_src + "_top_btn")
        }
        if (e.indexOf("signup.html") > -1) {
            if ($(this).attr("href").indexOf("?") > 0) {
                if ($(this).attr("href").indexOf("source_from=") < 0) {
                    $(this).attr("href", $(this).attr("href") + "&source_from=" + url_src)
                }
                if ($(this).attr("href").indexOf("plan=") < 0 && $("#zplan-signup").length == 1) {
                    $(this).attr("href", $(this).attr("href") + "&plan=" + $("#zplan-signup").text())
                }
            } else {
                $(this).attr("href", $(this).attr("href") + "?source_from=" + url_src);
                if ($("#zplan-signup").length == 1) {
                    $(this).attr("href", $(this).attr("href") + "&plan=" + $("#zplan-signup").text())
                }
            }
        }
    })
}
window.onload = function() {
    if (countryEu.indexOf(CountryCode) > -1) {
        var a = $(".support-prd");
        a.attr("href", "mailto:support@eu.zohocrm.com");
        a.text("support@eu.zohocrm.com")
    }
    setSignupSrc();
    if (window.location.pathname == langsrc + "crm/zohocrm-pricing.html" || window.location.pathname == langsrc + "crm/comparison.html") {
        jQuery(".signing .signup, .bottom-promo").remove();
        jQuery(".zgh-accounts .zgh-signup,.bottom-promo").remove()
    }
    if (presentUrl.indexOf("srcPlan=NewCRM") > -1 || presentUrl.indexOf("/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) {
        callbackParam = "&srcPlan=NewCRM"
    }
    if ((presentUrl.indexOf("srcPlan=NewCRM") > -1) || presentUrl.indexOf("/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) {
        setTimeout(function() {
            cxSignupLnkUpdate();
            urlNewCRMParam();
            $("body").find(".zgh-signup,.btm-promo-signup,.crm-hub-sinup.act-btn,.loggedout,.ncrm-btn").attr("href", "/crm/cx-platform/signup.html?srcPlan=NewCRM" + cxSrceAttr);
            $("body.body-umain").find(".cta-btn,.zgh-signup,.btm-promo-signup,.crm-hub-sinup.act-btn,.loggedin, .zgh-userAccess a,.access-apps,.trynow-plan,.ncrm-btn").attr("href", crmServiceUrl);
            if (cxsrcAttrMenu1 != "") {
                $(".product-title a, .menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cxsrcAttrMenu1 + cxSrceAttr)
            } else {
                $(".product-title a, .menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cmnSrcAttr)
            }
            if ($("body").attr("data-lang-list") != undefined) {
                $(".ZF-dlsel, .zgh-localBox, .zlang-container-inner, .zgh-localization").addClass("ncrm-lang")
            }
            social_icons();
            $(".footer-terms a").attr("href", "/crm/terms.html?srcPlan=NewCRM");
            if (cxsrcAttrMenu1 != "") {
                $(".product-title a, .menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cxsrcAttrMenu1 + cxSrceAttr)
            } else {
                $(".product-title a, .menu-icon-help-header a").attr("href", "/crm/cx-platform/" + cmnSrcAttr)
            }
        }, 1000)
    }
};
$(window).resize(function() {
    social_icons()
});
$(window).on("orientationchange", function(a) {
    social_icons()
});

// function social_icons() {
//     if (window.innerWidth < 481) {
//         $(".zw-product-footer .social_icons").insertBefore(".zw-product-footer .brand_icons")
//     } else {
//         $(".zw-product-footer .social_icons").insertAfter(".zw-product-footer .more_product_box")
//     }
// }
var plancheck = "";

function z_get_cookie(b) {
    try {
        var f = document.cookie.split("; ");
        var a = f.length;
        for (var d = 0; d < a; d++) {
            var c = f[d].split("=");
            if (c[0] === b && c[1]) {
                return unescape(c[1])
            }
        }
    } catch (g) {}
    return null
}



function setcountryCode() {
    if (typeof CountryCode != "undefined") {
        $(".za_country_code").val(CountryCode);
        changeCountrycode()
    }
    $(".globalcountrycode-signup").on("change", function() {
        $(".za_country_code").val($(this).val());
        changeCountrycode()
    })
}

function changeCountrycode() {
    if ($(".ccodediv").length > 0) {
        $(".mobile-container .ccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"));
        $(".za-rmobile-container .ccodediv").html("+" + $("#otp_country_code option:selected").attr("dialling_code"))
    }
}

function zcrm_otpValid() {
    var a = $(".za-otp-container input").val();
    if (a.length == 7) {
        var b = $(".zc_otpVerify");
        b.val(verifyingOTP);
        b.addClass("disabled-z-signup");
        $(".resendotp, .change").addClass("disabled-z-signup")
    }
}

function fd_gClick() {
    var a = Zpage_name();
    if (a === "signup.html") {
        try {
            window.ZTMData = window.ZTMData || [];
            window.ZTMData.push({
                event: "salesiqCustomAction",
                eventCategory: "FedClick",
                eventAction: "Signup - Google Click",
                eventLabel: "CRM",
                customid: "-"
            })
        } catch (b) {}
    } else {
        try {
            window.ZTMData = window.ZTMData || [];
            window.ZTMData.push({
                event: "salesiqCustomAction",
                eventCategory: "FedClick",
                eventAction: "HomePage - Google Click",
                eventLabel: "CRM",
                customid: "-"
            })
        } catch (b) {}
    }
}

function fd_lClick() {
    var a = Zpage_name();
    if (a === "signup.html") {
        try {
            window.ZTMData = window.ZTMData || [];
            window.ZTMData.push({
                event: "salesiqCustomAction",
                eventCategory: "FedClick",
                eventAction: "Signup - LinkedIn Click",
                eventLabel: "CRM",
                customid: "-"
            })
        } catch (b) {}
    } else {
        try {
            window.ZTMData = window.ZTMData || [];
            window.ZTMData.push({
                event: "salesiqCustomAction",
                eventCategory: "FedClick",
                eventAction: "HomePage - LinkedIn Click",
                eventLabel: "CRM",
                customid: "-"
            })
        } catch (b) {}
    }
}

function Zpage_name() {
    var d, b, a, c = window.location.pathname;
    b = c.split("/");
    a = b.length;
    d = b[a - 1];
    return d
}
$(document).on("keyup", ".za-rmobile-container #rmobile", function() {
    var b = $(this).val();
    if ($("#mobile").length > 0) {
        $("#mobile").val(b)
    }
});
var phonerequire = Drupal.t("Please enter your phone number"),
    phonevalied = Drupal.t("Please enter a valid phone number"),
    maxltext = Drupal.t("The field") + " '" + Drupal.t("Full Name") + "' " + Drupal.t("cannot be longer than 100 characters"),
    companyrequire = Drupal.t("Please enter your company name"),
    usersrequire = Drupal.t("Please enter the number of employees in your organization"),
    industryrequire = Drupal.t("Please enter your industry");


function zcrmSetCookie(b, g) {
    var e = document.location.host;
    var f = new Date();
    f.setTime(f.getTime() + (3 * 24 * 60 * 60 * 1000));
    var a = "expires=" + f.toUTCString();
    e = e.substring(e.indexOf("."));
    var c = b + "=" + g + ";" + a + ";domain=" + e + ";Path=/";
    document.cookie = c
}

function z_addParameter(a, h, d, b) {
    replaceDuplicates = true;
    if (a.indexOf("#") > 0) {
        var j = a.indexOf("#");
        urlhash = a.substring(a.indexOf("#"), a.length)
    } else {
        urlhash = "";
        j = a.length
    }
    sourceUrl = a.substring(0, j);
    var c = sourceUrl.split("?");
    var f = "";
    if (c.length > 1) {
        var k = c[1].split("&");
        for (var e = 0;
            (e < k.length); e++) {
            var g = k[e].split("=");
            if (!(replaceDuplicates && g[0] == h)) {
                if (f == "") {
                    f = "?"
                } else {
                    f += "&"
                }
                f += g[0] + "=" + (g[1] ? g[1] : "")
            }
        }
    }
    if (f == "") {
        f = "?"
    }
    if (b) {
        f = "?" + h + "=" + d + (f.length > 1 ? "&" + f.substring(1) : "")
    } else {
        if (f !== "" && f != "?") {
            f += "&"
        }
        f += h + "=" + (d ? d : "")
    }
    return c[0] + f + urlhash
}
$(document).ready(function() {
    var b = Drupal.t("Sign Up For Free");
    if (($(".signup-box").length == 0) && (window.location.href.indexOf("crm/developer") < 0) && ($(".zgh-accounts").length > 0)) {
        var a = jQuery(".zgh-accounts").find(".zgh-signup");
        a.addClass("vpvcrm-btn").text(b);
        if (a.length > 0) {
            a.attr("href", z_addParameter(a.attr("href"), "src", "top"))
        }
        signupappended()
    }
    us_stateCheck()
});
$(document).on("click", ".pwd_eye", function() {
    var a = $(this),
        b = $(".sgnpaswrd");
    a.toggleClass("eye_show");
    if (a.hasClass("eye_show")) {
        b.attr("type", "text")
    } else {
        b.attr("type", "password")
    }
});
var getStartedTranslt = Drupal.t("Get started"),
    getStartednowTranslt = Drupal.t("Get started now"),
    createAccTranslt = Drupal.t("Create account"),
    signUpTranslt = Drupal.t("Sign Up"),
    creatingthePortal = Drupal.t("Creating Account..."),
    verify_otp = Drupal.t("Verify"),
    verifyingOTP = Drupal.t("Verifying..."),
    nameTranslt = Drupal.t("Please specify your Name");



function getParameterByName(a) {
    url = window.location.href;
    a = a.replace(/[\[\]]/g, "\\$&");
    var c = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)"),
        b = c.exec(url);
    if (!b) {
        return null
    }
    if (!b[2]) {
        return ""
    }
    return encodeURIComponent(b[2].replace(/\+/g, " "))
}
$(document).ready(function() {
    $('.product-nav-links .menu > li > a[href*="features.html"]').attr("data-zcqa", "cmn-ftrs-tab");
    $('.product-nav-links .menu > li > a[href*="zohocrm-pricing.html"]').attr("data-zcqa", "cmn-pricing-tab");
    $(".zgh-signup").attr("data-zcqa", "top-right-getstarted");
    signupappended();
    $(".social_icons .new_crm_soc_sprite").mouseover(function() {
        $(".social_icons .new_crm_soc_sprite").addClass("opcty");
        $(this).removeClass("opcty")
    });
    $(".social_icons .new_crm_soc_sprite").mouseout(function() {
        $(".social_icons .new_crm_soc_sprite").removeClass("opcty")
    })
});
var body = $("html, body");
var windowObj = $(window),
    windowHeight = windowObj.outerHeight(),
    windowWidth = windowObj.outerWidth();
$(document).ready(function() {
    var a = $(".footer-copy").html();
    if ($(".footer-copy").length > 0) {
        if (a.indexOf("2022") != -1) {
            $(".footer-copy").html(a.replace(/2022/g, "2024"))
        } else {
            if (a.indexOf("2023") != -1) {
                $(".footer-copy").html(a.replace(/2023/g, "2024"))
            }
        }
    }
    layloading.scroll_lazy_imgset();
    window.addEventListener("scroll", z_debounce(layloading.scroll_lazy_imgset, 15, true));
    window.addEventListener("resize", z_debounce(layloading.scroll_lazy_imgset, 15, true));
    _webp_check();
    zcp_lazy()
});

function zcp_lazy() {
    var d = $(".zcp_lazy");
    var c = $(".zcp_lazy_bg");
    var a = 0;
    if (("IntersectionObserver" in window) || ("FileReader" in window)) {
        var b = $(window).height();
        if (d.length > 0) {
            $L.lazyload({
                selector: ".zcp_lazy",
                threshold: b,
                removeOnEnter: true,
                cancelOnExit: false,
                afterLoading: e
            })
        }
        if (c.length > 0) {
            $L.lazyload({
                selector: ".zcp_lazy_bg",
                threshold: b,
                removeOnEnter: true,
                cancelOnExit: false,
                enteredClass: "bg_lazy_loaded"
            })
        }

        function e(f) {
            $(f).removeClass("zcp_loading")
        }
    } else {
        if (d.length > 0) {
            d.each(function() {
                var f = $(this);
                if (f.parent().prop("nodeName") == "PICTURE" || f.parent().prop("nodeName") == "picture") {
                    f.removeClass("zcp_lazy zcp_loading");
                    f.parent().addClass("zc_lazy")
                } else {
                    if (f.parent().prop("nodeName") == "VIDEO" || f.parent().prop("nodeName") == "video") {
                        f.removeClass("zcp_lazy");
                        f.parent().addClass("zc_lazy")
                    } else {
                        f.removeClass("zcp_lazy zcp_loading").addClass("zc_lazy")
                    }
                }
            });
            a = 1
        }
        if (c.length > 0) {
            c.each(function() {
                $(this).addClass("zc_lazy bg_lazy").removeClass("zcp_lazy_bg")
            });
            a = 1
        }
        if (a == 1) {
            layloading.scroll_lazy_imgset()
        }
    }
}

function z_debounce(b, d, a) {
    var c;
    return function() {
        var g = this,
            f = arguments;
        var e = a && !c;
        clearTimeout(c);
        c = setTimeout(function() {
            c = null;
            if (!a) {
                b.apply(g, f)
            }
        }, d);
        if (e) {
            b.apply(g, f)
        }
    }
}
var layloading = {
    srl_top: undefined,
    scroll_lazy_imgset: function() {
        layloading.srl_top = windowObj.scrollTop();
        if (layloading.srl_top > 20) {
            windowHeight = windowHeight * 3
        }
        $(".zc_lazy").each(function() {
            var c = $(this);
            var a = c.offset().top;
            if (a < layloading.srl_top + windowHeight) {
                c.removeClass("zc_lazy");
                if (c.prop("nodeName") == "PICTURE" || c.prop("nodeName") == "picture") {
                    var d = c.find("img");
                    var b = c.find("source.webp");
                    var e = c.find("source.other_format");
                    d.attr("src", d.attr("data-src")).removeAttr("data-src");
                    b.attr("srcset", b.attr("data-srcset")).removeAttr("data-srcset");
                    e.attr("srcset", e.attr("data-srcset")).removeAttr("data-srcset")
                } else {
                    if (c.prop("nodeName") == "OBJECT" || c.prop("nodeName") == "object") {
                        c.attr("data", c.attr("data-src")).removeAttr("data-src")
                    } else {
                        if (c.prop("nodeName") == "IMG" || c.prop("nodeName") == "img") {
                            c.attr("src", c.attr("data-src")).removeAttr("data-src")
                        } else {
                            if (c.hasClass("bg_lazy")) {
                                c.addClass("bg_lazy_loaded").removeClass("bg_lazy")
                            } else {
                                if (c.prop("nodeName") == "VIDEO" || c.prop("nodeName") == "video") {
                                    var f = c.children("source");
                                    f.attr("src", f.attr("data-src")).removeAttr("data-src")
                                }
                            }
                        }
                    }
                }
            }
        })
    }
};

function _webp_check() {
    var a = document.createElement("canvas"),
        b = "";
    if (!!(a.getContext && a.getContext("2d"))) {
        a.toDataURL("image/webp").indexOf("data:image/webp") == 0 ? b = "s_webp" : b = "n_webp"
    }
    $("body").addClass(b)
}
var chat_popup_show = false,
    cookiestring = "";

function userVisitChk() {
    cookiestring = localStorage.getItem("chatPopupCookie");
    var c = new Date();
    c.setTime(c.getTime() + (90 * 24 * 60 * 60 * 1000));
    var a = "expires=" + c.toUTCString();
    if (cookiestring != "" && cookiestring != "null") {
        var b = "chat_popup_show=true;" + a;
        localStorage.setItem("chatPopupCookie", b)
    }
}

function us_stateCheck() {
    setTimeout(function() {
        if (CountryCode == "US") {
            if (RegionName != undefined) {
                RegionName = RegionName.toLowerCase();
                $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
                $(".za-globalstate-signup").val(RegionName)
            }
        }
    }, 200)
}
$(window).on("load", function() {
    userVisitChk();
    us_stateCheck();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if ($(".zmenu-solutions>.nolink").length <= 0) {
            $(".zmenu-solutions").removeClass("expanded dropdown").find(".dropdown-menu,.caret").remove()
        }
        if ($(".zmenu-resources>.nolink").length <= 0) {
            $(".zmenu-resources").removeClass("expanded dropdown").find(".dropdown-menu,.caret").remove()
        }
        if ($(".zmenu-bulletin>.nolink").length <= 0) {
            $(".zmenu-bulletin").removeClass("expanded dropdown").find(".dropdown-menu,.caret").remove()
        }
        $(".leaf.first").removeClass("expanded dropdown").find(".dropdown-menu,.caret").remove()
    }
    $("input[name=x_tempIpCountry]").val(customvar.getGlobalCookie("zip"));
    var c = $("input[name=x_signupURL]"),
        b = window.location.href;
    if (b.length < 1000) {
        c.val(b)
    } else {
        b = b.split("?");
        c.val(b[0])
    }
    var a = ["/crm/index.html", "/en-in/crm/index.html", "/en-au/crm/index.html", "/crm/", "/en-in/crm/", "/en-au/crm/", "/crm/request-quote.html", "/crm/zwitch.html", "/crm/zwitch/salesforce-crm-alternative.html", "/crm/zwitch/sugar-crm-alternative.html", "/crm/zwitch/dynamics-crm-alternative.html", "/crm/resources/support-plans.html", "/crm/request-callback.html", "/crm/request-demo.html", "/crm/enterprise/contact-us.html", "/crm/life-sciences/", "/crm/life-sciences/index.html", "/crm/financial-services/", "/crm/financial-services/index.html", "/crm/real-estate/", "/crm/real-estate/index.html", "/crm/retail/", "/crm/retail/index.html", "/crm/insurance/index.html", "/crm/insurance/", "/crm/agencies/", "/crm/agencies/index.html", "/crm/lp/sre-logout.html", "/crm/lp/se-logout.html", "/crm/lp/pe-logout.html", "/crm/lp/ee-logout.html", "/crm/lp/ue-logout.html", "/crm/lp/zo-logout.html", "/crm/lp/fe-logout.html", "/crm/lp/t-sre-logout.html", "/crm/lp/t-ue-logout.html", "/crm/lp/t-pe-logout.html", "/crm/lp/t-ee-logout.html", "/crm/lp/t-se-logout.html", "/crm/lp/t-zo-logout.html", "/crm/signup.html", "/crm/signup-fr.html", "/crm/signup-nl.html", "/crm/alternatives/hubspot.html", "/crm/hubspot-alternative.html", "crm/pilot2020.html", "crm/non-profit/index.html", "crm/non-profit/", "/crm/cut-costs-not-employees/", "/crm/cut-costs-not-employees/index.html", "/crm/signupsuccess.html", "/crm/subscriptionsignup.html", "/crm/halloween-crm-horror.html", "/crm/switch-crm-save-70.html", "/crm/cx-platform/signup.html", "/crm/canvas-registration.html", "/crm/resources/canvas/index.html", "/crm/nucleus-crm-value-matrix.html", "/crm/solutions-thank-you.html", "/crm/lp/msignup.html", "/crm/resources/guided-tour/zoho-crm-overview.html", "/in/crm/index1.html", "/crm/signup1.html", "/crm/lp/crm-and-desk-integration.html", "/crm/enterprise/", "/crm/automotive-crm.html", "/crm/life-sciences/", "/crm/financial-services/", "/crm/real-estate/", "/crm/retail/", "/crm/insurance/", "/crm/service-industry/", "/crm/startups.html", "/crm/non-profit/", "/crm/resources/videos/"];
    if (jQuery.inArray(_pathName, a) == -1 && presentUrl.indexOf("https://blogs.zoho.jp/") == -1 && presentUrl.indexOf("crm/solutions/usecases/") == -1 && presentUrl.indexOf("crm/real-estate/") == -1 && presentUrl.indexOf("crm/life-sciences/") == -1 && presentUrl.indexOf("crm/financial-services/") == -1 && presentUrl.indexOf("crm/retail/") == -1 && presentUrl.indexOf("crm/insurance/") == -1 && presentUrl.indexOf("crm/non-profit/") == -1 && presentUrl.indexOf("cx-platform/") == -1 && presentUrl.indexOf("srcPlan=NewCRM") == -1 && presentUrl.indexOf("/crm/developer/docs/") == -1 && presentUrl.indexOf("/crm/resources/videos/") == -1) {
        chatPopupOpen()
    }
    if ((presentUrl.indexOf("https://blogs.zoho.jp/") == -1 && presentUrl.indexOf("/crm/developer/docs/") == -1) && langsrc == "/pt-br/") {
        $("body").append('<a class="pt-br-whatsapp-link" href="https://wa.me/554888357047" target="_blank" rel="noopener"><span></span></a>').show()
    }
    $(document).on("click", ".zwf_close_icn", function() {
        $(".ztopstrip-container").fadeOut(350)
    })
});

function chatPopupOpen() {
    // var k = decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
    // chat_popup_show = Boolean(k.split(";")[0]);
    // if (windowWidth > 767 && $(".chat-popup-bg").length < 1 && chat_popup_show) {
    //     var n = 0,
    //         c = {
    //             IN: ["1800 103 1123", "1800 572 3535"],
    //             AU: ["+61 2 80662898"],
    //             CN: ["+8610 82738868"],
    //             JP: ["0120-007-542"],
    //             SG: ["+65 6723 1040"],
    //             US: ["+1877 834  4428", "+1844 584 2497"],
    //             GB: ["+44 (20) 35647890", "+44 8009177225"],
    //             FR: ["+33 805542462"],
    //             DE: ["+49 8000229966"],
    //             SE: ["+46 201408150"],
    //             IT: ["+39 (0) 287103737"],
    //             NL: ["+31 707007083"],
    //             ES: ["+34 918368598"],
    //             MX: ["+52 5541640960"],
    //             AE: ["+971 4 574 8400"]
    //         },
    //         b = 30,
    //         l = 120,
    //         p = 0,
    //         j = true;
    //     // $("body").append('<div class="crm-pop-bg-frame"></div><div class="chat-popup-bg"><div class="crm-pop-conatainer"><div class="crm-pop-top-sec zcp_lazy_bg"> <span class="popz-close zcp_lazy_bg chat-popup-close"></span><div class="pop-top-content-con"><p class="crm-pop-header">Can\'t find what<br>you\'re looking for?</p><p class="hlp-txt">Let us know what you need - we\'re happy to help!</p><a class="crm-pop-cta" href="/crm/request-callback.html?source_from=" + url_src+"  target="_blank" rel="noopener">REQUEST A CALLBACK</a></div><picture><source class="webp" type="image/webp" data-srcset="/sites/zweb/images/crm/crm-pop-character-2x.webp 2x, /sites/zweb/images/crm/crm-pop-character.webp 1x"><source class="other_format" type="image/jpeg" data-srcset="/sites/zweb/images/crm/crm-pop-character-2x.png 2x"><img width="288" height="282" class="zcp_lazy zcp_loading crm-pop-image" src="/sites/zweb/images/crm/crm-pop-character-lazy.png" data-src="/sites/zweb/images/crm/crm-pop-character.png" alt="CRM popup character Image"> </picture></div><div class="crm-pop-btm-sec"><p class="intrst-txt">You might be interested in:</p><div class="crmpop-prd-con zcp_lazy_bg"><a href="/bigin/?source_from=' + url_src + '" target="_blank" rel="noopener" class="crmpop-go-tag tag1"><div class="crmpop-prd-sec bigin"><p class="crmpop-prd-name">BIGIN</p><p class="prd-desc">Pipeline-centric small business CRM</p></div></a><a href="/crm/cx-platform/?source_from=' + url_src + '&cxsrc_param=request-callback-popup" target="_blank" rel="noopener" class="crmpop-go-tag"><div class="crmpop-prd-sec all-in-one-crm"><p class="crmpop-prd-name ">ALL-IN-ONE CRM</p><p class="prd-desc">Bring sales, marketing, and service together</p></div></a></div></div></div></div>');
    //     // zcp_lazy();
    //     if (Array.isArray(c[CountryCode])) {
    //         var a = c[CountryCode],
    //             o = "";
    //         if (a.length > 1) {
    //             for (i = 0; i < a.length; i++) {
    //                 o += "<span>" + c[CountryCode][i] + "</span>"
    //             }
    //             $("#chat-sptcl-no").html(o)
    //         } else {
    //             $("#chat-sptcl-no").html(c[CountryCode])
    //         }
    //     } else {
    //         $(".chat-contact-sec").fadeOut()
    //     }
    //     window.setInterval(g, 1000);
    //     setInterval(function() {
    //         n++
    //     }, 1000);
    //     var h = function(s, q, r) {
    //         if (s.addEventListener) {
    //             s.addEventListener(q, r, false)
    //         } else {
    //             if (s.attachEvent) {
    //                 s.attachEvent("on" + q, r)
    //             }
    //         }
    //     };
    //     h(document, "mouseout", function(q) {
    //         q = q ? q : window.event;
    //         var r = q.relatedTarget || q.toElement;
    //         if ((!r || r.nodeName == "HTML") && q.clientY <= 100) {
    //             if (q.clientY < 0 && !$(".chat-main-popup").hasClass("chat-open") && n >= 20 && !$("body").hasClass("body-umain") && !$("body").hasClass("other-lang")) {
    //                 e()
    //             }
    //         }
    //     })
    // }
    // $(".chat-us-btn").click(function(q) {
    //     q.preventDefault();
    //     $(".zsiq_flt_rel").trigger("click");
    //     d()
    // });
    // document.onclick = function() {
    //     p = 0
    // };
    // document.onmousemove = function() {
    //     p = 0
    // };
    // document.onkeypress = function() {
    //     p = 0
    // };
    // document.onkeydown = function() {
    //     p = 0
    // };
    // $(window).scroll(function() {
    //     p = 0
    // });

    // function g() {
    //     p++;
    //     if (p == b && !$("body").hasClass("body-umain") && !$("body").hasClass("other-lang") && chat_popup_show) {
    //         e()
    //     } else {
    //         if (p == l && !$("body").hasClass("body-umain") && !$("body").hasClass("other-lang") && chat_popup_show) {
    //             e()
    //         }
    //     }
    // }

    // function e() {
    //     if (j) {
    //         setSignupSrc();
    //         $("body").css("overflow-y", "hidden");
    //         $(".chat-popup-bg,.crm-pop-bg-frame").fadeIn(300);
    //         f();
    //         $(".chat-request-clback").attr("href", "/crm/request-callback.html?source_from=" + url_src + callbackParam);
    //         $(".crm-pop-cta").attr("href", "/crm/request-callback.html?source_from=" + url_src + "-popup");
    //         $(".crmpop-go-tag").attr("href", "/crm/cx-platform/?source_from=" + url_src + "-popup&cxsrc_param=request-callback-popup");
    //         $(".crmpop-go-tag.tag1").attr("href", "/bigin?source_from=" + url_src + "-popup");
    //         layloading.scroll_lazy_imgset()
    //     }
    // }

    // function d() {
    //     j = false;
    //     $("body").css("overflow-y", "auto");
    //     $(".chat-popup-bg,.crm-pop-bg-frame").fadeOut(300);
    //     m()
    // }
    // $(".chat-popup-close").click(function() {
    //     d()
    // });
    // $(".crm-pop-bg-frame").click(function(q) {
    //     d()
    // });
    // $(document).keyup(function(q) {
    //     if (q.which == 27) {
    //         d()
    //     }
    // });

    // function f() {
    //     try {
    //         window.ZTMData = window.ZTMData || [];
    //         window.ZTMData.push({
    //             event: "salesiqCustomAction",
    //             eventCategory: "PopupClick",
    //             eventAction: "ZohoCRM",
    //             eventLabel: "Popup show",
    //             customid: "-"
    //         })
    //     } catch (q) {}
    // }

    // function m() {
    //     try {
    //         window.ZTMData = window.ZTMData || [];
    //         window.ZTMData.push({
    //             event: "salesiqCustomAction",
    //             eventCategory: "PopupClick",
    //             eventAction: "ZohoCRM",
    //             eventLabel: "Popup close",
    //             customid: "-"
    //         })
    //     } catch (q) {}
    // }
}
var broserversion = navigator.sayswho = (function() {
    var b = navigator.userAgent,
        a, c = b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(c[1])) {
        a = /\brv[ :]+(\d+)/g.exec(b) || [];
        return "IE " + (a[1] || "")
    }
    if (c[1] === "Chrome") {
        a = b.match(/\b(OPR|Edge)\/(\d+)/);
        if (a != null) {
            return a.slice(1).join(" ").replace("OPR", "Opera")
        }
    }
    c = c[2] ? [c[1], c[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((a = b.match(/version\/(\d+)/i)) != null) {
        c.splice(1, 1, a[1])
    }
    return c.join(" ")
})();
var _browser = broserversion.split(" ")[0].toLowerCase();
var _version = broserversion.split(" ")[1];
$(document).ready(function() {
    if (presentUrl.indexOf("srcPlan=NewCRM") > -1 || presentUrl.indexOf("/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) {
        urlNewCRMParam()
    }
});

function urlNewCRMParam() {
    if (presentUrl.indexOf("srcPlan=NewCRM") > -1 || presentUrl.indexOf("/crm/cx-platform/") > -1 || $("body").find(".ncrm-btn").length > 0) {
        $(".product-nav-links a, .zw-template-inner a,.product-links a").each(function() {
            var a = $(this).attr("href");
            if (a != undefined) {
                if (a.indexOf("srcPlan") == -1) {
                    if (a.indexOf("?") > -1) {
                        a = a + "&srcPlan=NewCRM"
                    } else {
                        a = a + "?srcPlan=NewCRM"
                    }
                    if (presentUrl.indexOf("cxsrc_param") > -1 && a.indexOf("cxsrc_param") == -1) {
                        a = a + cxsrcAttrMenu
                    }
                    $(this).attr("href", a)
                }
                if (presentUrl.indexOf("cxsrc_param") > -1 && a.indexOf("cxsrc_param") == -1) {
                    a = a + cxsrcAttrMenu
                }
                $(this).attr("href", a)
            }
        })
    }
}
$(document).ready(function() {
    urlNewCRMParam();
    if (presentUrl.indexOf("/crm/resources/tips/") != -1) {
        $(".banner-section").css("background", "#0060ff url(/sites/zweb/images/crm/bannerbg-blue-pattern.svg) repeat")
    }
    $(".i18n-nl .social_icons").find("a.soc-icon1").attr("href", "https://twitter.com/ZohoBenelux/");
    $(".i18n-nl .social_icons").find("a.soc-icon2").attr("href", "https://www.linkedin.com/showcase/zoho-benelux/")
});
$(window).on("load", function() {
    urlNewCRMParam();
    if (langsrc == "/pt-br/") {
        $('a[href*="sales@zohocorp.com"').each(function() {
            if ($(this).html().indexOf("sales@zohocorp.com") != -1) {
                var a = $(this).html();
                $(this).html(a.replace(/sales@zohocorp.com/g, "vendas@zohocorp.com"));
                $(this).attr("href", "mailto:" + a.replace(/sales@zohocorp.com/g, "vendas@zohocorp.com"))
            }
        })
    }
});
var quick_info = '<div class="zcrm-qLinkSec"><span class="qLink-cta active"></span><div class="qLink-PopSec"><ul class="qLink-LstSec"><li><a class="qLink-Lst" href="/crm/developer/docs/api-directory.html?source_from=qlink_' + url_src + '" aria-label="API Directory" target="_blank" rel="noopener">API Directory</a></li><li><a class="qLink-Lst" href="https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_' + url_src + '" aria-label="Postman Collection" target="_blank" rel="noopener">Postman Collection</a></li><li><a class="qLink-Lst" href="https://help.zoho.com/portal/en/kb/crm/kaizen-series-zoho-crm-developers?source_from=qlink_' + url_src + '" aria-label="Kaizen Series" target="_blank" rel="noopener">Kaizen Series</a></li></ul><span class="qLink-close"></span></div></div>';
if (presentUrl.indexOf("/developer/docs/") > -1 && langsrc == "/") {
    $("body").append(quick_info)
}
$(".qLink-cta").on("click", function() {
    $(this).removeClass("active");
    $(".qLink-PopSec").addClass("active")
});
$(".qLink-close").on("click", function() {
    $(".qLink-PopSec").removeClass("active");
    $(".qLink-cta").addClass("active")
});