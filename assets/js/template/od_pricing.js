if (window.location.href.includes("/it/") && global_getUrlParam("itpricingtest") == "") {
    const prodSkipForIT = ["crm"];
    if (!prodSkipForIT.includes(customvar.productName)) {
        let _itRedirectionURL = window.location.pathname.replace("/it/", "/") + "?zredirect=f";
        window.location.replace(_itRedirectionURL)
    }
}
var zCurrentCurrencySym = "",
    currencyOrderArray, currencySymbolArray, currencyArray, cTextVal, countryCodeToBeUsed = "-";
$(document).ready(function() {
    countryCodeToBeUsed = CountryCode;
    $(".pricing-faq ul li:first-child").addClass("zactive");
    $(".product-block").each(function() {
        if ($(this).find(".feature-wrap").length > 0) {
            $('<div class="zmore-features"><span class="zmore-features-show">' + Drupal.t("Show Features") + '</span><span class="zmore-features-hide">' + Drupal.t("Hide Features") + "</span></div>").insertAfter($(this).find(".main-box"))
        }
    });
    $(".zmore-features").on("click", function() {
        $(this).toggleClass("zshow");
        $(this).parent().find(".highlighted-box").slideToggle();
        $(this).parent().find(".feature-wrap").slideToggle()
    });
    if ($(".pricing-tab").length > 0) {
        $('<div class="zmobile-mon-yearly-container"><select id="zmobile-mon-yearly"><option value="M">' + Drupal.t("Monthly") + '</option><option value="Y">' + Drupal.t("Yearly") + "</option></select></div>").appendTo(".pricing-tab");
        if ($(".pricing-tab > span.yearly").hasClass("active")) {
            $("#zmobile-mon-yearly").val("Y")
        } else {
            $("#zmobile-mon-yearly").val("M")
        }
    }
    $('<span class="arrow"></span>').appendTo(".pricing-faq ul li h3");
    $(".most-popular-plan").parent(".content-wrap").addClass("has-most-popular-plan");
    $('<div class="zmost-popular"><em>*</em>' + Drupal.t(" Most Popular") + " <em>*</em></div>").insertBefore($(".most-popular-plan .plan-name"));
    var j = $(".zjson-file-name").attr("data-filename");
    if (j == undefined) {
        j = productName + "-pricing-val.json"
    }
    var a = $(".zadditionaljson-file-name").attr("data-filename");
    var f = "";
    if (a != undefined && a != "") {
        f = a.split(";")
    }
    currencyArray = $(".zcurrency-symbol-array").attr("data-currency").split(";");
    var u = ["one", "sign", "crm", "forms", "crmplus", "cliq", "salesiq", "projects", "vault", "creator", "desk", "people", "reports", "docs", "recruit", "contactmanager", "sites", "flow", "salesinbox", "bugtracker", "motivator", "showtime", "meeting", "social", "connect", "assist", "sprints", "wiki", "campaigns", "officeplatform", "pagesense", "backstage", "teamdrive", "survey", "workplace", "orchestly", "workerly", "analytics", "peopleplus", "workdrive"];
    if (getDomain == "www.orchestly.com") {
        getDomain = "";
        productName = ""
    }
    var i = "zweb";
    var d = "";
    if (customvar.productName == "zohobigin" || customvar.productName == "zillum" || customvar.productName == "trainercentral") {
        var i = "oweb";
        d = "";
        if (getDomain.includes(_prewww)) {
            d = ""
        }
    }
    var v = "local";
    var m = true;
    var s = 1;
    $(".zpricegroup").each(function(w, x) {
        $(this).addClass("zpricegroup" + s);
        s++;
        if ($.trim($(this).attr("id")) == "" || $.trim($(this).attr("id")) == null) {
            m = false
        }
    });
    m = true;
    if (m) {
        if (getDomain == _preZ) {
            d = _preZ
        } else {
            if (getDomain == "") {
                d = ""
            } else {
                if (getDomain == _zcmsZC) {
                    d = _zcmsZC
                } else {
                    if (customvar.host.indexOf("bigin.com") == 7) {
                        d = ""
                    }
                }
            }
        }
        var k = ["DZ", "AO", "AI", "AG", "AR", "AW", "BS", "BB", "BZ", "BJ", "BM", "BO", "BW", "BR", "BF", "BI", "CM", "CV", "KY", "CF", "TD", "CL", "CO", "KM", "CD", "CR", "CW", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "ET", "FK", "PF", "GA", "GM", "GH", "GD", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "IQ", "JM", "JP", "JO", "KE", "LB", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MX", "MS", "MA", "MZ", "NA", "NI", "NE", "NG", "OM", "PS", "PA", "PY", "PE", "PN", "PR", "RE", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "ST", "SN", "SL", "SX", "SB", "SO", "ZA", "SS", "SR", "SJ", "SZ", "TZ", "TG", "TK", "TT", "TN", "TC", "UG", "UY", "VE", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX", "BQ", "BV", "GF", "TF", "GP", "MQ", "GS"];
        var l = ["analytics", "assist", "backstage", "bookings", "bugtracker", "campaigns", "commerce", "connect", "creator", "creatorplus", "desk", "flow", "forms", "lens", "marketinghub", "officeplatform", "one", "people", "peopleplus", "recruit", "sign", "sites", "social", "sprints", "survey", "vault", "workdrive", "workerly", "crm", "crmplus", "marketingautomation"];
        var g = ["workplace", "mail", "projects", "bigin", "remotely", "routeiq", "salesiq", "pagesense", "showtime", "learn", "cliq", "docs", "zeptomail", "dataprep", "contracts", "shifts", "wiki", "meeting"];
        jsonFileDesctination = "https://" + d + "/sites/" + i + "/json/pricing/" + productName + "-pricing-val.json";
        $.getJSON(jsonFileDesctination).done(function(w) {
            menuArray = w;
            var z = "";
            var y = "";
            var x = menuArray.priceLists.currencyOrder;
            currencyOrderArray = x.split(";");
            $.each(currencyOrderArray, function(C, A) {
                var B = currencySymbolArray[currencyCodeArray.indexOf(A)];
                var D = A;
                if (D == "OLDUSD") {
                    D = "USD"
                }
                z += '<span class="' + A + ' changeCurrency" data-currency="' + A + ", " + B + '">' + D + "</span>";
                y += '<option class="' + A + '" value="' + A + '">' + A + "</option>"
            });
            currencyArray = currencyOrderArray;
            $(".changePrice .changePriceContainer").html(z);
            n(menuArray);
            if (f.length > 0) {
                $.each(f, function(A) {
                    $.getJSON("https://" + getDomain + "/sites/" + i + "/json/pricing/" + f[A]).done(function(B) {
                        n(B)
                    })
                })
            }
        }).fail(function() {
            r()
        });

        function n(w) {
            $.each(w.priceLists.priceSets, function(x) {
                if ($(".zpricegroup#" + w.priceLists.priceSets[x].setId).length > 0) {
                    if ($(".zpricegroup#" + w.priceLists.priceSets[x].setId).attr("data-price") == "") {
                        $(".zpricegroup#" + w.priceLists.priceSets[x].setId).attr("data-price", w.priceLists.priceSets[x].priceValue)
                    }
                }
                if ($("[data-jsonid='" + w.priceLists.priceSets[x].setId + "']").length > 0) {
                    if ($("[data-jsonid='" + w.priceLists.priceSets[x].setId + "']").attr("data-price") == "") {
                        $("[data-jsonid='" + w.priceLists.priceSets[x].setId + "']").attr("data-price", w.priceLists.priceSets[x].priceValue)
                    }
                }
            });
            r()
        }
    } else {
        r()
    }

    function b() {
        t();
        c();
        if (window.innerWidth >= 768) {
            $(".product-block").not(".blockCustomHt").css("min-height", "auto");
            var w = 0;
            $(".product-block").not(".blockCustomHt").each(function() {
                if (w < $(this).height()) {
                    w = $(this).height()
                }
            });
            $(".product-block").not(".blockCustomHt").each(function() {
                if ($(this).hasClass("most-popular-plan")) {
                    $(this).css({
                        "min-height": w + 20
                    })
                } else {
                    $(this).css("min-height", w + 2)
                }
            })
        } else {
            $(".product-block").not(".blockCustomHt").css({
                "min-height": "inherit"
            })
        }
    }

    function t() {
        if (window.innerWidth >= 768) {
            $(".main-box").css("min-height", "auto");
            var w = 0;
            $(".main-box").each(function() {
                if (w < $(this).height()) {
                    w = $(this).height()
                }
            });
            $(".main-box").css("min-height", w)
        } else {
            $(".main-box").css({
                "min-height": "inherit"
            })
        }
    }

    function c() {
        if (window.innerWidth >= 768) {
            $(".highlighted-box").css("min-height", "auto");
            var w = 0;
            $(".highlighted-box").each(function() {
                if (w < $(this).height()) {
                    w = $(this).height()
                }
            });
            $(".highlighted-box").css("min-height", w)
        } else {
            $(".highlighted-box").css({
                "min-height": "inherit"
            })
        }
    }

    function h(w) {
        return w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    b();
    $(window).resize(function() {
        b();
        if ($(window).width() > 767) {
            $(".pricing-faq li > p").removeAttr("style")
        }
    });

    function o() {
        $(".trynow-plan").each(function() {
            $(this).attr("href", $(this).attr("href").replace("", Zdomain + "." + dcdomainOne))
        });
        $.each(allProductlowerCase, function(w, x) {
            eachAppFromAllApps = x.split(",");
            $.each(eachAppFromAllApps, function(y, z) {
                if (z != "" && z != null) {
                    $(".zw-template-inner [href*='" + z + ".']").not(".trynow-plan").each(function() {
                        if ($(this).attr("href").indexOf(z + ".") >= 0 && $(this).attr("href").indexOf(".com.au") < 0) {
                            OtherPrdPricingURL = $(this).attr("href");
                            OtherPrdPricingURLDc = OtherPrdPricingURL.replace("", Zdomain + "." + dcdomainOne);
                            $(this).attr("href", OtherPrdPricingURLDc)
                        }
                    })
                }
            })
        })
    }

    function p() {
        if (k.indexOf(countryCodeToBeUsed) > -1 && l.indexOf(productName) > -1) {
            q("OLDUSD", "US$")
        } else {
            q("USD", "US$")
        }
    }
    $(window).on("load", function() {
        $(".zpricingfaq-pt-br").html('Aceitamos pagamentos com Visa, American Express e PayPal. Para faturamento anual, aceitamos transferÃªncias internacionais. Para mais detalhes, envie um e-mail para <a href="mailto:vendas@zohocorp.com">vendas@zohocorp.com</a>.');
        b();
        o();
        r()
    });

    function r() {
        if (domainOne == "cn" || domainOne == "com.cn") {
            if (currencyArray.indexOf("CNY") >= 0) {
                q("CNY", "Â¥")
            } else {
                p()
            }
        } else {
            if (countryCodeToBeUsed == "-") {
                p()
            } else {
                if (countryEu.indexOf(countryCodeToBeUsed) > -1) {
                    if (countryCodeToBeUsed == "GB" && currencyArray.indexOf("GBP") >= 0) {
                        $(".EUR, .GBP").addClass("showThis");
                        q("GBP", "Â£")
                    } else {
                        if (countryCodeToBeUsed == "TR" && currencyArray.indexOf("USD") >= 0) {
                            q("USD", "â‚¬")
                        } else {
                            if (currencyArray.indexOf("EUR") >= 0) {
                                $(".EUR, .GBP").addClass("showThis");
                                q("EUR", "â‚¬")
                            } else {
                                p()
                            }
                        }
                    }
                } else {
                    if (countryCodeToBeUsed == "IN") {
                        if (currencyArray.indexOf("INR") >= 0) {
                            q("INR", "â‚¹")
                        } else {
                            p()
                        }
                    } else {
                        if (countryCodeToBeUsed == "BR") {
                            if (currencyArray.indexOf("BRL") >= 0) {
                                q("BRL", "R$")
                            } else {
                                p()
                            }
                        } else {
                            if (countryCodeToBeUsed == "JP") {
                                if (currencyArray.indexOf("JPY") >= 0) {
                                    q("JPY", "Â¥")
                                } else {
                                    p()
                                }
                            } else {
                                if (countryCodeToBeUsed == "AU") {
                                    if (currencyArray.indexOf("AUD") >= 0) {
                                        q("AUD", "A$")
                                    } else {
                                        p()
                                    }
                                } else {
                                    if (countryCodeToBeUsed == "NZ") {
                                        if (currencyArray.indexOf("NZD") >= 0) {
                                            q("NZD", "NZ$")
                                        } else {
                                            p()
                                        }
                                    } else {
                                        if (countryCodeToBeUsed == "SG") {
                                            if (currencyArray.indexOf("SGD") >= 0) {
                                                $(".USD, .SGD").addClass("showThis");
                                                q("SGD", "S$")
                                            } else {
                                                p()
                                            }
                                        } else {
                                            if (countryCodeToBeUsed == "AE") {
                                                if (currencyArray.indexOf("AED") >= 0) {
                                                    $(".USD, .AED").addClass("showThis");
                                                    q("AED", "AED")
                                                } else {
                                                    p()
                                                }
                                            } else {
                                                if (countryCodeToBeUsed == "SA") {
                                                    if (langsrc == "/pt-br/") {
                                                        if (currencyArray.indexOf("OLDUSD") >= 0 && l.indexOf(productName) > -1) {
                                                            q("OLDUSD", "US$")
                                                        } else {
                                                            q("USD", "US$")
                                                        }
                                                    } else {
                                                        if (currencyArray.indexOf("SAR") >= 0) {
                                                            $(".USD, .SAR").addClass("showThis");
                                                            q("SAR", "SAR")
                                                        } else {
                                                            p()
                                                        }
                                                    }
                                                } else {
                                                    if (countryCodeToBeUsed == "MX") {
                                                        if (currencyArray.indexOf("MXN") >= 0) {
                                                            q("MXN", "Mex$")
                                                        } else {
                                                            p()
                                                        }
                                                    } else {
                                                        if (countryCodeToBeUsed == "ZA") {
                                                            if (currencyArray.indexOf("ZAR") >= 0) {
                                                                $(".OLDUSD, .ZAR").addClass("showThis");
                                                                q("ZAR", "R")
                                                            } else {
                                                                p()
                                                            }
                                                        } else {
                                                            if (countryCodeToBeUsed == "NG") {
                                                                if (currencyArray.indexOf("NGN") >= 0) {
                                                                    $(".OLDUSD, .NGN").addClass("showThis");
                                                                    q("NGN", "â‚¦")
                                                                } else {
                                                                    p()
                                                                }
                                                            } else {
                                                                if (countryCodeToBeUsed == "KE") {
                                                                    if (currencyArray.indexOf("KES") >= 0) {
                                                                        $(".OLDUSD, .KES").addClass("showThis");
                                                                        q("KES", "K")
                                                                    } else {
                                                                        p()
                                                                    }
                                                                } else {
                                                                    if (countryCodeToBeUsed == "EG") {
                                                                        if (currencyArray.indexOf("EGP") >= 0) {
                                                                            $(".OLDUSD, .EGP").addClass("showThis");
                                                                            q("EGP", "EÂ£")
                                                                        } else {
                                                                            p()
                                                                        }
                                                                    } else {
                                                                        if (countryCodeToBeUsed == "CA") {
                                                                            if (currencyArray.indexOf("CAD") >= 0) {
                                                                                $(".USD, .CAD").addClass("showThis");
                                                                                q("CAD", "C$")
                                                                            } else {
                                                                                p()
                                                                            }
                                                                        } else {
                                                                            if (countryCodeToBeUsed == "TH") {
                                                                                if (currencyArray.indexOf("THB") >= 0) {
                                                                                    $(".USD, .THB").addClass("showThis");
                                                                                    q("THB", "à¸¿")
                                                                                } else {
                                                                                    p()
                                                                                }
                                                                            } else {
                                                                                if (countryCodeToBeUsed == "ID") {
                                                                                    if (currencyArray.indexOf("IDR") >= 0) {
                                                                                        q("IDR", "Rp")
                                                                                    } else {
                                                                                        p()
                                                                                    }
                                                                                } else {
                                                                                    p()
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if ($(".changeCurrency.showThis").length <= 1 && $(".pricing-tab-wrap").length == 0) {
            $(".changePrice").hide()
        }
        b();
        $(".changeCurrency").not(".showThis").not(".action").remove()
    }
    Number.isInteger = Number.isInteger || function(w) {
        return typeof w === "number" && isFinite(w) && Math.floor(w) === w
    };
    var e = false;

    function q(z, x) {
        zCurrentCurrencySym = x;
        z = $.trim(z);
        cTextVal = $.trim(z);
        var w = currencyArray.indexOf(z);
        var y = 0;
        var A = "zpricegroup-monthly";
        if ($(".pricing-tab span.label-text.active").length > 0) {
            y = $(".pricing-tab span.label-text.active").attr("data-value");
            if (y == 0) {
                A = "zpricegroup-monthly"
            } else {
                A = "zpricegroup-yearly"
            }
        }
        $(".changeCurrency").removeClass("action");
        $(".changeCurrency." + z).addClass("action");
        $("#zmobile-currency").val(z);
        $(".zpricegroup").each(function() {
            var D = $(this).attr("data-price").split("//");
            if ($(this).attr("data-price").indexOf("//") == -1) {
                D[1] = D[0]
            }
            var E = D[y].split(";");
            var B = "";
            e = false;
            if ($.isNumeric(E[w])) {
                var C = E[w];
                $(".product-block .price .zcurrency-symbol").css("text-transform", "uppercase");
                if (z == "MXN" || z == "IDR") {
                    $(".product-block .price .zcurrency-symbol").css("text-transform", "none")
                }
                if (z == "AUD" && countryCodeToBeUsed == "AU") {
                    if ($.trim($(".ztax-container > p#z-notax").text()) == "") {
                        $(".ztax-container > p#z-notax").text(Drupal.t("Prices mentioned are inclusive of local taxes.")).show()
                    } else {
                        $(".ztax-container > p").hide();
                        $(".ztax-container > p#z-notax").show()
                    }
                } else {
                    if ($.trim($(".ztax-container > p#z-taxplus").text()) == "") {
                        $(".ztax-container > p#z-taxplus").text(Drupal.t("Local taxes (VAT, GST, etc.) will be charged in addition to the prices mentioned.")).show()
                    } else {
                        $(".ztax-container > p").hide();
                        $(".ztax-container > p#z-taxplus").show()
                    }
                }
                if (z == "EUR" || z == "IDR") {
                    try {
                        if (C.indexOf(".") != -1) {
                            C = new Intl.NumberFormat("de", {
                                maximumFractionDigits: 10,
                                minimumFractionDigits: 2
                            }).format(C)
                        } else {
                            C = new Intl.NumberFormat("de", {
                                maximumFractionDigits: 10
                            }).format(C)
                        }
                    } catch (F) {}
                    if (C.indexOf(",") != -1) {
                        priceVal = C.split(",")[0];
                        B = "<em>," + C.split(",")[1] + "</em>";
                        C = priceVal + B
                    } else {
                        if (z == "IDR") {
                            if (C.length > 3) {
                                lastFourCharacters = "<em class='zidr_small'>" + C.substr(-4) + "</em>";
                                remainingString = C.substr(0, C.length - 4);
                                C = remainingString + lastFourCharacters
                            }
                        }
                    }
                } else {
                    if (z == "INR") {
                        try {
                            if (C.indexOf(".") != -1) {
                                C = new Intl.NumberFormat("en-IN", {
                                    maximumFractionDigits: 10,
                                    minimumFractionDigits: 2
                                }).format(C)
                            } else {
                                C = new Intl.NumberFormat("en-IN", {
                                    maximumFractionDigits: 10
                                }).format(C)
                            }
                        } catch (F) {}
                        if (C.indexOf(".") != -1) {
                            priceVal = C.split(".")[0];
                            B = "<em>." + C.split(".")[1] + "</em>";
                            C = priceVal + B
                        }
                    } else {
                        if (z == "AUD" && countryCodeToBeUsed == "AU") {
                            C = Number(C) + Number(C / 10);
                            if (productName != "catalyst") {
                                if (!Number.isInteger(C)) {
                                    C = C.toFixed(2)
                                }
                            }
                        }
                        try {
                            if (C.indexOf(".") != -1) {
                                e = true;
                                C = new Intl.NumberFormat("en", {
                                    maximumFractionDigits: 10,
                                    minimumFractionDigits: 2
                                }).format(C)
                            } else {
                                C = new Intl.NumberFormat("en", {
                                    maximumFractionDigits: 10
                                }).format(C);
                                e = false
                            }
                        } catch (F) {}
                        if (e == true) {
                            priceVal = C.split(".")[0];
                            B = "<em>." + C.split(".")[1] + "</em>";
                            C = priceVal + B
                        }
                    }
                }
                $(this).addClass("zdisplay").children(".z-price-text").html(C);
                $(this).children(".zcurrency-symbol").html(x)
            } else {
                $(this).children(".z-price-text").html(Drupal.t(E[w]));
                $(this).children(".zcurrency-symbol").html("")
            }
            $(".pricing-wrap").removeClass(function(G, H) {
                return (H.match(/\bzpricegroup-\S+/g) || []).join(" ")
            });
            $(".pricing-wrap").addClass(A)
        });
        $(".ztogglegroup").each(function() {
            var B = $(this).attr("data-toggleval").split(";");
            if (B[y] == "-") {
                B[y] = "&nbsp;"
            }
            $(this).html(B[y])
        })
    }
    $("body").on("click", ".changeCurrency", function() {
        var w = $(this).attr("data-currency").split(",");
        dCurrency = $.trim(w[1]);
        if (dCurrency == "$") {
            dCurrency = "US$";
            if (countryCodeToBeUsed == "TR") {
                dCurrency = "â‚¬"
            }
        }
        if (document.domain == _zcmsZC || global_getUrlParam("zc") == "all") {
            if (w[0] == "AUD") {
                autoCCVal = currencyCountryArray[currencyCodeArray.indexOf(w[0])];
                window.location = window.location.origin + window.location.pathname + "?zc=all&autoCC=" + autoCCVal
            }
        }
        q(w[0], dCurrency)
    });
    $(document).on("click", ".pricing-tab span.ztoggle-slide", function() {
        $(".pricing-tab span.ztoggle-slide").toggleClass("active");
        $(".pricing-tab span.label-text").toggleClass("active");
        var w = $(".changeCurrency.action").attr("data-currency").split(",");
        dCurrency = $.trim(w[1]);
        if (dCurrency == "$") {
            dCurrency = "US$";
            if (countryCodeToBeUsed == "TR") {
                dCurrency = "â‚¬"
            }
        }
        q(w[0], dCurrency);
        b()
    });
    $(document).on("click", ".pricing-tab span.label-text", function() {
        if ($(this).hasClass("active")) {} else {
            $(".pricing-tab span.ztoggle-slide").toggleClass("active");
            $(".pricing-tab span.label-text").toggleClass("active");
            var w = $(".changeCurrency.action").attr("data-currency").split(",");
            dCurrency = $.trim(w[1]);
            if (dCurrency == "$") {
                dCurrency = "US$";
                if (countryCodeToBeUsed == "TR") {
                    dCurrency = "â‚¬"
                }
            }
            q(w[0], dCurrency);
            b()
        }
    });
    if ($("body").hasClass("lang-zh-hans") && $(".pricing-tab .yearly").length > 0) {
        $(".pricing-tab .yearly").trigger("click")
    }
    $(".feature-box ul li.has-tooltip, .highlighted-box p.has-tooltip").each(function(w, x) {
        $(this).hover(function() {
            $(this).find("span.price-tooltip").not(".zpricegroup, .ztogglegroup").addClass("active")
        });
        $(this).mouseleave(function() {
            $(this).find("span.price-tooltip").not(".zpricegroup, .ztogglegroup").removeClass("active")
        })
    })
});
$(".pricing-faq ul li h3").on("click", function() {
    if ($(window).width() <= 767) {
        if ($(this).parent().hasClass("zactive")) {
            $(this).parent().removeClass("zactive").find("p, .faq-list").slideUp()
        } else {
            $(".pricing-faq ul li.zactive > p, .pricing-faq ul li.zactive > .faq-list").slideUp();
            $(".pricing-faq ul li").removeClass("zactive");
            $(this).parent().addClass("zactive").find("p, .faq-list").slideDown()
        }
    } else {
        if (!$(".pricing-faq .content-wrap").hasClass("expand-all")) {
            if ($(this).parent().hasClass("zactive")) {
                $(this).parent().removeClass("zactive").find("p, .faq-list").slideUp()
            } else {
                $(".pricing-faq ul li.zactive > p, .pricing-faq ul li.zactive > .faq-list").slideUp();
                $(".pricing-faq ul li").removeClass("zactive");
                $(this).parent().addClass("zactive").find("p, .faq-list").slideDown()
            }
        }
    }
});
$(document).on("change", "#zmobile-mon-yearly", function() {
    if ($(this).val() == "M") {
        $(".pricing-tab > span.monthly").trigger("click")
    } else {
        if ($(this).val() == "Y") {
            $(".pricing-tab > span.yearly").trigger("click")
        }
    }
});
$(document).on("change", "#zmobile-currency", function() {
    $(".changePriceContainer .changeCurrency." + $(this).val()).trigger("click")
});