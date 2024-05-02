var dev_W = $(window).outerWidth();
var Auto_slid;
$(document).ready(function () {
  var b = $(window).outerWidth(),
    a = $(".cx-testiGrp");
  zcs_boxSet();
  Auto_slid = setInterval("auto_Sld()", 5000);
  a.mouseenter(function () {
    clearInterval(Auto_slid);
  });
  a.mouseleave(function () {
    Auto_slid = setInterval("auto_Sld()", 5000);
  });
});
function auto_Sld() {
  clearInterval(Auto_slid);
  var a = $(".cx-testiLst.active").index() + 1,
    b = $(".cx-testiLst").length;
  if (a >= b) {
    zcsNxt_slide("auto");
  } else {
    zcsNxt_slide("nxt");
  }
}
function zcsNxt_slide(d) {
  clearInterval(Auto_slid);
  var e = d,
    g = $(".cx-testiLst.active"),
    f = $(".cx-testiLst").length;
  if (e == "nxt") {
    g.next().addClass("active").siblings().removeClass("active");
  } else {
    if (e == "prv") {
      g.prev().addClass("active").siblings().removeClass("active");
    } else {
      if (e == "auto") {
        $(".cx-testiLst:first-child")
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    }
  }
  var c = $(".cx-testiLst.active").index() + 1,
    b = $(".cx-PrvSld"),
    a = $(".cx-NxtSld");
  if (f == c) {
    b.addClass("active");
    a.removeClass("active");
  } else {
    if (c > 1 && f > c) {
      $(a).add(b).addClass("active");
    } else {
      if (c == 1) {
        a.addClass("active");
        b.removeClass("active");
      }
    }
  }
  $(".cx-srtVal").text("0" + c);
  $(".cx-nxtVal").text("0" + f);
}
function zcs_boxSet() {
  var e = $(window).outerWidth(),
    c = [],
    a = 0,
    b = $(".cx-testiLst");
  b.each(function () {
    var f,
      g = $(this);
    f = g.height();
    c.push(f);
  });
  for (var d = 0; d < c.length; d++) {
    if (a > c[d]) {
      a = a;
    } else {
      a = c[d];
    }
  }
  $(".cx-testiGrp, .cx-testiLst").css("min-height", a);
}
$(window).on("scroll", function () {
  var d = $(window).scrollTop(),
    e = $(".cs_detailSec").offset().top,
    b = $(window).height(),
    a = $(window).outerWidth();
  if ($(".cs_storySec").length > 0) {
    var c = $(".cs_storySec").offset().top,
      h = $(".cs_storyNav");
    if (d > e && d < c - b && a > 1024) {
      h.addClass("active");
    } else {
      h.removeClass("active");
    }
  }
  var l,
    f,
    g = $(".cs_detailSec"),
    k = g.offset().top,
    j = k + $(".cs_detailInner").height();
  f = 26;
  if (a > 1140) {
    l = 52;
  } else {
    if (a <= 900) {
      l = 100;
      f = 0;
    } else {
      l = 0;
    }
  }
  if ($(".field-body").hasClass("bigin-template")) {
    k = k - 50;
  }
  if (d + l > k - f && d + b / 2 < j) {
    $(".cs_FilterSec").addClass("fixed_nav");
  } else {
    $(".cs_FilterSec").removeClass("fixed_nav");
  }
});
$(".mbl_Industry").click(function () {
  var a,
    b = $(this),
    a = b.attr("data-tap");
  b.addClass("active").siblings().removeClass("active");
  $(".cs_FilterLst").removeClass("active");
  $(".cs_FilterLst:nth-child(" + a + ")").addClass("active");
});
$(document).on("click", ".zct_showmore", function () {
  var b = $(this),
    a = b.siblings(".zct_Desc_grp");
  if (a.hasClass("showmore")) {
    b.text("Show less");
    a.removeClass("showmore").addClass("showless");
  } else {
    b.text("Show more...");
    a.removeClass("showless").addClass("showmore");
  }
});
function Flr_lstShow(a) {
  var b = $(a),
    c = $(".cs_ViewSec");
  if (b.hasClass("zcs_close")) {
    b = $(".cs_FilterBox");
  } else {
    b = b;
  }
  if (b.hasClass("active")) {
    b.removeClass("active");
    b.parents(".cs_FilterSec").removeClass("active");
    c.hide();
    $(".flr_freezLayer").removeClass("active");
    $("body").removeClass("page_freez");
  } else {
    c.show();
    b.addClass("active");
    b.parents(".cs_FilterSec").addClass("active");
    $(".flr_freezLayer").addClass("active");
    $("body").addClass("page_freez");
  }
}
function Flr_EditShow(a) {
  $(".cs_ViewSec").show();
  $(".cs_FilterBox").addClass("active");
  $(".cs_FilterSec").addClass("active");
  $(".flr_freezLayer").addClass("active");
  $("body").addClass("page_freez");
}
var tidy_label,
  cs_oneData = "",
  cs_indusArry = [],
  cs_userArry = [],
  cs_cntryArry = [],
  cs_businessArry = [],
  tidy_Data,
  cs_indus = "",
  cs_indus1 = "",
  cs_user = "",
  cs_cntry = "";
cs_business = "";
var jsonFile = "/" + $(".json_filename").val();
var urlValuesGet = new URLSearchParams(window.location.search),
  tabFltr = "all",
  pageUrl = window.location.href,
  pageUrlEle = "",
  pageTags = 1,
  UrlEle = "?",
  urlEleActive = false,
  viewFltr = "less",
  view_fltr = "less";
$(document).ready(function () {
  $.getJSON(jsonFile, function (a) {
    tidy_Data = a;
    $.each(tidy_Data.customers, function (b) {
      cs_indusArry.push(tidy_Data.customers[b].industry);
      cs_userArry.push(tidy_Data.customers[b].user_count);
      cs_cntryArry.push(tidy_Data.customers[b].region);
      cs_businessArry.push(tidy_Data.customers[b].business_process);
    });
    Flr_rendering();
    urlBasedActive();
    if (!urlValuesGet.has("tab_fltr")) {
      zcs_pagination(tidy_Data);
    }
  });
});
var drained_data = "",
  fixed_length = 15;
function zcs_pagination(k) {
  drained_data = k;
  var g = k.length;
  if (g != undefined && g != 0) {
    g = g;
    if ($(".cs_viewless").hasClass("active")) {
      $(".pgi_prev, .pgi_nxt").show();
      $(".cs_viewall").addClass("active");
      $(".cs_viewless").removeClass("active");
      $(".pgi_numbers:first-child").trigger("click");
    }
    $(".zcs_ErMsg").slideUp();
  } else {
    if (!First_flag) {
      $(".zcs_ErMsg").slideDown();
    }
    drained_data = tidy_Data.customers;
    g = drained_data.length;
    drained_data = [];
    for (var c = 0; c < g; c++) {
      drained_data.push(c);
    }
  }
  if (typeof k != "undefined") {
    var f = 3,
      h = "...",
      a = "",
      e,
      b = $(".pgi_numberSec");
    e = Math.ceil(g / fixed_length);
    b.empty();
    if (g > fixed_length) {
      for (var d = 1; d <= f; d++) {
        a +=
          '<li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
          d +
          '">' +
          d +
          "</li>";
        if (d == f) {
          a +=
            '<li class="pgi_numbers mid_dots">' +
            h +
            '</li><li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
            e +
            '">' +
            e +
            "</li>";
        }
      }
      b.append(a);
      $(".cs_pagination_Sec").show();
      $(".pgi_numbers:first-child").trigger("click");
    } else {
      $(".cs_pagination_Sec").hide();
      zcs_dataRendering(drained_data);
    }
  }
}
function pg_Nxt(e, j) {
  var a = $(j),
    g,
    e = e,
    f = $(".pgi_numbers").length,
    c = $(".pgi_numbers.active"),
    d = $(".pgi_nxt"),
    h = $(".pgi_prev"),
    b = $(window).outerWidth();
  g = parseInt(c.attr("data-num"));
  if (e == "next") {
    if (b < 550) {
      g = g + 1;
      pageRendering(drained_data, g, event);
    } else {
      c.next().click();
    }
  } else {
    if (e == "pre") {
      if (b < 550) {
        g = g - 1;
        pageRendering(drained_data, g, event);
      } else {
        c.prev().click();
      }
    }
  }
}
var First_flag = true;
function pageRendering(m, n, r) {
  r.stopPropagation();
  var t,
    c,
    q = "",
    x = "",
    a = "",
    g = $(window).outerWidth();
  m = m;
  if (typeof n === "object") {
    t = $(n);
    c = t.attr("data-num");
  } else {
    c = parseInt(n);
  }
  if (c != undefined) {
    c = parseInt(c);
  }
  var j = $(".pgi_numbers").length,
    o = $(".pgi_nxt"),
    w = $(".pgi_prev");
  var k = $(".pgi_numberSec"),
    v = m.length,
    l,
    b,
    h,
    f,
    e,
    d = "",
    p = 1,
    u = "...";
  if (pageTagFlag) {
    c = pageTags;
    pageTagFlag = false;
  } else {
    pageTags = parseInt(c);
  }
  if (c) {
    if (v > fixed_length) {
      h = Math.ceil(v / fixed_length);
      if (h < 6 && g > 550) {
        (f = p), (e = h);
      } else {
        if (h < 4 && g <= 550) {
          (f = p), (e = h);
        } else {
          if (h > 5 && g > 550) {
            (f = c - 1), (e = c + 1);
            if (c - p < 3 || c == 3) {
              f = p;
            }
            if (e <= 2 && h > 2) {
              e = 3;
            }
            if (h - c < 3) {
              e = h;
            }
          } else {
            if (h >= 4 && g <= 550) {
              (f = c), (e = c);
              if (c == p + 1) {
                f = 1;
                e = 2;
              }
              if (c == h - 1) {
                f = h - 1;
                e = h;
              }
            }
          }
        }
      }
      if (f > 0 && e <= h) {
        for (var s = f; s <= e; s++) {
          d +=
            '<li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
            s +
            '">' +
            s +
            "</li>";
        }
        if (g < 551) {
          if (h < 4) {
            d = d;
          } else {
            if (h >= 4) {
              if (c == p || c == p + 1) {
                l =
                  '<li class="pgi_numbers mid_dots">' +
                  u +
                  '</li><li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                  h +
                  '">' +
                  h +
                  "</li>";
                d = d + l;
              } else {
                if (c == h || c == h - 1) {
                  l =
                    '<li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                    p +
                    '">' +
                    p +
                    '</li><li class="pgi_numbers mid_dots">' +
                    u +
                    "</li>";
                  d = l + d;
                } else {
                  if (c > p && c < h) {
                    b =
                      '<li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                      p +
                      '">' +
                      p +
                      '</li><li class="pgi_numbers mid_dots">' +
                      u +
                      "</li>";
                    l =
                      '<li class="pgi_numbers mid_dots">' +
                      u +
                      '</li><li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                      h +
                      '">' +
                      h +
                      "</li>";
                    d = b + d + l;
                  }
                }
              }
            }
          }
        } else {
          if (h < 6) {
            d = d;
          } else {
            if (h >= 6) {
              if (c - p < 3 && h > 3) {
                l =
                  '<li class="pgi_numbers mid_dots">' +
                  u +
                  '</li><li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                  h +
                  '">' +
                  h +
                  "</li>";
                d += l;
              } else {
                if (h - c <= 2 && h > 3) {
                  b =
                    '<li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                    p +
                    '">' +
                    p +
                    '</li><li class="pgi_numbers mid_dots">' +
                    u +
                    "</li>";
                  d = b + d;
                } else {
                  if (h - c >= 3 && c - p >= 3 && h > 3) {
                    b =
                      '<li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                      p +
                      '">' +
                      p +
                      '</li><li class="pgi_numbers mid_dots">' +
                      u +
                      "</li>";
                    l =
                      '<li class="pgi_numbers mid_dots">' +
                      u +
                      '</li><li class="pgi_numbers" onclick="pageRendering(drained_data, this, event)" data-num="' +
                      h +
                      '">' +
                      h +
                      "</li>";
                    d = b + d + l;
                  }
                }
              }
            }
          }
        }
        k.empty();
        k.append(d);
        $(".pgi_numbers[data-num=" + pageTags + "]").addClass("active");
      } else {
        t.addClass("active").siblings().removeClass("active");
      }
    }
    q = fixed_length * (c - 1);
    x = fixed_length * c;
    a = m.slice(q, x);
    if (c < h && c > 1) {
      o.addClass("active");
      w.addClass("active");
    } else {
      if (c == h) {
        o.removeClass("active");
        w.addClass("active");
      } else {
        if (c <= 1) {
          w.removeClass("active");
          o.addClass("active");
        }
      }
    }
  } else {
    a = m;
    $(".pgi_prev, .pgi_nxt").hide();
    $(".cs_viewall").removeClass("active");
    $(".cs_viewless").addClass("active");
  }
  zcs_dataRendering(a);
  if (First_flag) {
    urlSearch_param();
  }
  First_flag = false;
  $('.cs_lable input[data-industry="Don_t_know"]').parent().hide();
  $('.cs_lable input[data-country="Don_t_know"]').parent().hide();
}
function page_rendering() {
  if (dev_W < 1024 && dev_W > 600) {
    showEleRow = 2;
    fixed_length = 20;
  } else {
    if (dev_W <= 600) {
      showEleRow = 1;
      fixed_length = 20;
    }
  }
}
function zcs_dataRendering(e) {
  var d = [],
    c = 0;
  var b = $(".smart_filter.active").attr("data-attr"),
    a = "";
  if ($(".cs_viewall").hasClass("active") && pageTags != 0) {
    a = "page=" + pageTags + "&";
    viewFltr = "less";
  } else {
    if ($(".cs_viewless").hasClass("active")) {
      viewFltr = "all";
    }
  }
  if (urlEleActive) {
    history.pushState(
      null,
      null,
      pageUrlEle +
        UrlEle +
        a +
        "tab_fltr=" +
        b +
        "&viewEle=" +
        viewFltr +
        "&" +
        countryIndex +
        "&" +
        IndustryIndex +
        "&" +
        usersIndex
    );
  }
  urlEleActive = true;
  if (typeof e != "undefined") {
    d = e;
  }
  $(".cs_detailLst").empty();
  $.each(tidy_Data.customers, function (z) {
    if (d.length == 0) {
      var v = z;
    } else {
      if (d.length > 0 && d.includes(z)) {
        var v = z;
      } else {
        return true;
      }
    }
    var t =
      '<div class="vid_spkrGrp"><span class="vid_spkrname">' +
      tidy_Data.customers[v].cs_name +
      '</span><span class="vid_spkrdesig">' +
      tidy_Data.customers[v].cs_company +
      "</span></div>";
    if (tidy_Data.customers[v].cs_img.length == 0) {
      var o = "zcs_spkrNo";
    } else {
      var o = "zcs_spkrYes";
    }
    if (
      tidy_Data.customers[v].cs_label == "Review" ||
      tidy_Data.customers[v].cs_label == "Social"
    ) {
      var h = "review_spkr";
    } else {
      h = "";
    }
    if (
      (tidy_Data.customers[v].cs_name.length == 0 &&
        tidy_Data.customers[v].cs_company.length == 0) ||
      tidy_Data.customers[v].cs_label == "Videos"
    ) {
      var q = "";
    } else {
      q =
        '<div class="cs_skrGrp ' +
        h +
        '"><span class="skrGrp_lft ' +
        o +
        '">' +
        tidy_Data.customers[v].cs_img +
        '</span><span class="skrGrp_rht"><span class="skrGrp_name">' +
        tidy_Data.customers[v].cs_name +
        '</span><span class="skrGrp_desig">' +
        tidy_Data.customers[v].cs_company +
        "</span></span></div>";
    }
    if (tidy_Data.customers[v].cs_label == "Videos") {
      var u = "CRM";
      if (customvar.productName == "desk") {
        u = "Desk";
      }
      var g = "zcp_lazy";
      if (customvar.productName == "crmplus") {
        g = "zlyte_lazy";
      }
      var r =
        '<div class="cs_videoSec vimvideo" data-video="' +
        tidy_Data.customers[v].vid_url +
        '">' +
        t +
        '<img class="' +
        g +
        ' vid_thumb" data-src="' +
        tidy_Data.customers[v].videothumb +
        '" alt="' +
        tidy_Data.customers[v].cs_name +
        " | Zoho " +
        u +
        ' Customer" width="350px" height="220px"></div>';
    } else {
      r = "";
    }
    if (
      tidy_Data.customers[v].cs_label == "review" ||
      tidy_Data.customers[v].cs_label == "social"
    ) {
      var j =
        '<div><a class="zcs_sites" href="' +
        tidy_Data.customers[v].read_more +
        '" target="_blank" rel="noopener">' +
        tidy_Data.customers[v].link_txt +
        "</a></div>";
    } else {
      j =
        '<div><a class="zcs_lnk" href="' +
        tidy_Data.customers[v].read_more +
        '" target="_blank" rel="noopener">' +
        tidy_Data.customers[v].link_txt +
        '<span class="arrow"></span></a></div>';
    }
    var m = "",
      s,
      w = tidy_Data.customers[v].cs_msg.length,
      p = "";
    if (w > 320) {
      if (w - 320 > 100) {
        s =
          '<div class="zct_Desc_grp showmore">' +
          tidy_Data.customers[v].cs_msg +
          '</div><span class="zct_showmore" onclick="zct_showmore(this)">Show more...</span>';
      } else {
        s =
          '<div class="zct_Desc_grp">' +
          tidy_Data.customers[v].cs_msg +
          "</div>";
      }
    } else {
      s =
        '<div class="zct_Desc_grp">' + tidy_Data.customers[v].cs_msg + "</div>";
    }
    if (tidy_Data.customers[v].cs_logo != "") {
      m = tidy_Data.customers[v].cs_logo;
    } else {
      if (tidy_Data.customers[v].cs_logoTitle != "") {
        m =
          '<span class="cust_logo_txt">' +
          tidy_Data.customers[v].cs_logoTitle +
          "</span>";
      }
    }
    if (customvar.productName != "desk") {
      p = tidy_Data.customers[v].country[0];
    }
    cs_oneData =
      '<li class="cs_lstBx flr_show ' +
      p +
      " " +
      tidy_Data.customers[v].cs_label +
      '"><div class="cs_lstInner"><div class="cs_testiSec">' +
      m +
      s +
      j +
      q +
      "</div> " +
      r +
      "</div></li>";
    var x,
      n,
      l,
      k = [];
    if (dev_W > 1024) {
      x = 3;
    } else {
      if (dev_W <= 1024 && dev_W > 768) {
        x = 2;
      } else {
        x = 1;
      }
    }
    for (var v = 0; v < x; v++) {
      var y = $(".cs_detailLst:eq(" + v + ")").outerHeight();
      k.push(y);
    }
    l = Math.min.apply(Math, k);
    n = k.indexOf(l);
    $(".cs_detailLst:eq(" + n + ")").append(cs_oneData);
  });
  if (window.location.origin == "https://www.bigin.com") {
    $(".skrGrp_img,.zct_logo").each(function () {
      $(this).attr(
        "data-bg",
        "" + $(this).attr("data-bg")
      );
    });
  }
  if (!First_flag && dev_W > 768) {
    var f = 73;
    if ($(".field-body").hasClass("bigin-template")) {
      f = 120;
    }
    $("html, body").animate(
      { scrollTop: $(".cs_detailSec").offset().top - f },
      800
    );
  } else {
    if (!First_flag && dev_W <= 768) {
      $("html, body").animate(
        { scrollTop: $(".cs_detailSec").offset().top - 100 },
        800
      );
    }
  }
  $(".zcs_lnk").each(function () {
    var g = $(this);
    if (g.attr("href").length == 0) {
      g.remove();
    } else {
      g.siblings(".zcs_vid").remove();
    }
  });
  $(".cs_videoSec").each(function () {
    var g = $(this);
    if (
      g.attr("data-video").length == 0 ||
      g.find("img").attr("data-src").length == 0
    ) {
      g.css("display", "none");
    } else {
      g.parent().find(".skrGrp_lft").css("display", "none");
    }
  });
  if (customvar.productName == "crmplus") {
    setTimeout(function () {
      z_lyte_lazy();
    }, 200);
  } else {
    setTimeout(function () {
      zcp_lazy();
    }, 200);
  }
}
function Flr_rendering() {
  var k = $(window).outerWidth();
  var e = [],
    b = [],
    c = [],
    a = [];
  $.each(cs_indusArry, function (l, m) {
    if ($.inArray(m, e) === -1) {
      e.push(m);
    }
  });
  $.each(cs_cntryArry, function (l, m) {
    if ($.inArray(m, b) === -1) {
      b.push(m);
    }
  });
  $.each(cs_businessArry, function (l, m) {
    if ($.inArray(m, c) === -1) {
      c.push(m);
    }
  });
  $.each(cs_userArry, function (l, m) {
    if ($.inArray(m, a) === -1) {
      a.push(m);
    }
  });
  e.sort();
  b.sort();
  a.sort();
  c.sort();
  var h = e.length / 2;
  h = Math.ceil(h);
  for (var j = 0; j < h; j++) {
    var d = e[j].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    cs_indus +=
      '<span class="cs_industry"><label class="cs_lable"><input type="checkbox" name="industry" data-industry="' +
      d +
      '">' +
      e[j] +
      '<span class="cs_sprt cs_check"></span></label></span>';
  }
  for (var j = h; j < e.length; j++) {
    var d = e[j].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    cs_indus1 +=
      '<span class="cs_industry"><label class="cs_lable"><input type="checkbox" name="industry" data-industry="' +
      d +
      '">' +
      e[j] +
      '<span class="cs_sprt cs_check"></span></label></span>';
  }
  cs_user =
    '<span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="50_and_below">50 and below<span class="cs_sprt cs_check"></span></label></span><span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="51-200">51-200<span class="cs_sprt cs_check"></span></label></span><span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="201-500">201-500<span class="cs_sprt cs_check"></span></label></span><span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="Above_500">Above 500<span class="cs_sprt cs_check"></span></label></span>';
  for (var f = 0; f < b.length; f++) {
    var d = b[f].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    cs_cntry +=
      '<span class="cs_country"><label class="cs_lable"><input type="checkbox" name="country" data-country="' +
      d +
      '">' +
      b[f] +
      '<span class="cs_sprt cs_check"></span></label></span>';
  }
  if (customvar.productName != "desk") {
    for (var g = 0; g < c.length; g++) {
      var d = c[g].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
      cs_business +=
        '<span class="cs_business"><label class="cs_lable"><input type="checkbox" name="business" data-business="' +
        d +
        '">' +
        c[g] +
        '<span class="cs_sprt cs_check"></span></label></span>';
    }
    $("#zcs_business").append(cs_business);
  }
  $("#zcs_country").append(cs_cntry);
  $("#zcs_users").append(cs_user);
  $("#zcs_industry").append(cs_indus);
  $("#zcs_industry1").append(cs_indus1);
  $(".cs_FilterLst:first-child").addClass("active");
}
$(".cs_FlrFrame").on("change", ".cs_lable input", function () {
  flr_smart();
});
var Get_urlValues = new URLSearchParams(window.location.search),
  tabFltr = "all",
  pageUrl = window.location.href,
  pageUrlEle = "",
  UrlEle = "?",
  urlParam = false,
  pageFlag = false,
  IndustryIndex = "",
  countryIndex = "",
  businessIndex = "",
  usersIndex = "";
function flr_smart() {
  var N = [],
    I = [],
    o = [],
    s = [],
    r = "",
    w = "",
    v = "",
    n = "",
    x = [],
    c = [],
    M = [],
    L = [],
    K = [],
    H = [];
  var l = $(".cs_lable input:checked"),
    m = $(".zcs_flrReset, .zcs_flrclose"),
    a = $(".flr_icon_close");
  if (l.length > 0) {
    m.addClass("active");
    a.removeClass("active");
  } else {
    m.removeClass("active");
    a.addClass("active");
  }
  l.each(function () {
    var e = $(this);
    var f = e.attr("name");
    if (f == "industry") {
      N.push(e.attr("data-industry"));
    } else {
      if (f == "country") {
        I.push(e.attr("data-country"));
      } else {
        if (f == "users") {
          o.push(e.attr("data-users"));
        } else {
          if (f == "business") {
            s.push(e.attr("data-business"));
          } else {
            return 0;
          }
        }
      }
    }
  });
  r = N.length;
  w = I.length;
  v = o.length;
  n = s.length;
  flr_tab = 1;
  if (UrlEle == "&") {
    UrlEle1 = "&";
  } else {
    UrlEle1 = "?";
  }
  if (r > 0) {
    IndustryIndex = "Industry=" + N.join("%7C");
    UrlEle1 = "&";
  } else {
    IndustryIndex = "";
  }
  if (w > 0) {
    countryIndex = "Region=" + I.join("%7C");
    UrlEle1 = "&";
  } else {
    countryIndex = "";
  }
  if (v > 0) {
    usersIndex = "Users=" + o.join("%7C");
    UrlEle1 = "&";
  } else {
    usersIndex = "";
  }
  if (n > 0) {
    businessIndex = "business=" + s.join("%7C");
    UrlEle1 = "&";
  } else {
    businessIndex = "";
  }
  var j = tidy_Data.customers.length;
  var k = [r, w, v, n, flr_tab];
  for (var z = 0; z < r; z++) {
    for (var y = 0; y < j; y++) {
      var J = tidy_Data.customers[y].industry.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (N[z] == J) {
        c.push(y);
      }
    }
  }
  for (var z = 0; z < w; z++) {
    for (var y = 0; y < j; y++) {
      var b = tidy_Data.customers[y].region.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (I[z] == b) {
        M.push(y);
      }
    }
  }
  for (var z = 0; z < n; z++) {
    for (var y = 0; y < j; y++) {
      var A = tidy_Data.customers[y].business_process.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (s[z] == A) {
        H.push(y);
      }
    }
  }
  for (var z = 0; z < v; z++) {
    for (var y = 0; y < j; y++) {
      var d = tidy_Data.customers[y].user_count.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (o[z] == d) {
        L.push(y);
      }
    }
  }
  for (var z = 0; z < flr_tab; z++) {
    for (var y = 0; y < j; y++) {
      if (tab_fltr == tidy_Data.customers[y].cs_label) {
        K.push(y);
      }
    }
  }
  var B = [];
  for (var t = 0; t < j; t++) {
    B.push(t);
  }
  var G, F, E, D, C;
  G = c.length > 0 ? c : (c = B);
  F = M.length > 0 ? M : (M = B);
  E = L.length > 0 ? L : (L = B);
  D = K.length > 0 ? K : (K = B);
  C = H.length > 0 ? H : (H = B);
  x = G.filter(function (e) {
    return F.includes(e) && E.includes(e) && D.includes(e) && C.includes(e);
  });
  error_prevent(x, k);
  zcs_pagination(x);
}
function error_prevent(l, m) {
  var n = [],
    o = [],
    f = [],
    c = [];
  for (var e = 0; e < l.length; e++) {
    var g = l[e];
    var k = tidy_Data.customers[g].region.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      ),
      d = tidy_Data.customers[g].user_count.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
    if (
      tidy_Data.customers[g].business_process != "" &&
      tidy_Data.customers[g].business_process != undefined
    ) {
      ele_business = tidy_Data.customers[g].business_process.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
    } else {
      ele_business = "";
    }
    ele_Ind = tidy_Data.customers[g].industry.replace(
      /[&\/\\#, +()$~%.'":*?<>{}]/g,
      "_"
    );
    n.push(ele_Ind);
    o.push(k);
    c.push(d);
    f.push(ele_business);
  }
  var h = [],
    j = [],
    b = [],
    a = [];
  $.each(n, function (p, q) {
    if ($.inArray(q, h) === -1) {
      h.push(q);
    }
  });
  $.each(o, function (p, q) {
    if ($.inArray(q, j) === -1) {
      j.push(q);
    }
  });
  $.each(c, function (p, q) {
    if ($.inArray(q, a) === -1) {
      a.push(q);
    }
  });
  $.each(f, function (p, q) {
    if ($.inArray(q, b) === -1) {
      if (q != "") {
        b.push(q);
      }
    }
  });
  $(".cs_lable").removeClass("zct_enable zct_disable");
  for (var e = 0; e < j.length; e++) {
    $(".cs_lable input[data-country =" + j[e] + "]")
      .parent()
      .addClass("zct_enable");
  }
  for (var e = 0; e < a.length; e++) {
    $(".cs_lable input[data-users =" + a[e] + "]")
      .parent()
      .addClass("zct_enable");
  }
  for (var e = 0; e < h.length; e++) {
    $(".cs_lable input[data-industry =" + h[e] + "]")
      .parent()
      .addClass("zct_enable");
  }
  for (var e = 0; e < b.length; e++) {
    $(".cs_lable input[data-business =" + b[e] + "]")
      .parent()
      .addClass("zct_enable");
  }
  if (
    (m[0] >= 1 && m[1] >= 1) ||
    (m[1] >= 1 && m[2] >= 1) ||
    (m[2] >= 1 && m[3] >= 1) ||
    (m[3] >= 1 && m[0] >= 1) ||
    (m[3] >= 1 && m[2] >= 1 && m[1] >= 1 && m[0] >= 1)
  ) {
    $(".cs_country, .cs_users, .cs_industry, .cs_business")
      .find(".cs_lable:not(.zct_enable)")
      .addClass("zct_disable");
  } else {
    if (m[2] < 1 && m[0] < 1) {
      $(".cs_business, .cs_industry")
        .find(".cs_lable:not(.zct_enable)")
        .addClass("zct_disable");
    } else {
      if (m[1] < 1 && m[0] < 1) {
        $(".cs_country, .cs_industry")
          .find(".cs_lable:not(.zct_enable)")
          .addClass("zct_disable");
      } else {
        if (m[2] < 1 && m[1] < 1) {
          $(".cs_country, .cs_business")
            .find(".cs_lable:not(.zct_enable)")
            .addClass("zct_disable");
        } else {
          if (m[3] < 1 && m[1] < 1) {
            $(".cs_country, .cs_users")
              .find(".cs_lable:not(.zct_enable)")
              .addClass("zct_disable");
          } else {
            if (m[3] < 1 && m[2] < 1) {
              $(".cs_business, .cs_users")
                .find(".cs_lable:not(.zct_enable)")
                .addClass("zct_disable");
            } else {
              if (m[0] < 1 && m[3] < 1) {
                $(".cs_industry, .cs_users")
                  .find(".cs_lable:not(.zct_enable)")
                  .addClass("zct_disable");
              }
            }
          }
        }
      }
    }
  }
}
function flr_Reset() {
  $(".cs_lable input:checked").trigger("click");
  var a = 0;
  flr_EditTags(a);
}
function flr_EditClose() {
  var a = 0;
  flr_EditTags(a);
  flr_Reset();
}
function flr_EditTags(b) {
  var c = b,
    a = $(".Tags_filter"),
    d = $(".cs_FilterBox");
  if (c <= 0) {
    a.removeClass("Flr_active");
    d.addClass("Flr_active");
  } else {
    d.removeClass("Flr_active");
    a.addClass("Flr_active");
  }
}
function Flr_TagShow() {
  var b = "";
  var f,
    g,
    a = $(".cs_lable input:checked");
  g = a.length;
  if (g > 0) {
    for (var e = 0; e < g; e++) {
      f = a.eq(e).attr("name");
      var d,
        c = a.eq(e).parent().text();
      d =
        '<span class="flr_tags" data-tag=' +
        f +
        ">" +
        c +
        '<span class="flr_tagclose"></span></span>';
      b += d;
    }
    $(".flr_tagtxt").html(b);
  }
  flr_EditTags(g);
}
$(document).on("click", ".flr_tagclose", function () {
  var c,
    a,
    b = $(this).parent(".flr_tags"),
    d = $(".flr_tags").length;
  if (d <= 1) {
    $(".flr_EditClose").trigger("click");
  } else {
    c = b.text();
    a = b.attr("data-tag");
    c = c.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    $(".cs_lable input[data-" + a + "=" + c + "]").trigger("click");
  }
  b.remove();
});
var tab_fltr = "all";
function social_flr(b, f, e) {
  e.stopPropagation();
  var d = $(f),
    a = b,
    c = [];
  d.addClass("active").siblings().removeClass("active");
  if (a == "all") {
    tab_fltr = "all";
  } else {
    if (a == "review") {
      tab_fltr = "Review";
    } else {
      if (a == "social") {
        tab_fltr = "Social";
      } else {
        if (a == "recent") {
          tab_fltr = "recent";
        } else {
          if (a == "testimonial") {
            tab_fltr = "Testimonials";
          } else {
            if (a == "casestudy") {
              tab_fltr = "Case study";
            } else {
              if (a == "video") {
                tab_fltr = "Videos";
              } else {
                return;
              }
            }
          }
        }
      }
    }
  }
  flr_smart();
}
function ViewLess(a) {
  pageFltr = true;
  pageTags = 1;
  $(".pgi_prev, .pgi_nxt").show();
  $(".cs_viewall").addClass("active");
  $(".cs_viewless").removeClass("active");
  $(".pgi_numbers[data-num=" + pageTags + "]").trigger("click");
  pageRendering(drained_data, event);
}
function urlSearch_param() {
  tabFltr = Get_urlValues.get("tab_fltr");
  if (pageUrl.indexOf("?") != -1) {
    var a = pageUrl.split("?")[1];
    a = a.split("&")[0];
    if (a.indexOf("src=") != -1) {
      pageUrlEle = pageUrlEle + "?" + a;
      UrlEle = "&";
    } else {
      pageUrlEle = pageUrl.split("?")[0];
    }
  }
  if (Get_urlValues.has("Industry")) {
    pageFlag = true;
    var d = Get_urlValues.get("Industry").split("|");
    for (i = 0; i < d.length; i++) {
      $('.cs_lable input[data-industry="' + d[i] + '"]').trigger("click");
    }
  }
  if (Get_urlValues.has("Region")) {
    pageFlag = true;
    var b = Get_urlValues.get("Region").split("|");
    for (i = 0; i < b.length; i++) {
      $('.cs_lable input[data-country="' + b[i] + '"]').trigger("click");
    }
  }
  if (Get_urlValues.has("Users")) {
    pageFlag = true;
    var c = Get_urlValues.get("Users").split("|");
    for (i = 0; i < c.length; i++) {
      $('.cs_lable input[data-users="' + c[i] + '"]').trigger("click");
    }
  }
  Flr_TagShow();
}
var pageTagFlag = false;
function urlBasedActive() {
  pageTagFlag = true;
  view_fltr = urlValuesGet.get("viewEle");
  tabFltr = urlValuesGet.get("tab_fltr");
  if (pageUrl.indexOf("?") != -1) {
    var a = pageUrl.split("?")[1];
    a = a.split("&")[0];
    if (a.indexOf("src=") != -1) {
      pageUrlEle = pageUrlEle + "?" + a;
      UrlEle = "&";
    }
  }
  if (
    urlValuesGet.has("tab_fltr") &&
    urlValuesGet.has("page") &&
    view_fltr == "less"
  ) {
    pageTags = parseInt(urlValuesGet.get("page"));
    $('.smart_filter[data-attr="' + tabFltr + '"]').trigger("click");
  } else {
    if (urlValuesGet.has("tab_fltr") && view_fltr == "all") {
      pageFlag = true;
      pageTags = 0;
      $('.smart_filter[data-attr="' + tabFltr + '"]').trigger("click");
    } else {
      page_rendering();
    }
  }
}
