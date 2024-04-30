var dev_W = $(window).outerWidth();
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
  tidy_Data,
  cs_indus = "",
  cs_indus1 = "",
  cs_user = "",
  cs_cntry = "";
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
      cs_cntryArry.push(tidy_Data.customers[b].country);
    });
    Flr_rendering();
    urlBasedActive();
    if (!urlValuesGet.has("tab_fltr")) {
      zcs_pagination(tidy_Data);
    }
  });
});
var drained_data = "",
  fixed_length = 12;
function zcs_pagination(k) {
  drained_data = k;
  var g = k.length;
  if (g != undefined && g != 0) {
    g = g;
    if ($(".cs_viewless").hasClass("active")) {
      $(".cs_pagination").show();
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
  t = $(n);
  c = t.attr("data-num");
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
    $(".cs_pagination").hide();
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
    fixed_length = 10;
  } else {
    if (dev_W <= 600) {
      showEleRow = 1;
      fixed_length = 8;
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
      pageUrlEle + UrlEle + a + "tab_fltr=" + b + "&viewEle=" + viewFltr
    );
  }
  urlEleActive = true;
  if (typeof e != "undefined") {
    d = e;
  }
  $(".cs_detailLst").empty();
  $.each(tidy_Data.customers, function (t) {
    if (d.length == 0) {
      var l = t;
    } else {
      if (d.length > 0 && d.includes(t)) {
        var l = t;
      } else {
        return true;
      }
    }
    var p =
      '<div class="vid_spkrGrp"><span class="vid_spkrname">' +
      tidy_Data.customers[l].cs_name +
      '</span><span class="vid_spkrdesig">' +
      tidy_Data.customers[l].cs_company +
      "</span></div>";
    if (tidy_Data.customers[l].cs_img.length == 0) {
      var w = "zcs_spkrNo";
    } else {
      var w = "zcs_spkrYes";
    }
    if (
      tidy_Data.customers[l].cs_label == "Review" ||
      tidy_Data.customers[l].cs_label == "Social"
    ) {
      var g = "review_spkr";
    } else {
      g = "";
    }
    if (
      (tidy_Data.customers[l].cs_name.length == 0 &&
        tidy_Data.customers[l].cs_company.length == 0) ||
      tidy_Data.customers[l].cs_label == "Video"
    ) {
      var q = "";
    } else {
      q =
        '<div class="cs_skrGrp ' +
        g +
        '"><span class="skrGrp_lft ' +
        w +
        '">' +
        tidy_Data.customers[l].cs_img +
        '</span><span class="skrGrp_rht"><span class="skrGrp_name">' +
        tidy_Data.customers[l].cs_name +
        '</span><span class="skrGrp_desig">' +
        tidy_Data.customers[l].cs_company +
        "</span></span></div>";
    }
    if (tidy_Data.customers[l].cs_label == "Video") {
      var k =
        '<div class="cs_videoSec vimvideo" data-video="' +
        tidy_Data.customers[l].vid_url +
        '">' +
        p +
        '<img class="vid_thumb" src="' +
        tidy_Data.customers[l].videothumb +
        '" alt="' +
        tidy_Data.customers[l].cs_name +
        ' | Zoho CRM Customer" width="350px" height="220px"></div>';
    } else {
      k = "";
    }
    if (
      tidy_Data.customers[l].cs_label == "review" ||
      tidy_Data.customers[l].cs_label == "social"
    ) {
      var s =
        '<div><a class="zcs_sites" href="' +
        tidy_Data.customers[l].read_more +
        '" target="_blank" rel="noopener">' +
        tidy_Data.customers[l].link_txt +
        "</a></div>";
    } else {
      s =
        '<div><a class="zcs_lnk" href="' +
        tidy_Data.customers[l].read_more +
        '" target="_blank" rel="noopener">' +
        tidy_Data.customers[l].link_txt +
        '<span class="arrow"></span></a></div>';
    }
    var r = "",
      j,
      h = tidy_Data.customers[l].cs_msg.length;
    if (h > 320) {
      if (h - 320 > 100) {
        j =
          '<div class="zct_Desc_grp showmore">' +
          tidy_Data.customers[l].cs_msg +
          '</div><span class="zct_showmore" onclick="zct_showmore(this)">Show more...</span>';
      } else {
        j =
          '<div class="zct_Desc_grp">' +
          tidy_Data.customers[l].cs_msg +
          "</div>";
      }
    } else {
      j =
        '<div class="zct_Desc_grp">' + tidy_Data.customers[l].cs_msg + "</div>";
    }
    if (tidy_Data.customers[l].cs_logo != "") {
      r = tidy_Data.customers[l].cs_logo;
    } else {
      if (tidy_Data.customers[l].cs_logoTitle != "") {
        r =
          '<span class="cust_logo_txt">' +
          tidy_Data.customers[l].cs_logoTitle +
          "</span>";
      }
    }
    cs_oneData =
      '<li class="cs_lstBx flr_show ' +
      tidy_Data.customers[l].country_code +
      " " +
      tidy_Data.customers[l].cs_label +
      '"><div class="cs_lstInner"><div class="cs_testiSec">' +
      r +
      j +
      s +
      q +
      "</div> " +
      k +
      "</div></li>";
    var v,
      u,
      m,
      o = [];
    if (dev_W > 1024) {
      v = 3;
    } else {
      if (dev_W <= 1024 && dev_W > 768) {
        v = 2;
      } else {
        v = 1;
      }
    }
    for (var l = 0; l < v; l++) {
      var n = $(".cs_detailLst:eq(" + l + ")").outerHeight();
      o.push(n);
    }
    m = Math.min.apply(Math, o);
    u = o.indexOf(m);
    $(".cs_detailLst:eq(" + u + ")").append(cs_oneData);
  });
  if (!First_flag && dev_W > 768) {
    var f = 73;
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
      g.find("img").attr("src").length == 0
    ) {
      g.css("display", "none");
    } else {
      g.parent().find(".skrGrp_lft").css("display", "none");
    }
  });
  setTimeout(function () {
    zcp_lazy();
  }, 200);
}
function Flr_rendering() {
  var b = $(window).outerWidth();
  var e = [],
    d = [],
    h = [];
  $.each(cs_indusArry, function (j, k) {
    if ($.inArray(k, e) === -1) {
      e.push(k);
    }
  });
  $.each(cs_cntryArry, function (j, k) {
    if ($.inArray(k, d) === -1) {
      d.push(k);
    }
  });
  $.each(cs_userArry, function (j, k) {
    if ($.inArray(k, h) === -1) {
      h.push(k);
    }
  });
  e.sort();
  d.sort();
  h.sort();
  var c = e.length / 2;
  c = Math.ceil(c);
  for (var a = 0; a < c; a++) {
    var f = e[a].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    cs_indus +=
      '<span class="cs_industry"><label class="cs_lable"><input type="checkbox" name="industry" data-industry="' +
      f +
      '">' +
      e[a] +
      '<span class="cs_sprt cs_check"></span></label></span>';
  }
  for (var a = c; a < e.length; a++) {
    var f = e[a].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    cs_indus1 +=
      '<span class="cs_industry"><label class="cs_lable"><input type="checkbox" name="industry" data-industry="' +
      f +
      '">' +
      e[a] +
      '<span class="cs_sprt cs_check"></span></label></span>';
  }
  cs_user =
    '<span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="50_and_below">50 and below<span class="cs_sprt cs_check"></span></label></span><span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="51-200">51-200<span class="cs_sprt cs_check"></span></label></span><span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="201-500">201-500<span class="cs_sprt cs_check"></span></label></span><span class="cs_users"><label class="cs_lable"><input type="checkbox" name="users" data-users="Above_500">Above 500<span class="cs_sprt cs_check"></span></label></span>';
  for (var g = 0; g < d.length; g++) {
    var f = d[g].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
    cs_cntry +=
      '<span class="cs_country"><label class="cs_lable"><input type="checkbox" name="country" data-country="' +
      f +
      '">' +
      d[g] +
      '<span class="cs_sprt cs_check"></span></label></span>';
  }
  $("#zcs_country").append(cs_cntry);
  $("#zcs_users").append(cs_user);
  $("#zcs_industry").append(cs_indus);
  $("#zcs_industry1").append(cs_indus1);
  if (b < 768) {
    $(".cs_FilterLst:first-child").addClass("active");
  }
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
  usersIndex = "";
function flr_smart() {
  var Q = [],
    J = [],
    t = [],
    v = "",
    y = "",
    x = "",
    z = [],
    l = [],
    P = [],
    O = [],
    M = [];
  var o = $(".cs_lable input:checked"),
    s = $(".zcs_flrReset, .zcs_flrclose"),
    j = $(".flr_icon_close");
  if (o.length > 0) {
    s.addClass("active");
    j.removeClass("active");
  } else {
    s.removeClass("active");
    j.addClass("active");
  }
  o.each(function () {
    var a = $(this);
    var b = a.attr("name");
    if (b == "industry") {
      Q.push(a.attr("data-industry"));
    } else {
      if (b == "country") {
        J.push(a.attr("data-country"));
      } else {
        if (b == "users") {
          t.push(a.attr("data-users"));
        } else {
          return 0;
        }
      }
    }
  });
  v = Q.length;
  y = J.length;
  x = t.length;
  flr_tab = 1;
  if (UrlEle == "&") {
    UrlEle1 = "&";
  } else {
    UrlEle1 = "?";
  }
  if (v > 0) {
    IndustryIndex = UrlEle1 + "Industry=" + Q.join("%7C");
    UrlEle1 = "&";
  } else {
    IndustryIndex = "";
  }
  if (y > 0) {
    countryIndex = UrlEle1 + "Region=" + J.join("%7C");
    UrlEle1 = "&";
  } else {
    countryIndex = "";
  }
  if (x > 0) {
    usersIndex = UrlEle1 + "Users=" + t.join("%7C");
    UrlEle1 = "&";
  } else {
    usersIndex = "";
  }
  var n = tidy_Data.customers.length;
  var r = [v, y, x, flr_tab];
  for (var B = 0; B < v; B++) {
    for (var A = 0; A < n; A++) {
      var L = tidy_Data.customers[A].industry.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (Q[B] == L) {
        l.push(A);
      }
    }
  }
  for (var B = 0; B < y; B++) {
    for (var A = 0; A < n; A++) {
      var k = tidy_Data.customers[A].country.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (J[B] == k) {
        P.push(A);
      }
    }
  }
  for (var B = 0; B < x; B++) {
    for (var A = 0; A < n; A++) {
      var m = tidy_Data.customers[A].user_count.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
      if (t[B] == m) {
        O.push(A);
      }
    }
  }
  for (var B = 0; B < flr_tab; B++) {
    for (var A = 0; A < n; A++) {
      if (tab_fltr == tidy_Data.customers[A].cs_label) {
        M.push(A);
      }
    }
  }
  var C = [];
  for (var w = 0; w < n; w++) {
    C.push(w);
  }
  var G, F, E, D;
  G = l.length > 0 ? l : (l = C);
  F = P.length > 0 ? P : (P = C);
  E = O.length > 0 ? O : (O = C);
  D = M.length > 0 ? M : (M = C);
  for (var N = 0; N < G.length; N++) {
    for (var K = 0; K < F.length; K++) {
      for (var I = 0; I < E.length; I++) {
        for (var H = 0; H < D.length; H++) {
          if (G[N] == F[K] && F[K] == E[I] && E[I] == D[H]) {
            z.push(G[N]);
          }
        }
      }
    }
  }
  error_prevent(z, r);
  zcs_pagination(z);
}
function error_prevent(h, k) {
  var m = [],
    n = [],
    b = [];
  for (var d = 0; d < h.length; d++) {
    var e = h[d];
    var j = tidy_Data.customers[e].country.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      ),
      c = tidy_Data.customers[e].user_count.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      ),
      l = tidy_Data.customers[e].industry.replace(
        /[&\/\\#, +()$~%.'":*?<>{}]/g,
        "_"
      );
    m.push(l);
    n.push(j);
    b.push(c);
  }
  var f = [],
    g = [],
    a = [];
  $.each(m, function (o, p) {
    if ($.inArray(p, f) === -1) {
      f.push(p);
    }
  });
  $.each(n, function (o, p) {
    if ($.inArray(p, g) === -1) {
      g.push(p);
    }
  });
  $.each(b, function (o, p) {
    if ($.inArray(p, a) === -1) {
      a.push(p);
    }
  });
  $(".cs_lable").removeClass("zct_enable zct_disable");
  for (var d = 0; d < g.length; d++) {
    $(".cs_lable input[data-country =" + g[d] + "]")
      .parent()
      .addClass("zct_enable");
  }
  for (var d = 0; d < a.length; d++) {
    $(".cs_lable input[data-users =" + a[d] + "]")
      .parent()
      .addClass("zct_enable");
  }
  for (var d = 0; d < f.length; d++) {
    $(".cs_lable input[data-industry =" + f[d] + "]")
      .parent()
      .addClass("zct_enable");
  }
  if (
    (k[0] >= 1 && k[1] >= 1) ||
    (k[1] >= 1 && k[2] >= 1) ||
    (k[2] >= 1 && k[0] >= 1) ||
    (k[2] >= 1 && k[0] >= 1 && k[1] >= 1) ||
    (k[2] < 1 && k[0] < 1 && k[1] < 1)
  ) {
    $(
      ".cs_country .cs_lable:not(.zct_enable), .cs_users .cs_lable:not(.zct_enable), .cs_industry .cs_lable:not(.zct_enable)"
    ).addClass("zct_disable");
  } else {
    if (k[2] < 1 && k[0] < 1) {
      $(
        ".cs_users .cs_lable:not(.zct_enable), .cs_industry .cs_lable:not(.zct_enable)"
      ).addClass("zct_disable");
    } else {
      if (k[1] < 1 && k[0] < 1) {
        $(
          ".cs_country .cs_lable:not(.zct_enable), .cs_industry .cs_lable:not(.zct_enable)"
        ).addClass("zct_disable");
      } else {
        if (k[2] < 1 && k[1] < 1) {
          $(
            ".cs_country .cs_lable:not(.zct_enable), .cs_users .cs_lable:not(.zct_enable)"
          ).addClass("zct_disable");
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
            tab_fltr = "Testimonial";
          } else {
            if (a == "casestudy") {
              tab_fltr = "casestudy";
            } else {
              return;
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
  $(".cs_pagination").show();
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
