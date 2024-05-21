$ = jQuery.noConflict();
$(".zw-global-header").append('<div class="header"> <a class="logo" href=""> fayas </a> <div class="signing"></div> </div> <div class="product-header-top slide"> <div class="content-wrap"> <div class="product-title"><a href="/' + $("body").attr("data-prdname") + '/">' + $("body").attr("data-prdname-display") + '</a></div> <div class="zgh-accounts"><a href="https://accounts.zoho.com/signin?servicename=Zohohome&amp;signupurl=" class="zgh-login" style="display: none;">SIGN IN</a><a href="/signup.html?src=index1" class="zgh-signup" style="display: inline-block;">' + Drupal.t("Get Started") + '</a></div> <div class="product-nav-links product-nav-links-new"></div> </div> </div>');
$(".login-text .login").addClass("zgh-login");
if ($(".z-product").length > 0) {
    if ($(".loggedin-userinfo").length < 1) {
        $(".z-product").after('<div class="loggedin-userinfo" style="display: none;"></div>')
    }
} (typeof CountryCode == "undefined") ? (CountryCode = "US") : "";
var allProduct = ["home", "CRM", "Campaigns", "ContactManager", "Forms", "Sites", "SalesIQ", "Survey", "Social", "Assist", "Support", "BugTracker", "Connect", "Docs", "Mail", "Meeting", "Projects", "ShowTime", "Vault", "Chat", "Books", "Invoice", "Subscriptions", "Expense", "Checkout", "People", "Recruit", "Creator", "Reports", "Motivator", "Accounts", "AppCreator", "mdm", "Seminar", "crmplus", "wiki", "Desk", "Cliq", "Developer", "SalesInbox", "Sign", "Calendar", "WorkPlace", "Events", "officeapi", "Sprints", "pagesense", "flow", "show", "sheet", "writer", "notebook", "one", "partnerstore", "backstage", "marketplace", "Commerce", "analytics-plus", "teamdrive", "officeplatform", "peopleplus", "inventory", "workerly", "zohoorchestly", "phonebridge", "knit", "analytics", "patchmanagerplus", "mail360", "marketingautomation", "workdrive", "contacts", "ziasearch", "bookings", "office", "deluge", "remoteaccessplus", "dataprep", "creatorplus", "wallet", "docscanner", "commerceplus", "fsm", "learn", "identity-management", "log360-cloud", "ink", "catalyst", "analyticsplusplugin", "it-analytics", "zohoscanner", "apptics", "Bigin", "annotator", "teaminbox", "lens", "Transmail", "it-management", "webinar", "remotely", "telephony", "covid", "partners", "classes", "toolkit", "ZohoPOS", "backtowork", "zia"];
var allProductCRM = ["-", "CRM", "Campaigns", "-", "-", "-", "-", "Survey", "-", "Assist", "-", "BugTracker", "-", "Docs", "Mail", "Meeting", "Projects", "-", "-", "-", "Books", "Invoice", "Subscriptions", "Expense", "-", "People", "Recruit", "Creator", "Reports", "Motivator", "-", "AppCreator", "-", "-", "CRMPlus", "Wiki", "Desk", "-", "-", "-", "Sign", "-", "Workplace", "-", "-", "-", "PageSense", "Flow", "-", "-", "-", "-", "One", "-", "-", "-", "Commerce", "-", "TeamDrive", "-", "-", "Inventory", "Workerly", "Orchestly", "-", "-", "Analytics", "-", "-", "MarketingAutomation", "WorkDrive", "-", "-", "Bookings", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
// var nameServices = [
//     ["ZohoHome", "ZohoCRM", "ZohoCampaigns", "ZohoContactManager", "ZohoForms", "ZohoSites", "LiveDesk", "ZohoSurvey", "ZohoSocial", "ZohoAssist", "ZohoSupport", "ZohoBugTracker", "ZohoPulse", "ZohoPC", "VirtualOffice", "ZohoMeeting", "ZohoProjects", "ZohoShowtime", "ZohoVault", "ZohoChat", "ZohoBooks", "ZohoInvoice", "ZohoSubscriptions", "ZohoExpense", "ZohoCheckout", "zohopeople", "ZohoRecruit", "ZohoCreator", "ZohoReports", "ZohoMotivator", "", "", "", "", "CRMPlus", "ZohoWiki", "ZohoSupport", "ZohoChat", "ZohoCRM", "SalesInbox", "ZohoSign", "ZohoCalendar", "VirtualOffice", "", "OfficeAPI", "ZohoSprints", "PageSense", "ZohoFlow", "ZohoShow", "ZohoSheet", "ZohoWriter", "NoteBook", "ZohoOne", "", "ZohoBackStage", "ZohomarketPlace", "ZohoCommerce", "", "TeamDrive", "OfficeAPI", "Peopleplus", "", "ZohoWorkerly", "Orchestly", "phonebridge", "zohostreamline", "ZohoReports", "PatchManagerPlusCloud", "mail360", "zohomarketinghub", "TeamDrive", "zohoContacts", "ZohoSearch", "ZohoBookings", "office", "deluge", "", "ZohoDataprep", "ZohoCreatorPlus", "wallet", "docscanner", "ZohoCommerce", "", "ZohoLearn", "IDMPOD", "logs360cloud", "ZohoInk", "", "", "", "", "", "ZohoBigin", "", "", "ZohoLens", "", "", "", "", "", "", "", "", ""]
// ];
var oldUSDvalue = ["DZ", "AO", "AI", "AG", "AR", "AW", "BS", "BB", "BZ", "BJ", "BM", "BO", "BW", "BR", "BF", "BI", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CD", "CR", "CW", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "ET", "FK", "PF", "GA", "GM", "GH", "GD", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "IQ", "JM", "JP", "JO", "KE", "LB", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MX", "MS", "MA", "MZ", "NA", "KZ", "NI", "NE", "NG", "OM", "PS", "PA", "PY", "PE", "PN", "PR", "RE", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "ST", "SN", "SL", "SX", "SB", "SO", "ZA", "SS", "SR", "SJ", "SZ", "TZ", "TG", "TK", "TT", "TN", "TC", "UG", "UY", "VE", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX", "BQ", "BV", "GF", "TF", "GP", "MQ", "GS"];
var oldUSDprds = ["analytics", "assist", "backstage", "bookings", "bugtracker", "campaigns", "commerce", "connect", "creator", "creatorplus", "desk", "flow", "forms", "lens", "marketingautomation", "officeplatform", "one", "people", "peopleplus", "recruit", "sign", "sites", "social", "sprints", "survey", "vault", "workdrive", "workerly", "crm", "crmplus", "startups"];
var stateupdate = [];
var allProductlowerCase = [];
for (var i = 0; i < allProduct.length; i++) {
    allProductlowerCase[i] = allProduct[i].toLowerCase()
}
var haveAccount = Drupal.t("Have a Zoho Account?"),
    signuplogin = Drupal.t("SIGN IN");
var accessZoho = Drupal.t("Access Zoho"),
    zPrdSignupLinkText, ss = 0,
    android = location.href.match(/#android$/) || null != navigator.userAgent.match(/Android/i),
    getDomain = document.domain,
    splitUrl = getDomain.split("."),
    domainOne = splitUrl.pop();
var Zdomain = splitUrl.pop();
var langsrc = "/";
var productName = "home";
"zohocorp" == Zdomain && (Zdomain = "zoho");
var getusername, zPrdSignupLink = "",
    zPrdLoginLink = "",
    ZdomainName = "zoho",
    ZcheckDomain = "",
    _globalAccess = "",
    userAgent = navigator.userAgent || navigator.vendor || window.opera,
    newFooter = "",
    currentUrlLang = "",
    localUrlLang = "",
    _com = "com",
    _eu = "eu",
    _lhref = window.location.href,
    isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
var onlycom = !1,
    _pathName = window.location.pathname,
    dcenabled = !0,
    nondc = !0;
var dcdomainOne = domainOne;
var dcVal = "0",
    myimagebool = 1,
    currentYear = "2024",
    creativeLang = "",
    knowprd = typeof document.getElementsByTagName("body")[0].getAttribute("data-prdname");
var _preZ = "",
    _preZC = "",
    _zcmsZC = "",
    _zcopr = "",
    _lz = "",
    _preccms = "",
    _prewww = "prewww";
if (Zdomain == _zcopr) {
    Zdomain = ""
}
if (Zdomain == "localbigin" || Zdomain == "localqntrl") {
    Zdomain = "";
    ZdomainName = ""
}
var ipArr = ["172.24.125.24", "172.22.152.98", "172.24.105.146", "172.22.110.12"];
for (var i = 0; i < ipArr.length; i++) {
    if (_lhref.indexOf(ipArr[i]) > -1) {
        Zdomain = "";
        domainOne = "com"
    }
}
var ZUrlDomain = Zdomain;
var langArr = ["en", "es-xl", "pt-br", "de", "fr", "nl", "jp", "ar", "id", "th", "vi", "zh-hans", "fr-ca", "hi", "zh-hant", "hi-in", "he", "it"];
var onlylocal = ["ko", "ru", "tr"];
var usedLanArr = ["fr", "de", "pt-br", "es-xl", "nl"];
var locallang = ["en-apac", "en-in", "en-br", "en-mea", "en-sg", "en-za", "en-au", "en-ke", "en-ch"];
var lancountry = {
    en: "English",
    fr: "FranÃ§ais",
    de: "Deutsch",
    "es-xl": "EspaÃ±ol",
    "pt-br": "PortuguÃªs (Brasil)",
    jp: "æ—¥æœ¬èªž",
    nl: "Nederlands",
    "zh-hans": "ç®€ä½“ä¸­æ–‡",
    id: "Bahasa Indonesia",
    th: "à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
    ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    vi: "Tiáº¿ng Viá»‡t",
    ko: "í•œêµ­ì–´",
    it: "Italiano",
    ru: "Ð ÑƒÑÑÐºÐ¸Ð¹",
    tr: "TÃ¼rkÃ§e",
    he: "×¢×‘×¨×™×ª",
    "fr-ca": "FranÃ§ais (Canada)",
    "en-apac": "English",
    "en-in": "English (India)",
    "en-br": "English (Brasil)",
    "en-mea": "English (MEA)",
    "en-sg": "English (SG)",
    "en-za": "English (ZA)",
    "en-au": "English (AU)",
    "en-ke": "English (KE)",
    "en-ch": "English (CH)",
    "zh-hant": "ç¹ä½“ä¸­æ–‡",
    hi: "à¤¹à¤¿à¤¨à¥à¤¦à¥€",
    "hi-in": "à¤¹à¤¿à¤¨à¥à¤¦à¥€"
};
var bannertext = {
    en: "Hello ::: Now you can navigate",
    fr: "Bonjour ::: Vous pouvez maintenant naviguer en",
    de: "Wechseln ::: Diese Seite ist auch auf Deutsch verfÃ¼gbar",
    "es-xl": "Hola ::: Â¡Ahora puede navegar en",
    "pt-br": "OlÃ¡ ::: Agora vocÃª pode navegar em",
    jp: "ç§»å‹•ã™ã‚‹ ::: æ—¥æœ¬èªžã®å…¬å¼ã‚µã‚¤ãƒˆã‚’ã”åˆ©ç”¨ã„ãŸã ã‘ã¾ã™ã€‚",
    nl: "Klik hier ::: Navigeer nu in het",
    "zh-hans": "Hello ::: Now you can navigate",
    id: "Hello ::: Sekarang Anda bisa berselancar dalam",
    th: "à¸ªà¸§à¸±à¸ªà¸”à¸µ ::: à¸•à¸­à¸™à¸™à¸µà¹‰à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸”à¸¹à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹€à¸›à¹‡à¸™à¸ à¸²à¸©à¸²à¹„à¸—à¸¢à¹„à¸”à¹‰à¹à¸¥à¹‰à¸§",
    ar: "ÙŠÙ…ÙƒÙ†ÙƒÙ… Ø§Ù„Ø¢Ù† Ø§Ù„ØªØµÙØ­ Ø¨Ø§Ù„Ù„ØºØ© ::: Ù…Ø±Ø­Ø¨Ø§Ù‹",
    vi: "Xin ChÃ o ::: BÃ¢y giá» báº¡n cÃ³ thá»ƒ xem trang nÃ y báº±ng",
    ko: "Hello ::: Now you can navigate",
    it: "Ciao ::: Ora puoi navigare",
    ru: "Hello ::: Now you can navigate",
    tr: "Hello ::: Now you can navigate",
    he: "Hello ::: Now you can navigate",
    "fr-ca": "Hello ::: Now you can navigate",
    "en-apac": "Hello ::: Now you can navigate",
    "en-in": "Hello ::: Now you can navigate",
    "en-br": "Hello ::: Now you can navigate",
    "en-mea": "Hello ::: Now you can navigate",
    "en-sg": "Hello ::: Now you can navigate",
    "zh-hant": "Hello ::: Now you can navigate",
    hi: "à¤¨à¤®à¤¸à¥à¤•à¤¾à¤° ::: à¤…à¤¬ à¤†à¤ª à¤¨à¥‡à¤µà¤¿à¤—à¥‡à¤Ÿ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
    "hi-in": "à¤¨à¤®à¤¸à¥à¤•à¤¾à¤° ::: à¤…à¤¬ à¤†à¤ª à¤¨à¥‡à¤µà¤¿à¤—à¥‡à¤Ÿ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤"
};
var localRedirectionlist = {
    "es-xl": "BZ,CR,SV,GT,HN,MX,NI,PA,AR,BO,BR,CL,CO,EC,GY,PY,PE,SR,UY,VE,CU,DO,HT,PR,BL,MF",
    fr: "FR",
    nl: "NL",
    ar: "SA,EG",
    "pt-br": "BR",
    id: "ID",
    de: "DE"
};
for (var i = 0; i < onlylocal.length; i++) {
    if (window.location.host == _preZ) {
        langArr.push(onlylocal[i])
    }
}
var currentLang = (function () {
    var h = "";
    langArr.forEach(function (j) {
        if (h == "") {
            if (window.location.href.split("/").indexOf(j) > -1) {
                h = j
            }
        }
    });
    locallang.forEach(function (j) {
        if (window.location.href.split("/").indexOf(j) > -1) {
            localUrlLang = j
        }
    });
    currentUrlLang = h;
    creativeLang = usedLanArr.indexOf(currentUrlLang) > -1;
    (currentUrlLang != "") ? (langsrc = "/" + currentUrlLang + "/") : "";
    if (h == "es-xl") {
        h = "es"
    } else {
        if (h == "pt-br") {
            h = "pt"
        } else {
            if (h == "jp") {
                h = "ja"
            } else {
                if (h == "zh-hans") {
                    h = "zh";
                    domainOne = "com.cn"
                } else {
                    if (h == "zh-hant") {
                        h = "zh_tw"
                    } else {
                        if (h == "he") {
                            h = "iw"
                        } else {
                            if (h == "fr-ca") {
                                h = "fr_ca"
                            } else {
                                if (h == "hi-in") {
                                    h = "hi"
                                }
                            }
                        }
                    }
                }
            }
        }
    } (h == "in") ? (h = "", currentUrlLang = "") : "";
    (h == "id") ? (h = "in") : "";
    return h
})(),
    addingLangRtlClass = (function () {
        if (["ar", "he"].includes(currentUrlLang)) {
            $("body").addClass("lang-rtl")
        }
    })(),
    selectEvents = (function () {
        if ("ontouchstart" in document.documentElement === true) {
            return "touchstart"
        } else {
            return "click"
        }
    })(),
    localredirectionval = "0",
    footer_ebable = true,
    currencyCodeArray = ["USD", "OLDUSD", "EUR", "INR", "GBP", "BRL", "JPY", "AUD", "NZD", "SGD", "AED", "SAR", "MXN", "CNY", "ZAR", "NGN", "KES", "EGP", "CAD", "THB", "EURTR", "IDR"],
    currencySymbolArray = ["&#36;", "&#36;", "&#8364;", "&#8377;", "&#163;", "R&#36;", "&#165;", "A&#36;", "NZ&#36;", "S&#36;", "AED", "SAR", "Mex&#36;", "&#165;", "R", "&#8358;", "K", "E&#163;", "C&#36;", "&#3647;", "&#8364;", "Rp"],
    currencyCountryArray = ["ALL", "ALL", "EUlist", "IN", "GB", "BR", "JP", "AU", "NZ", "SG", "AE", "SA", "MX", "CN", "ZA", "NG", "KE", "EG", "CA", "TH", "TR", "ID"];
if (Zdomain == "" || domainOne == "com.cn") {
    dcenabled = false;
    nondc = false
}
var predomain = window.location.hostname == _preZ || window.location.hostname == _preZC || Zdomain == _lz || window.location.hostname.indexOf(_prewww) > -1;
var customvar = {
    outproduct: ["zohoorchestly", "trainercentral"],
    isMobile: /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent),
    cnavailablepage: false,
    cachedWidth: window.innerWidth,
    pathname: window.location.pathname,
    host: window.location.hostname,
    iphone: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    ipad: navigator.userAgent.match(/iPad/i) != null,
    android: /Android/.test(navigator.userAgent) && !window.MSStream,
    host: window.location.hostname,
    numberOfCountries: "150",
    numberOfUsers: "100",
    numberOfUsersText: Drupal.t("hundred"),
    numberOfEmployees: "15",
    numberOfYears: "25",
    numberOfPartners: "2",
    numberOfApps: "55",
    numberOfCustomers: "700",
    numberOfDataCenters: "16",
    absurl: window.location.origin + window.location.pathname,
    userelem: "",
    transCName: (typeof CountryName != "undefined") ? CountryName : "",
    hostName: "",
    sHostName: "l",
    servicename: "",
    mynewsignup: [],
    textparam: false,
    showchangecountry: ((_lhref.indexOf("/r/signup.html") > 0) ? "true" : "false"),
    optinArr: ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "GR", "IT", "LT", "MT", "NL", "PL", "RO", "SK", "SI", "ES", "IS", "NO", "CH", "CA", "XK"],
    optoutArr: ["EE", "FI", "FR", "HU", "IE", "LV", "LU", "PT", "SI", "SE", "GB", "ZA"],
    doubleoptinArr: ["DE", "AU", "TR"],
    domainArr: [
        ["com", "in", "eu", "com.au", "jp"],
        []
    ],
    pArr: ["accounts", "notebook", "mail", "analytics", "cliq", "creator", "meeting", "sheet", "show", "wiki", "writer", "people", "projects", "docs", "discussions", "invoice", "calendar", "zia search", "video", "contacts", "crm", "gadgets", "zoho store", "servicedesk plus", "recruit", "campaigns", "desk", "assist", "books", "sites", "zoho api", "zoho mobile", "bugtracker", "social", "contact manager", "task engine", "zoho mobile sync", "connect", "zohomailwatch", "survey", "salesiq", "forms", "vault", "logs", "zoho", "zoho mobile proxy", "jproxy", "subscriptions", "manage engine", "zoho home", "dbsearch", "mapsapi", "showtime", "site24x7", "alarmsone", "expense", "pdfgen", "motivator", "zohoappcreator", "transmail", "inventory", "deluge runtime", "zoho directory (zd)", "dlserver", "shortenurl", "ear", "iis", "maps-nomi", "mapstiles", "mobile device management", "plusloggerone", "crmplus", "salesinbox", "zmnotifications", "sheetapp", "zmindexing", "zohoplugin", "zohospotlight", "zmimageprocessing", "mi", "bugbounty", "zohoreceipts", "zohoquotes", "zoho payroll", "zohoparser", "soc", "zoho checkout", "zoho finance plus", "zoho backstage", "wms", "zmintegration", "zlabsml", "sign", "zoho one", "pagesense", "flow", "sprints", "zoho gst", "zohoasp", "nameserver", "zohocode", "hacksaw", "zoho marketplace", "zapps", "zohofinancerisk", "patch manager plus", "malware", "log360cloud", "zmmx", "startwith", "zmuploaddownload", "zoho commerce", "zohoarm", "zmparser", "zoho profile", "scrapy", "office integrator", "zohobills", "socialdata", "sastest", "cstore", "ziaplatform", "zlabsdl", "workdrive", "zmpop", "phonebridge", "orchestly", "zmsmtp", "zohotravel", "zmimap", "trends", "remote access", "zohostoreapi", "webanalytics", "zohodashboards", "zohomarketinghub", "zohoink", "zohoworkerly", "peopleplus", "zohomts", "bdaas admin", "cirrus", "zohofiles", "zoho presentation platform", "stratus", "socialanalytics", "ediscovery", "comply", "zmmigration", "bigin", "zohoediscovery", "zohocatalyst", "desktop central", "blockchain", "zmvaultsearch", "templates", "zohocloud", "zbsm", "zoho dataprep", "identity manager plus", "zohobookings", "zask", "zohocreatorplus", "zohopublish", "zoholearn", "mail360smtp", "mail360mx", "mail360indexing", "mail360notifications", "rarn", "murphy", "zohobetalens", "solution", "zmprotocols", "appsense", "mail360protocols", "apigateway", "zohovoice", "landingpage", "zohopos", "zmprocessors", "mailapps", "webstats", "mason", "connectcommunity", "remote access plus", "zmtask", "slate", "zohopilot", "marketingplus", "bluepencil", "zoho contracts", "zoho routeiq", "zoholens", "zohoim", "teaminbox", "zohooffice", "mail360processors", "statusiq", "cloudspend", "aidev", "zohofsm", "zohoposapi", "remotely", "zmspamgateway", "zohoshifts", "crm", "thrive", "wmspserver", "wmspsbserver", "zohorepository", "wmsacs", "zohocircuit", "zohogc", "zohointegrations", "nocmonitor", "writerautomation", "label", "trainercentral", "zoho domains", "whiteboard", "feedback center", "zohosignals", "ziapipelines", "ulaa", "mtacentral", "zohoqueue", "zohotables", "zohoiot", "caas", "quartz", "timeservice", "kmslite", "screenplay", "researchstudio", "rtcplatform", "ziahub", "nimbus", "accio", "one", "workplace", "catalyst", "backstage", "commerce", "bookings", "marketingautomation", "lens", "voice", "zeptomail", "learn", "workerly", "backtowork", "shifts", "mobiledevicemanagerplus", "patchmanagerplus", "remoteaccessplus", "log360-cloud", "identitymanagerplus", "desktopcentral", "officeplatform", "dataprep", "contracts", "developer", "it-management", "identity-management"],
    pServiceNames: ["AaaServer", "NoteBook", "VirtualOffice", "ZohoReports", "ZohoChat", "ZohoCreator", "ZohoMeeting", "ZohoSheet", "ZohoShow", "ZohoWiki", "ZohoWriter", "zohopeople", "ZohoProjects", "ZohoPC", "ZohoDiscussions", "ZohoInvoice", "ZohoCalendar", "ZohoSearch", "ZohoVideo", "ZohoContacts", "ZohoCRM", "ZohoGadgets", "ZohoPayments", "SDPOnDemand", "ZohoRecruit", "ZohoCampaigns", "ZohoSupport", "ZohoAssist", "ZohoBooks", "ZohoSites", "ZohoAPI", "ZohoMobile", "ZohoBugTracker", "ZohoSocial", "ZohoContactManager", "TaskEngine", "MobileSync", "ZohoPulse", "ZohoMailWatch", "ZohoSurvey", "LiveDesk", "ZohoForms", "ZohoVault", "ZohoLogs", "Zoho", "ZohoMobileProxy", "JProxy", "ZohoSubscriptions", "ManageEngine", "ZohoHome", "ZohoDBSearch", "maps", "ZohoShowtime", "Site24x7", "AlarmsOne", "ZohoExpense", "PdfGen", "ZohoMotivator", "ZohoMCreator", "Transmail", "ZohoInventory", "DRE", "ZohoDirectory", "DLServer", "shortenurl", "EAR", "IIS", "mapsnomi", "mapstiles", "MDMOnDemand", "plusloggerone", "CRMPlus", "SalesInbox", "ZMNotifications", "sheetapp", "ZMIndexing", "ZohoPlugin", "ZohoSpotLight", "ZMImageProcessing", "MI", "BugBounty", "ZohoReceipts", "ZohoQuotes", "ZohoPayroll", "ZohoParser", "SOC", "ZohoCheckout", "ZohoFinancePlus", "zohobackstage", "WMS", "ZMIntegration", "ZLabsML", "ZohoSign", "ZohoOne", "PageSense", "ZohoFlow", "ZohoSprints", "ZohoTax", "ZohoASP", "NameServer", "ZohoCode", "HackSaw", "ZohoMarketplace", "ZApps", "ZohoFinanceRisk", "PatchManagerPlusCloud", "malware", "Logs360Cloud", "ZMMX", "Startwith", "ZMUploadDownload", "ZohoCommerce", "ZohoARM", "ZMParser", "ZohoProfile", "scrapy", "OfficeAPI", "ZohoBills", "SocialData", "SasTest", "cstore", "ZIAPlatform", "ZLabsdl", "TeamDrive", "ZMPOP", "PhoneBridge", "Orchestly", "ZMSMTP", "ZohoTravel", "ZMIMAP", "Trends", "ZohoRemoteAccess", "ZohoStoreAPI", "WebAnalytics", "ZohoDashboards", "ZohoMarketingHub", "ZohoInk", "ZohoWorkerly", "Peopleplus", "ZohoMTS", "BDaaSAdmin", "Cirrus", "ZohoFiles", "ZohoPresentationPlatform", "Stratus", "SocialAnalytics", "ZMVault", "Comply", "ZMMigration", "ZohoBigin", "ZohoEDiscovery", "ZOHOCATALYST", "DesktopCentralCloud", "Blockchain", "ZMVaultSearch", "Templates", "ZohoCloud", "ZBSM", "zohodataprep", "idmpod", "ZohoBookings", "ZAsk", "ZohoCreatorPlus", "ZohoPublish", "ZohoLearn", "Mail360SMTP", "Mail360MX", "Mail360Indexing", "Mail360Notifications", "ZohoRARN", "Murphy", "ZohoBetaLens", "Solution", "ZMProtocols", "AppSense", "Mail360Protocols", "APIGateway", "ZohoVoice", "landingpage", "ZohoPOS", "ZMProcessors", "MailApps", "WebStats", "Mason", "ConnectCommunity", "RemoteAccessPlusCloud", "ZMTASK", "Slate", "ZohoPilot", "MarketingPlus", "BluePencil", "contracts", "routeiq", "ZohoLens", "ZohoIM", "TeamInbox", "ZohoOffice", "Mail360Processors", "StatusPages", "CloudSpend", "AIDev", "ZohoFSM", "ZohoPOSAPI", "Remotely", "ZMSpamGateway", "ZohoShifts", "NewCRM", "Thrive", "wmspserver", "wmspsbserver", "ZohoRepository", "wmsacs", "ZohoCircuit", "ZohoGC", "ZohoIntegrations", "NocMon", "WriterAutomation", "Label", "TrainerCentral", "ZohoDomains", "Whiteboard", "FeedBackCenter", "ZohoSignals", "ZIAPipelines", "PrimeumWeb", "MTACentral", "ZohoQueue", "ZohoTables", "ZohoIOT", "CaaS", "Quartz", "TimeService", "KMSLite", "Screenplay", "Insights", "RTCPlatform", "ZiaHub", "Nimbus", "Accio", "ZohoOne", "VirtualOffice", "ZohoCatalyst", "ZohoBackstage", "ZohoCommerce", "ZohoBookings", "zohomarketinghub", "ZohoLens", "ZohoVoice", "transmail", "ZohoLearn", "ZohoWorkerly", "ZohoCreator", "ZohoShifts", "MDMOnDemand", "PatchManagerPlusCloud", "RemoteAccessPlusCloud", "logs360cloud", "IDMPOD", "DesktopCentralCloud", "OfficeAPI", "ZohoDataprep", "Contracts", "ZohoCRM", "alarmsone", "IDMPOD"],
    countries: [
        ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "CÃ´te d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts And Nevis", "Saint Lucia", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Democratic Republic Of Congo", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Wallis And Futuna", "Yemen", "Zambia", "Zimbabwe", "Ã…land Islands"],
        ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CK", "CR", "HR", "CU", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "KP", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "ES", "LK", "SD", "SR", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "CD", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "YE", "ZM", "ZW", "AX"],
        ["93", "355", "213", "1", "376", "244", "1", "1", "54", "374", "297", "61", "43", "994", "1", "973", "880", "1", "375", "32", "501", "229", "1", "975", "591", "387", "267", "55", "1", "673", "359", "226", "257", "855", "237", "1", "238", "1", "236", "235", "56", "86", "57", "269", "242", "682", "506", "385", "53", "357", "420", "225", "45", "253", "1", "1", "593", "20", "503", "240", "291", "372", "251", "500", "298", "679", "358", "33", "594", "689", "241", "220", "995", "49", "233", "350", "30", "299", "1", "590", "1", "502", "224", "245", "592", "509", "504", "852", "36", "354", "91", "62", "98", "964", "353", "972", "39", "1", "81", "962", "7", "254", "686", "383", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "596", "222", "230", "52", "691", "373", "377", "976", "382", "1", "212", "258", "95", "264", "674", "977", "31", "599", "687", "64", "505", "227", "234", "683", "850", "1", "47", "968", "92", "680", "970", "507", "675", "595", "51", "63", "48", "351", "1", "974", "262", "40", "7", "250", "290", "1", "1", "508", "1", "685", "378", "239", "966", "221", "381", "248", "232", "65", "421", "386", "677", "252", "27", "82", "34", "94", "249", "597", "268", "46", "41", "963", "886", "992", "255", "66", "243", "670", "228", "690", "676", "1", "216", "90", "993", "1", "688", "1", "256", "380", "971", "44", "1", "598", "998", "678", "379", "58", "84", "681", "967", "260", "263", "672"]
    ],
    countryEu: ["RS", "VA", "GB", "UA", "CH", "SE", "ES", "SI", "SK", "SM", "RO", "PT", "PL", "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI", "LV", "IT", "IE", "IS", "HU", "GR", "GI", "DE", "FR", "FI", "FO", "EE", "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AT", "AD", "AL", "AX", "XK", "TR", "GE", "NC"],
    countryApac: ["AU", "BD", "BT", "IO", "BN", "KH", "CN", "FJ", "HK", "IN", "ID", "JP", "KP", "KR", "LA", "MO", "MY", "MV", "MN", "MM", "NP", "NZ", "PK", "PG", "PH", "SG", "LK", "TW", "TH", "TL", "VN"],
    lAmerica: ["BZ", "CR", "SV", "GT", "HN", "MX", "NI", "PA", "AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE", "CU", "DO", "HT", "PR", "BL", "MF"],
    countryTranstasman: ["AU", "NZ"],
    meaList: ["TR", "IQ", "SA", "YE", "SY", "AE", "IL", "JO", "PS", "LB", "OM", "KW", "QA", "BH", "IR"],
    usstates: ["", "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "Washington, D.C", "West Virginia", "Wisconsin", "Wyoming"],
    cnavail: ["forms", "cliq", "connect", "workdrive", "vault", "sheet", "wiki", "showtime", "flow", "survey", "meeting", "workplace", "mail", "projects", "creator", "crm", "assist", "sprints", "people", "recruit", "analytics", "one", "crmplus", "desk", "campaigns", "salesiq", "sites", "bigin", "books", "bookings", "expense", "orchestly", "lens", "remotely", "maketinghub", "pagesense", "inventory", "notebook", "docs", "writer", "show"],
    instates: ["Select State", "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
    noteuinarr: [
        ["kanaa", "contactmanager", "identity-management", "iot", "log360-cloud", "it-management", "shifts", "voice", "pilot", "qengine", "developer", "commandcenter", "zakya", "eprotect", "start", "kepto", "rpa"],
        ["kanaa", "identity-management", "it-management", "pilot", "qengine", "commandcenter", "thrive", "eprotect", "start", "tables", "kepto", "publish", "rpa"],
        ["kanaa", "contactmanager", "identity-management", "iot", "log360-cloud", "it-management", "voice", "pilot", "qengine", "commandcenter", "zakya", "eprotect", "start", "tables", "kepto", "rpa"],
        ["kanaa", "shifts", "voice", "catalyst", "commandcenter", "iot", "zakya", "fsm", "thrive", "eprotect", "pilot", "qengine", "start", "tables", "kepto", "log360-cloud", "publish", "rpa"],
        [],
        []
    ],
    singaporeConsentproductList: ["notebook", "docscanner", "sheet", "mail", "vault", "calendar", "meeting", "assist", "sign", "workdrive", "show", "forms", "sites", "zillum", "annotator"],
    africaList: ["DZ", "AO", "BJ", "BW", "IO", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "TF", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MA", "MZ", "NA", "NE", "NG", "RE", "RW", "SH", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "EH", "ZM", "ZW"],
    middleEastList: ["CY", "BH", "IR", "IQ", "IL", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "AE", "YE"],
    africaRegList: ["Algeria", "Benin", "Angle", "Burundi", "Botswana", "Canary Islands", "Burkina Faso", "Cameroon", "Comoros", "Eswantini", "Ceuta", "Cape Verde", "Central African Republic", "Djibouti", "Lesotho", "Egypt", "Cote d Ivoire", "Chad", "Eritrea", "Madagascar", "Libya", "The Gambia", "Democratic Republic of the Congo", "Ethiopia", "Namibia", "Madeira", "Ghana", "Equatorial Guinea", "French Southern Territories", "South Africa", "Melilla", "Guinea", "Gabon", "Kenya", "Morocco", "Guinea Bissau", "Sao Tome and principe", "Malawi", "Sudan", "Liberia", "Mauritius", "Tunisia", "Mali", "Mayotte", "Western Sahara", "Mauritania", "Mozambique", "Niger", "Reunion", "Nigeria", "Rwanda", "Saint Helena", "Seychelles", "Senegal", "Somalia", "Sierra Leone", "South Sudan", "Togo", "Tanzania", "Uganda", "Zambia", "Zimbabwe"],
    cnarr: [],
    privacystate: {
        california: "/en-us/ca/privacy.html"
    },
    privacycountry: {
        ZA: "/en-za/privacy.html",
        GB: "/en-uk/privacy.html"
    },
    productTermList: {
        campaigns: ["jp"],
        catalyst: [],
        cliq: [],
        creator: [],
        commerce: [],
        crm: ["jp"],
        expense: [],
        eprotect: [],
        developer: ["fr", "de", "pt-br", "es-xl", "nl", "ar", "it", "id", "th", "vi"],
        forms: [],
        one: ["fr", "de", "pt-br", "es-xl", "nl", "ar", "it", "id", "th", "vi", "jp"],
        pagesense: [],
        salesiq: ["jp"],
        sites: [],
        start: [],
        toolkit: [],
        transmail: [],
        voice: [],
        zeptomail: [],
        officeapi: "https://officeapi.zoho.com/jsp/terms.jsp",
        trainercentral: "https://www.trainercentral.com/terms.html",
        marketingautomation: "https://www.zoho.com/marketingautomation/terms-of-service.html",
        patchmanagerplus: "https://ondemand.manageengine.com/terms.html",
        endpointcentralmsp: "https://ondemand.manageengine.com/terms.html",
        zohobigin: "https://www.bigin.com/terms.html"
    },
    newFooterProducts: ["people", "rpa", "peopleplus", "bugtracker", "learn", "tables", "qengine", "bookings", "recruit", "eprotect", "deluge", "publish", "directory", "showtime", "mail360", "researchstudio", "docscanner", "officeplus"],
    htmlencode: function (k) {
        var h = [];
        for (var j = k.length - 1; j >= 0; j--) {
            h.unshift(["&#", k[j].charCodeAt(), ";"].join(""))
        }
        return h.join("")
    },
    htmldecode: function (h) {
        return h.replace(/&#(\d+);/g, function (j, k) {
            return String.fromCharCode(k)
        })
    },
    zDomainHandling: function () {
        getDomain = document.domain, splitUrl = getDomain.split("."), domainOne = splitUrl.pop(), Zdomain = splitUrl.pop();
        if (Zdomain == _zcopr) {
            Zdomain = "zoho"
        }
        if (Zdomain == "localbigin" || Zdomain == "localqntrl") {
            Zdomain = "localzoho"
        }
        for (var h = 0; h < ipArr.length; h++) {
            if (_lhref.indexOf(ipArr[h]) > -1) {
                Zdomain = "zoho";
                domainOne = "com"
            }
        }
        Zdomain = (dcdomainOne == "ca") ? "zohocloud" : ((customvar.outproduct.includes(customvar.productName)) ? "zoho" : Zdomain);
        if (window.location.hostname.includes("local")) {
            Zdomain = _lz;
            dcdomainOne = "com"
        }
    },
    privacypolicylink: function (j) {
        if (customvar.productName != "start") {
            var h = customvar.getLink(customvar.productName);
            if (j) {
                if ($(".signup-box .zrlink").length > 0) {
                    $(".signup-box .zrlink").attr("href", h.signupPrivacyLink)
                }
            } else {
                if ($(".footer-privacy a").length > 0) {
                    $(".footer-privacy a").attr("href", h.footerPrivacyLink)
                }
                if ($(".zwc-running-privacy").length > 0) {
                    $(".zwc-running-privacy").attr("href", h.footerPrivacyLink)
                }
            }
        }
        if (typeof useOfPolicy != "undefined") {
            useOfPolicy()
        }
    },
    updatePrivacyLink: function (h, l, k) {
        if (k) {
            var j = customvar.getLink(null, null, h, l);
            if (h && j.crmPrivacyLink) {
                $(k).attr("href", j.crmPrivacyLink)
            }
            if (l && j.crmPrivacyLink) {
                $(k).attr("href", j.crmPrivacyLink)
            }
        }
    },
    getPrivacyLink: function (m, l, z, A) {
        var o = m.domain;
        var q = m.globalPrivacy;
        var v = m.globalPrivacyLang;
        var u = m.privacyCountry;
        var t = m.privacyState;
        var j = m.privacyLang;
        var x = customvar.setLangCode(o + q, 1, v);
        var s = customvar.setLangCode(o + q, 1, v);
        var n = customvar.setLangCode(o + q, 1, v);
        if (CountryCode && u[CountryCode]) {
            x = o + u[CountryCode]
        }
        if (typeof RegionName != "undefined" && RegionName) {
            var k = RegionName.toLowerCase();
            if (t[k]) {
                x = o + t[k]
            }
        }
        if ($(".globalcountrycode-signup").length > 0) {
            var C = $(".globalcountrycode-signup").val();
            if (C && u[C]) {
                s = o + u[C]
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            var B = $(".za-globalstate-signup").val();
            var w = "";
            if (B) {
                w = B.toLowerCase()
            }
            if (w && t[w]) {
                s = o + t[w]
            }
        }
        if ($(".globalcountrycode").length > 0 || l) {
            var r = $(".globalcountrycode").val();
            if (l) {
                r = $(l).val()
            }
            if (r) {
                var y = customvar.getCountryDetails(r);
                if (y.countryCode) {
                    r = y.countryCode
                } else {
                    r = $(".globalcountrycode").val();
                    y = customvar.getCountryDetails(r);
                    r = y.countryCode
                }
            }
            if (r && u[r]) {
                n = o + u[r]
            }
        }
        if ($(".globalstatecode").length > 0 || l) {
            var p = $(".globalstatecode").val();
            var h = "";
            if (l) {
                p = $(l).val()
            }
            if (p) {
                if (!customvar.usstates.includes(p) || !customvar.instates.includes(p)) {
                    h = $(".globalstatecode").val();
                    if (h) {
                        h = h.toLowerCase()
                    }
                } else {
                    h = p.toLowerCase()
                }
            }
            if (h && t[h]) {
                n = o + t[h]
            }
        }
        if (z && u[z]) {
            n = o + u[z]
        }
        if (A && t[A]) {
            n = o + t[A]
        }
        if (Object.keys(j).includes(currentUrlLang)) {
            s = j[currentUrlLang];
            x = j[currentUrlLang];
            n = j[currentUrlLang]
        }
        return {
            footerPrivacyLink: x,
            signupPrivacyLink: s,
            crmPrivacyLink: n
        }
    },
    getTermLink: function (o) {
        var q = o.domain;
        var m = o.globalTerm;
        var h = o.globalTermLang;
        var k = o.productTerm;
        var j = o.productTermLang;
        var p = o.customTerm;
        var n = customvar.productName;
        var l = customvar.setLangCode(q + m, 1, h);
        if (k.includes(n)) {
            if (Object.keys(j).includes(n)) {
                l = customvar.setLangCode(q + "/" + n + m, 2, j[n])
            } else {
                l = q + "/" + n + m
            }
        }
        if (Object.keys(p).includes(n)) {
            l = p[n]
        }
        return l
    },
    getCountryDetails: function (l) {
        var k = customvar.countries[0].findIndex(function (m) {
            return m == l
        });
        var j = customvar.countries[1][k];
        var h = customvar.countries[2][k];
        return {
            country: l,
            countryCode: j,
            dialCode: h
        }
    },
    getLink: function (o, q, k, n) {
        var h = [{
            collectionName: "For all products(default)",
            products: "all",
            privacyCountry: {
                ZA: "/en-za/privacy.html",
                GB: "/en-uk/privacy.html"
            },
            privacyState: {
                california: "/en-us/ca/privacy.html"
            },
            privacyLang: {
                jp: "https://www.zoho.co.jp/privacy/"
            },
            globalPrivacy: "/privacy.html",
            globalPrivacyLang: ["de", "pt-br"],
            globalTerm: "/terms.html",
            globalTermLang: ["de", "pt-br", "jp"],
            productTerm: ["campaigns", "catalyst", "cliq", "creator", "commerce", "crm", "expense", "eprotect", "developer", "forms", "one", "pagesense", "salesiq", "sites", "start", "toolkit", "transmail", "voice", "zeptomail"],
            productTermLang: {
                crm: ["jp"]
            },
            customTerm: {
                officeapi: "",
                trainercentral: "",
                marketingautomation: "",
                zohobigin: ""
            },
            domain: _livelink
        }, {
            collectionName: "manageEngine",
            products: ["remoteaccessplus", "patchmanagerplus", "endpoint-central", "it-management", "endpointcentralmsp", "log360-cloud"],
            privacyCountry: {
                ZA: "",
                GB: ""
            },
            privacyState: {
                california: "/us-ca/privacy.html"
            },
            privacyLang: {},
            globalPrivacy: "/privacy.html",
            globalPrivacyLang: [],
            globalTerm: "/terms.html",
            globalTermLang: [],
            productTerm: [],
            productTermLang: {},
            customTerm: {
                remoteaccessplus: "https://ondemand.manageengine.com/terms.html",
                patchmanagerplus: "https://ondemand.manageengine.com/terms.html",
                "endpoint-central": "https://ondemand.manageengine.com/terms.html",
                "it-management": "https://ondemand.manageengine.com/terms.html",
                endpointcentralmsp: "https://ondemand.manageengine.com/terms.html",
                "log360-cloud": "https://ondemand.manageengine.com/terms.html"
            },
            domain: "https://www.manageengine.com"
        }];
        if (!o) {
            o = customvar.productName
        }
        var m = null;
        var p = null;
        var l = null;
        var j = null;
        h.every(function (r, s) {
            var u = r.products;
            if (u == "all" || u.includes(o)) {
                var t = customvar.getPrivacyLink(r, q, k, n);
                l = customvar.getTermLink(r);
                m = t.footerPrivacyLink;
                p = t.signupPrivacyLink;
                j = t.crmPrivacyLink;
                if (s > 0) {
                    return false
                }
            }
            return true
        });
        if (customvar.zwProTerms) {
            l = customvar.zwProTerms
        }
        return {
            footerPrivacyLink: m,
            signupPrivacyLink: p,
            crmPrivacyLink: j,
            termLink: l
        }
    },
    setLangCode: function (k, h, m) {
        var j = k.split("/");
        var l = j.length;
        var n = l - h;
        if (m.includes(currentUrlLang) && n >= 0 && n <= l) {
            j.splice(n, 0, currentUrlLang)
        }
        return j.join("/")
    },
    termslink: (function () {
        return (function () {
            var h = "";
            var l = null;

            function j(o, p) {
                if (p && p.length && p.includes(currentUrlLang)) {
                    if (typeof o == "string") {
                        o = o.split(customvar.productName).join(currentUrlLang + "/" + customvar.productName)
                    }
                }
                if (Array.isArray(o)) {
                    const n = o.find(function (q) {
                        return q.includes(langsrc)
                    });
                    if (n) {
                        o = n
                    } else {
                        o = o[0]
                    }
                }
                l = o;
                h = o;
                m("", true)
            }

            function k(o) {
                var n = customvar.getLink(customvar.productName);
                l = n.termLink;
                h = n.termLink;
                m(o)
            }

            function m(r, q) {
                var p = $(".footer-terms a");
                var o = $(".za-tos-container .czone-signup-term");
                var n = $(".stermslink");
                if (r) {
                    if (o.length) {
                        o.attr("href", l)
                    }
                    if (n.length > 0) {
                        n.attr("href", h)
                    }
                } else {
                    if (p.length) {
                        p.attr("href", l)
                    }
                }
                if (q) {
                    if (o.length) {
                        o.attr("href", l)
                    }
                    if (n.length > 0) {
                        n.attr("href", h)
                    }
                }
            }
            return {
                setProductTerm: j,
                setDefaultTerm: k
            }
        })()
    })(),
    gdprshowhide: function () {
        var j = true,
            k = true;
        var h = (arguments.length > 0) ? arguments[0] : CountryCode;
        if ((customvar.optinArr.includes(h) || customvar.optoutArr.includes(h) || customvar.doubleoptinArr.includes(h) || customvar.countryEu.includes(h))) {
            j = false, k = false
        }
        return {
            hide: j,
            check: k
        }
    },
    lsoinfo: function (o) {
        var s = localStorage.getItem("zglobal_Acookie_optOut");
        var m = ["-1", "1", "3"];
        var j = localStorage.getItem("czonecreativeinfo");
        var n = null;
        if (j) {
            try {
                n = JSON.parse(j)
            } catch (k) {
                if (typeof j == "string") {
                    var r = j.split(",");
                    n = {};
                    for (var l = 0; l < r.length; l++) {
                        if (l % 2 == 0) {
                            var h = r[l];
                            var t = r[l + 1];
                            if (t == null || t == undefined) {
                                t = ""
                            }
                            if (t.includes("-j-")) {
                                t = JSON.parse(t.split("-j-").join(","))
                            } else {
                                if (t.includes("-a-")) {
                                    t = JSON.parse(t.split("-a-").join(","))
                                }
                            }
                            n[h] = t
                        }
                    }
                } else {
                    n = {}
                }
            }
        }
        var q = arguments[0];
        var p = arguments[1];
        if (m && !m.includes(s)) {
            if (arguments.length == 2) {
                if (!n) {
                    n = {}
                }
                if (q != "delete") {
                    n[q] = p
                }
                if (q == "delete") {
                    delete n[p]
                }
                n = JSON.stringify(n);
                try {
                    localStorage.setItem("czonecreativeinfo", n)
                } catch (k) { }
            }
            if (arguments.length == 1) {
                if (n && n[q]) {
                    return n[q]
                } else {
                    return ""
                }
            }
        } else {
            if (typeof lsonotset_callback != "undefined") {
                lsonotset_callback(o)
            }
            if (arguments.length == 1) {
                return ""
            }
        }
    },
    stateadd: function () {
        this._val = "select your state";
        var j = "US" == CountryCode ? customvar.usstates : "IN" == CountryCode && customvar.instates;
        arguments.length > 0 && ("US" == arguments[0] || "United States" == arguments[0] ? j = customvar.usstates : "IN" != arguments[0] && "India" != arguments[0] || (j = customvar.instates));
        for (var h = 0; h < j.length; h++) {
            if (j.indexOf(customvar.instates[1] > -1) && h == 0) {
                this._val += '<option value="select your state">' + j[h] + "</option>"
            } else {
                this._val += '<option value="' + j[h].toLowerCase() + '">' + j[h] + "</option>"
            }
        }
        if (arguments.length > 0) {
            if (arguments[1] == "webform") {
                $(".globalstatecode").html(this._val)
            } else {
                $(".za-globalstate-signup").html(this._val)
            }
        }
        return this._val
    },
    countrypop: function (h) {
        this._data = "";
        this.arr = customvar.countries;
        for (var j = 0; j < customvar.countries[0].length; j++) {
            if (h == "dial") {
                this._data += '<option value="' + this.arr[1][j] + '" dialling_code="' + this.arr[2][j] + '">' + this.arr[0][j] + " (+" + this.arr[2][j] + ")</option>"
            } else {
                this._val = "0";
                (customvar.optinArr.indexOf(this.arr[1][j]) > -1) ? this._val = "2" : (customvar.optoutArr.indexOf(this.arr[1][j]) > -1) ? this._val = "2" : (customvar.doubleoptinArr.indexOf(this.arr[1][j]) > -1) ? this._val = "3" : "";
                this._data += '<option value="' + this.arr[1][j] + '" newsletter_mode="' + this._val + '">' + this.arr[0][j] + "</option>"
            }
        }
        setTimeout(function () {
            if (typeof CountryCode != "undefined") {
                if ($(".globalcountrycode-signup").length > 0) {
                    $(".globalcountrycode-signup").val(CountryCode)
                }
            }
            var k = 0;
            var l = setInterval(function () {
                if (($(".dc-info").length > 0) && $(".za-state-container").length < 1) {
                    clearInterval(l);
                    if (stateupdate.indexOf(customvar.productName) > -1) {
                        $(".dc-info").after('<div class="za-state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + customvar.stateadd() + "</select></div>")
                    } else {
                        this._val = "";
                        for (var m = 0; m < customvar.usstates.length; m++) {
                            this._val += '<option value="' + customvar.usstates[m].toLowerCase() + '">' + customvar.usstates[m] + "</option>"
                        }
                        $(".dc-info").after('<div class="za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + this._val + "</select></div>")
                    }
                    if (CountryCode == "US" || (CountryCode == "IN" && stateupdate.indexOf(customvar.productName) > -1)) {
                        if (customvar.showchangecountry == "true") {
                            $(".za-state-container").removeClass("zhide-common").addClass("zshow-common")
                        }
                        if (CountryCode == "US") {
                            $(".za-globalstate-signup option").eq(0).remove();
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                        }
                    }
                    customvar.privacypolicylink(true)
                }
                if (k > 25) {
                    clearInterval(l)
                }
                k++
            }, 1000)
        }, 100);
        return this._data
    },
    unique: function (j) {
        var h = [];
        $.each(j, function (k, l) {
            if ($.inArray(l, h) == -1) {
                h.push(l)
            }
        });
        return h
    },
    mydevice: function () {
        return navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Mobile") > -1 ? "Mobile - Android" : navigator.userAgent.indexOf("Android") > -1 && -1 === navigator.userAgent.indexOf("Mobile") ? "Tablet - Android" : navigator.userAgent.indexOf("iPad") > -1 ? "Tablet - iPad" : navigator.userAgent.indexOf("iPhone") > -1 ? "Mobile - iPhone" : /webOS|iPod|BlackBerry|IEMobile|MeeGo|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop"
    },
    dcreset: function () {
        var j = customvar.dcObj;
        customvar.noteuinarr = [];
        customvar.domainArr = [
            [],
            [],
            []
        ];
        dcdomainOne = "com";
        if (Zdomain == "localzoho") {
            onlycom = true
        } else {
            for (var h in j) {
                customvar.domainArr[0].push(j[h].domain);
                customvar.domainArr[2].push(j[h].accountsDomain);
                customvar.noteuinarr.push(j[h].notavailable);
                if (typeof j[h].countries != "undefind") {
                    if (j[h].countries.indexOf(CountryCode) > -1) {
                        if (j[h].notavailable.indexOf(customvar.productName) > -1) {
                            dcdomainOne = domainOne;
                            onlycom = true
                        } else {
                            dcdomainOne = j[h].domain
                        }
                    }
                }
            }
            customvar.zDomainHandling()
        }
    },
    dcselected: function (h) {
        if (h == "US" || (h == "IN" && stateupdate.indexOf(customvar.productName) > -1)) {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() == "" || $(".za-globalstate-signup option").eq(0).val() == "select your state") {
                    if (h == "US") {
                        $(".za-globalstate-signup option").eq(0).remove()
                    }
                }
            }
            setTimeout(function () {
                if (typeof RegionName != "undefined") {
                    if ($(".za-globalstate-signup").length > 0) {
                        if (h == "US") {
                            $(".za-globalstate-signup").val(RegionName.toLowerCase())
                        }
                        if ($(".za-globalstate-signup").val() == null) {
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                        }
                    }
                }
                if (customvar.showchangecountry == "true") {
                    $(".za-state-container").removeClass("zhide-common").addClass("zshow-common")
                }
            }, 300)
        } else {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() != "") {
                    $(".za-globalstate-signup").prepend('<option value=""></option>')
                }
            }
            $(".za-state-container").removeClass("zshow-common").addClass("zhide-common")
        }
        if (productName == "analytics") {
            if ($(".globalcountrycode").length > 0) {
                var n = [];
                for (var k = 0; k < $(".globalcountrycode").length; k++) {
                    n[k] = ($(".globalcountrycode").eq(k).val())
                }
                setTimeout(function () {
                    for (var o = 0; o < $(".globalcountrycode").length; o++) {
                        $(".globalcountrycode").eq(o).val(n[o])
                    }
                }, 500)
            }
            if ($(".globalstatecode").length > 0) {
                var l = [];
                for (var k = 0; k < $(".globalstatecode").length; k++) {
                    l[k] = ($(".globalstatecode").eq(k).val())
                }
                setTimeout(function () {
                    for (var o = 0; o < $(".globalstatecode").length; o++) {
                        $(".globalstatecode").eq(o).val(l[o])
                    }
                }, 500)
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            if ($(".zrlink").length > 0 && h == "US") {
                if ($(".za-globalstate-signup").val().toLowerCase() == "california") {
                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                        $(".zrlink").attr("href", "https://www.manageengine.com/us-ca/privacy.html")
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho.com/us-ca/privacy.html")
                    }
                } else {
                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                        $(".zrlink").attr("href", "https://ondemand.manageengine.com/privacy.html")
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho.com/privacy.html")
                    }
                }
            }
        }
        if ($("body").hasClass("zcstrip")) {
            $("body").removeClass("zcstrip")
        }
        var m = customvar.dcObj;
        dcdomainOne = "com";
        for (var j in m) {
            if (typeof m[j].countries != "undefind") {
                if (m[j].countries.indexOf(h) > -1) {
                    if (m[j].notavailable.indexOf(customvar.productName) > -1) {
                        dcdomainOne = domainOne;
                        onlycom = true
                    } else {
                        dcdomainOne = m[j].domain
                    }
                }
            }
        }
    },
    dctext: function () {
        var j = "US";
        var k = customvar.dcObj;
        for (var h in k) {
            if (typeof k[h].countries != "undefind") {
                if (k[h].countries.indexOf(CountryCode) > -1) {
                    j = k[h].dctext
                }
            }
        }
        if (typeof dcenabled == "boolean") {
            if (!dcenabled) {
                j = (dcdomainOne == "com") ? "US" : k[dcdomainOne].dctext
            }
        }
        if (onlycom) {
            j = "US"
        }
        return j
    },
    dccountry: function () {
        var j = "US",
            h = customvar.alink.split("/register/script")[1];
        customvar.zDomainHandling();
        customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + h;
        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
            customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + h
        }
        j = (dcdomainOne == "com") ? "US" : customvar.dcObj[dcdomainOne].dctext;
        return j
    },
    getGlobalCookie: function (h) {
        try {
            for (var k = h + "=", m = decodeURIComponent(document.cookie).split(";"), l = 0; l < m.length; l++) {
                for (var j = m[l];
                    " " == j.charAt(0);) {
                    j = j.substring(1)
                }
                if (0 == j.indexOf(k)) {
                    return j.substring(k.length, j.length)
                }
            }
            return ""
        } catch (h) {
            return ""
        }
    },
    removequots: function (h) {
        if (typeof h != "undefined") {
            if (h.split('"').length > 1) {
                return h.split('"')[1]
            } else {
                return h
            }
        } else {
            return ""
        }
    },
    expiryDateCheck: function (h, p) {
        var j = new Date();
        var o = h.split("/").map(Number);
        var k = p.split("/").map(Number);
        var n = new Date(j.getFullYear(), j.getMonth(), j.getDate());
        var m = new Date(o[2], o[1] - 1, o[0]);
        var l = new Date(k[2], k[1] - 1, k[0]);
        return n >= m && n <= l
    },
    getddmmyyyy: function () {
        var j = new Date(),
            h = j.getDate() + "/" + (j.getMonth() + 1) + "/" + j.getFullYear();
        return h
    },
    nextddmmyyyy: function (k) {
        var j = new Date(new Date().getTime() + (k * 24 * 60 * 60 * 1000)),
            h = j.getDate() + "/" + (j.getMonth() + 1) + "/" + j.getFullYear();
        return h
    },
    dynamicLinks: function (j) {
        for (b in j) {
            for (c in j[b]) {
                var h = j[b][c];
                (h.indexOf("au.au") > 0) ? (h = h.split("au.au").join("au")) : "";
                (b == "href") ? $(c).attr("href", h) : (b == "html") ? $(c).html(h) : (b == "val") ? $(c).val(h) : "";
                if (c.indexOf(".act-btn.cta-btn") > -1) {
                    if (b == "href") {
                        $(".zgh-userAccess a, .loggedin-userinfo .access-apps, .z-bottom-cta-menu  .loggedin").attr("href", h)
                    } else {
                        if (b == "html") {
                            $(".zgh-userAccess a, .loggedin-userinfo .access-apps, .z-bottom-cta-menu  .loggedin").html(h)
                        }
                    }
                }
                if (b == "href") {
                    if ($(".zwelcome-info .zlogin-apps").length > 0) {
                        if (c == ".zgh-login") {
                            $(".zwelcome-info .zlogin-apps").attr("href", h)
                        }
                    }
                }
            }
        }
        if (typeof hidelogin != "undefined") {
            if (hidelogin == "1") {
                $(".zgh-userPanel .zgh-userAccess").hide()
            }
        }
    },
    dcbasedimage: function () {
        if (myimagebool) {
            mybool = 0;
            if (dcdomainOne != "com") {
                if ($(".dc-image").length > 0) {
                    $(".dc-image").each(function () {
                        if (typeof $(this).attr("dc-source") != "undefined") {
                            var j = dcdomainOne;
                            (j == "com.au") ? (j = "au") : "";
                            if ($(this).attr("dc-source").split(",").indexOf(j) > -1) {
                                var k = $(this).attr("src").split($(this).attr("fname")).join($(this).attr("fname") + "-" + j);
                                $(this).attr("src", k);
                                if (typeof $(this).attr("srcset") != "undefined") {
                                    var h = $(this).attr("srcset").split($(this).attr("fname")).join($(this).attr("fname") + "-" + j);
                                    $(this).attr("srcset", h)
                                }
                            }
                        }
                    })
                }
            }
        }
    },
    langsrcremove: function () {
        if (currentUrlLang) {
            $(".nonlang").each(function () {
                if (typeof currentUrlLang != "undefined") {
                    if ($(this).attr("href").indexOf("/" + currentUrlLang + "/") > -1) {
                        var h = $(this).attr("href").split("/" + currentUrlLang + "/").join("/");
                        $(this).attr({
                            href: h,
                            target: "_blank"
                        })
                    }
                }
            })
        }
    },
    debouncer: function (h, j) {
        var k, j = j || 200;
        return function () {
            var m = this,
                l = arguments;
            clearTimeout(k);
            k = setTimeout(function () {
                h.apply(m, Array.prototype.slice.call(l))
            }, j)
        }
    },
    loadlangxml: function () {
        var k = new XMLHttpRequest(),
            j = (customvar.productName == "home") ? "" : (customvar.productName == "zohopartners") ? "partners/" : (customvar.productName + "/");
        k.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var w = "https://www.zoho.com" + window.location.pathname;
                var r = [
                    [],
                    [],
                    []
                ];
                if (customvar.productName == "community") {
                    w = "https://community.zoho.com" + window.location.pathname;
                    if (window.location.pathname == "/community/" && window.location.host == _preZ) {
                        w = "https://community.zoho.com/"
                    }
                } else {
                    if (customvar.productName == "zohobigin") {
                        w = "https://www.bigin.com" + window.location.pathname
                    } else {
                        if (customvar.productName == "trainercentral") {
                            w = window.location.hostname + window.location.pathname
                        }
                    }
                }
                if (w.indexOf("index") > 0 && w.indexOf("index1") < 0) {
                    w = w.split("index")[0]
                }
                if (this.responseText.split(w + "</loc>").length > 1) {
                    var y = this.responseText.split(w + "</loc>")[1].split("</url>")[0];
                    var s = "English";
                    (currentUrlLang != "") ? (_val = lancountry[currentUrlLang]) : "";
                    y = y.split("<xhtml:link");
                    for (var p = 0; p < y.length; p++) {
                        if (typeof y[p].split('href="')[1] != "undefined") {
                            r[0].push(y[p].split('href="')[1].split('"')[0]);
                            var m = y[p].split('hreflang="')[1].split('"')[0];
                            "es-419" == m || "es" == m ? r[1].push("es-xl") : "en-au" == m ? r[1].push("en-au") : "x-default" == m ? r[1].push("en") : "ja" == m ? r[1].push("jp") : r[1].push(m);
                            s = lancountry[r[1][p - 1]];
                            r[2].push(s)
                        }
                    }
                }
                var q = [
                    [],
                    [],
                    []
                ];
                for (var p = 0; p < langArr.length; p++) {
                    var o = r[1].indexOf(langArr[p]);
                    if (o > -1) {
                        q[0].push(r[0][o]);
                        q[1].push(r[1][o]);
                        q[2].push(r[2][o])
                    }
                }
                if (q[0].length > 0) {
                    if ($("body").hasClass("i18n-zh-hans") && q[1].indexOf("zh-hans") < 0) {
                        q[0].push(q[0][q[1].indexOf("en")].split(".com").join(".com.cn"));
                        q[1].push("zh-hans");
                        q[2].push(lancountry["zh-hans"])
                    }
                }
                var v = (location.search.indexOf("?") > -1) ? "&" : "?";
                var x = (location.search.indexOf("zredirect=f") < 0) ? (location.search + v + "zredirect=f&zsrc=langdropdown") : location.search;
                var t = (localUrlLang != "" && r[1].indexOf(localUrlLang) > -1);
                if (t) {
                    if (typeof lancountry[localUrlLang] != "undefined") {
                        $(".zgh-localSelect").html(lancountry[localUrlLang]);
                        if (q[2].indexOf("English") > -1) {
                            q[2][q[2].indexOf("English")] = "English (Global)"
                        }
                    }
                }
                for (var p = 0; p < q[0].length; p++) {
                    if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
                        var l = currentUrlLang == "" ? "en" : currentUrlLang;
                        var n = (q[1][p] == "en") ? (x + "&lb=" + currentUrlLang) : x;
                        var u = window.location.origin + "/" + q[0][p].split("zoho.com/")[1] + n;
                        if (q[1][p] == "zh-hans") {
                            u = q[0][p] + n
                        }
                        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                            if (window.location.host.includes("prewww")) {
                                u = window.location.origin + "/" + q[0][p].split(window.location.host.split("pre").join("") + "/")[1] + n
                            } else {
                                u = window.location.origin + "/" + q[0][p].split(window.location.host + "/")[1] + n
                            }
                        }
                        if (q[1][p] == l) {
                            $(".zgh-localBox ul").append('<li class="activeURL-lang languageDropdown-' + q[1][p] + '"><a class="nonlang-ld" data-lang="' + q[1][p] + '" href="' + u + '">' + q[2][p] + "</a></li>")
                        } else {
                            $(".zgh-localBox ul").append('<li class="languageDropdown-' + q[1][p] + '"><a class="nonlang-ld" data-lang="' + q[1][p] + '" href="' + u + '">' + q[2][p] + "</a></li>")
                        }
                    } else {
                        if ((((currentUrlLang == "" && q[1][p] != "en") || t) || currentUrlLang != "") && q[1][p] != currentUrlLang) {
                            var n = (q[1][p] == "en") ? (x + "&lb=" + currentUrlLang) : x;
                            var u = window.location.origin + "/" + q[0][p].split("zoho.com/")[1] + n;
                            if (q[1][p] == "zh-hans") {
                                u = q[0][p] + n
                            }
                            if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                                if (window.location.host.includes("prewww")) {
                                    u = window.location.origin + "/" + q[0][p].split(window.location.host.split("pre").join("") + "/")[1] + n
                                } else {
                                    u = window.location.origin + "/" + q[0][p].split(window.location.host + "/")[1] + n
                                }
                            }
                            $(".zgh-localBox ul").append('<li class="languageDropdown-' + q[1][p] + '"><a class="nonlang-ld" data-lang="' + q[1][p] + '" href="' + u + '">' + q[2][p] + "</a></li>")
                        }
                    }
                }
                if (q[1].length < 1 || window.innerWidth < 1199) {
                    $(".zgh-localization").hide()
                } else {
                    $(".zgh-localization").show()
                } (($(".header .zgh-localBox ul li").length == 1) ? $(".header .zgh-localBox").addClass("localBox-single") : "");
                detectedLangNew = q[1];
                if (typeof CountryCode != "undefined") {
                    if (domainOne != "in") {
                        if (global_getUrlParam("zc_localredirection") === "" && customvar.productName !== "startups") {
                            langStrip()
                        }
                    }
                    if (customvar.countryEu.indexOf(CountryCode) > -1) { }
                }
            }
        };
        k.overrideMimeType("text/xml");
        var h = (window.location.pathname.split("/help/").length > 1) ? "help/" : "";
        if (!(customvar.productName == "mail" || customvar.productName == "zeptomail")) {
            h = ""
        }
        if (window.location.host == _preZ) {
            if (customvar.productName == "community") {
                k.open("GET", "https://" + _preZ + "/" + j + h + "sitemap.xml", true)
            } else {
                if (customvar.productName == "crmplus") {
                    k.open("GET", window.location.origin + "/crm/" + j + h + "sitemap.xml", true)
                } else {
                    k.open("GET", "https://" + _preZ + "/" + j + h + "sitemap.xml", true)
                }
            }
        } else {
            if (customvar.productName == "crmplus") {
                k.open("GET", window.location.origin + "/crm/" + j + h + "sitemap.xml", true)
            } else {
                if (window.location.host.indexOf("zohoflow") > 0) {
                    k.open("GET", window.location.origin + "/apps/sitemap.xml", true)
                } else {
                    if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                        if (customvar.productName == "community" || customvar.productName == "zohobigin") {
                            j = ""
                        }
                        if (window.location.origin.indexOf("orchestly") > 0 || window.location.origin.indexOf("trainercentral") > 0 || window.location.origin.indexOf("catalyst") > 0) {
                            k.open("GET", "https://www.zoho.com/" + j + h + "sitemap.xml", true)
                        } else {
                            k.open("GET", window.location.origin + "/" + j + h + "sitemap.xml", true)
                        }
                    } else {
                        k.open("GET", window.location.origin + "/" + j + h + "sitemap.xml", true)
                    }
                }
            }
        }
        k.send()
    },
    vimovid: function () {
        var l = $(".zcpopup-controller, .popup-controller");
        if ($("#zc-vimid").length < 1) {
            var h = document.createElement("script");
            h.id = "zc-vimid";
            h.src = "https://player.vimeo.com/api/player.js";
            var k = document.getElementsByTagName("script")[0];
            k.parentNode.insertBefore(h, k)
        }
        if (CountryCode == "ID") {
            var m;
            if (window.location.hostname == _preZ) {
                m = "https://" + _preZ + "/sites/zweb/json/yv.json"
            } else {
                m = "https://www.zoho.com/sites/zweb/json/yv.json"
            }
            $.getScript(m, function (s) {
                for (var p = 0; p < l.length; p++) {
                    var o = l.eq(p);
                    if (typeof l.eq(p).attr("data-video") != "undefined") {
                        if (l.eq(p).attr("data-video").indexOf("vimeo") > -1) {
                            var n = o.attr("data-video").split("/")[o.attr("data-video").split("/").length - 1].split("?")[0];
                            var r = JSON.parse(s).find(function (t) {
                                if (t.v == n) {
                                    return t
                                }
                            });
                            if (r && (r.i || r.y)) {
                                var q = "https://www.youtube-nocookie.com/embed/";
                                if (r.i) {
                                    q = q + r.i
                                } else {
                                    if (r.y) {
                                        q = q + r.y
                                    }
                                }
                                o.attr("data-video", q);
                                o.addClass("nonvimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                            } else {
                                o.addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                            }
                        }
                    }
                }
            })
        } else {
            for (var j = 0; j < l.length; j++) {
                if (typeof l.eq(j).attr("data-video") != "undefined") {
                    if (l.eq(j).attr("data-video").indexOf("vimeo") > -1) {
                        l.eq(j).addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                    } else {
                        l.eq(j).addClass("nonvimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                    }
                }
            }
        }
    },
    refval: function () {
        return "ref_value=" + encodeURIComponent(customvar.czms() + "," + customvar.czmr() + "," + customvar.cuid() + "," + customvar.mydevice() + "," + _lhref)
    },
    tlscall: function () {
        var h = _lhref.indexOf("zgs=1") < 0;
        if (h) {
            $.getJSON("https://tlstest.zoho." + _com + "/api", function (j) {
                if (j.status != "200") {
                    $(".ztopstrip-container").prepend('<div class="tls-infostrip"> <p>' + Drupal.t("Your browser is out of date and does not currently support TLS 1.2. For your security, please update your browser or operating system to the latest version to regain access to Zoho Services.") + '<a target="_blank" href="https://www.zoho.' + domainOne + '/general/blog/end-of-support-for-older-tls-versions-in-zoho.html">More information</a></p> <span class="zclosestrip tlsClose">X</span></div>');
                    $(".zclosestrip.tlsClose").on("click", function () {
                        $(".tls-infostrip").remove()
                    })
                }
            })
        }
    },
    zChaSupIDByReg: function () {
        var j = [
            ["mail", "support@zohomail.com", "support@eu.zohomail.com"],
            ["workplace", "support@zohoworkplace.com", "support@eu.zohoworkplace.com"]
        ];
        for (var h = 0; h < j.length; h++) {
            if (j[h][0] == customvar.productName) {
                if (dcdomainOne == "eu") {
                    getZPrdSupportID = $('a[href="mailto:' + j[h][1] + '"]');
                    for (b = 0; b < getZPrdSupportID.length; b++) {
                        var k = $(getZPrdSupportID[b]);
                        if (k.attr("href") == "mailto:" + j[h][1] + "") {
                            k.attr("href", "mailto:" + j[h][2] + "")
                        }
                        if (k.text() == "" + j[h][1] + "") {
                            k.text(j[h][2])
                        }
                    }
                }
            }
        }
    },
    findMailToReplace: function (h) {
        if ($('a[href="mailto:' + h.global + '"]').length > 0 && typeof h[dcdomainOne] != "undefined") {
            $('a[href="mailto:' + h.global + '"]').html(h[dcdomainOne]);
            $('a[href="mailto:' + h.global + '"]').attr("href", "mailto:" + h[dcdomainOne])
        }
    },
    dcadded: function (k) {
        if (k) {
            const j = ["com.au"];
            for (var l = 0; l < customvar.domainArr[0].length; l++) {
                j.push(customvar.domainArr[0][l])
            }
            j.push("au");
            const h = Array.from(new Set(j));
            const m = ["www.zoho.com", _preZ, _lz + ".com", _prewww + ".zoho.com", "catalyst.zoho.com", "catalyst.zoho.eu"];
            m.forEach(function (n, o) {
                k = k.replace(new RegExp(n.replace(/\./g, "\\."), "g"), "--ignore-domain--" + o)
            });
            if (dcdomainOne === "ca") {
                k = k.replace(new RegExp("zoho\\.", "g"), Zdomain + ".")
            } else {
                k = k.replace(new RegExp("zohocloud\\.", "g"), Zdomain + ".")
            }
            h.forEach(function (n) {
                k = k.replace(new RegExp(Zdomain + "." + n, "g"), Zdomain + "." + dcdomainOne)
            });
            m.forEach(function (n, o) {
                k = k.replace(new RegExp("--ignore-domain--" + o, "g"), n)
            });
            k = k.replace(new RegExp("\\.au\\.au", "g"), ".au");
            if (dcdomainOne !== "com.au") {
                k = k.replace(new RegExp("com\\.au", "g"), "com")
            }
            return k
        }
        return k
    },
    comp_disclaimer: function () {
        if ($(".zcomp-disclaimer").length > 0) {
            if ($(".zcomp-disclaimer").attr("data-pricingvalue")) {
                var h = Drupal.t("All names and marks mentioned here remain the property of their original owners. Details are as published by the named competitors on their website(s) on") + " " + $(".zcomp-disclaimer").attr("data-disclaimer-date") + " " + Drupal.t("and are subject to change without notice. The details provided on this page are for general purposes only and cannot be considered as authorized information from the respective competitors. Zoho disclaims any liability for possible errors, omissions, or consequential losses based on the details here.");
                $(".zcomp-disclaimer").html(h)
            } else {
                var h = Drupal.t("All names and marks mentioned here remain the property of their original owners. Prices are as published by the named competitors on their website(s) as on") + " " + $(".zcomp-disclaimer").attr("data-disclaimer-date") + " " + Drupal.t("(without taking into account the taxes or discounts), and are subject to change based on the pricing policies of the competitors. The details provided on this page are for general purposes only and cannot be considered as authorized information from the respective competitors. Zoho disclaims any liability for possible errors, omissions, or consequential losses based on the details here.");
                $(".zcomp-disclaimer").html(h)
            }
        }
    },
    browserversion: (function () {
        var j = navigator.userAgent,
            h, k = j.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(k[1])) {
            h = /\brv[ :]+(\d+)/g.exec(j) || [];
            return "IE " + (h[1] || "")
        }
        if (k[1] === "Chrome") {
            h = j.match(/\b(OPR|Edge)\/(\d+)/);
            if (h != null) {
                return h.slice(1).join(" ").replace("OPR", "Opera")
            }
        }
        k = k[2] ? [k[1], k[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((h = j.match(/version\/(\d+)/i)) != null) {
            k.splice(1, 1, h[1])
        }
        return k.join(" ")
    })(),
    getOS: navigator.sayswho = (function () {
        var m = window.navigator.userAgent,
            h = window.navigator.platform,
            n = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
            j = ["Win32", "Win64", "Windows", "WinCE"],
            k = ["iPhone", "iPad", "iPod"],
            l = null;
        if (n.indexOf(h) !== -1) {
            l = "Mac"
        } else {
            if (k.indexOf(h) !== -1) {
                l = "iOS"
            } else {
                if (j.indexOf(h) !== -1) {
                    l = "Windows"
                } else {
                    if (/Android/.test(m)) {
                        l = "Android"
                    } else {
                        if (!l && /Linux/.test(h)) {
                            l = "Linux"
                        }
                    }
                }
            }
        }
        return l
    })()
};
customvar.zwc_setnewFooter = function () {
    if (currentUrlLang == "jp") {
        if ($(".zw-support-mail-links").length > 0) {
            if (typeof customvar.supportId != "undefined") {
                $(".zw-support-mail-links").append('<a id="zf-support-mailid" href="mailto:' + customvar.supportId() + '">' + customvar.supportId() + "</a>")
            } else {
                $(".zw-support-mail-links").append('<a id="zf-support-mailid" href="mailto:support@zoho.com">support@zoho.com</a>')
            }
        }
    }
};
customvar.dcObj = {
    us: {
        domain: "com",
        accountsDomain: "zoho.com",
        countries: [],
        notavailable: "",
        dctext: "US"
    },
    "in": {
        domain: "in",
        accountsDomain: "zoho.in",
        countries: ["IN"],
        notavailable: ["kanaa", "contactmanager", "rpa", "identity-management", "iot", "log360-cloud", "it-management", "shifts", "voice", "pilot", "qengine", "commandcenter", "zakya", "eprotect", "start", "kepto"],
        dctext: "India"
    },
    eu: {
        domain: "eu",
        accountsDomain: "zoho.eu",
        countries: customvar.countryEu,
        notavailable: ["kanaa", "identity-management", "rpa", "it-management", "pilot", "commandcenter", "eprotect", "start", "tables", "kepto", "publish"],
        dctext: "EU"
    },
    "com.au": {
        domain: "com.au",
        accountsDomain: "zoho.com.au",
        countries: customvar.countryTranstasman,
        notavailable: ["kanaa", "contactmanager", "rpa", "identity-management", "iot", "log360-cloud", "it-management", "voice", "pilot", "qengine", "commandcenter", "zakya", "eprotect", "start", "tables", "kepto"],
        dctext: "Australia"
    },
    jp: {
        domain: "jp",
        accountsDomain: "zoho.jp",
        countries: ["JP"],
        notavailable: ["kanaa", "shifts", "rpa", "voice", "iot", "catalyst", "commandcenter", "zakya", "fsm", "thrive", "eprotect", "pilot", "qengine", "start", "tables", "kepto", "log360-cloud", "publish"],
        dctext: "Japan"
    },
    ca: {
        domain: "ca",
        accountsDomain: "zohocloud.ca",
        countries: ["CA"],
        notavailable: ["kanaa", "marketingautomation", "rpa", "iot", "voice", "lens", "docscanner", "directory", "backtowork", "apptics", "remotely", "deluge", "peopleplus", "workerly", "dataprep", "workplace", "bugtracker", "webinar", "salesinbox", "motivator", "commandcenter", "telephony", "it-management", "remoteaccessplus", "patchmanagerplus", "endpoint-central", "eprotect", "researchstudio", "officeplatform", "log360-cloud", "officeplus", "qengine", "contacts", "datagrid", "start", "officesuite", "tables", "showtime", "zillum", "zakya"],
        dctext: "Canada"
    },
    sa: {
        domain: "sa",
        accountsDomain: "zoho.sa",
        countries: ["SA"],
        notavailable: ["backtowork", "kanaa", "trainercentral", "marketplace", "commerce", "voice", "remotely", "contracts", "peopleplus", "shifts", "iot", "sign", "log360-cloud", "trident", "officeplus", "qengine", "datagrid", "start", "officesuite", "tables", "catalyst", "rpa", "showtime", "zakya", "researchstudio", "zillum"],
        dctext: "Saudi Arabia"
    }
};
if (predomain) {
    customvar.dcObj.ca["notavailable"] = customvar.dcObj.ca["notavailable"].filter(function (h) {
        return h != "workerly"
    });
    customvar.dcObj.ca["notavailable"] = customvar.dcObj.ca["notavailable"].filter(function (h) {
        return h != "developer"
    });
    customvar.dcObj.sa["notavailable"] = customvar.dcObj.sa["notavailable"].filter(function (h) {
        return h != "developer"
    })
}
customvar.browser = customvar.browserversion.split(" ")[0].toLowerCase();
customvar.bversion = customvar.browserversion.split(" ")[1].toLowerCase();
customvar.myOs = customvar.getOS.toLowerCase();
customvar.comp_disclaimer();
customvar.findproduct = (function () {
    if (knowprd) {
        customvar.productName = document.getElementsByTagName("body")[0].getAttribute("data-prdname").replace(/ /g, "");
        "zohogeneralpages" == customvar.productName ? customvar.productName = "home" : "orchestly" == customvar.productName ? customvar.productName = "zohoorchestly" : "itmanagement" == customvar.productName ? customvar.productName = "it-management" : "log360cloud" == customvar.productName ? customvar.productName = "log360-cloud" : "itanalytics" == customvar.productName ? customvar.productName = "it-analytics" : ""
    }
    if (customvar.productName == "zoho_general_pages") {
        customvar.productName = "home"
    } (window.location.host.indexOf("zoho") < 0 || window.location.host.indexOf("catalyst") > -1 || window.location.host.indexOf("zohoflow") > -1 || window.location.host.indexOf("zohocrm") > -1 || window.location.host.indexOf("community") > -1) ? customvar.outproduct.push(customvar.productName) : ""
})();
if (predomain) {
    customvar.newFooterProducts = customvar.newFooterProducts.concat(["workerly", "routeiq"])
}
var _livelink = "";
if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
    _livelink = "https://www.zoho.com"
}
var refound = (currentUrlLang == "jp") ? refound = "<li><a href='//www.zoho.com/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>" : "";
if (currentUrlLang == "de") {
    refound = '<li><a href="' + _livelink + langsrc + 'impressum.html">Impressum</a></li>'
}
var czone_footer = '<div class="common-links"><ul class=ZPprivacy> <li><a href="' + _livelink + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + _livelink + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + _livelink + langsrc + 'security.html">' + Drupal.t("Security") + '</a></li> <li><a class="footer-compliance" href="' + _livelink + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + _livelink + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + _livelink + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + refound + "</ul></div>";
if (customvar.newFooterProducts.includes(customvar.productName)) {
    czone_footer = '<div class="common-links"><div class="zw-footer-search-lang-block"></div><ul class=ZPprivacy> <li><a href="' + _livelink + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + _livelink + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + _livelink + langsrc + 'security.html">' + Drupal.t("Security") + '</a></li> <li><a class="footer-compliance" href="' + _livelink + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + _livelink + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + _livelink + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + refound + "</ul></div>"
}
$(".zw-global-footer").html(czone_footer);
// if ($("body").hasClass("r-g-f") && customvar.absurl.indexOf("signup.html") < 0 && customvar.absurl.indexOf("login.html") < 0) {
//     var czone_footer = '<div class="content-wrap"><ul class=ZPprivacy><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + "</a></ul></div>";
//     $(".zw-only-copyright").prepend(czone_footer)
// }
var myAccount = Drupal.t("My Account"),
    signOut = Drupal.t("Sign Out"),
    _txtIwould = Drupal.t("Yes, I would like to receive marketing communication regarding") + ' <a href="https://www.zohocorp.com/" name="zohos" target="_blank">' + Drupal.t("Zoho&rsquo;s") + "</a> " + Drupal.t("products, services, and events from Zoho and its regional partners."),
    czonebusiness = Drupal.t("Business"),
    czoneindividual = Drupal.t("Individual");
if (currentUrlLang == "jp") {
    _txtIwould = Drupal.t("Yes, I would like to receive marketing communication regarding") + ' <a href="https://www.zohocorp.com/" target="_blank">' + Drupal.t("Zoho") + "</a> " + Drupal.t("products, services, and events from Zoho and its regional partners.")
} (function (h) {
    customvar.email = Drupal.t("Email"), customvar.eEmail = Drupal.t("Please enter your email"), customvar.password = Drupal.t("Password"), customvar.epassword = Drupal.t("Please enter your password"), customvar.fullName = Drupal.t("Full Name"), customvar.eFullName = Drupal.t("Please enter your full name"), customvar.companyName = Drupal.t("Company Name"), customvar.eCompanyName = Drupal.t("Please enter your company name"), customvar.phoneNumber = Drupal.t("Phone Number"), customvar.ePhoneNumber = Drupal.t("Please enter your phone number"), customvar.eValidPhoneNumber = Drupal.t("Please enter valid phone number"), customvar.mobileNumber = Drupal.t("Mobile Number"), customvar.eMobileNumber = Drupal.t("Please enter your mobile number"), customvar.eValidMobileNumber = Drupal.t("Please enter valid mobile number"), customvar.eReMobileNumber = Drupal.t("Please re-enter valid mobile number"), customvar.portalName = Drupal.t("Portal Name"), customvar.ePortalName = Drupal.t("Please enter your portal name"), customvar.eUserName = Drupal.t("Please enter your user name"), customvar.eFirstName = Drupal.t("Please enter your first name"), customvar.eLastName = Drupal.t("Please enter your last name"), customvar.vsignup = Drupal.t("Verify your sign-up"), customvar.enterotpmobile = Drupal.t("Enter the one-time password sent to your mobile number."), customvar.enterotpemail = Drupal.t("Enter the one-time password sent to your email address."), customvar.change = Drupal.t("Change Country"), customvar.changeme = Drupal.t("Change"), customvar.verify = Drupal.t("VERIFY"), customvar.enterOtp = Drupal.t("Enter OTP"), customvar.resentotp = Drupal.t("Resend OTP"), customvar.basedon = Drupal.t("based on your IP"), customvar.basedonip = Drupal.t("It looks like you&lsquo;re in"), customvar.datawillb = Drupal.t("Your data will be stored in the"), customvar.datacenter = Drupal.t("data center"), customvar.otpEle = '<span class="signupotpcontainer" style="display:none"> <div class="verifytitle">' + Drupal.t("Verify your sign-up") + '</div> <div class="verifyheader">' + Drupal.t("Enter the one-time password sent to your email address.") + '</div> <div class="otpmobile"> <span id="mobileotp"></span> <span class="change" onclick="zwc_gobacktosignup()">' + Drupal.t("Change") + '</span> </div> <span class="za-otp-container" style="display: none;"> <input type="text" class="form-input" tabindex="1" name="otp" id="otpfield" placeholder="' + Drupal.t("Enter OTP") + '" disabled="disabled"> <span onclick="resendOTP()" class="resendotp">' + Drupal.t("Resend OTP") + '</span> </span> <span class="za-submitbtn-otp"> <input type="button" tabindex="1" class="signupbtn" value="' + Drupal.t("VERIFY") + '" onclick="validateOTP()" name="otpfield"> <div class="loadingImg"></div> </span> </span>'
})(jQuery);
customvar.verify = Drupal.t("VERIFY");
customvar.verifying = Drupal.t("VERIFYING");
if (customvar.meaList.indexOf(CountryCode) > -1) {
    $("body").addClass("region-mea")
}
if (customvar.africaRegList.indexOf(customvar.countries[0][customvar.countries[1].indexOf(CountryCode)]) > -1) {
    $("body").addClass("region-africa")
}
customvar.bodyclass = function () {
    if (typeof CountryCode != "undefined") {
        if (customvar.countryEu.indexOf(CountryCode) > -1) {
            if (!$("body").hasClass("ccode-eucountries")) {
                var h = document.getElementsByTagName("body")[0];
                h.classList.add("ccode-eucountries")
            }
        }
    }
    if ((currentUrlLang != "" && currentUrlLang != "en") || domainOne == "com.cn") {
        if (!$("body").hasClass("other-lang")) {
            var h = document.getElementsByTagName("body")[0];
            h.classList.add("other-lang")
        }
        if (!$("body").hasClass("lang-" + currentUrlLang)) {
            var h = document.getElementsByTagName("body")[0];
            if (domainOne == "com.cn") {
                h.classList.add("lang-zh-hans")
            } else {
                h.classList.add("lang-" + currentUrlLang)
            }
        }
    } else {
        if (!$("body").hasClass("lang-en")) {
            var h = document.getElementsByTagName("body")[0];
            h.classList.add("lang-en")
        }
    }
    $("body").addClass("zos-" + customvar.getOS.toLowerCase()).addClass("zb-" + customvar.browserversion.split(" ")[0].toLowerCase()).addClass("zbv-" + customvar.browserversion.split(" ")[0].toLowerCase() + "-" + customvar.browserversion.split(" ")[1].toLowerCase());
    (_preZ == window.location.hostname) ? customvar.sHostName = "p" : (_preZC == window.location.hostname) ? (customvar.sHostName = "pz") : (_zcmsZC == window.location.hostname) && (customvar.sHostName = "z");
    if (_preZ == window.location.hostname || _preZC == window.location.hostname || _zcmsZC == window.location.hostname) {
        customvar.hostName = window.location.hostname
    }
    customvar.zmr = customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"));
    customvar.zms = customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"));
    customvar.isEU = ((customvar.countryEu.indexOf(CountryCode) > -1) ? true : false);
    customvar.isAPAC = ((customvar.countryApac.indexOf(CountryCode) > -1) ? true : false);
    (customvar.isAPAC) ? $("body").addClass("ccode-apaccountries") : ""
}();
customvar.vimcall = function () {
    if (currentUrlLang == "jp" && customvar.productName == "desk") {
        if ($(".zcpopup-controller").length > 0) {
            customvar.vimovid()
        }
    } else {
        if ($(".zcpopup-controller").length > 0 || $(".popup-controller").length > 0) {
            customvar.vimovid()
        }
    }
};
customvar.vimcall();
$(document).on("change", ".za-globalstate-signup", function () {
    customvar.privacypolicylink(true)
});
customvar.czmr = function () {
    return customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"))
};
customvar.czms = function () {
    return customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"))
};
customvar.cuid = function () {
    return customvar.removequots(customvar.getGlobalCookie("cookie-uid"))
};

function global_getUrlParam(j) {
    var l = {},
        h = "";
    var k = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, o, p) {
        l[o] = p;
        if (o == j) {
            h = p
        }
    });
    return h
}

function global_getUrlParam_sheet(h) {
    var l = "";
    l = window.location.search.substring(1);
    var k = l.split("&"),
        m, j;
    for (j = 0; j < k.length; j++) {
        m = k[j].split("=");
        if (m[0] === h) {
            return m[1] === undefined ? true : m[1]
        }
    }
    return ""
}
var countryEu = customvar.countryEu;
if (customvar.pathname.indexOf("creator/developers/signup.html") > 0 || customvar.absurl.indexOf("creator/payroll") > 0) {
    customvar.noteuinarr[0].push("creator");
    customvar.noteuinarr[1].push("creator");
    customvar.noteuinarr[2].push("creator");
    customvar.noteuinarr[3].push("creator");
    customvar.noteuinarr[4].push("creator");
    customvar.dcObj["in"].notavailable.push("creator");
    customvar.dcObj.eu.notavailable.push("creator");
    customvar.dcObj["com.au"].notavailable.push("creator");
    customvar.dcObj.jp.notavailable.push("creator");
    customvar.dcObj.ca.notavailable.push("creator");
    customvar.dcObj.sa.notavailable.push("creator")
}
if (customvar.absurl.indexOf("creator/procurement") > 0) {
    customvar.noteuinarr[1].push("creator");
    customvar.noteuinarr[2].push("creator");
    customvar.noteuinarr[3].push("creator");
    customvar.noteuinarr[4].push("creator");
    customvar.dcObj.eu.notavailable.push("creator");
    customvar.dcObj["com.au"].notavailable.push("creator");
    customvar.dcObj.jp.notavailable.push("creator");
    customvar.dcObj.ca.notavailable.push("creator");
    customvar.dcObj.sa.notavailable.push("creator")
}
if (dcenabled) {
    customvar.dcreset()
}
// if (currentUrlLang == "jp") {
//     if ($("body").hasClass("r-g-f") && customvar.absurl.indexOf("signup.html") < 0 && customvar.absurl.indexOf("login.html") < 0) {
//         $(".zw-only-copyright .content-wrap").append("<p>&copy; " + currentYear + ", " + Drupal.t("ZOHO Japan Corporation. All Rights Reserved.") + "</p>")
//     } else {
//         $(".zw-only-copyright").append("<p>&copy; " + currentYear + ", " + Drupal.t("ZOHO Japan Corporation. All Rights Reserved.") + "</p>")
//     }
// } else {
//     if ($("body").hasClass("r-g-f") && customvar.absurl.indexOf("signup.html") < 0 && customvar.absurl.indexOf("login.html") < 0) {
//         $(".zw-only-copyright .content-wrap").append("<p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>")
//     } else {
//         $(".zw-only-copyright").append("<p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>")
//     }
// }
if (customvar.cnarr.indexOf(customvar.productName) > -1) {
    customvar.domainArr[0].push("com.cn");
    customvar.domainArr[2].push("zoho.com.cn")
}
var detectedLangNew = "";
var loadxml = true;
var sitemapskip = ["arattai", "qengine", "endpointcentralmsp"];
if (typeof $("body").attr("site") != "undefined") {
    if ($("body").attr("site") == "zblogs") {
        loadxml = false
    }
} else {
    if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu" || window.location.pathname.indexOf("signup.html") > 0 || customvar.productName == "zakya") {
        loadxml = false
    }
}
if (customvar.productName == "community" || customvar.productName == "zohobigin" || customvar.productName == "trainercentral") {
    loadxml = true
} else {
    if (window.location.origin.indexOf("zcmsweb") > 0) {
        loadxml = false
    }
}
if (sitemapskip.includes(customvar.productName) || (typeof $("body").attr("site") != "undefined" && $("body").attr("site") == "o-cms")) {
    loadxml = false
}
if (loadxml) {
    customvar.loadlangxml()
}
if (document.getElementsByClassName("header").length > 0) {
    document.getElementsByClassName("header")[0].innerHTML = ""
}
if (customvar.pathname.indexOf("crm/lp/") > 0) {
    $("body").addClass("crm-lp")
}
if ($(".zw-promo-top").length > 0) {
    $(".zw-promo-top").prepend('<div class="ztopstrip-container"></div>')
} else {
    $("body").prepend('<div class="ztopstrip-container"></div>')
}
if (getDomain == ZcheckDomain) {
    ZdomainName = "localzoho"
}
customvar.textparam = (global_getUrlParam("creativetestparam") != "");
customvar.customclean = (global_getUrlParam("customclean") != "");
if (window.location.hostname == _preZ) {
    if (global_getUrlParam("autoDomain") != "") {
        domainOne = global_getUrlParam("autoDomain")
    }
} (global_getUrlParam("hideglobalheader") != "") ? $("body").addClass("hideglobalheader") : "";
(global_getUrlParam("hideproductheader") != "") ? $("body").addClass("hideproductheader") : "";
(global_getUrlParam("hideglobalfooter") != "") ? $("body").addClass("hideglobalfooter") : "";
(global_getUrlParam("hideproductfooter") != "") ? $("body").addClass("hideproductfooter") : "";
(global_getUrlParam("hidebottomcta") != "") ? $("body").addClass("hidebottomcta") : "";

function encodeFun(h) {
    try {
        h = decodeURI(h)
    } catch (k) {
        h = h
    }
    if (h.indexOf("#") > -1) {
        var m = h.split("#").length,
            l = "";
        for (var j = 1; j < m; j++) {
            l += "#" + h.split("#")[j]
        }
        h = h.split("#")[0] + "" + encodeURI(l)
    }
    if (h.indexOf("?") > -1) {
        var m = h.split("?").length,
            l = "";
        for (var j = 1; j < m; j++) {
            l += "?" + h.split("?")[j]
        }
        h = h.split("?")[0] + "" + encodeURI(l)
    }
    return h
} (function () {
    if (currentUrlLang != "jp") {
        var k = document.domain.split("").splice(0, (document.domain.split("").length - 1)).join("");
        if (document.domain.split("")[document.domain.length - 1] == ".") {
            var j = window.location.href.split(getDomain)[0] + "" + k + "" + window.location.href.split(getDomain)[1];
            window.location.href = encodeFun(j)
        }
        var h = ["nila", "qntrl", "vanihq"];
        if (!h.includes(customvar.productName)) {
            if (_preZ == window.location.hostname) {
                $.getScript("https://" + _preZ + "/sites/zweb/js/common/dynamicemail.js")
            } else {
                $.getScript("https://www.zoho.com/sites/zweb/js/common/dynamicemail.js")
            }
        }
    }
})();

function decodeHexString(h) {
    h = h.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
        return String.fromCharCode(parseInt(arguments[1], 16))
    });
    h = h.replace(/\\u([\d\w]{4})/gi, function () {
        return String.fromCharCode(parseInt(arguments[1], 16))
    });
    return h
}
var addDynamicScript = (function () {
    var h = {};
    var j = {
        download_plan_comp_pdf: "/sites/zweb/js/common/download_plan_comp_pdf.js",
        plan_features_filter: "/sites/zweb/js/common/plan_features_filter.js",
        "zc-crm-webform": "/sites/zweb/js/common/zc-crm-webform.js"
    };
    return function (l) {
        var k = "";
        if (j[l]) {
            k = j[l];
            if (window.location.host === _preZ || parent.document.location.host === _preZ) {
                l = "https://" + _preZ + j[l]
            } else {
                l = "https://www.zohowebstatic.com" + j[l]
            }
        } else {
            if (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(l)) {
                k = new URL(l).pathname
            } else {
                throw new Error("Invalid URL: " + l)
            }
        }
        if (!h[k]) {
            h[k] = {
                needToLoad: false,
                loadStatus: false,
                loadCount: 0,
                resolves: []
            }
        }
        if (document.querySelectorAll('script[src*="' + k + '"]').length === 0 && !h[k].needToLoad) {
            h[k].needToLoad = true
        }
        h[k].loadCount++;
        return new Promise(function (o, n) {
            if (h[k].needToLoad && h[k].loadCount === 1) {
                var m = document.createElement("script");
                m.onload = function () {
                    h[k].loadStatus = true;
                    h[k].resolves.forEach(function (p) {
                        p()
                    });
                    o()
                };
                m.onerror = function () {
                    n()
                };
                m.src = l;
                document.body.appendChild(m)
            } else {
                if (!h[k].needToLoad || h[k].loadStatus) {
                    o()
                } else {
                    h[k].resolves.push(o)
                }
            }
        })
    }
})();
customvar.transCName = customvar.transCName.split("_").join(" ");
(customvar.transCName == "Viet Nam") ? (customvar.transCName = "Vietnam") : "";
var _conval = customvar.transCName.toLocaleLowerCase().split(" ").join("");
(_conval.indexOf("unitedstates") > -1 || _conval.indexOf("unitedkingdom") > -1 || _conval.indexOf("unitedarabemirate") > -1 || _conval.indexOf("bahamas") > -1 || _conval.indexOf("caymanislands") > -1 || _conval.indexOf("centralafricanrepublic") > -1 || _conval.indexOf("channelislands") > -1 || _conval.indexOf("czechrepublic") > -1 || _conval.indexOf("dominicanrepublic") > -1 || _conval.indexOf("falklandislands") > -1 || _conval.indexOf("ivorycoast") > -1 || _conval.indexOf("leewardislands") > -1 || _conval.indexOf("maldives") > -1 || _conval.indexOf("marshall") > -1 || _conval.indexOf("netherlands") > -1 || _conval.indexOf("philippines") > -1 || _conval.indexOf("solomonislands") > -1 || _conval.indexOf("turksandcaicosislands") > -1 || _conval.indexOf("virginislands") > -1) ? (customvar.basedonip = Drupal.t("It looks like you&lsquo;re in the")) : "";
if (global_getUrlParam("zc_localredirection") === "" && customvar.productName !== "startups") {
    if ((window.location.host == "www.zoho.com") || window.location.host == "prewww.zoho.com" || window.location.host == _preZ) {
        if (window.location.href.indexOf("zredirect=f") > 0) {
            customvar.lsoinfo("latinNavigate", "1")
        }
        if (global_getUrlParam("zc_localredirection") != "") {
            if (typeof localRedirectionlist[currentUrlLang] != "undefined") {
                if (localRedirectionlist[currentUrlLang].split(",").indexOf(CountryCode) > -1) {
                    if (customvar.lsoinfo("latinNavigate") == "") {
                        var mlang = window.location.href.split("/" + currentUrlLang + "/").join("/");
                        $(".ztopstrip-container").css("display", "block");
                        $(".ztopstrip-container").append('<div class="lbanner" style="display:block"> <span class="langTxt">' + Drupal.t("Hello! Do you want to navigate in English?") + '</span><span class="langClose">X</span> </div>');
                        localredirectionval = "1";
                        $(".lbanner .langTxt").on("click", function () {
                            var h = "?";
                            if (mlang.indexOf("?") > -1) {
                                h = "&"
                            }
                            customvar.lsoinfo("latinNavigate", "1");
                            if (mlang.indexOf("#") > 0) {
                                mlang = mlang.split("#")[0]
                            }
                            window.location = mlang + h + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader"
                        });
                        $(".lbanner .langClose").on("click", function () {
                            try {
                                $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                            } catch (h) { }
                            $(".lbanner").remove();
                            customvar.lsoinfo("latinNavigate", "1")
                        })
                    }
                }
            }
        } else {
            if (currentUrlLang == "es-xl" || (currentUrlLang == "fr" && CountryCode == "FR") || (currentUrlLang == "nl" && CountryCode == "NL") || ((CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar") || (currentUrlLang == "pt-br" && CountryCode == "BR") || (currentUrlLang == "id" && CountryCode == "ID") || (currentUrlLang == "de" && CountryCode == "DE")) {
                if (customvar.lAmerica.indexOf(CountryCode) > -1 || (currentUrlLang == "nl" && CountryCode == "NL") || (currentUrlLang == "pt-br" && CountryCode == "BR") || (currentUrlLang == "fr" && CountryCode == "FR") || ((CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar") || (currentUrlLang == "id" && CountryCode == "ID") || (currentUrlLang == "de" && CountryCode == "DE")) {
                    if (customvar.lsoinfo("latinNavigate") == "") {
                        var mlang = window.location.href.split("/" + currentUrlLang + "/").join("/");
                        $(".ztopstrip-container").css("display", "block");
                        $(".ztopstrip-container").append('<div class="lbanner" style="display:block"> <span class="langTxt">' + Drupal.t("Hello! Do you want to navigate in English?") + '</span><span class="langClose">X</span> </div>');
                        localredirectionval = "1";
                        $(".lbanner .langTxt").on("click", function () {
                            var h = "?";
                            if (mlang.indexOf("?") > -1) {
                                h = "&"
                            }
                            customvar.lsoinfo("latinNavigate", "1");
                            if (mlang.indexOf("#") > 0) {
                                mlang = mlang.split("#")[0]
                            }
                            window.location = mlang + h + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader"
                        });
                        $(".lbanner .langClose").on("click", function () {
                            try {
                                $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                            } catch (h) { }
                            $(".lbanner").remove();
                            customvar.lsoinfo("latinNavigate", "1")
                        })
                    }
                }
            }
        }
    }
} else {
    newLangStrip()
}
customvar.clang = (currentUrlLang == "") ? "" : ("service_language=" + currentLang + "&");
customvar.newsignupArr = ["teaminbox", "recruit", "campaigns", "sites", "commerce", "desk", "pagesense", "people", "sign", "voice", "forms", "pilot", "dataprep", "learn", "crm", "crmplus", "bigin", "cliq", "directory", "creator", "calendar", "peopleplus", "contracts", "marketingautomation", "connect", "shifts", "marketingplus", "survey", "ziasearch", "backtowork", "backstage", "assist", "workerly", "projects", "one", "developer", "catalyst", "social", "lens", "vault", "sprints", "salesinbox", "commandcenter", "remotely", "salesiq", "bookings", "analytics", "sheet", "bugtracker", "workdrive", "trainercentral", "flow", "remoteaccessplus", "notebook", "patchmanagerplus", "mobiledevicemanagerplus", "MobileDeviceManagement", "desktopcentral", "zakya", "home", "meeting", "mail", "zeptomail"];
customvar.oldsignupArr = [];
customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&";
if (customvar.outproduct.indexOf(customvar.productName) > -1) {
    customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&"
}
var _psubmitval = (customvar.outproduct.indexOf(customvar.productName) > -1) ? "https://www.zoho.com" : "";
var _txtBySubmit = Drupal.t("By submitting this form, you agree to the processing of personal data according to our") + ' <a href="' + _psubmitval + langsrc + 'privacy.html" class="privacylink" target="_blank">' + Drupal.t("Privacy Policy") + ".</a>";
customvar.ocmsprelink = (window.location.hostname.indexOf(_prewww) > -1) ? ("https://" + _preZ) : "";
if (currentLang == "ar") {
    var arCount = 0;
    for (var i = 0; i < $("link").length; i++) {
        if ($("link").eq(i).attr("href") != "undefined") {
            if ($("link").eq(i).attr("href").indexOf("/css/ar.css") > 0) {
                arCount++
            }
        }
    }
    setTimeout(function () {
        if (arCount == 0) {
            var h = document.createElement("link");
            h.rel = "stylesheet";
            h.type = "text/css";
            if (predomain) {
                h.href = customvar.ocmsprelink + "/sites/zweb/css/language/ar.css"
            } else {
                h.href = "https://www.zohowebstatic.com/sites/zweb/css/language/ar.css"
            }
            document.getElementsByTagName("head")[0].appendChild(h)
        }
    }, 100)
}

function getGlobalCookie(h) {
    return customvar.getGlobalCookie(h)
}
var doc = $(document);
var wW = $(window).width();
var prdName = customvar.productName;
(prdName == "one") ? (prdName = "zohoone") : "";
(prdName == "officeplatform") ? (prdName = "officeintegrator") : "";
(prdName == "zohoorchestly") ? (prdName = "orchestly") : "";
(_lhref.indexOf("mdm-cloud.html") > 0) ? (prdName = "MobileDeviceManagement") : "";
(_lhref.indexOf("online-service-desk-software.html") > 0) ? (prdName = "ServiceDesk Plus") : "";
var _zclang = langsrc;
(customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu" || domainOne == "com.cn") ? (_zclang = "https://www.zoho." + domainOne + "/") : "";
var zghBrand = ' <div class="zgh-brand"><span class="zgh-menu"><span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span></span><a href="' + _zclang + '">Zoho.com</a></div>';
var zghNav;
if (prdName == "home") {
    var _suportlink = "https://help.zoho.com/portal/home";
    if (currentUrlLang == "jp") {
        _suportlink = "https://support.zoho.com/portal/jpzoho/home"
    }
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li><a href="https://www.zoho.com/customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="' + _suportlink + '" target="_blank">' + Drupal.t("Support") + '</a></li><li><a href="https://www.zoho.com' + langsrc + 'aboutus.html">' + Drupal.t("About Us") + "</a></li></ul></div>";
    if (_lhref.indexOf("index-new") > 0) {
        zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li class="zgh-megaMenu zgh-solutions"> <a href="javascript:;">Solutions</a> <div class="zgh-megaMenuBox"> <div class="zgh-megaMenuInner"> <ul class="zgh-megaMenuCat"> <li><span>By Size</span> <ul> <li> <a href="javascript:;">Small</a> </li> <li> <a href="javascript:;">Medium</a> </li> <li> <a href="javascript:;">Enterprise</a> </li> </ul> </li> <li><span>By Role</span> <ul> <li> <a href="javascript:;">Sales</a> </li> <li> <a href="javascript:;">Marketing</a> </li> <li> <a href="javascript:;">Finance</a> </li> <li> <a href="javascript:;">Teams/Collaboration</a> </li> <li> <a href="javascript:;">IT</a> </li> <li> <a href="javascript:;">HR</a> </li> </ul> </li> <li><span>By Industry</span> <ul> <li> <a href="javascript:;">Education</a> </li> <li> <a href="javascript:;">Manufacturing</a> </li> <li> <a href="javascript:;">Non-profits</a> </li> <li> <a href="javascript:;">Logistics</a> </li> <li> <a href="javascript:;">Retail</a> </li> </ul> </li> </ul> </div> </div> </li><li><a href="customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="https://help.zoho.com/portal/home" target="_blank">' + Drupal.t("Support") + "</a></li><li><a href=" + langsrc + '"aboutus.html">' + Drupal.t("About Us") + "</a></li></ul></div>"
    }
} else {
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("All Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li></ul></div>'
}
if ($(".load-header").length <= 0 && !_lhref.includes("com/press.html")) {
    zghNav = '<div class="zgh-nav"></div>'
}
var _val = "English";
if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
    _val = "EN"
} (currentUrlLang != "") ? (_val = lancountry[currentUrlLang]) : "";
if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
    (currentUrlLang != "") ? (_val = currentUrlLang.toUpperCase()) : ""
}
var zghSearch = ' <div class="zgh-search"> <span class="zgh-search-icon"></span> <div class="zgh-search-container"> <div class="zgh-search-wrap"> <div class="zgh-search-box"> <form action="" id="zgh-search-action" name=""> <input class="zgh-search-field" aria-label="Search for product overviews, FAQs, and more..." id="zgh-search-query" autocomplete="off" name="query" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"><input class="zgh-search-btn" type="button"> <span class="zgh-search-clear"></span></form></div></div><div class="zgh-search-overlay"></div></div></div>';
var zghLoc = '<div class="zgh-localization"><span class="zgh-localSelect">' + _val + '</span><div class="zgh-localBox"><ul></ul></div></div>';
var getstart = Drupal.t("Get Started");
if (customvar.productName == "crm") {
    getstart = Drupal.t("Sign Up For Free")
}
var zghAcc = '<div class="zgh-accounts"><a href="https://accounts.' + Zdomain + "." + dcdomainOne + "/signin?" + customvar.clang + "servicename=ZohoHome&signupurl=https://www." + ZUrlDomain + "." + domainOne + langsrc + 'signup.html" class="zgh-login">' + Drupal.t("SIGN IN") + '</a><a href="https://www.' + ZUrlDomain + "." + domainOne + langsrc + 'signup.html" class="zgh-signup">' + getstart + "</a></div>";
if ($(".login-text .login").length > 0) {
    $(".login-text .login").html(Drupal.t("SIGN IN"))
}
var zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + "</div>";
if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
    var zghNewHeadDiv = '<div class="zgh-announcement"><span class="zgh-announcement-icon"></span> <div class="zgh-announcement-container"></div></div>';
    var zghUtil = '<div class="zgh-utilities">' + zghSearch + zghNewHeadDiv + zghLoc + zghAcc + "</div>"
}
var zghBlock = '<div class="zgh-headerWrap" id="header">' + zghBrand + zghNav + zghUtil + "</div>";
$(".zw-global-header .header").html("");
$(".zw-global-header .header").append(zghBlock);
$(".zgh-accounts .zgh-login").css("display", "inline-block");
if ($("#czone-home").length > 0) {
    $(".zgh-accounts .zgh-signup").hide()
}
$(".zgh-localization").hide();
(function () {
    $(".cookie-policy").css("display", "inline-block");

    function j() {
        if (typeof CountryCode != "undefined" && typeof RegionName != "undefined") {
            if (CountryCode == "US" && RegionName.toLowerCase() == "california") {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    if (!((customvar.getOS == "Mac" || customvar.getOS == "iOS") && global_getUrlParam("ismobilesignup") != "")) {
        if (global_getUrlParam("nocookie") != "True") {
            if ($.inArray(CountryCode, countryEu) !== -1 || CountryCode == "BR" || j() || CountryCode == "JP" || (customvar.absurl.indexOf("cookie-policy") != -1)) {
                var h = ["crm", "crmplus"];
                var m = ["vanihq"];
                if (!m.includes(customvar.productName)) {
                    if (!(h.includes(customvar.productName) && currentUrlLang == "jp")) {
                        if (predomain) {
                            $("head").append('<link rel="stylesheet" href="https://' + _preZ + '/sites/zweb/css/common/zcp-common.css" type="text/css" />');
                            $("head").append('<script>(function(w,s){var e=document.createElement("script");e.src="https://' + _preZ + '/sites/zweb/js/common/zcp-common.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");<\/script>')
                        } else {
                            $("head").append('<link rel="stylesheet" href="https://www.zohowebstatic.com/sites/zweb/css/common/zcp-common.css" type="text/css" /><script src="https://www.zohowebstatic.com/sites/zweb/js/common/zcp-common.js"><\/script>')
                        }
                    }
                }
            }
        }
    }
    if (_preZ == window.location.hostname) {
        $.getScript("https://" + _preZ + "/sites/zweb/js/common/precheck.js")
    }
    var l = ["tech-talk"];
    // if (($(".zw-product-header").length > 0 || $(".zw-product-footer").length > 0) && l.includes(customvar.productName) == false) {
    //     if (_preZ == window.location.hostname || _preccms == window.location.hostname || customvar.textparam || window.location.hostname.indexOf(_prewww) > -1) {
    //         $.getScript("https://" + _preZ + "/sites/zweb/js/common/prod_menu.js")
    //     } else {
    //         if (typeof $("body").attr("data-domain") != "undefined") {
    //             if ($("body").attr("data-domain") == "oweb") {
    //                 if (customvar.outproduct.indexOf(customvar.productName) > -1) {
    //                     $.getScript("https://www.zoho.com/sites/zweb/js/common/prod_menu.js")
    //                 } else {
    //                     $.getScript("https://" + _preZC + "/sites/zweb/js/common/prod_menu.js")
    //                 }
    //             }
    //         } else {
    //             if (_preZC == window.location.hostname) {
    //                 $.getScript("https://" + _preZC + "/sites/zweb/js/common/prod_menu.js")
    //             } else {
    //                 $.getScript("https://www.zoho.com/sites/zweb/js/common/prod_menu.js")
    //             }
    //         }
    //     }
    // }
    if (!$("body").hasClass("domain-" + domainOne)) {
        var k = document.getElementsByTagName("body")[0];
        if (domainOne == "com.cn") {
            k.classList.add("domain-com")
        } else {
            k.classList.add("domain-" + domainOne)
        }
    }
})();
jQuery(document).ready(function () {
    if (typeof customvar.nonlogged != "undefined") {
        customvar.nonlogged()
    }
    jQuery(".zoho-child-wrapper").toggle();
    jQuery("#back-top").hide();
    jQuery(".service-links ul,.partners-info,.node-type-product-help .dropBox,.featured-news .views-row .hidden-news").toggle();
    jQuery(".service-links").click(function () {
        jQuery(".service-links ul").slideToggle("slow")
    });
    jQuery(".zoho-parent-toggle").click(function () {
        if (!(/\/reports\/help\//.test(document.URL)) && !(/\/developer\/help\//.test(document.URL))) {
            jQuery(this).parent().find(".zoho-child-wrapper").slideToggle();
            if (jQuery(this).parent().hasClass("open")) {
                jQuery(this).parent().removeClass("open")
            } else {
                jQuery(this).parent().siblings().removeClass("open");
                jQuery(this).parent().siblings().find(".zoho-child-wrapper").slideUp("slow");
                jQuery(this).parent().addClass("open")
            }
        }
    });
    jQuery(".featured-news .views-row").click(function () {
        jQuery(this).find(".hidden-news").slideToggle("slow")
    });
    jQuery(".node-type-product-help #faq h4").click(function () {
        var m = jQuery(this).attr("class");
        if (m) {
            jQuery(this).next("div").slideToggle("slow");
            jQuery(this).removeClass(m)
        } else {
            if (jQuery(this).siblings().hasClass("open")) {
                if (jQuery(this).siblings(".open .hidden-news, .open + .ans.dropBox").is(":visible")) {
                    jQuery(this).addClass("open");
                    jQuery(this).next("div").slideToggle("slow")
                } else {
                    var n = jQuery(this).addClass("open").siblings().removeClass("open");
                    jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow")
                }
            } else {
                var n = jQuery(this).addClass("open").siblings().removeClass("open");
                jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow")
            }
        }
    });
    jQuery(".footer-wrapper a").each(function () {
        if (jQuery(this).hasClass("zoho-and")) {
            jQuery(this).parent().addClass("zoho-and-wrapper")
        }
    });
    jQuery(".zoho-child-wrapper li a").each(function () {
        if (/\/people\/help\//.test(document.URL)) {
            jQuery(".zoho-parent-toggle").remove()
        }
        if (/\/people\/help\//.test(document.URL) || jQuery(this).hasClass("active")) {
            jQuery(this).parent().parent().parent().addClass("open")
        }
    });
    jQuery(".zoho-child-wrapper").each(function () {
        if (/\/people\/help\//.test(document.URL) || jQuery(this).parent().hasClass("open")) {
            jQuery(this).css("display", "block")
        }
    });
    jQuery(".countries .names").click(function () {
        var m = jQuery(this).text();
        jQuery("." + m).show()
    });
    jQuery(".close").click(function () {
        var m = jQuery(this).attr("class").split(" ")[1].split("-")[0];
        jQuery("." + m).hide()
    });
    jQuery(".info").click(function () {
        var m = jQuery(this).attr("class").split("_")[2];
        jQuery(".expand_view_" + m).slideToggle("slow")
    });
    jQuery(".testimonial_addons").each(function () {
        jQuery(this).parent().parent().parent().addClass("testimonial-wrapper")
    });
    jQuery(".dynamic-width:contains('True')").addClass("tick");
    jQuery(".dynamic-width:contains('TRUE')").addClass("tick");
    jQuery(".dynamic-width:contains('False')").addClass("cross");
    jQuery(".dynamic-width:contains('FALSE')").addClass("cross");
    jQuery(".pricing-row-wrapper").each(function (n) {
        jQuery(this).children(":first").removeClass("dynamic-width");
        var o = jQuery(this).find(".dynamic-width").length;
        var m = 70 / o;
        jQuery(this).find(".dynamic-width").css("width", m + "%")
    });
    var k = 0;
    jQuery(".pricing-blocks .view-pricing .views-row").each(function (m, o) {
        var n = jQuery(this).outerWidth();
        k = k + n
    });
    jQuery(".pricing-blocks .view-pricing .view-content").css("width", k + "px");
    jQuery("a[href='#top']").click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false
    });
    var j = jQuery("#block-panels-mini-products-header-dropdown-menu").innerHeight();
    jQuery(".look-down").click(function () {
        jQuery("body").animate({
            scrollTop: jQuery(".catagory-mobapps-part").offset().top - j + 55
        }, 1000)
    });
    jQuery(".explore").click(function () {
        jQuery("body").animate({
            scrollTop: jQuery(".zoho-timeline").offset().top - j + 55
        }, 1000)
    });
    var h = jQuery("#block-panels-mini-home-page-sliding-header").innerHeight();
    jQuery(".zoho-home-page .scroll-down .scrolldown-arrow").click(function () {
        jQuery("body").animate({
            scrollTop: jQuery(".pane-home-page-view-panel-pane-1").offset().top - h + 55
        }, 1000)
    });
    jQuery(".view-home-page-view").each(function () {
        var m = 0;
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").each(function () {
            if (jQuery(this).height() > m) {
                m = jQuery(this).height()
            }
        });
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").height(m)
    });
    jQuery(".view-home-page-view").each(function () {
        var m = 0;
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").each(function () {
            if (jQuery(this).height() > m) {
                m = jQuery(this).height()
            }
        });
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").height(m)
    });
    jQuery(".pricing-view-content-wrapper .pricing-row-wrapper").each(function () {
        var m = 0;
        jQuery(this).children(".dynamic-width").each(function () {
            if (jQuery(this).height() > m) {
                m = jQuery(this).height()
            }
        });
        jQuery(this).children(".dynamic-width").height(m)
    });
    $('.zwc_zcounts[data-zcount-years="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfYears + "</span>");
    $('.zwc_zcounts[data-zcount-users="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfUsers + "</span>");
    $('.zwc_zcounts[data-zcount-employees="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfEmployees + "</span>");
    $('.zwc_zcounts[data-zcount-partners="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfPartners + "</span>");
    $('.zwc_zcounts[data-zcount-countries="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfCountries + "</span>");
    $('.zwc_zcounts[data-zcount-apps="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfApps + "</span>");
    $('.zwc_zcounts[data-zcount-datacenters="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfDataCenters + "</span>");
    $('.zwc_zcounts[data-zcount-customers="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfCustomers + "</span>");
    var l = "000";
    $('.zwc_zcounts[data-zcount-employees-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat(CountryCode).format(customvar.numberOfEmployees + l) + "</span>");
    $('.zwc_zcounts[data-zcount-partners-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat(CountryCode).format(customvar.numberOfPartners + l) + "</span>");
    if (dcdomainOne == "in") {
        $('.zwc_zcounts[data-zcount-employees-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat("en-IN").format(customvar.numberOfEmployees + l) + "</span>");
        $('.zwc_zcounts[data-zcount-partners-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat("en-IN").format(customvar.numberOfPartners + l) + "</span>")
    }
    $('.zwc_zcounts[data-zcount-plus="true"]').append('<span class="zwc_zcounts_type">+</span>');
    $('.zwc_zcounts[data-zcount-k="true"]').append('<span class="zwc_zcounts_type">K</span>');
    $('.zwc_zcounts[data-zcount-kplus="true"]').append('<span class="zwc_zcounts_type">K+</span>');
    $('.zwc_zcounts[data-zcount-million="true"]').append('<span class="zwc_zcounts_type">M</span>');
    $('.zwc_zcounts[data-zcount-millionplus="true"]').append('<span class="zwc_zcounts_type">M+</span>');
    $("#form-hockey_v1").on("submit", function (o) {
        o.preventDefault();
        var m = $("#hockey_v1-query").val().trim();
        var n = $("#form-hockey_v1").attr("action");
        window.location = n + "?query=" + encodeURIComponent(m)
    })
});

function showhide(j, h) {
    var k = document.getElementById(j);
    if (k.style.display == "none") {
        k.style.display = "block";
        document.getElementById(h).innerHTML = '<span class="up">Up</span>'
    } else {
        k.style.display = "none";
        document.getElementById(h).innerHTML = '<span class="down">Down</span>'
    }
}

function expcollps(l, h) {
    var k = (h) ? jQuery(l) : jQuery(l).parent().prev();
    var j = (h) ? jQuery(l).next() : jQuery(l).parent();
    if (h) {
        jQuery(".ldjs_cnt").slideUp(700, function () {
            jQuery(".ldjs_readmr").css("visibility", "visible")
        });
        j.slideDown(700, function () {
            k.css("visibility", "hidden")
        })
    } else {
        j.slideUp(700, function () {
            k.animate({
                opacity: 1
            }, 700).css("visibility", "visible")
        })
    }
}

function setSlidingMenuMobile() {
    if (langsrc == "/") {
        if ($("body").hasClass("node-type-features") || $("body").hasClass("node-type-product-success-stories") || $("body").hasClass("node-type-zoho-one-applications")) {
            var j = JSON.parse(mobileSMjson);
            var h = '<div class="ztop-slide-mobile-menu"><div class="ztop-smm-inner">';
            var k = 0;
            $.each(j, function (l, m) {
                k++;
                h = h + '<a href="' + langsrc + m + '">' + Drupal.t(l) + "</a>"
            });
            h = h + "</div></div>";
            $(h).appendTo($(".main-container-wrapper"));
            if (k == 2) {
                $(".ztop-smm-inner").addClass("z2menu")
            }
        }
    }
}
var hidelogin = 0;
(function (h) {
    h(document).ready(function (ak) {
        var r = document.createElement("script");
        var z = _lhref.indexOf("zgs=1") < 0;
        var l = ["arattai"];
        if (l.includes(customvar.productName)) {
            z = false
        }
        if (z) {
            if (dcenabled && nondc) {
                var w = 0,
                    P = "";
                var k = 0;
                for (var ai = 0; ai < customvar.domainArr[0].length; ai++) {
                    var r = document.createElement("script");
                    r.className = "infoload";
                    P = (customvar.domainArr[0][ai] == "ca") ? "zohocloud" : ZdomainName;
                    r.src = "https://accounts." + P + "." + customvar.domainArr[0][ai] + "/u/info";
                    document.getElementsByTagName("head")[0].appendChild(r);
                    h(r).on("load", function () {
                        w++;
                        if (typeof zohouser.DC_INFO != "undefined") {
                            customvar.zohouser = JSON.parse(JSON.stringify(zohouser));
                            customvar.domainArr[1].push(customvar.dcObj[(zohouser.DC_INFO == "au") ? "com.au" : zohouser.DC_INFO].domain);
                            hidelogin = (customvar.dcObj[(zohouser.DC_INFO == "au") ? "com.au" : zohouser.DC_INFO].notavailable.indexOf(customvar.productName) > -1) ? 1 : hidelogin;
                            if (customvar.domainArr[0].length == h(".infoload").length) {
                                h("script.infoload").remove();
                                dcdomainOne = customvar.domainArr[1][0];
                                var ao = document.createElement("script");
                                ao.className = "infoload";
                                P = (dcdomainOne == "ca") ? "zohocloud" : ZdomainName;
                                ao.src = "https://accounts." + P + "." + dcdomainOne + "/u/info";
                                document.getElementsByTagName("head")[0].appendChild(ao);
                                ao.onload = I
                            }
                        }
                        if (w == h(".infoload").length && customvar.domainArr[1].length == 0) {
                            var aq = customvar.dcObj;
                            dcdomainOne = "com";
                            for (var ap in aq) {
                                if (typeof aq[ap].countries != "undefind") {
                                    if (aq[ap].countries.indexOf(CountryCode) > -1) {
                                        if (aq[ap].notavailable.indexOf(customvar.productName) > -1) {
                                            dcdomainOne = "com";
                                            onlycom = true
                                        } else {
                                            dcdomainOne = aq[ap].domain
                                        }
                                    }
                                }
                            }
                            I()
                        }
                    });
                    h(r).on("error", function () {
                        k++;
                        I()
                    })
                }
            } else {
                if (window.location.hostname != "www.zohohelp.com") {
                    r.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    if (window.location.host == "www.zoho.com.cn") {
                        r.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info"
                    } else {
                        if (currentUrlLang == "zh-hans") {
                            r.src = "https://accounts." + ZdomainName + ".com/u/info"
                        }
                    }
                    document.getElementsByTagName("head")[0].appendChild(r);
                    h(r).on("error", function () {
                        I()
                    })
                }
            }
        }
        var S = "";
        var D = "";
        var ad = "";
        var Y = "";
        var an = "/privacy.html ";
        var ae = "";
        var x = "/policy.html ";
        var H = "";
        var R = "";
        var ah = "";
        var N = "<a class='on-in' href='https://www.linkedin.com/company/38373' target='_blank' class='linkedin' title='LinkedIn'>'+Drupal.t('Linkedin')+'</a>";
        var q = ["/es/", "/fr/", "/it/"];
        var V = "";
        var s = "/jp/gdpr.html";
        var T = "";
        var t = 0;
        var X = "/contactus.html";
        if (currentUrlLang == "jp") {
            D = "";
            ad = "";
            Y = "ofservice";
            an = "";
            ae = "policy";
            x = "";
            H = "<li><a href=''>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>";
            R = "";
            ah = "";
            N = "";
            X = ""
        } else {
            if (currentUrlLang == "de") {
                H = '<li><a href="' + langsrc + 'impressum.html">Impressum</a></li>'
            }
        }
        if (dcenabled && nondc) { } else {
            r.onload = I
        }
        var n = h("#emailfield").val();
        if (n == "" || n == null) {
            h("#emailfield").parent().removeClass("added-placeholder")
        } else {
            h("#emailfield").parent().addClass("added-placeholder")
        }
        getWidth = 0;
        $gotoPage = "";
        productName = "";
        breaks = false;
        productName = customvar.productName;
        addString = "'" + productName + "'";
        for (var ai = 0; ai < q.length; ai++) {
            if (window.location.href.indexOf(q[ai]) > -1) {
                var am = window.location.pathname.split("/");
                if (am[2] == (q[ai].slice(1, -1))) {
                    var V = q[ai];
                    V = V.slice(1);
                    T = "/" + V.slice(0, -1)
                } else {
                    var S = q[ai];
                    var S = S.slice(0, -1)
                }
            }
        }
        var Q = "";
        if (currentUrlLang == "jp") {
            Q = '<ul class=ZPprivacy> <li><a href="' + ad + '/">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + X + '">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + ad + S + T + "/security" + ae + '.html">' + Drupal.t("Security") + '</a></li><li><a class="footer-compliance" href="/compliance.html">' + Drupal.t("Compliance") + '</a></li> <li><a href="' + ad + S + T + '/ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + S + T + x + '"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + ad + S + T + "/terms" + Y + '.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + S + T + an + '">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com/privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + s + '" class="gdprc">' + Drupal.t("GDPR Compliance") + "</a></li>" + H + "</ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>"
        } else {
            var al = langsrc + "security.html";
            if (productName == "mail") {
                al = langsrc + "mail/secure-email-hosting.html"
            }
            var K = "";
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                K = ""
            }
            Q = '<ul class=ZPprivacy> <li><a href="' + K + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + K + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + K + al + '">' + Drupal.t("Security") + '</a></li><li><a class="footer-compliance" href="' + K + '/compliance.html">' + Drupal.t("Compliance") + '</a></li> <li><a href="' + K + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + K + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + K + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + K + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + K + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + K + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + H + "</ul>"
        }
        var U = (customvar.productName == "accounts" || customvar.productName == "contacts") ? "support@zohoaccounts.com" : "support@zoho.com";
        var G = '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li class="zf-support-mail"><a id="zf-support-mailid" href="mailto:' + U + '">' + U + '</a></li><li class="zglob-lang"><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.com/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>' + Q;
        var G = Q;
        newFooter = Q;
        aj();
        h(".product-header-top").html(h("#mini-panel-product_menu").html());
        if (domainOne == "in") {
            h(".zcomtctmanager").hide();
            if (h(".zp-apps.zp-contactmanager").length > 0) {
                h(".zp-apps.zp-contactmanager").remove()
            }
        }
        var af = document.domain;
        if (af == "") {
            h(".business-proc .no-border").remove();
            h('.business-proc a[href="/appcreator/"]').parent().remove()
        }
        h(window).scroll(function () {
            h(".zlang-container-inner").hide();
            if (h(".zlang-container").children(".zlang-container-inner").length > 0) {
                h(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide")
            }
            Z()
        });
        Z();
        var F = false;
        var m = false;
        h(".menu-icon").click(function () {
            if (window.innerWidth <= 550) {
                h(".product-menu").hide()
            }
            if (m == false) {
                m = true;
                h(".mask-holder").removeClass("hide");
                setTimeout(function () {
                    h(".mobile-menu").css({
                        left: "0%"
                    });
                    var ao = parseInt(window.innerHeight) - parseInt(h(".header").height());
                    h(".mobile-menu").css({
                        height: ao + "px"
                    })
                }, 100);
                setTimeout(function () {
                    h("html,body").css({
                        overflow: "hidden"
                    })
                }, 0)
            } else {
                ac()
            }
        });
        h(".mask-holder").click(function (ao) {
            if (ao.delegateTarget.className == ao.target.className) {
                ac()
            }
        });
        var O = h(".product-nav-links .menu").css("display");
        h(".userinfo-container").css({
            display: "block"
        });
        h("body").on("touchstart click", function (ap) {
            var ao = h(".zlang-container");
            if (!ao.is(ap.target) && ao.has(ap.target).length === 0) {
                h(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide");
                h(".zlang-container-inner").hide()
            }
        });
        h("body").click(function (ar) {
            var ap = true;
            if (productName == "mail" && h(".signup-box form").css("display") == "none") {
                ap = false
            } else {
                if (_lhref.indexOf("/creator/apps/") > 0 || h(ar.target).hasClass("scrollstop")) {
                    ap = false
                }
            }
            var ao = "",
                aq = "",
                at = "";
            if (ar.target.parentNode) {
                (ar.target.parentNode.parentNode != null) ? (at = ar.target.parentNode.parentNode.className) : "";
                (ar.target.parentNode.className != null) ? (aq = ar.target.parentNode.className) : ""
            } (ar.target.className != null) ? (ao = ar.target.className) : "";
            if (window.location.href.indexOf("crm/what-is-crm.html") < 0 && ap) {
                if (ao == "signup" || aq == "get-started" || (h(ar.target).hasClass("act-btn") && h(ar.target).hasClass("cta-btn") && !h(ar.target).hasClass("zwp-pricing-link")) || h(ar.target).hasClass("zgh-signup")) {
                    if (window.innerWidth > 991) {
                        if (h(".signup-box .sgfrm").length != 0 && h(".zp-home-right").css("display") != "none" && typeof getusername == "undefined") {
                            ar.preventDefault();
                            L()
                        }
                    }
                    if (h(".signup-box #czone-wallet").length > 0 && h(".form-wrap .creditelm").length > 0) {
                        ar.preventDefault();
                        if (getusername) {
                            h("html, body").animate({
                                scrollTop: (h(".form-wrap .creditelm").offset().top - 200)
                            }, 1000)
                        } else {
                            L()
                        }
                    }
                }
            }
            if (ar.target.className == "menu") { } else {
                if (ar.target.className == "mobile-menu-icon") {
                    if (h(".product-nav-links .menu").css("display") == "none") {
                        F = false
                    } else {
                        F = true
                    }
                    h(".product-nav-links .menu").css({
                        height: window.innerHeight - h("#mini-panel-product_menu").outerHeight()
                    });
                    if (F == false) {
                        h(".zgh-accounts .zgh-signup").fadeOut(100);
                        h(".menu").slideDown(300);
                        h("body").css({
                            overflow: "hidden"
                        });
                        h(".product-nav-links .menu").css({
                            overflow: "scroll"
                        })
                    } else {
                        if (!h(".main-container-wrapper").hasClass("umain")) {
                            h(".zgh-accounts .zgh-signup").fadeIn(100)
                        }
                        h(".product-nav-links .menu").slideUp(300);
                        h("body").css({
                            overflow: "auto"
                        })
                    }
                } else {
                    if (F == true) {
                        h(".product-nav-links .menu").slideUp(300);
                        h("html,body").css({
                            overflow: "auto"
                        })
                    }
                }
            }
            if (at == "userinfo-details") {
                h(".userinfo-details").addClass("zoho-expand");
                if (getWidth > 285) {
                    h(".userinfo-details.zoho-expand").css({
                        width: getWidth + 10,
                        height: "135px"
                    })
                }
            } else {
                h(".userinfo-details").removeClass("zoho-expand");
                if (getWidth > 285) {
                    h(".userinfo-details").css({
                        width: "35px",
                        height: "35px"
                    });
                    h(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                        height: "43px"
                    })
                }
            }
        });
        h(document).on("keydown", function (ao) {
            keys = ao.which;
            if (keys == 27) {
                h(".userinfo-details").removeClass("zoho-expand")
            }
        });
        jQuery(".get-started a,.posibilities-bot").click(function (ao) {
            if (window.innerWidth > 767) {
                ao.preventDefault();
                L()
            }
        });
        anchorN = h("a");
        aa = [];
        for (ai = 0; ai < anchorN.length; ai++) {
            aa[ai] = h(anchorN[ai]).attr("href");
            if (aa[ai] == "javascript:void(0);") {
                h(anchorN[ai]).css({
                    cursor: "text"
                })
            }
        }
        window.onscroll = function () {
            var ao = jQuery(window).height();
            var aq = jQuery(window).scrollTop();
            var ap = jQuery(".footer-wrapper");
            if (typeof ap !== "undefined") {
                var ar = ap.position();
                if (ar && ar.top && (ao + aq) > ar.top) {
                    jQuery(".service-links").css("position", "absolute")
                } else {
                    jQuery(".service-links").css("position", "fixed")
                }
            }
            if (jQuery(this).scrollTop() > 200) {
                jQuery("#back-top").fadeIn();
                jQuery("#back-top a").css("position", "fixed")
            } else {
                jQuery("#back-top").fadeOut()
            }
            h(".zgh-userPanel").removeClass("active")
        };
        var ag;
        var B;
        var C;
        var o = true;
        var E = 200;
        h(".dropdown-mask").css({
            height: "200px"
        });
        h(".header .menu >  li").hover(function (ap) {
            $this = h(this);
            var ao = ap.clientX;
            ag = setTimeout(function () {
                var aq = ap.clientX;
                if (h(".dropdown-mask").hasClass("showmaskCheck")) {
                    E = 0;
                    if (ao == aq) {
                        B = $this.children()[1];
                        h(B).addClass("addMe");
                        h(".catagory-dropdown.addMe").children().addClass("showMe")
                    }
                }
            }, E)
        }, function () {
            clearTimeout(ag);
            h(B).removeClass("addMe");
            h(".catagory-dropdown").children().removeClass("showMe")
        });
        h(".header .menu").hover(function () {
            if (h(".dropdown-mask").hasClass("showmaskCheck")) {
                E = 0
            } else {
                E = 200
            }
            C = setTimeout(function () {
                h(".dropdown-mask").addClass("showmask")
            }, 100);
            h(".dropdown-mask").addClass("showmaskCheck")
        }, function () {
            clearTimeout(C);
            h(".dropdown-mask").removeClass("showmaskCheck");
            h(".dropdown-mask").removeClass("showmask");
            E = 200
        });

        function ac() {
            m = false;
            h(".mobile-menu").css({
                left: "-100%"
            });
            setTimeout(function () {
                h(".mask-holder").addClass("hide")
            }, 100);
            setTimeout(function () {
                h("html,body").css({
                    overflow: "auto"
                })
            }, 400)
        }

        function Z(ao) {
            h(".userinfo-details").removeClass("zoho-expand");
            if (ao > 285) {
                h(".userinfo-details").css({
                    width: 35,
                    height: 35
                });
                h(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                    height: "43px"
                })
            }
            if (h(window).scrollTop() > 200) {
                h(".product-header-top").removeClass("slide");
                h(".product-header-top").css({
                    overflow: "visible"
                })
            } else {
                h(".product-header-top").addClass("slide");
                h(".product-header-top").css({
                    overflow: "hidden"
                })
            }
        }
        h(window).resize(function () {
            if (h(".footer-search-input").length > 0) {
                if (window.innerWidth <= 767) {
                    h(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne)
                } else {
                    h(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."))
                }
            }
            aj();
            ab();
            if (h(window).outerWidth() <= 767) {
                if (!h(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    h(".product-nav-links .menu").css({
                        height: window.innerHeight - h("#mini-panel-product_menu").outerHeight(),
                        display: "none"
                    })
                }
                h("#mini-panel-product_menu .goto-link").hide();
                h(".product-nav-links .menu .featured-apps-part").css("display", "block");
                h("#mini-panel-product_menu .zlang-container").show();
                if (h("#mini-panel-product_menu .zlang-container").length < 1 && h(".header .zlang-container").length != 0) {
                    var ao = '<div class="zlang-container">' + h(".header .zlang-container").html() + "</div>";
                    h(".overMe, .zlang-container").on("mouseover", function () {
                        h(this).children(".zlang-container-inner").show()
                    });
                    h(".overMe, .zlang-container").on("mouseout", function () {
                        h(this).children(".zlang-container-inner").hide()
                    });
                    h(".zlang-container").on("click", function () {
                        h(this).children(".zlang-container-inner").show()
                    })
                }
            } else {
                h(".product-nav-links .menu").css({
                    height: "auto",
                    top: "auto",
                    display: "block"
                });
                h(".product-header-inner .userinfo-container,.product-header-inner .goto-link").remove();
                h(".product-nav-links .menu .featured-apps-part").css("display", "none");
                h("#mini-panel-product_menu .zlang-container").remove()
            }
        });

        function ab() {
            if (window.innerWidth < 768) {
                h(".mobile-menu-icon").css({
                    display: "block"
                });
                if (!h(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    h("#header .menu").css({
                        display: "none"
                    })
                }
            } else {
                h(".mobile-menu-icon").css({
                    display: "none"
                });
                h("#header .menu").css({
                    display: "block"
                })
            }
            if (window.innerWidth > 1140) {
                h(".header .menu").css({
                    display: "block"
                })
            } else {
                h(".header .menu").css({
                    display: "none"
                })
            }
        }

        function M() {
            if (jQuery("body").hasClass("og-context-node-3434")) {
                if (jQuery("body").hasClass("node-type-product-help")) {
                    jQuery(".menu-panel .zoho-parent-wrapper .hasChild ").each(function (ap, ar) {
                        if (ap == 0) {
                            var aq = jQuery(this).find(".zoho-child-wrapper li a").eq(1).text();
                            if (aq == "Onboarding") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(1).hide()
                            }
                        }
                        if (ap == 6) {
                            var ao = jQuery(this).find(".zoho-child-wrapper li a").eq(0).text();
                            if (ao == "Reports") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(0).hide()
                            }
                        }
                    })
                }
            }
        }

        function v() {
            var ao = jQuery("body").hasClass("og-context-node-96");
            if (ao) {
                var ap = window.location.pathname.split("/");
                if (ap.length == 3) {
                    jQuery(".bottom-promo .ct-action-btn").attr("href", "/crm/lp/signup.html?plan=enterprise?src=" + ap[2] + "")
                } else {
                    if (ap.length > 3) {
                        jQuery(".bottom-promo .ct-action-btn").attr("href", "/crm/lp/signup.html?plan=enterprise?src=" + ap[2] + "/" + ap[3] + "")
                    }
                }
            }
        }

        function u() {
            var ao = jQuery("#mini-panel-product_menu .product-title a").text();
            if (ao == "DRE") {
                jQuery(" .product-title a").attr("href", "")
            }
            if (ao == "CRM Plus") {
                var aq = window.location.pathname.split("/");
                for (var ap = 0; ap < aq.length; ap++) {
                    if (aq[1] != "crm") {
                        lang = aq[1];
                        url = "/" + lang + "/crm/crmplus/";
                        jQuery(".product-title a").attr("href", url);
                        jQuery(".product-title a").attr("href", url)
                    } else {
                        if (aq[1] == "crm" && aq[2] == "crmplus") {
                            jQuery(".product-title a").attr("href", langsrc + "crm/crmplus/");
                            jQuery(".product-title a").attr("href", langsrc + "crm/crmplus/")
                        }
                    }
                }
            } else {
                if (ao == "Writer") {
                    jQuery(".product-title a").attr("href", langsrc + "writer/");
                    jQuery(".product-title a").attr("href", langsrc + "writer/")
                }
            }
        }

        function J() {
            var ao = zohouser.DISPLAY_NAME;
            if (ao) {
                h(".header").addClass("uheader");
                if (!h("body").hasClass("body-umain")) {
                    h("body").addClass("body-umain")
                }
                h("body").addClass("umain");
                if (h("body").find(".main")) {
                    h(".main").addClass("umain");
                    h(document).trigger("umain-trigger")
                }
                if (dcenabled) {
                    if (!h(".umain").hasClass("zNewDcSetup")) {
                        h(".umain").addClass("zNewDcSetup")
                    }
                }
                getusername = decodeHexString(zohouser.DISPLAY_NAME)
            }
        }

        function L() {
            getAllField = h(".signup-box .sgfrm input");
            if (getAllField.length != 0) {
                h(".signup-box form").eq(0).css({
                    opacity: "0"
                });
                setTimeout(function () {
                    h(".signup-box form").eq(0).animate({
                        opacity: "1"
                    })
                }, 1000);
                if (h(".signup-box").hasClass("buttomsignup")) {
                    h("html, body").animate({
                        scrollTop: (h(".signup-box form").offset().top - 300)
                    }, 1000, function () {
                        setTimeout(function () {
                            h(".focusin").removeClass("focusin")
                        }, 500)
                    })
                } else {
                    h("html, body").animate({
                        scrollTop: 0
                    }, 1000, function () {
                        setTimeout(function () {
                            h(".focusin").removeClass("focusin")
                        }, 500)
                    })
                }
                setTimeout(function () {
                    var ao = h(".signup-box .sgfrm").eq(0).find("input");
                    (ao.length > 1) ? ao.eq(1).addClass("focusin").focus() : ao.eq(0).addClass("focusin").focus()
                }, 2000)
            }
        }

        function A() {
            var ao = '<div class="mobile-menu-signup"><a href="' + zPrdSignupLink + '?src=mtry-hbm">' + zPrdSignupLinkText + '</a><a href="' + zPrdLoginLink + '">SIGN IN</a> <div class="mobile-menu-moreprd"><a href="https://www.zoho.' + domainOne + "/products.html?ref=m-" + productName + '">All Zoho Products</a></div></div>';
            h(".product-nav-links .menu .featured-apps-part").html(ao)
        }

        function aj() {
            var aw;
            if (!getusername) {
                var ap = nameServices[0][allProductlowerCase.indexOf(productName)];
                if (typeof ap != "undefined" && typeof ap != "") {
                    var at = "";
                    (currentLang != "") ? (at = "service_language=" + currentLang + "&") : (at = "");
                    aw = '<a class="user-icon" href="' + at + "servicename=" + ap + '">User Icon</a>';
                    _globalAccess = aw
                }
            }
            if (h(".product-nav-links .menu .featured-apps-part").length < 1) {
                var au = Drupal.t("Related Products");
                if (productName == "home") {
                    au = Drupal.t("Our Products")
                }
                var aq = '<li class="featured-apps-part"><div class="mobile-menu-moreprd moreprd-nonloggedin"><a href="' + langsrc + '">' + Drupal.t("All Zoho Products") + "</a></div></li>";
                h(".product-nav-links .menu").append(aq)
            }
            if (window.outerWidth <= 767) {
                if (t == 0) {
                    t = 1;
                    h(".ptmenu").addClass("sticky");
                    h(".product-nav-links .menu").css({
                        height: window.innerHeight - h("#mini-panel-product_menu").outerHeight()
                    })
                }
            }
            var ao = h(".product-header-top .menu").children();
            h(ao[1]).addClass("selected");
            var ar = h(".view-content");
            var av = h("body").find(ar);
            if ((av.length) > 0) {
                var av = h(ar).children();
                if (av.length > 3) {
                    ar.addClass("plane-four-column")
                }
            }
        }

        function I() {
            if (!customvar.customclean) {
                if ((window.innerWidth > 992) && (window.innerHeight < 800)) {
                    if (h(".testimonial-content").length > 0) {
                        var ao = h(".testimonial-content").innerHeight();
                        h(".testimonial-content").css("margin-top", ((window.innerHeight - 20) - ao) / 2)
                    }
                }
                if (typeof zohouser != "undefined") {
                    getusername = zohouser.DISPLAY_NAME;
                    customvar.zDomainHandling();
                    J()
                }
                if (getusername) {
                    h(".signing .signup, .signing .signin, .signup-box").hide();
                    if (h(".zh-access").length > 0 && h("body").hasClass("node-type-zoho-home")) {
                        h(".zh-access").attr("href", "" + Zdomain + "." + dcdomainOne + "/home")
                    }
                }
                if (!getusername) {
                    if (h(".loggedin-userinfo").length > 0) {
                        h(".loggedin-userinfo").hide()
                    }
                    if (onlycom) {
                        h("body").addClass("newuser-product-notavail")
                    }
                    if (window.location.href.indexOf("pricing-comparison.html") > 0 || window.location.href.indexOf("pricing.html") > 0) {
                        h(".signing .signup").hide()
                    } else {
                        h(".signing .signup").show()
                    }
                    if (window.innerWidth > 991) {
                        h(".signup-box").show()
                    }
                    h(".signing .signin").show();
                    h(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show");
                    var at = "/" + productName + "/";
                    var aw = Drupal.t("Sign Up Now");
                    var aL = ["meeting", "workplace", "assist", "salesiq"];
                    var aD = ["signup.html?version=freetrial&service=meeting&src=topbar-try", "pricing.html", "signup.html?version=freetrial", "signup.html?source=Website.Header"];
                    if (aL.indexOf(productName) > -1) {
                        at += aD[aL.indexOf(productName)];
                        if (productName == "mail" || productName == "workplace") {
                            aw = Drupal.t("Get Started")
                        } else {
                            if (productName == "docs") {
                                aw = Drupal.t("Get Started Now")
                            }
                        }
                    } else {
                        at += "signup.html"
                    }
                    if (productName == "writer") {
                        aw = Drupal.t("Get Started Now")
                    }
                    var ar = ["show", "writer", "crmplus", "appcreator", "crm"];
                    D = "";
                    (currentLang != "") ? (D = "/" + currentUrlLang) : (D = D);
                    var aI = D + at;
                    var aJ = D + "/" + productName;
                    var aq = aw;
                    if (ar.indexOf(productName) < 0) {
                        var aJ = D + "/" + productName + "/login.html";
                        (productName == "home") ? (aI = (aI.split("/home")[0] + aI.split("/home")[1])) : "";
                        (productName == "mail") ? (aI = langsrc + "") : ""
                    }
                    if (ar.indexOf(productName) > -1) {
                        if (productName == "crmplus") {
                            if ((window.location.host) != "") {
                                aI = langsrc + "crm/crmplus/signup.html";
                                aJ = "crm/crmplus/login.html";
                                aq = Drupal.t("Sign Up")
                            }
                        } else {
                            if (productName == "crm") {
                                var au = window.location.pathname;
                                aI = langsrc + "crm/signup.html";
                                aJ = "/crm/lp/login.html";
                                if (au != "/crm/index.html" && au != "" && au != "/crm/comparison.html") {
                                    aq = Drupal.t("Get Started")
                                } else {
                                    aq = Drupal.t("Sign Up Now")
                                }
                            } else {
                                if (productName == "show") {
                                    aI = "https://docs.zoho." + domainOne + "/" + productName + "/signup";
                                    aJ = "https://docs.zoho." + domainOne + "/" + productName + "/signup?signin=true";
                                    aq = Drupal.t("Get Started Now")
                                }
                            }
                        }
                    }
                    h(".header .signing .signin").css({
                        opacity: 1
                    });
                    if (window.innerWidth <= 767) {
                        h(".user-icon").css({
                            display: "block"
                        })
                    }
                }
                if (getusername) {
                    if (!h("body").hasClass("zb-firefox")) {
                        if (global_getUrlParam("zsrc") != "") {
                            if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                                if (global_getUrlParam("serviceurl") != "") {
                                    if (decodeURIComponent(global_getUrlParam("serviceurl")).indexOf("/") == 0) {
                                        window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + decodeURIComponent(global_getUrlParam("serviceurl"))
                                    } else {
                                        window.location = customvar.dcadded(global_getUrlParam("serviceurl"))
                                    }
                                } else {
                                    window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
                                }
                            }
                        }
                    }
                    if (h(".loggedin-userinfo").length > 0) {
                        h(".loggedin-userinfo").show();
                        h(".signup-form h3,.signup-box,.login-text").hide();
                        if (h(".access-apps").length < 1) {
                            h(".loggedin-userinfo").append(" <h2 class='username'>" + Drupal.t("Welcome") + " <span>" + customvar.htmlencode(getusername) + "!</span></h2> <a class='access-apps' href=" + $gotoPage + "></a>");
                            h(".loggedin-userinfo .access-apps").html(accessZoho + " " + customvar.productName)
                        }
                    }
                    if (!hidelogin) {
                        h(".getstartedbox .signup-btn.mobile-btn, .zp-home-left .act-btn.cta-btn, .content-wrap .act-btn.cta-btn, .non-temp .act-btn.cta-btn, .bot-cta-con .act-btn.cta-btn, .getstartedbox .signup-btn.mobile-btn").css("display", "inline-block");
                        h(".node-type-zoho-home .zh-access, .act-btn.cta-btn").css({
                            opacity: "1",
                            visibility: "visible"
                        })
                    }
                    var aA = window.location.href;
                    if (customvar.servicename == "") {
                        if ((customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != null && customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != "undefined")) {
                            customvar.service = "&servicename=" + customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)]
                        } else {
                            customvar.service = "&servicename=ZohoHome"
                        }
                    } else {
                        customvar.service = "&servicename=" + customvar.servicename
                    }
                    var az = "https://accounts." + Zdomain + "." + dcdomainOne + "/logout?serviceurl=" + encodeURI(aA) + customvar.service;
                    var aG = "https://accounts." + Zdomain + "." + dcdomainOne + "/u/h#home";
                    if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                        var ay = (dcdomainOne == "ca") ? "zohocloud" : "zoho";
                        az = "https://accounts." + ay + "." + dcdomainOne + "/logout?serviceurl=" + encodeURI(aA) + customvar.service;
                        aG = "https://accounts." + ay + "." + dcdomainOne + "/u/h#home"
                    }
                    let infocallzuid = "";
                    if (typeof zohouser != "undefined") {
                        if (typeof zohouser.ZUID != "undefined") {
                            infocallzuid = "&ID=" + zohouser.ZUID
                        }
                    }
                    $userAvator = "https://contacts.zoho.com/file?t=user&fs=thumb" + infocallzuid;
                    var av = '<div class="zgh-user-box"> <div class="zgh-userPanel"> <img src=' + $userAvator + " alt=" + customvar.htmlencode(getusername) + ' class="zgh-userAvatar"> <div class="zgh-userLink"> <ul> <li class="zgh-userImage"> <img src=' + $userAvator + " alt=" + customvar.htmlencode(getusername) + '> </li><li class="zgh-userName">' + customvar.htmlencode(getusername) + '</li><li class="zgh-userAccess"> <a href="https://home.' + Zdomain + "." + dcdomainOne + '">' + accessZoho + ' Home</a> </li><li class="zgh-userAccount"> <a href=' + aG + ">" + myAccount + '</a> </li><li class="zgh-userLogout"><a href="' + az + '">' + signOut + "</a> </li></ul> </div></div></div>";
                    h(".signing .goto-link").hide();
                    customvar.userelem = av;
                    h(".zgh-accounts").html(av);
                    if (typeof customvar.logged != "undefined") {
                        customvar.logged()
                    }
                    if (typeof customvar.globalHeaderLogged != "undefined") {
                        customvar.globalHeaderLogged()
                    }
                    var aK = 0;
                    var ax = setInterval(function () {
                        if (h(".zw-product-header .zgh-accounts").length > 0) {
                            h(".zw-product-header .zgh-accounts").html(av);
                            h(".zgh-userAccess a").attr("href", h(".act-btn.cta-btn").attr("href"));
                            h(".zgh-userAccess a").html(h(".act-btn.cta-btn").html());
                            clearInterval(ax)
                        }
                        if (aK > 40) {
                            clearInterval(ax)
                        }
                        aK++
                    }, 200);
                    if (hidelogin) {
                        h("body").addClass("product-notavail");
                        var aB = customvar.dccountry();
                        var aC = ((h("body").attr("data-prdname-display")) ? h("body").attr("data-prdname-display") : productName);
                        aC = ((aC.indexOf("zoho") > -1) ? aC : ("Zoho " + aC));
                        if (typeof customvar.notavailProductName != "undefined") {
                            aC = customvar.notavailProductName
                        }
                        var ap = h(".act-btn.cta-btn, .zgh-userAccess, .access-apps, .trynow-plan, .zfeatures-btn .zcta, a.logged-out, a.logged-in, .zcta, .zcta-new, .zw-template-zp_pricing .login, .zw-template-zp_pricing .start-freetrail, .zw-template-zp_pricing .bottom-access, .zw-template-zp_pricing .try-now-btn, .zw-template-zp_pricing .trynow, .zw-template-zp_pricing .wp-trial-container a, .zw-template-zp_pricing .zpricing-link a, .zw-template-zp_pricing .ztry-now a, .ztrial-price a");
                        ap.hide();
                        var aH = ["th", "pt-br", "es-xl", "de", "fr", "nl", "ar", "id", "vi", "he", "it"];
                        if (!aH.includes(currentUrlLang)) {
                            h(".zw-promo-top").prepend('<div class="zDCnotif-container"><p><strong> ' + aC + " </strong>" + Drupal.t("is not available in your region.") + '<a href="https://www.zoho.com/all-products.html">' + Drupal.t("Explore other apps.") + "</a> </p></div>")
                        } else {
                            if (currentUrlLang) {
                                h(".zw-promo-top").prepend('<div class="zDCnotif-container"><p><strong> ' + aC + " </strong>" + Drupal.t("is not available in your region.") + '<a href="https://www.zoho.com/' + currentUrlLang + '/all-products.html">' + Drupal.t("Explore other apps.") + "</a> </p></div>")
                            } else {
                                h(".zw-promo-top").prepend('<div class="zDCnotif-container"><p><strong> ' + aC + " </strong>" + Drupal.t("is not available in your region.") + '<a href="https://www.zoho.com/all-products.html">' + Drupal.t("Explore other apps.") + "</a> </p></div>")
                            }
                        }
                        var aE = 0;
                        var aF = setInterval(function () {
                            if (h(".z-bottom-cta-menu").length > 0) {
                                clearInterval(aF);
                                h(".z-bottom-cta-menu").addClass("z-disabled");
                                h(".loggedin").html("Not available");
                                ap.hide()
                            }
                            if (aE > 50) {
                                clearInterval(aF)
                            }
                            aE++
                        }, 100)
                    }
                } else {
                    h("body").addClass("non-umain");
                    if (typeof customvar.nonloggedupdate != "undefined") {
                        customvar.nonloggedupdate()
                    }
                    if (typeof customvar.nonlogged != "undefined") {
                        customvar.nonlogged();
                        var aK = 0;
                        var ax = setInterval(function () {
                            if (h(".zlogin-menu").length > 0) {
                                h(".zlogin-menu a").attr("href", h(".zgh-login").attr("href"));
                                clearInterval(ax)
                            }
                            if (aK > 20) {
                                clearInterval(ax)
                            }
                            aK++
                        }, 200)
                    }
                    if (typeof customvar.nonlogged == "undefined" && h(".product-header-top .zgh-signup").length) {
                        if (!h(".product-header-top .zgh-signup").attr("href").includes(customvar.productName)) {
                            h(".product-header-top .zgh-signup").attr("href", langsrc + "signup.html")
                        }
                    }
                    if (typeof customeCallWatchBtn != "undefined") {
                        customeCallWatchBtn()
                    }
                    h(".product-header-top .zgh-accounts .zgh-signup, .zgh-accounts .zgh-login").css("display", "inline-block");
                    h(".act-btn.cta-btn, .node-type-zoho-home .zh-signup").css({
                        opacity: "1",
                        visibility: "visible"
                    });
                    h(".product-header-top .zgh-accounts .zgh-login").css("display", "none")
                }
                h('a[href*=""]').html("abuse@" + _zcopr + ".com").attr("href", "");
                if (dcdomainOne == "eu") {
                    h('a[href*=""]').html("abuse@eu." + _zcopr + ".com").attr("href", "");
                    h('a[href*=""]').html("postmaster@eu." + _zcopr + ".com").attr("href", "")
                }
                customvar.dcbasedimage()
            } else {
                if (typeof zohouser != "undefined") {
                    getusername = decodeHexString(zohouser.DISPLAY_NAME);
                    h(".header").addClass("uheader");
                    h("body").addClass("body-umain").addClass("umain");
                    if (h("body").find(".main")) {
                        h(".main").addClass("umain");
                        h(document).trigger("umain-trigger")
                    } (dcenabled) ? h(".umain").addClass("zNewDcSetup") : "";
                    if (!h("body").hasClass("zb-firefox")) {
                        if (global_getUrlParam("zsrc") != "") {
                            if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                                if (global_getUrlParam("serviceurl") != "") {
                                    if (decodeURIComponent(global_getUrlParam("serviceurl")).indexOf("/") == 0) {
                                        window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + decodeURIComponent(global_getUrlParam("serviceurl"))
                                    } else {
                                        window.location = customvar.dcadded(global_getUrlParam("serviceurl"))
                                    }
                                } else {
                                    window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
                                }
                            }
                        }
                    }
                    if (h(".loggedin-userinfo").length > 0) {
                        h(".loggedin-userinfo").show();
                        h(".signup-form h3,.signup-box,.login-text").hide();
                        if (h(".access-apps").length < 1) {
                            h(".loggedin-userinfo").append(" <h2 class='username'>" + Drupal.t("Welcome") + " <span>" + customvar.htmlencode(getusername) + "!</span></h2> <a class='access-apps' href=" + $gotoPage + "></a>");
                            h(".loggedin-userinfo .access-apps").html(accessZoho + " " + customvar.productName)
                        }
                    }
                } else {
                    h(".loggedin-userinfo").hide();
                    (window.location.href.indexOf("pricing-comparison.html") > 0 || window.location.href.indexOf("pricing.html") > 0) ? h(".signing .signup").hide() : h(".signing .signup").show();
                    (window.innerWidth > 991) ? h(".signup-box").show() : "";
                    h(".signing .signin").show();
                    h(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show")
                }
            }
        }

        function j() {
            setTimeout(function () {
                if (h(".signup-box").length > 0) {
                    for (var ao = 0; ao < h(".sgfrm input").length; ao++) {
                        if (h(".sgfrm input").eq(ao).val() != "undefined" && h(".signup-box").css("display") == "block") {
                            if (h(".sgfrm input").eq(ao).val() != "") {
                                if (h(".sgfrm input").eq(ao).prev().hasClass("placeholder")) {
                                    h(".sgfrm input").eq(ao).parent().addClass("added-placeholder")
                                }
                            }
                        }
                    }
                }
            }, 500)
        }
        h(document).on("blur", "input", function () {
            var ao = h(this).val();
            if (ao == "" || ao == null) {
                h(this).parent().removeClass("added-placeholder")
            } else {
                h(this).parent().addClass("added-placeholder")
            }
        }).on("focus", "input", function () {
            var ao = h(this).val();
            if (ao == "" || ao == null) {
                h(this).parent().removeClass("").addClass("added-placeholder")
            } else {
                h(this).parent().addClass("added-placeholder")
            }
        }).on("change", "input", function () {
            j()
        });
        h(".navbar-toggle").click(function (ao) {
            ao.stopPropagation();
            h(".header-menu-2 ul.menu").slideToggle()
        });
        if (h("#zohoiam").length > 0) {
            var y = h("#zohoiam").attr("src").split(".zoho.").join("." + ZdomainName + ".");
            h("#zohoiam").attr("src", y)
        }
        setTimeout(function () {
            jQuery(".animation-wrap > div").each(function (ap) {
                var ao = jQuery(this);
                setTimeout(function () {
                    ao.addClass("animated")
                }, (ap + 1) * 100)
            })
        }, 100);
        var p = jQuery(".features-list").children();
        var W = [];
        for (var ai = 0; ai < p.length; ai++) {
            W[ai] = jQuery(p[ai]).offset().top - window.innerHeight + jQuery(".features-list li").innerHeight()
        }
        jQuery(window).scroll(function () {
            var ao = jQuery(window).scrollTop();
            for (var ap = 0; ap < p.length; ap++) {
                if (ao > W[ap]) {
                    if (ap % 2 == 1) {
                        jQuery(p[ap]).addClass("from-right")
                    } else {
                        jQuery(p[ap]).addClass("from-left")
                    }
                }
            }
            if (ao > W[p.length - 1] + 150) {
                jQuery(".bottom-signup,.download-features a").css({
                    opacity: 1
                })
            }
            jQuery(".product-header.sub-header").css({
                top: -76
            })
        });
        var F = false;
        var O = jQuery(".product-menu").css("display");
        jQuery("body").click(function (ao) {
            if (ao.target.className == "product-menu") { } else {
                if (ao.target.className == "sub-menu-icon") {
                    if (F == false) {
                        F = true;
                        jQuery(".product-menu").slideDown(300)
                    } else {
                        F = false;
                        jQuery(".product-menu").slideUp(300)
                    }
                } else {
                    if (F == true) {
                        F = false;
                        jQuery(".product-menu").slideUp(300);
                        jQuery("html,body").css({
                            overflow: "auto"
                        })
                    }
                }
            }
        });
        jQuery(".product-menu li").click(function (aq) {
            var ap = jQuery(this).attr("class");
            var ar = ap.split("-");
            if (ar[0] == "crmplus") {
                aq.preventDefault();
                var ao = jQuery("section[data=" + ar[1] + "]").offset().top;
                jQuery("html, body").animate({
                    scrollTop: ao - jQuery(".sub-header").innerHeight()
                }, 1000, "easeInOutQuad")
            }
        });
        jQuery(".bottom-signup,.signing .signup").click(function (ao) {
            if (productName == "crm") {
                return
            }
            ao.preventDefault();
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1000, "easeInOutQuad");
            setTimeout(function () {
                jQuery(".signup-box div:first-child input").focus()
            }, 1000)
        })
    })
})(jQuery);
(function (h) {
    h.fn.visible = function (q) {
        var n = h(this),
            l = h(window),
            m = l.scrollTop() - 200,
            o = m + (l.height() + 300),
            r = (n.length > 0) ? (n.offset().top) + 250 : 0,
            p = r + n.height(),
            k = q === true ? p : r,
            j = q === true ? r : p;
        return ((j <= o) && (k >= m))
    }
})(jQuery);
(function (j) {
    function h() {
        if ($(window).outerWidth() > 767) {
            j(".content-wrap:not(.animated)").each(function () {
                var l = j(this),
                    k = (l.attr("data-delay")) ? l.attr("data-delay") : 0;
                setTimeout(function () {
                    if (l.visible(true)) {
                        l.addClass(l.attr("data-animation"));
                        l.addClass("animated")
                    }
                }, k)
            })
        }
        j(".content-wrap:not(.bottom-animated)").each(function () {
            var o = j(this),
                n = j(window),
                k = n.scrollTop(),
                m = o.offset().top,
                l = n.height();
            if (k > (m - l)) {
                o.addClass("bottom-animated")
            }
        });
        j(".content-wrap:not(.top-animated)").each(function () {
            var o = j(this),
                n = j(window),
                k = n.scrollTop(),
                m = o.offset().top,
                l = n.height();
            if (k > m) {
                o.addClass("top-animated")
            }
        });
        j(".content-wrap:not(.middle-animated)").each(function () {
            var o = j(this),
                n = j(window),
                k = n.scrollTop(),
                m = o.offset().top,
                l = n.height();
            if (k > (m - (l / 2))) {
                o.addClass("middle-animated")
            }
        })
    }
    j(document).ready(function () {
        h()
    });
    j(window).resize(function () {
        h()
    });
    j(window).scroll(function () {
        h()
    })
})(jQuery);

function zohoGASignupEvent() { }

function zohoFedClickEvent() { }

function zcTrackClick() { }
$(window).on("load", function () {
    customvar.termslink.setDefaultTerm();
    customvar.vimcall();
    if (currentUrlLang != "") {
        var j = $(".add-lang");
        for (var n = 0; n < j.length; n++) {
            if (j.eq(n).hasClass("nonlang")) { } else {
                if (typeof j.eq(n).attr("href") != "undefined") {
                    if (j.eq(n).attr("href").indexOf("/") == 0) {
                        var q = j.eq(n).attr("href");
                        j.eq(n).attr("href", "/" + currentUrlLang + q)
                    }
                }
            }
        }
    }
    var k = ["crm", "crmplus", "bigin", "marketingplus", "zakya", "canvas", "sprints", "zeptomail", "vanihq", "qntrl", "nila"];
    if (k.indexOf(customvar.productName) < 0) {
        if (predomain) {
            $.getScript(customvar.ocmsprelink + "/sites/zweb/js/common/crmwebforms.js")
        } else {
            $.getScript("")
        }
    }
    var o = 0;
    var r = setInterval(function () {
        if (_preZ == window.location.hostname && customvar.pathname == "/creator/footer-test.html") {
            if ($(".zw-footer-search-lang-block").length) {
                clearInterval(r);
                $(".zw-footer-search-lang-block").append('<div class="zlang-container"><span class="zlang-text">' + $(".zgh-localSelect").html() + '</span><div class="zlang-container-inner" style="display: none;"><ul><li><a class="nonlang-ld" data-lang="es-xl" href="">EspaÃ±ol</a></li><li><a class="nonlang-ld" data-lang="pt-br" href="">PortuguÃªs (Brasil)</a></li><li><a class="nonlang-ld" data-lang="de" href="">Deutsch</a></li><li><a class="nonlang-ld" data-lang="fr" href="">FranÃ§ais</a></li></ul></div></div>');
                $(".zlang-text").show();
                $(".overMe, .zlang-container").on("mouseover", function () {
                    $(this).children(".zlang-container-inner").show()
                });
                $(".overMe, .zlang-container").on("mouseout", function () {
                    $(this).children(".zlang-container-inner").hide()
                });
                $(".zlang-container").on("click", function (t) {
                    if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                        $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                        $(this).children(".zlang-container-inner").show()
                    } else {
                        $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                        $(this).children(".zlang-container-inner").hide()
                    }
                })
            }
        } else {
            if (($(".ZF-dlsel").length > 0) || ($(".zw-footer-search-lang-block").length > 0 && customvar.newFooterProducts.includes(customvar.productName))) {
                clearInterval(r);
                if (($(".zgh-localBox ul").html() != "")) {
                    if ($(".zgh-localBox ul li").length > 0) {
                        if (customvar.newFooterProducts.includes(customvar.productName)) {
                            $(".zw-footer-search-lang-block").append('<div class="zlang-container"><span class="zlang-text">' + $(".zgh-localSelect").html() + '</span><div class="zlang-container-inner" style="display: none;"><ul>' + $(".zgh-localBox ul").html() + "</ul></div></div>")
                        } else {
                            $(".ZF-dlsel").append('<div class="zlang-container"><span class="zlang-text">' + $(".zgh-localSelect").html() + '</span><div class="zlang-container-inner" style="display: none;"><ul>' + $(".zgh-localBox ul").html() + "</ul></div></div>")
                        }
                        $(".zlang-text").show();
                        (($(".zlang-container-inner ul li").length == 1) ? $(".zlang-container-inner").addClass("localBox-single") : "");
                        $(".overMe, .zlang-container").on("mouseover", function () {
                            $(this).children(".zlang-container-inner").show()
                        });
                        $(".overMe, .zlang-container").on("mouseout", function () {
                            $(this).children(".zlang-container-inner").hide()
                        });
                        $(".zlang-container").on("click", function (t) {
                            if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                                $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                                $(this).children(".zlang-container-inner").show()
                            } else {
                                $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                                $(this).children(".zlang-container-inner").hide()
                            }
                        })
                    }
                } else {
                    $(".zglob-lang").remove()
                }
                if (currentUrlLang == "jp") {
                    if (typeof customvar.supportId != "undefined") {
                        $(".zf-support-mail a").eq(0).html(customvar.supportId());
                        $(".zf-support-mail a").eq(0).attr("href", "mailto:" + customvar.supportId())
                    }
                }
                customvar.zChaSupIDByReg()
            }
        }
        if (o > 100) {
            clearInterval(r)
        }
        o++
    }, 100);
    if (window.innerWidth <= 767) {
        $(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne)
    } else {
        $(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."))
    }
    if (_preZ == window.location.hostname && currentUrlLang != "jp") { } else {
        var m = (customvar.productName == "accounts" || customvar.productName == "contacts") ? "" : "";
        var s = '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li class="zf-support-mail"><a id="zf-support-mailid" href="mailto:' + m + '">' + m + '</a></li><li class="zglob-lang"><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.com/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>';
        if (customvar.newFooterProducts.includes(customvar.productName)) {
            s = '<a id="zf-support-mailid" href="mailto:' + m + '">' + m + "</a>";
            if ($(".zwf-support-mail-links").length > 0) {
                $(".zwf-support-mail-links").append(s)
            }
        } else {
            if (currentUrlLang == "jp") {
                if ($(".common-links").length > 0) {
                    $(".common-links").prepend(s)
                }
            }
        }
    }
    if (!$("body").hasClass("r-g-f")) {
        if (customvar.newFooterProducts.includes(customvar.productName)) {
            $(".zw-footer-search-lang-block").prepend('<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>')
        } else {
            $(".ZPprivacy").before('<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>')
        }
    }
    if (_preZ == window.location.hostname && customvar.pathname == "/creator/footer-test.html") {
        $(".zw-footer-search-lang-block").prepend('<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>');
        $(".zwf-support-mail-links").append('<a id="zf-support-mailid" href="">support@odonsites.com</a>')
    }
    if (currentUrlLang != "") {
        $(".gdprc").attr("target", "_blank")
    }
    $(document).on("submit", "#footer-search-action", function (v) {
        v.preventDefault();
        var t = $(".footer-search-input").val().trim();
        var u;
        if (currentUrlLang == "") {
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host.indexOf("zohoflow") > 0) {
                u = ""
            } else {
                u = window.location.origin + "/search-results.html"
            }
        } else {
            u = window.location.origin + "/" + currentUrlLang + "/search-results.html"
        }
        if (t != "") {
            window.location = u + "?query=" + encodeURIComponent(t)
        }
    });
    if ($(".footer-links-wrap .product-links").hasClass("four-column")) {
        $(".footer-sec-wrap.two-column").addClass("fourColList")
    }
    if ($("#ref_value").length < 1) {
        if ($(".signup-box form").length > 0) {
            var p = customvar.czmr();
            var h = _lhref;
            if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                p = customvar.czmr().split(".html")[0] + ".html"
            }
            if (h.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                h = customvar.absurl
            }
            h = (h.length > 300) ? h.substring(0, 300) : h;
            $(".signup-box form").append('<input id="ref_value" name="ref_value" type="hidden" value="' + customvar.czms() + "," + p + "," + customvar.cuid() + "," + customvar.mydevice() + "," + h + '">')
        }
    }
    var l = $("body a");
    for (var n = 0; n < l.length; n++) {
        if (l.eq(n).attr("href") != "undefined" && l.eq(n).attr("href") != null && l.eq(n).attr("href") != "" && l.eq(n).attr("data-noneedopener") != "") {
            if (typeof l.eq(n).attr("target") != "undefined") {
                if (l.eq(n).attr("target") == "_blank") {
                    l.eq(n).attr("rel", "noopener");
                    if (l.eq(n).hasClass("czone-nofollow")) {
                        l.eq(n).attr("rel", "noopener nofollow")
                    }
                }
            }
            if (l.eq(n).attr("href").indexOf("") > -1) {
                l.eq(n).attr("href", l.eq(n).attr("href").split("forums.zoho.com").join(""))
            }
            if (currentUrlLang != "") {
                if (l.eq(n).attr("href").indexOf("/security.html") > 0 || l.eq(n).attr("href").indexOf("/cookie-policy.html") > 0 || l.eq(n).attr("href").indexOf("/ipr-complaints.html") > 0 || l.eq(n).attr("href").indexOf("/compliance.html") > 0) {
                    if (currentUrlLang == "de" && (l.eq(n).attr("href").indexOf("/security.html") > 0 || l.eq(n).attr("href").indexOf("/privacy/cookie-policy.html") > 0)) { } else {
                        if (currentUrlLang == "pt-br" && (l.eq(n).attr("href").indexOf("/security.html") > 0 || l.eq(n).attr("href").indexOf("/privacy/cookie-policy.html") > 0 || l.eq(n).attr("href").indexOf("/compliance.html") > 0)) { } else {
                            if (currentUrlLang != "jp") {
                                l.eq(n).attr("href", l.eq(n).attr("href").split("/" + currentUrlLang + "/").join("/"));
                                l.eq(n).attr({
                                    target: "_blank"
                                })
                            }
                        }
                    }
                }
            }
        }
    }
    $(".copy-right-year").html(currentYear);
    if (typeof customvar.footerloaded != "undefined") {
        customvar.footerloaded()
    }
});

function zSignupPrevent() {
    var h = document.getElementsByClassName("disabled-z-signup").length;
    if (0 < h) {
        return false
    }
}
jQuery(document).on("click", ".hide-links-btn", function () {
    jQuery(".quick-connect-links").animate({
        left: 225
    }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show();
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({
        right: 0
    }, "1500")
});
jQuery(document).on("click", ".show-links-btn", function () {
    jQuery(".quick-connect-links").show();
    jQuery(".quick-connect-links").animate({
        left: 0
    }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show("slow");
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({
        right: -45
    }, "1200")
});
jQuery(window).on("load", function () {
    jQuery(".quick-connect-links-wrap .show-links-btn").show()
});
$(window).on("load", function () { });

function langStrip() {
    var p = CountryCode.toLowerCase();
    (CountryCode.toLowerCase() == "br" || CountryCode.toLowerCase() == "pt") ? (p = "pt-br") : "";
    (CountryCode.toLowerCase() == "vn") ? (p = "vi") : "";
    (CountryCode.toLowerCase() == "sa") ? (p = "ar") : "";
    (CountryCode.toLowerCase() == "ja") ? (p = "jp") : "";
    var j = document.getElementsByTagName("body")[0].getAttribute("data-lang-list");
    if (global_getUrlParam("zc_localredirection") != "") {
        var h = true;
        for (redirectcode in localRedirectionlist) {
            if (typeof localRedirectionlist[redirectcode] != "undefined") {
                if (localRedirectionlist[redirectcode].split(",").indexOf(CountryCode) > -1) {
                    h = false
                }
            }
        }
        if ((j != null && j != "undefined") || (detectedLangNew != "" && h)) {
            if (detectedLangNew == "") {
                detectedLangNew = document.getElementsByTagName("body")[0].getAttribute("data-lang-list").split(",")
            }
            var m = [];
            for (var n = 0; n < detectedLangNew.length; n++) {
                if (langArr.indexOf(detectedLangNew[n]) > -1) {
                    var o = langArr[langArr.indexOf(detectedLangNew[n])];
                    if (o != "en" && o != "jp") {
                        m.push(langArr[langArr.indexOf(detectedLangNew[n])])
                    }
                }
            }
            var q = localStorage.getItem("zloaded") == "1";
            try { } catch (l) {
                q = true
            }
            if ((m.indexOf(p) > -1 || p == "ae" || p == "sa") && window.location.pathname.split("/")[1] != p && !q) {
                if (p != "ar" && typeof bannertext[p] != "undefined") {
                    if (window.location.pathname.indexOf("/in/") < 0) {
                        if (p == "de") {
                            $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[p].split(" ::: ")[1] + '!</span><span class="langBtn">' + bannertext[p].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                        } else {
                            $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[p].split(" ::: ")[1] + " " + lancountry[p] + '!</span><span class="langBtn">' + bannertext[p].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                        }
                        $(".langstrip").css("display", "block");
                        $(".ztopstrip-container").css("display", "block");
                        $(".langstrip .langClose").on("click", function () {
                            try {
                                $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                            } catch (s) { }
                            try {
                                localStorage.setItem("zloaded", "1")
                            } catch (r) { }
                            $(".langstrip").remove()
                        });
                        $(".langstrip .langBtn").on("click", function () {
                            var t = window.location.href;
                            if (p == "ae" || p == "sa") {
                                p = "ar"
                            }
                            if (currentUrlLang == "") {
                                t = t.split(window.location.host).join(window.location.host + "/" + p)
                            } else {
                                t = t.split("/" + currentUrlLang + "/").join("/" + p + "/")
                            }
                            if (localUrlLang) {
                                t = t.split("/" + localUrlLang).join("")
                            }
                            var r = "?";
                            if (t.indexOf("?") > -1) {
                                r = "&"
                            }
                            window.location = encodeURI(t + r + "lb=" + p);
                            try {
                                localStorage.setItem("zloaded", "1")
                            } catch (s) { }
                        })
                    }
                }
            }
        }
    } else {
        var k = ["ES", "AR", "BO", "CL", "CO", "EC", "GF", "PY", "PE", "SR", "UY", "VE", "MX"];
        (k.indexOf(CountryCode) > -1) ? (p = "es-xl") : "";
        if (customvar.lAmerica.indexOf(CountryCode) < 0) {
            if (CountryCode != "FR" && CountryCode != "BR") {
                if (CountryCode != "EG" || currentUrlLang != "ar") {
                    if (CountryCode != "SA" || currentUrlLang != "ar") {
                        if (CountryCode != "NL" || currentUrlLang != "nl") {
                            if (CountryCode != "ID" && currentUrlLang != "id") {
                                if (CountryCode != "DE" && currentUrlLang != "de") {
                                    var h = false;
                                    if (typeof localRedirectionlist[currentUrlLang] != "undefined") {
                                        if (localRedirectionlist[currentUrlLang].split(",").indexOf(CountryCode) > -1) {
                                            h = true
                                        }
                                    }
                                    if ((j != null && j != "undefined") || (detectedLangNew != "" && !h)) {
                                        if (detectedLangNew == "") {
                                            detectedLangNew = document.getElementsByTagName("body")[0].getAttribute("data-lang-list").split(",")
                                        }
                                        var m = [];
                                        for (var n = 0; n < detectedLangNew.length; n++) {
                                            if (langArr.indexOf(detectedLangNew[n]) > -1) {
                                                var o = langArr[langArr.indexOf(detectedLangNew[n])];
                                                if (o != "en" && o != "jp") {
                                                    m.push(langArr[langArr.indexOf(detectedLangNew[n])])
                                                }
                                            }
                                        }
                                        var q = localStorage.getItem("zloaded") == "1";
                                        try { } catch (l) {
                                            q = true
                                        }
                                        if ((m.indexOf(p) > -1 || p == "ae" || p == "sa") && window.location.pathname.split("/")[1] != p && !q) {
                                            if (p != "ar" && typeof bannertext[p] != "undefined") {
                                                if (window.location.pathname.indexOf("/in/") < 0) {
                                                    if (p == "de") {
                                                        $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[p].split(" ::: ")[1] + '!</span><span class="langBtn">' + bannertext[p].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                                                    } else {
                                                        $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[p].split(" ::: ")[1] + " " + lancountry[p] + '!</span><span class="langBtn">' + bannertext[p].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                                                    }
                                                    $(".langstrip").css("display", "block");
                                                    $(".ztopstrip-container").css("display", "block");
                                                    $(".langstrip .langClose").on("click", function () {
                                                        try {
                                                            $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                                                        } catch (s) { }
                                                        try {
                                                            localStorage.setItem("zloaded", "1")
                                                        } catch (r) { }
                                                        $(".langstrip").remove()
                                                    });
                                                    $(".langstrip .langBtn").on("click", function () {
                                                        var t = window.location.href;
                                                        if (p == "ae" || p == "sa") {
                                                            p = "ar"
                                                        }
                                                        if (currentUrlLang == "") {
                                                            t = t.split(window.location.host).join(window.location.host + "/" + p)
                                                        } else {
                                                            t = t.split("/" + currentUrlLang + "/").join("/" + p + "/")
                                                        }
                                                        if (localUrlLang) {
                                                            t = t.split("/" + localUrlLang).join("")
                                                        }
                                                        var r = "?";
                                                        if (t.indexOf("?") > -1) {
                                                            r = "&"
                                                        }
                                                        window.location = encodeURI(t + r + "lb=" + p);
                                                        try {
                                                            localStorage.setItem("zloaded", "1")
                                                        } catch (s) { }
                                                    })
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

function newLangStrip() {
    const m = ["startups"];
    if (m.includes(customvar.productName)) {
        return false
    }
    let isLocalyRedirected = false;
    for (redirectcode in localRedirectionlist) {
        if (localRedirectionlist[redirectcode].includes(CountryCode)) {
            isLocalyRedirected = true;
            break
        }
    }
    if (isLocalyRedirected) {
        if (window.location.host == "" || window.location.host == "" || window.location.host == _preZ) {
            if (window.location.href.indexOf("zredirect=f") > 0) {
                customvar.lsoinfo("latinNavigate", "1")
            }
            let latinNavigateInfo = customvar.lsoinfo("latinNavigate");
            if (latinNavigateInfo !== "") {
                return
            }
            let h = document.querySelector(".ztopstrip-container");
            let lbannerDiv = document.createElement("div");
            lbannerDiv.setAttribute("class", "lbanner");
            lbannerDiv.setAttribute("style", "display:block");
            let p = document.createElement("span");
            p.setAttribute("class", "langTxt");
            p.textContent = "Hello! Do you want to navigate in English?";
            let j = document.createElement("span");
            j.setAttribute("class", "langClose");
            j.textContent = "X";
            lbannerDiv.appendChild(p);
            lbannerDiv.appendChild(j);
            h.appendChild(lbannerDiv);
            h.style.display = "block";
            let currentUrl = window.location.href;
            currentUrl = currentUrl.replace("/" + currentUrlLang + "/", "/");
            p.addEventListener("click", function () {
                customvar.lsoinfo("latinNavigate", "1");
                let paramDelimiter = currentUrl.includes("?") ? "&" : "?";
                if (currentUrl.includes("#")) {
                    currentUrl = currentUrl.substring(0, currentUrl.indexOf("#"))
                }
                window.location.href = encodeURI(currentUrl + paramDelimiter + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader")
            });
            j.addEventListener("click", function () {
                try {
                    $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                } catch (q) { }
                lbannerDiv.remove();
                customvar.lsoinfo("latinNavigate", "1")
            })
        }
    } else {
        if (Array.isArray(detectedLangNew)) {
            let gotoUrlLanguage = CountryCode.toLowerCase();
            if (gotoUrlLanguage == "ae" || gotoUrlLanguage == "sa") {
                return false
            }
            if (gotoUrlLanguage === "br" || gotoUrlLanguage === "pt") {
                gotoUrlLanguage = "pt-br"
            } else {
                if (gotoUrlLanguage === "vn") {
                    gotoUrlLanguage = "vi"
                } else {
                    if (gotoUrlLanguage === "ja") {
                        gotoUrlLanguage = "jp"
                    }
                }
            }
            const k = detectedLangNew.filter(function (q) {
                return langArr.includes(q) && q !== "en" && q !== "jp"
            });
            let isUserClicked = false;
            try {
                isUserClicked = customvar.lsoinfo("zloaded") == "1"
            } catch (o) {
                isUserClicked = true
            }
            if (isUserClicked || window.location.pathname.includes("/in/")) {
                return false
            }
            if (currentUrlLang !== gotoUrlLanguage && k.includes(gotoUrlLanguage)) {
                if (bannertext[gotoUrlLanguage]) {
                    const n = document.createElement("div");
                    n.setAttribute("class", "langstrip");
                    const p = document.createElement("span");
                    p.setAttribute("class", "langTxt");
                    p.textContent = bannertext[gotoUrlLanguage].split(" ::: ")[1];
                    const l = document.createElement("span");
                    l.setAttribute("class", "langBtn");
                    l.textContent = bannertext[gotoUrlLanguage].split(" ::: ")[0];
                    const j = document.createElement("span");
                    j.setAttribute("class", "langClose");
                    j.textContent = "X";
                    n.appendChild(p);
                    n.appendChild(l);
                    n.appendChild(j);
                    if (gotoUrlLanguage === "de") {
                        p.textContent += "!"
                    } else {
                        p.textContent += " " + lancountry[gotoUrlLanguage] + "!"
                    }
                    const h = document.querySelector(".ztopstrip-container");
                    h.appendChild(n);
                    n.style.display = "block";
                    h.style.display = "block";
                    j.addEventListener("click", function () {
                        try {
                            $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                        } catch (q) { }
                        try {
                            customvar.lsoinfo("zloaded", "1")
                        } catch (q) { }
                        n.remove()
                    });
                    l.addEventListener("click", function () {
                        let currentUrl = window.location.href;
                        if (currentUrlLang === "") {
                            currentUrl = currentUrl.replace(window.location.host, window.location.host + "/" + gotoUrlLanguage)
                        } else {
                            currentUrl = currentUrl.replace("/" + currentUrlLang + "/", "/" + gotoUrlLanguage + "/")
                        }
                        if (localUrlLang) {
                            currentUrl = currentUrl.replace("/" + localUrlLang, "")
                        }
                        let paramDelimiter = currentUrl.includes("?") ? "&" : "?";
                        window.location.href = encodeURI(currentUrl + paramDelimiter + "zredirect=f&lb=" + gotoUrlLanguage);
                        try {
                            customvar.lsoinfo("zloaded", "1")
                        } catch (q) { }
                    })
                }
            }
        }
    }
}

function coockieStrip() {
    if ((global_getUrlParam("ismobilesignup") == "" || productName != "campaigns") && (global_getUrlParam("ismobilesignup") == "" || _lhref.indexOf("privacy.html") < 0)) {
        if ($(".cookiestrip").length < 1) {
            var l = localStorage.getItem("coockiechecked") == "1";
            if (!l) {
                if (currentUrlLang == "") {
                    var k = Drupal.t("We use cookies to help us understand and serve you better.");
                    var m = (window.location.host == "") ? ("") : (langsrc + "privacy/cookie-policy.html");
                    $("body").prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + k + '</span><a class="cookieManage" href="' + m + '" target="_blank">' + Drupal.t("View & Manage Cookies") + '</a><span class="cookieClose">' + Drupal.t("I Understand") + "</span></div></div>")
                } else {
                    var k = Drupal.t("We use cookies to help us understand and serve you better. Take a look at our ") + '<a href="' + langsrc + 'privacy/cookie-policy.html" target="_blank">' + Drupal.t("Cookie Policy") + ".</a>";
                    $("body").prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + k + '</span><a class="cookieManage" href="' + langsrc + 'privacy/cookie-policy.html?src=manage" target="_blank">' + Drupal.t("Manage") + '</a><span class="cookieClose">' + Drupal.t("OK") + "</span></div></div>")
                }
                $("body").addClass("zcstrip");
                $(".cookieClose").on("click", function () {
                    try {
                        localStorage.setItem("coockiechecked", "1")
                    } catch (h) { }
                    $("body").removeClass("zcstrip");
                    $(".cookiestrip").remove()
                })
            }
        }
    }
}

function testimonialHeight() {
    var h, j;
    h = 0;
    $(".z-testimonial-head").removeAttr("style");
    $(".z-testimonial-head").find("h4").each(function () {
        j = $(this).innerHeight();
        if (j > h) {
            h = j
        }
    });
    $(".z-testimonial-head").height(h);
    $(".z-testimonial-head").find("h4").removeAttr("style");
    $(".z-testimonial-head").removeClass("active");
    $(".z-testimonial-head").find("h4").each(function () {
        $(this).height($(this).innerHeight())
    });
    $(".z-testimonial-head").addClass("active")
}
if ($(".z-testimonial-item").length > 1) {
    testimonialHeight()
}
// $(document).ready(function (ag) {
//     $(".header .logo, .header-part .logo").attr("href", langsrc);
//     if (productName == "zohoorchestly" || productName == "bigin" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
//         $(".header .logo, .header-part .logo").attr("href", "https://www.zoho." + domainOne + langsrc)
//     }
//     customvar.privacypolicylink();
//     if (langArr.indexOf(currentUrlLang) > -1) {
//         var W = $("body a");
//         var s = ["mail", "workplace", "calendar", "zeptomail", "teaminbox", "mail360", "toolkit", "tasks", "zillum", "eprotect", "recruit"];
//         for (var ad = 0; ad < W.length; ad++) {
//             if (W.eq(ad).attr("href") != "undefined" && W.eq(ad).attr("href") != null && W.eq(ad).attr("href") != "" && !W.eq(ad).attr("href").includes("/terms.html") && !W.eq(ad).attr("href").includes("/privacy.html") && !W.eq(ad).hasClass("czone-signup-term") && !W.eq(ad).hasClass("zrlink") && !W.eq(ad).parent().hasClass("footer-privacy") && !W.eq(ad).parent().hasClass("footer-terms")) {
//                 var I = W.eq(ad).attr("href").split("/").indexOf("help") < 0,
//                     N = W.eq(ad).attr("href").split("/").indexOf("newhelp") < 0,
//                     af = W.eq(ad).attr("href").indexOf("/userguide/") < 0,
//                     X = W.eq(ad).attr("href").indexOf("/resources/") < 0,
//                     B = W.eq(ad).attr("href").indexOf("/resources.html") < 0,
//                     ai = W.eq(ad).attr("href").indexOf("blog") < 0,
//                     G = "https://www.zoho.com/assist/lp/demo-registration.html?src=pricing-faq" != window.location.href,
//                     t = W.eq(ad).attr("href").indexOf(".pdf") < 0,
//                     E = W.eq(ad).attr("href").indexOf(".exe") < 0,
//                     Z = W.eq(ad).attr("href").indexOf("/get-support-plugin.html") < 0,
//                     V = W.eq(ad).attr("href").indexOf("/demo-registration.html") < 0,
//                     S = W.eq(ad).attr("href").indexOf("/extension/zoho-assist.xpi") < 0,
//                     l = W.eq(ad).attr("href").indexOf("/books/") < 0,
//                     ak = W.eq(ad).attr("href").indexOf("/expense/") < 0,
//                     k = W.eq(ad).attr("href").indexOf("/invoice/") < 0,
//                     K = W.eq(ad).attr("href").indexOf("/subscriptions/") < 0,
//                     R = W.eq(ad).attr("href").indexOf("/inventory/") < 0,
//                     C = W.eq(ad).attr("href").indexOf("/checkout/") < 0,
//                     M = W.eq(ad).attr("href").indexOf("/gst/") < 0,
//                     D = W.eq(ad).attr("href").indexOf("recruit/referrals.html") < 0,
//                     am = W.eq(ad).attr("href").indexOf(".deb") < 0,
//                     ah = W.eq(ad).attr("href").indexOf("https://www.zoho.com/campaigns/contact-us.html") < 0,
//                     v = W.eq(ad).attr("href").indexOf("https://www.zoho.com/survey/education-discount.html") < 0,
//                     H = W.eq(ad).attr("href").indexOf("https://www.zoho.com/developer/signup.html") < 0,
//                     al = W.eq(ad).attr("href").indexOf("reports/onpremise/eula.html") < 0,
//                     F = W.eq(ad).attr("href").indexOf("reports/onpremise/get-quote.html") < 0,
//                     ae = W.eq(ad).attr("href").indexOf("cliq/developers/terms.html") < 0,
//                     j = W.eq(ad).attr("href").indexOf("/developer/") < 0,
//                     n = W.eq(ad).attr("href").indexOf("/creator/request-quote.html") < 0,
//                     x = W.eq(ad).attr("href").indexOf("/sprints/contact.html") < 0,
//                     o = W.eq(ad).attr("href").indexOf("/backstage/contact.html") < 0,
//                     r = W.eq(ad).attr("href").indexOf("https://www.zoho.com/teamdrive/contact.html") < 0,
//                     z = W.eq(ad).attr("href").indexOf("https://www.zoho.com/workdrive/contact.html") < 0,
//                     Q = W.eq(ad).attr("href").indexOf("webinars.html") < 0,
//                     aj = W.eq(ad).attr("href").indexOf("analytics/onpremise/get-quote.html") < 0,
//                     p = W.eq(ad).attr("href").indexOf("/workdrive/contact.html") < 0,
//                     U = !0;
//                 "com.cn" == domainOne && (U = !1), "crm" != productName || "fr" != currentUrlLang && "de" != currentUrlLang && "pt-br" != currentUrlLang && "es-xl" != currentUrlLang || (I = !0, X = !0, j = !0);
//                 var q = W.eq(ad).attr("href").indexOf(".zip") < 0,
//                     A = W.eq(ad).attr("href").indexOf("become-a-partner") < 0,
//                     L = W.eq(ad).attr("href").indexOf("creator/developers/find-a-developer.html") < 0,
//                     O = W.eq(ad).attr("href").indexOf("campaigns/email-marketing-demo.html") < 0,
//                     J = W.eq(ad).attr("href").indexOf("marketingautomation/marketing-automation-demo.html") < 0,
//                     w = W.eq(ad).attr("href").indexOf("sign/legal-guide.html") < 0,
//                     T = W.eq(ad).attr("href").indexOf("marketingautomation/request-quote.html") < 0,
//                     ab = W.eq(ad).attr("href").indexOf(".rpm") < 0,
//                     u = W.eq(ad).attr("href").indexOf("schedule-your-instagram-posts-on-zoho-social.html") < 0,
//                     P = W.eq(ad).attr("href").indexOf("people/request-quote.html") < 0,
//                     Y = W.eq(ad).attr("href").indexOf("forms/integrations/zoho-campaigns.html") < 0,
//                     h = !W.eq(ad).hasClass("nonlang"),
//                     ac = !W.eq(ad).hasClass("nonlang-ld");
//                 $(".nonlang").each(function () {
//                     $(this).attr({
//                         target: "_blank"
//                     })
//                 });
//                 var y = true;
//                 if (typeof $("body").attr("site") != "undefined") {
//                     if ($("body").attr("site") == "zblogs") {
//                         y = false
//                     }
//                 }
//                 if (I && N && af && X && B && ai && G && t && E && Z && V && S && l && ak && k && K && R && C && M && D && am && ah && v && H && al && F && ae && j && n && x && o && r && Q && aj && p && z && U && q && A && L && O && J && w && T && ab && u && P && h && Y && y && ac) {
//                     if (W.eq(ad).attr("href").split("/")[1] == productName) {
//                         if (!W.eq(ad).attr("href").includes("terms.html")) {
//                             var m = encodeURI("/" + currentUrlLang + W.eq(ad).attr("href"));
//                             W.eq(ad).attr("href", m)
//                         }
//                     } else {
//                         if (W.eq(ad).attr("href").split("/")[2] == "www.zoho.com") {
//                             if ((allProductlowerCase.indexOf(W.eq(ad).attr("href").split("/")[3]) > -1)) {
//                                 var m = encodeURI("https://www.zoho.com/" + currentUrlLang + W.eq(ad).attr("href").split("www.zoho.com")[1]);
//                                 W.eq(ad).attr("href", m)
//                             }
//                         } else {
//                             if (W.eq(ad).attr("href").split("/")[2] == "www.zoho.com") {
//                                 if (allProductlowerCase.indexOf(W.eq(ad).attr("href").split("/")[3]) > -1) {
//                                     var m = encodeURI("https://www.zoho.com/" + currentUrlLang + W.eq(ad).attr("href").split("www.zoho.com")[1]);
//                                     W.eq(ad).attr("href", m)
//                                 }
//                             } else {
//                                 if (window.location.pathname == "/gdpr.html" || window.location.pathname == "/privacy.html" || window.location.pathname == "/terms.html" || window.location.pathname == "/policy.html" || window.location.pathname == "/ipr-complaints.html" || window.location.pathname == "/security.html") {
//                                     var m = encodeURI("https://www.zoho.com/" + currentUrlLang + W.eq(ad).attr("href").split("www.zoho.com")[1]);
//                                     W.eq(ad).attr("href", m)
//                                 } else {
//                                     if (W.eq(ad).attr("href") == "/security.html") {
//                                         var m = encodeURI("/" + currentUrlLang + W.eq(ad).attr("href"));
//                                         W.eq(ad).attr("href", m)
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 if (W.eq(ad).attr("href").indexOf("help/") > -1 || W.eq(ad).attr("href").indexOf("blog") > -1) {
//                     if (currentUrlLang != "jp") {
//                         W.eq(ad).attr("target", "_blank")
//                     }
//                     if (W.eq(ad).attr("href").split("/" + currentUrlLang + "/") > -1) {
//                         var m = encodeURI(W.eq(ad).attr("href").split.split("/" + currentUrlLang + "/").join("/"));
//                         W.eq(ad).attr("href", m)
//                     }
//                 }
//             }
//         }
//     }
// });
// var intervalCount = 0;

// function CheckelEment() {
//     var h = setTimeout(function () {
//         if ($(".zgdprform-countrylist-container").length > 0) {
//             var j = document.createElement("script");
//             j.type = "text/javascript";
//             if (window.location.host == _preZ) {
//                 j.src = "https://" + _preZ + "/sites/zweb/js/common/gdprcompliance.js"
//             } else {
//                 j.src = "https://www.zohowebstatic.com/sites/zweb/js/common/gdprcompliance.js"
//             }
//             document.getElementsByTagName("head")[0].appendChild(j);
//             clearInterval(h)
//         } else {
//             intervalCount++;
//             if (intervalCount < 50) {
//                 CheckelEment()
//             }
//         }
//     }, 500)
// }
// var intervalSignupCount = 0;
// $(document).on("focus", ".globalcountrycode-signup", function () {
//     $(".za-country-container").addClass("added-placeholder")
// });
// $(document).on("blur", ".globalcountrycode-signup", function () {
//     $(".za-country-container").removeClass("added-placeholder")
// });


// $(document).ready(function () {
//     if (typeof CheckelEment == "function") {
//         CheckelEment()
//     }
//     if (customvar.mynewsignup.indexOf(customvar.productName) < 0) {
//         if (typeof CheckelEmentSignup == "function") {
//             if (currentUrlLang != "jp") {
//                 if (customvar.productName == "crm" || customvar.productName == "desk") {
//                     CheckelEmentSignup()
//                 }
//             }
//         }
//     }
// });
// $(document).on("click", ".umain .cta-btn.logged-in, .userinfo-details .userinfo-access", function (h) {
//     if ($(this).attr("href").indexOf("_ga")) {
//         h.preventDefault();
//         window.location = $(this).attr("href").split("?_ga")[0]
//     }
// });
// (function () {
//     if (navigator.appName == "Microsoft Internet Explorer" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
//         $("body").addClass("IE")
//     }
// })();
// var vidDataUrl = "";
// $(document).on("click", ".vimvideo", function (j) {
//     $(".zvim-model").remove();
//     $("body").prepend('<div class="zvim-model"><a href="javascript:;" class="zvim-video-close"><svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"></path></svg></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box zvim-zc-video-box"></div></div></div></div>');
//     $(".zvim-model").show();
//     $("body").addClass("vimactive");
//     $(".zvim-model").fadeIn();
//     var k = $(this).data("video");
//     vidDataUrl = "";
//     if (typeof $(this).data("shareurl") != "undefined") {
//         vidDataUrl = $(this).data("shareurl").split("embed/")[1]
//     }
//     var h = ((k.indexOf("?") > 0) ? "&" : "?") + ((k.indexOf("autopause=1") > 0) ? "" : "autopause=1&") + ((k.indexOf("dnt=1") > 0) ? "" : "dnt=1&") + ((k.indexOf("autoplay=1") > 0) ? "" : "autoplay=1") + '"width="3840"height="2160"frameborder="0"allow="autoplay;fullscreen;picture-in-picture"allowfullscreentitle="1-video.mp4';
//     $(".zvim-zc-video-box").append('<iframe src="' + k + h + '" class="zc-video-iframe"></iframe><div class="zvim-share-icon"><div class="zvim-share-button" title="Share"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.35 197.17" class="share-icon"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M152.53,118.26a6.81,6.81,0,0,0-6.81,6.82v40.51a18,18,0,0,1-17.94,17.94H31.58a18,18,0,0,1-17.95-17.94V69.39A18,18,0,0,1,31.58,51.45h94.85L97.64,80.63a6.81,6.81,0,0,0,4.85,11.6,6.75,6.75,0,0,0,4.85-2l40.8-41.34a6.81,6.81,0,0,0-.26-9.82L107.09,1.78a6.82,6.82,0,0,0-9.2,10.07l28.44,26H31.58A31.62,31.62,0,0,0,0,69.39v96.2a31.62,31.62,0,0,0,31.58,31.58h96.2a31.61,31.61,0,0,0,31.57-31.58V125.08A6.82,6.82,0,0,0,152.53,118.26Z" fill="#fff"></path></g></g></svg> </svg></div></div><div class="zvim-popup-share-overlay-wrapper"><div class="zvim-overlay-bg"></div><div class="zvim-popup-share-overlay-cell"> <section class="zvim-popup-share-section"><ul class="zvim-share-list"><li class="zvim-share-list-item"> <a class="zvim-share-twitter" href="https://twitter.com/intent/tweet?url=https://youtube.com/watch?v=' + vidDataUrl + '" rel="noopener" target="_blank" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs></defs><path fill="#1da1f2" d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg> </a></li><li class="zvim-share-list-item"> <a class="zvim-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://youtube.com/watch?v=' + vidDataUrl + '" rel="noopener" target="_blank" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><path fill="#0a66c2" d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path></svg> </a></li><li class="zvim-share-list-item"> <a class="zvim-share-linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A//youtu.be/' + vidDataUrl + '" target="_blank" rel="noopener" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><path fill="#1877f2" d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909C5.763 1.291 4.472 0 2.882 0z"></path></svg> </a></li></ul> </section></div><div class="zvim-share-close"> <svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"></path></svg> </button></div>');
//     if (vidDataUrl == "") {
//         $(".zvim-share-icon").addClass("hidden")
//     }
// });
// $(document).on("click", ".zvim-model, .zvim-zc-video-box, .zvim-share-button, .zvim-share-close, .zvim-share-list-item", function (j) {
//     j.stopPropagation();
//     if ($(this).attr("class") == "zvim-model") {
//         $(".zvim-model").remove();
//         $("body").removeClass("vimactive")
//     } else {
//         if ($(this).attr("class") == "zvim-share-button") {
//             $(".zvim-popup-share-overlay-wrapper").addClass("active");
//             $(".zvim-share-icon").addClass("hidden")
//         } else {
//             if ($(this).attr("class") == "zvim-share-close") {
//                 $(".zvim-popup-share-overlay-wrapper").removeClass("active");
//                 $(".zvim-share-icon").removeClass("hidden")
//             } else {
//                 if ($(this).attr("class") == "zvim-share-list-item") {
//                     var h = $(this).find("a").attr("href");
//                     window.open(h + vidDataUrl, "Share Zoho", "height=500,width=800,resizable=1")
//                 }
//             }
//         }
//     }
// });
// $(document).on("click", ".nonvimvideo", function (j) {
//     j.stopPropagation();
//     if (typeof $(this).attr("data-iframe") != "undefined" || typeof $(this).attr("data-video") != "undefined") {
//         $("body").prepend('<div class="zc-video-modal"><a href="javascript:;" class="zc-video-close"></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box"><div id="muteYouTubeVideoPlayer" class="zc-video-iframe"></div></div></div></div></div>');
//         var h = (typeof $(this).attr("data-video") != "undefined") ? $(this).attr("data-video") : $(this).attr("data-iframe");
//         $(".zc-video-modal").fadeIn();
//         $(".zc-video-box").append('<iframe src="' + h + '" frameborder="0" allowfullscreen="" class="zc-video-iframe"></iframe>');
//         $(".zc-video-modal").addClass("zc-iframe-box");
//         $("body").addClass("zclock")
//     }
// });

// function nonvimvidClose() {
//     $(".zc-video-modal").remove();
//     $("body").removeClass("zclock");
//     $(".zc-video-iframe").remove();
//     $(".zc-video-modal").removeClass("click-out zc-iframe-box zc-media-box")
// }
// $(document).on("click", ".zc-video-close", function () {
//     nonvimvidClose()
// });
// $(document).on("click", ".click-out", function () {
//     nonvimvidClose()
// });
// $(document).keyup(function (h) {
//     if (h.keyCode == 27) {
//         $(".zvim-model").remove();
//         $("body").removeClass("vimactive");
//         if ($(".zc-video-modal").length > 0) {
//             nonvimvidClose()
//         }
//     }
// });
// if (!$("body").hasClass("node-type-zoho-home") && !$("body").hasClass("node-type-zoho-home-3-0")) {
//     var excludeitarr = ["nila", "qntrl", "vanihq"];
//     if (!excludeitarr.includes(customvar.productName)) {
//         var excludearr = ["crm", "crmplus"];
//         if (currentUrlLang != "jp" || !excludearr.includes(customvar.productName)) {
//             var zchf = document.createElement("script");
//             if ($(".load-header").length <= 0 && !_lhref.includes("com/press.html")) {
//                 var newzchf = document.createElement("script");
//                 if (predomain) {
//                     newzchf.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-headerfooter-v2.js"
//                 } else {
//                     if (window.location.hostname == _preZ) {
//                         newzchf.src = "/sites/zweb/js/common/zc-headerfooter-v2.js"
//                     } else {
//                         newzchf.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-headerfooter-v2.js"
//                     }
//                 }
//                 document.getElementsByTagName("head")[0].appendChild(newzchf)
//             }
//         }
//     }
// }
// if ($(".zoholics-global-container").length > 0) {
//     var zoholics_global = document.createElement("script");
//     if (predomain) {
//         zoholics_global.src = customvar.ocmsprelink + "/sites/zweb/js/common/zoholics-banner.js"
//     } else {
//         zoholics_global.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zoholics-banner.js"
//     }
//     document.getElementsByTagName("head")[0].appendChild(zoholics_global)
// }
// if ($(".zpricegroup-common").length > 0 || $(".zpricegroup-common-sl").length > 0) {
//     var zcprice = document.createElement("script");
//     if (predomain) {
//         zcprice.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-pricing.js"
//     } else {
//         zcprice.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-pricing.js"
//     }
//     document.getElementsByTagName("head")[0].appendChild(zcprice)
// }
// var zcScrExist = false;

// function zcPriInit(k) {
//     if (!document.getElementById("zc-script-pricing")) {
//         var h = document.createElement("script");
//         if (getDomain == _preZ || getDomain == _preZC || getDomain == _zcmsZC) {
//             h.src = "/sites/zweb/js/common/zc-dynamic-pricing.js"
//         } else {
//             h.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-dynamic-pricing.js"
//         }
//         h.setAttribute("id", "zc-script-pricing");
//         h.addEventListener("load", k);
//         document.getElementsByTagName("head")[0].appendChild(h)
//     } else {
//         if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
//             k()
//         } else {
//             var j = setInterval(function () {
//                 if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
//                     clearInterval(j);
//                     k()
//                 }
//             }, 100)
//         }
//     }
// }
// if (currentUrlLang == "nl" || currentUrlLang == "fr" || currentUrlLang == "de") {
//     var transjs = document.createElement("script");
//     if (predomain) {
//         transjs.src = customvar.ocmsprelink + "/sites/zweb/js/common/transfeedback.js"
//     } else {
//         transjs.src = "https://www.zohowebstatic.com/sites/zweb/js/common/transfeedback.js"
//     }
//     document.getElementsByTagName("head")[0].appendChild(transjs);
//     var transcss = document.createElement("link");
//     transcss.rel = "stylesheet";
//     transcss.type = "text/css";
//     if (predomain) {
//         transcss.href = customvar.ocmsprelink + "/sites/zweb/css/common/transfeedback.css"
//     } else {
//         transcss.href = "https://www.zohowebstatic.com/sites/zweb/css/common/transfeedback.css"
//     }
//     document.getElementsByTagName("head")[0].appendChild(transcss)
// }
// customvar.singlescroll = false;
// customvar.sscount = 0;
// customvar.maxcount = 5;
// if (window.location.hostname == _preZ) {
//     $("body").on("mousewheel DOMMouseScroll", function (h) {
//         if ($("body").attr("scrolled") != "1" && customvar.singlescroll) {
//             if (typeof h.originalEvent.detail == "number" && h.originalEvent.detail !== 0) {
//                 if (h.originalEvent.detail > 0) {
//                     customvar.sscount++
//                 } else {
//                     if (h.originalEvent.detail < 0) {
//                         customvar.sscount--
//                     }
//                 }
//             } else {
//                 if (typeof h.originalEvent.wheelDelta == "number") {
//                     if (h.originalEvent.wheelDelta < 0) {
//                         customvar.sscount++
//                     } else {
//                         if (h.originalEvent.wheelDelta > 0) {
//                             customvar.sscount--
//                         }
//                     }
//                 }
//             } (customvar.sscount < 0) ? customvar.sscount = 0 : "";
//             (customvar.sscount > customvar.maxcount) ? customvar.sscount = customvar.maxcount : "";
//             $("body").attr("scrolled", "1");
//             setTimeout(function () {
//                 $("body").attr("scrolled", "0")
//             }, 2000)
//         }
//     })
// }
// var fromSearch = global_getUrlParam("zgs");
// jQuery(document).ready(function () {
//     if (fromSearch != "" && fromSearch == 1 && $("body").hasClass("node-type-just-html")) {
//         $("a[href]").attr({
//             target: "_blank",
//             rel: "noopener"
//         });
//         var h = $("#block-system-main").clone();
//         $("body").html(h)
//     }
// });

// function getLazSrc(n, h, m, k, l, j) {
//     if (typeof n.attr("data-screen") !== typeof undefined && n.attr("data-screen") !== false) {
//         var o = n.attr("data-screen").split(",");
//         if (o.length == 1) {
//             if (h >= o[0]) {
//                 if (m == 1) {
//                     setLazImgSrc(n, 1, k, l, j)
//                 } else {
//                     if (m == 2) {
//                         setLazVidSrc(n, j, 1)
//                     } else {
//                         setLazImgSrc(n, 0, k, l, j)
//                     }
//                 }
//             }
//         } else {
//             if (h >= o[0] && h <= o[1]) {
//                 if (m == 1) {
//                     setLazImgSrc(n, 1, k, l, j)
//                 } else {
//                     if (m == 2) {
//                         setLazVidSrc(n, j, 1)
//                     } else {
//                         setLazImgSrc(n, 0, k, l, j)
//                     }
//                 }
//             }
//         }
//     } else {
//         if (m == 1) {
//             setLazImgSrc(n, 1, k, l, j)
//         } else {
//             if (m == 2) {
//                 setLazVidSrc(n, j, 1)
//             } else {
//                 setLazImgSrc(n, 0, k, l, j)
//             }
//         }
//     }
// }

// function setLazImgSrc(m, l, j, k, h) {
//     if (l == 1) {
//         for (g = 0; g < j.length; g++) {
//             var n = $(j[g]);
//             if (typeof n.attr("data-srcset") !== typeof undefined && n.attr("data-srcset") !== false) {
//                 n.attr("srcset", n.attr("data-srcset"));
//                 n.removeAttr("data-srcset")
//             }
//         }
//     }
//     if (typeof k !== typeof undefined && k !== false) {
//         m.attr("srcset", k);
//         m.removeAttr("data-srcset")
//     }
//     if (typeof h !== typeof undefined && h !== false) {
//         m.attr("src", h);
//         m.removeAttr("data-src");
//         m.addClass("data-loaded")
//     }
// }

// function setLazVidSrc(k, h, j) {
//     if (typeof h !== typeof undefined && h !== false) {
//         if (j == 1) {
//             k.attr("poster", h)
//         } else {
//             k.attr("src", h)
//         }
//         k.removeAttr("data-src");
//         k.addClass("data-loaded")
//     }
// }

// function imgLazy(p, s, t, v) {
//     var q = $("[data-lazy]");
//     if (q.length) {
//         for (a = 0; a < q.length; a++) {
//             var h = $(q[a]);
//             objIsHid = h.attr("data-lazy");
//             thatObjOff = h.offset().top;
//             if (thatObjOff >= 1 || objIsHid == "true" || objIsHid == "child") {
//                 if ((v == 1 && thatObjOff <= (t.height() * 2)) || (v == 0 && s + (t.height() * 2) >= thatObjOff)) {
//                     if (!h.hasClass("data-loaded")) {
//                         if (objIsHid == "child") {
//                             if (thatObjOff >= 1) {
//                                 var m = h.find("picture");
//                                 var o = h.find("img");
//                                 var k = h.find("video");
//                                 var n = h.find("iframe");
//                                 var r = h.find("[data-src]");
//                                 if (m.length) {
//                                     for (b = 0; b < m.length; b++) {
//                                         getLazSrc($(m[b]), p, 1, $(m[b]).children("source"), $(m[b]).attr("data-srcset"), $(m[b]).attr("data-src"))
//                                     }
//                                 }
//                                 if (o.length) {
//                                     for (c = 0; c < o.length; c++) {
//                                         getLazSrc($(o[c]), p, 0, $(o[c]).children("source"), $(o[c]).attr("data-srcset"), $(o[c]).attr("data-src"))
//                                     }
//                                 }
//                                 if (k.length) {
//                                     for (d = 0; d < k.length; d++) {
//                                         getLazSrc($(k[d]), p, 2, $(k[d]).children("source"), $(k[d]).attr("data-srcset"), $(k[d]).attr("data-src"))
//                                     }
//                                 }
//                                 if (n.length) {
//                                     for (e = 0; e < n.length; e++) {
//                                         setLazVidSrc($(n[e]), $(n[e]).attr("data-src"), 0)
//                                     }
//                                 }
//                                 if (r.length) {
//                                     for (f = 0; f < r.length; f++) {
//                                         if (!$(r[f]).is("picture") && !$(r[f]).is("img") && !$(r[f]).is("video") && !$(r[f]).is("iframe")) {
//                                             if (typeof $(r[f]).attr("data-src") !== typeof undefined && $(r[f]).attr("data-src") !== false) {
//                                                 $(r[f]).css("background-image", "url(" + $($(r[f])).attr("data-src") + ")");
//                                                 $(r[f]).removeAttr("data-src");
//                                                 $(r[f]).addClass("data-loaded")
//                                             }
//                                         }
//                                     }
//                                 }
//                                 h.addClass("data-loaded")
//                             }
//                         } else {
//                             var j = h.closest("picture").find("source");
//                             var u = h.attr("data-srcset");
//                             var l = h.attr("data-src");
//                             if (h.parent().is("picture")) {
//                                 getLazSrc(h, p, 1, j, u, l)
//                             } else {
//                                 if (h.is("img")) {
//                                     getLazSrc(h, p, 0, j, u, l)
//                                 } else {
//                                     if (h.is("video")) {
//                                         getLazSrc(h, p, 2, j, u, l)
//                                     } else {
//                                         if (h.is("iframe")) {
//                                             setLazVidSrc(h, l, 0)
//                                         } else {
//                                             if (typeof l !== typeof undefined && l !== false) {
//                                                 h.css("background-image", "url(" + l + ")");
//                                                 h.removeAttr("data-src");
//                                                 h.addClass("data-loaded")
//                                             } else {
//                                                 h.addClass("data-loaded")
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// zLzScW = $(window);
// $(document).ready(function () {
//     zLzScwW = zLzScW.outerWidth();
//     imgLazy(zLzScwW, 0, zLzScW, 1)
// });
// zLzScW.resize(function () {
//     zLzScwW = zLzScW.outerWidth();
//     zLzScwS = zLzScW.scrollTop();
//     imgLazy(zLzScwW, zLzScwS, zLzScW, 0)
// });
// zLzScW.scroll(function () {
//     zLzScwW = zLzScW.outerWidth();
//     zLzScwS = zLzScW.scrollTop();
//     imgLazy(zLzScwW, zLzScwS, zLzScW, 0)
// });

// function zLazyOnTrigger() {
//     zLzScwW = zLzScW.outerWidth();
//     zLzScwS = zLzScW.scrollTop();
//     imgLazy(zLzScwW, zLzScwS, zLzScW, 0)
// }
// if (currentUrlLang == "" || currentUrlLang == "jp") {
//     if (customvar.browser == "ie" || customvar.browser == "IE") {
//         var supportText = Drupal.t("This browser is no longer supported and some functionality may not work. Switch to another browser for the best Zoho experience.");
//         $("body").append('<div class="br-ns-overlay"></div><div class="br-ns-outer"><div class="br-ns-contianer"><p>' + supportText + '</p><span class="br-ns-close"></span></div></div><div class="br-ns-fixed"><div class="br-ns-contianer"><p>' + supportText + '</p><span class="br-ns-close"></span></div></div>');
//         $(".br-ns-overlay, .br-ns-close").on("click", function () {
//             $(".br-ns-overlay, .br-ns-outer").hide()
//         })
//     }
// }
// var defColLineCount = 10;
// if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
//     if (window.location.search.indexOf("hrLines") > 0) {
//         $(document).keydown(function (h) {
//             var j = $(".zwe-hrLine-box");
//             if (h.keyCode == 27) {
//                 if (j.is(":visible")) {
//                     j.css("display", "none")
//                 } else {
//                     j.css("display", "grid")
//                 }
//             }
//         });
//         $("head").append('<style type="text/css">.zwe-hrLine-box{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background:rgb(0,0,0,.4);z-index:9999;display:grid;pointer-events:none}.zwe-hrLine-inner{counter-reset:counter 0;display:grid}.zwe-hrLine-box span{display:grid;align-content:end;position:relative;border-style:solid;border-color:#fff;border-width:1px 1px 0 1px}.zwe-hrLine-box span:last-child{border-bottom-width:1px}.zwe-hrLine-box span:after{counter-increment:counter 1;content:counter(counter);display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;left:-1px;bottom:-8px;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-box span:first-child:before{content:"0";position:absolute;left:-1px;top:-8px;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-bottom,.zwe-hrLine-inner .zwe-hrLine-middle,.zwe-hrLine-inner .zwe-hrLine-static,.zwe-hrLine-inner .zwe-hrLine-top{position:absolute;right:0;min-height:1px;border-bottom:1px solid #fff;width:100%}.zwe-hrLine-inner .zwe-hrLine-bottom:before,.zwe-hrLine-inner .zwe-hrLine-middle:before,.zwe-hrLine-inner .zwe-hrLine-static:before,.zwe-hrLine-inner .zwe-hrLine-top:before{display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;top:-6px;right:0;background:#000;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-top:before{content:"Top";width:22px}.zwe-hrLine-inner .zwe-hrLine-middle:before{content:"Middle";width:38px}.zwe-hrLine-inner .zwe-hrLine-bottom:before{content:"Bottom";width:40px}.zwe-hrLine-inner .zwe-hrLine-static:before{content:"Position";width:43px;left:0;right:inherit;padding:0 0 0 2px}</style>');
//         $("body").append('<div class="zwe-hrLine-box"><div class="zwe-hrLine-inner"></div></div>');
//         colLineCount = window.location.search.slice(9);
//         if (colLineCount.split("/").length == 2) {
//             if (colLineCount.split("/")[1] == "top" || colLineCount.split("/")[1] == "bottom") {
//                 $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-static"></div>')
//             }
//         } else {
//             if (colLineCount >= 1 && colLineCount <= 100) {
//                 for (a = 1; a <= colLineCount; a++) {
//                     $(".zwe-hrLine-inner").append("<span></span>")
//                 }
//             }
//         }
//         $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-top"></div><div class="zwe-hrLine-middle"></div><div class="zwe-hrLine-bottom"></div>')
//     }
// }

// function zScrollOnPos(h, j) {
//     if (h.is("video")) {
//         if (!h.hasClass("zwe-op")) {
//             if (typeof j !== typeof undefined && j !== false) {
//                 setTimeout(function () {
//                     h.addClass("zwe-v-delay");
//                     h.get(0).muted = true;
//                     h.get(0).play()
//                 }, j)
//             } else {
//                 h.get(0).muted = true;
//                 h.get(0).play()
//             }
//         }
//     }
//     h.addClass("zwe-op")
// }

// function zElmOnScroll(o, j, q, s) {
//     if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
//         if (window.location.search.indexOf("hrLines") > 0) {
//             colLineCount = window.location.search.slice(9);
//             $(".zwe-hrLine-inner .zwe-hrLine-top").css("top", j / 3 / 2 * 1);
//             $(".zwe-hrLine-inner .zwe-hrLine-middle").css("top", j / 3 / 2 * 3);
//             $(".zwe-hrLine-inner .zwe-hrLine-bottom").css("top", j / 3 / 2 * 5);
//             if (colLineCount.split("/").length == 2) {
//                 if (colLineCount.split("/")[1] == "top") {
//                     $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", Number(colLineCount.split("/")[0]))
//                 } else {
//                     if (colLineCount.split("/")[1] == "bottom") {
//                         $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", j - Number(colLineCount.split("/")[0]))
//                     }
//                 }
//             }
//         }
//     }
//     if (zAnimElm.length) {
//         var n = q + j;
//         for (a = 0; a < zAnimElm.length; a++) {
//             var m = $(zAnimElm[a]),
//                 r = m.attr("data-onscroll"),
//                 h = m.attr("data-delay"),
//                 l = m.height(),
//                 k = m.offset().top,
//                 p = k + l;
//             if (k >= 1) {
//                 if ((s == 1 && p >= q - 50 && k <= n + 50) || (s == 0 && p >= q - 150 && k <= n + 50)) {
//                     if (s == 1 || (s == 0 && q + (j / 3 / 2 * 1) >= k)) {
//                         m.addClass("zwe-ot")
//                     }
//                     if (s == 1 || (s == 0 && q + (j / 3 / 2 * 3) >= k)) {
//                         m.addClass("zwe-om")
//                     }
//                     if (s == 1 || (s == 0 && q + (j / 3 / 2 * 5) >= k)) {
//                         m.addClass("zwe-ob")
//                     }
//                     if (r != "") {
//                         if (r.length <= 2 && r <= defColLineCount) {
//                             if ((s == 1) || (s == 0 && q + (j / defColLineCount * r) >= k)) {
//                                 zScrollOnPos(m, h)
//                             }
//                         } else {
//                             if (r.length >= 3 && (r.endsWith("top") || r.endsWith("bottom"))) {
//                                 zElmOffset = Number(r.split("/")[0]);
//                                 zElmOffsetPostion = r.split("/")[1];
//                                 if (zElmOffsetPostion == "top") {
//                                     if ((s == 1) || (s == 0 && (q + zElmOffset >= k))) {
//                                         zScrollOnPos(m, h)
//                                     }
//                                 } else {
//                                     if ((s == 1) || (s == 0 && (n - zElmOffset >= k))) {
//                                         zScrollOnPos(m, h)
//                                     }
//                                 }
//                             } else {
//                                 if (r.length >= 3 && !r.startsWith("{") && !r.endsWith("}") && !r.endsWith("top") && !r.endsWith("bottom")) {
//                                     zElmOffsetRow = Number(r.split("/")[0]);
//                                     zElmOffsetTotalRow = Number(r.split("/")[1]);
//                                     if ((s == 1) || (s == 0 && q + (j / zElmOffsetTotalRow * zElmOffsetRow) >= k)) {
//                                         zScrollOnPos(m, h)
//                                     }
//                                 } else {
//                                     if (r.startsWith("{") && r.endsWith("}")) {
//                                         r = r.split("{").join("").split("}").join("");
//                                         for (b = 0; b < r.split(",").length; b++) {
//                                             zElmOffsetRes = r.split(",")[b].split(":")[0];
//                                             zElmOffsetRow = r.split(",")[b].split(":")[1];
//                                             if (zElmOffsetRow.split("/").length == 2) {
//                                                 zElmOffsetRows = Number(zElmOffsetRow.split("/")[0]);
//                                                 zElmOffsetTotalRows = zElmOffsetRow.split("/")[1];
//                                                 if (zElmOffsetRes.split("-").length == 1) {
//                                                     if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
//                                                         if (zElmOffsetTotalRows == "top") {
//                                                             if ((o >= zElmOffsetRes.split("-")[0]) && (s == 1 || (s == 0 && (q + zElmOffsetRows >= k)))) {
//                                                                 zScrollOnPos(m, h)
//                                                             }
//                                                         } else {
//                                                             if ((o >= zElmOffsetRes.split("-")[0]) && (s == 1 || (s == 0 && (n - zElmOffsetRows >= k)))) {
//                                                                 zScrollOnPos(m, h)
//                                                             }
//                                                         }
//                                                     } else {
//                                                         if ((o >= zElmOffsetRes.split("-")[0]) && (s == 1 || (s == 0 && q + (j / Number(zElmOffsetTotalRows) * zElmOffsetRows) >= k))) {
//                                                             zScrollOnPos(m, h)
//                                                         }
//                                                     }
//                                                 } else {
//                                                     if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
//                                                         if (zElmOffsetTotalRows == "top") {
//                                                             if ((o >= zElmOffsetRes.split("-")[0] && o <= zElmOffsetRes.split("-")[1]) && (s == 1 || (s == 0 && (q + zElmOffsetRows >= k)))) {
//                                                                 zScrollOnPos(m, h)
//                                                             }
//                                                         } else {
//                                                             if ((o >= zElmOffsetRes.split("-")[0] && o <= zElmOffsetRes.split("-")[1]) && (s == 1 || (s == 0 && (n - zElmOffsetRows >= k)))) {
//                                                                 zScrollOnPos(m, h)
//                                                             }
//                                                         }
//                                                     } else {
//                                                         if ((o >= zElmOffsetRes.split("-")[0] && o <= zElmOffsetRes.split("-")[1]) && (s == 1 || (s == 0 && q + (j / Number(zElmOffsetTotalRows) * zElmOffsetRows) >= k))) {
//                                                             zScrollOnPos(m, h)
//                                                         }
//                                                     }
//                                                 }
//                                             } else {
//                                                 if (zElmOffsetRes.split("-").length == 1) {
//                                                     if ((o >= zElmOffsetRes.split("-")[0]) && (s == 1 || (s == 0 && q + (j / defColLineCount * zElmOffsetRow) >= k))) {
//                                                         zScrollOnPos(m, h)
//                                                     }
//                                                 } else {
//                                                     if ((o >= zElmOffsetRes.split("-")[0] && o <= zElmOffsetRes.split("-")[1]) && (s == 1 || (s == 0 && q + (j / defColLineCount * zElmOffsetRow) >= k))) {
//                                                         zScrollOnPos(m, h)
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// var zAnimElm = $("[data-onscroll]");
// zElScW = $(window);
// $(document).ready(function () {
//     zElScwW = zElScW.outerWidth();
//     zElScwH = zElScW.outerHeight();
//     zElScwS = zElScW.scrollTop();
//     zElmOnScroll(zElScwW, zElScwH, zElScwS, 1)
// });
// zElScW.resize(function () {
//     zElScwW = zElScW.outerWidth();
//     zElScwH = zElScW.outerHeight();
//     zElScwS = zElScW.scrollTop();
//     zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
// });
// zElScW.scroll(function () {
//     zElScwW = zElScW.outerWidth();
//     zElScwH = zElScW.outerHeight();
//     zElScwS = zElScW.scrollTop();
//     zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
// });

// function zElmOnTrigger() {
//     zElScwW = zElScW.outerWidth();
//     zElScwH = zElScW.outerHeight();
//     zElScwS = zElScW.scrollTop();
//     zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
// }
// $(document).on("click", ".za-tos", function () {
//     if ($("#signup-termservice").attr("class") == "checked") {
//         $(this).val(true)
//     } else {
//         $(this).val(false)
//     }
// });
// customvar.scountrys = (customvar.countries[1].indexOf(CountryCode) > -1) ? CountryCode : "US";
// customvar.sstate = RegionName;
// customvar.hiddenrmobileval = [];
// customvar.counntrychangeed = 0;
// customvar.nSignupArr = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];
// customvar.nSignupspanArr = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];
// customvar.nSignupdialArr = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];
// customvar.nSignupconfirmdialArr = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];
// customvar.visitedArry = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];
// customvar.validatetextArry = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];
// customvar.slectedradio = [];
// customvar.creatingthePortal = Drupal.t("Creating Your Account...");
// customvar.signupforFree = Drupal.t("Sign Up for Free");
// customvar.onlyletters = Drupal.t("Only lower case letters and numbers are allowed here");
// customvar.eOrgName = Drupal.t("Please enter your organization name");
// customvar.eOrgRole = Drupal.t("Please enter your role in Organization");
// customvar.eAboutYpurCompany = Drupal.t("Please enter about your company");
// customvar.repasserr = Drupal.t("Password cannot be less than 8 characters");
// customvar.repaswrongserr = Drupal.t("Wrong password confirmation");
// customvar.teamNameTranslt = Drupal.t("Please enter the valid Team Name");
// customvar.isValidTranslt = Drupal.t("Enter only a to z and 0 to 9");
// customvar.isvalidName = Drupal.t("Only a to z and 0 to 9 are allowed");
// customvar.isvalidAgency = Drupal.t("Please enter the Agency name");
// customvar.numcharspl = Drupal.t("Only letters, numbers, underscores (_), dots (.) are allowed");
// customvar.eLastName = Drupal.t("Please enter your last name");
// customvar.rephoneNumber = Drupal.t("Re-enter your Mobile Number");
// customvar.empCount = Drupal.t("Please select no.of Employees");
// customvar.locationCount = Drupal.t("Please select no.of locations");
// customvar.selectindustry = Drupal.t("Please select your industry");
// customvar.eselectEdition = Drupal.t("Please select a edition");
// customvar.registernum = Drupal.t("Please enter your university register number");
// customvar.usersrequire = Drupal.t("Please enter the number of users");
// customvar.eFormationState = Drupal.t("Please select a formation state");
// customvar.nOfSignup = 0;
// customvar.singaporeConsentchecked = false;
// if (global_getUrlParam("isDarkMode") && ["true", "false"].includes(global_getUrlParam("isDarkMode").toLowerCase()) && JSON.parse(global_getUrlParam("isDarkMode").toLowerCase())) {
//     $("body").addClass("zw-template-signup-dark")
// }
// customvar.redirectUrlLink;
// customvar.websiteUrl, customvar.couponCode, customvar.creditsInfo = "false";
// customvar.couponCode = global_getUrlParam("cn");
// customvar.edirectUrl = global_getUrlParam("redirectUrl");
// customvar.dataWebsiteUrl = customvar.absurl;
// customvar.dataredirectUrl = $(".signup-box").attr("data-redirect");
// customvar.creditsInfo = ($(".signup-box").attr("creditsInfo") == undefined) ? "false" : "true";
// customvar.couponinputplaceholder = Drupal.t("Coupon");
// customvar.couponCodeAvail = Drupal.t("You have availed this already");
// customvar.couponError = Drupal.t("Invalid coupon");
// customvar.redeemCreditsCta = Drupal.t("Proceed to redeem your credits");
// customvar.zwProTerms = $(".signup-box").attr("data-zwProTerms");
// customvar.zwProTerms = (customvar.zwProTerms != undefined) ? "/" + customvar.zwProTerms : "";
// if (customvar.couponCode == "") {
//     customvar.couponCode = $(".signup-box").attr("data-couponcode")
// }
// customvar.getWalletAttributes = function (h) {
//     if (customvar.dataredirectUrl == "" || customvar.dataredirectUrl == undefined) {
//         customvar.redirectUrlLink = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
//     } else {
//         if (customvar.dataredirectUrl != "") {
//             customvar.redirectUrlLink = customvar.dcadded(customvar.dataredirectUrl)
//         } else {
//             customvar.redirectUrlLink = customvar.redirectUrl
//         }
//     }
//     if (customvar.dataWebsiteUrl == undefined || customvar.dataWebsiteUrl == "") {
//         customvar.websiteUrl = "https://www." + Zdomain + "." + dcdomainOne + "/" + ((customvar.productName == "home") ? "wallet" : customvar.productName) + "/"
//     } else {
//         customvar.websiteUrl = customvar.dcadded(customvar.dataWebsiteUrl)
//     }
//     if (typeof dynamic_redirectUrlLink == "function") {
//         try {
//             customvar.redirectUrlLink = dynamic_redirectUrlLink()
//         } catch (j) {
//             customvar.redirectUrlLink = customvar.dataredirectUrl
//         }
//     }
// };
// $(window).on("load", function () {
//     if ($(".creditelm #couponmail").length > 0) {
//         customvar.showWalletForm()
//     }
// });
// customvar.showWalletForm = function (h) {
//     this.href = "https://home." + Zdomain + "." + dcdomainOne + "/";
//     this.html = Drupal.t("Access Zoho") + " Home";
//     var j = ($("body").hasClass("body-umain")) ? true : false;
//     if (j) {
//         if ($(".creditelm #couponmail").length > 0) {
//             $(".creditelm #couponmail").val(getusername)
//         }
//         $(".creditelm").show();
//         $(".zgh-userAccess a").attr("href", this.href).html(this.html)
//     } else {
//         $(".signup-box").show();
//         $(".creditelm").hide()
//     }
// };
// customvar.assignCredits = function (h) {
//     customvar.getWalletAttributes();
//     var j = $(".creditelm #couponname").val();
//     if (j == "") {
//         window.location.href = customvar.redirectUrlLink
//     } else {
//         $(".existingUser").attr("disabled", "disabled").addClass("disabled-z-signup");
//         $(".coupon-error").html("");
//         $(".existingUser").html("connecting...");
//         $.ajax({
//             type: "GET",
//             url: "https://store.zoho." + dcdomainOne + "/CreditsApi.do?hidMode=redeemCredits&coupon_name=" + j,
//             dataType: "jsonp",
//             jsonp: "callback",
//             contentType: "application/json",
//             jsonpCallback: "redeemCredits",
//             cache: "true",
//             async: true,
//             xhrFields: {
//                 withCredentials: true
//             },
//             success: function (k) {
//                 if (k.code == 0) {
//                     window.location.href = customvar.redirectUrlLink
//                 } else {
//                     if (k.code == 402) {
//                         $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
//                         $(".coupon-error").html(customvar.couponCodeAvail)
//                     } else {
//                         $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
//                         $(".coupon-error").html(customvar.couponError)
//                     }
//                 }
//                 $(".existingUser").html(customvar.redeemCreditsCta)
//             },
//             error: function () {
//                 $(".existingUser").html(customvar.redeemCreditsCta);
//                 $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup")
//             },
//             crossDomain: true
//         })
//     }
// };
// customvar.walletcreditelm = function (k) {
//     customvar.getWalletAttributes();
//     $(".creditelm").remove();
//     $(".form-wrap").append('<div class="creditelm"> <div><input id="couponmail" class="sgnemail form-input" disabled="true" type="text" value="" placeholder="' + Drupal.t("Email Address") + '"> </div> <div><input id="couponname" class="sgnemail form-input" type="text" placeholder="' + Drupal.t("Coupon") + '" name="coupon" value=""></div><span class="coupon-error note"></span> <div><label class="note"><b> ' + Drupal.t("Note") + " : </b>" + Drupal.t("Please be informed that you will receive credits in the above mentioned Zoho account only.") + ' </label></div> <div><button class="existingUser" onclick="customvar.assignCredits();" id="existinguser">' + Drupal.t("Proceed to redeem your credits") + "</button></div> </div>");
//     if ($(".form-wrap .signup-box .signupcontainer").length > 0) {
//         if ($("#x_source").length < 1) {
//             $(".form-wrap .signup-box .signupcontainer").append('<input id="x_source" type="hidden" name="x_source" value="wallet" mandate="false"><input type="hidden" value="coupon_page" name="x_r_page_source" mandate="false">')
//         }
//     }
//     if (customvar.absurl.indexOf("notebook/notebook-for-samsung.html") > 0 && $(".form-wrap .signup-box .signupcontainer").length > 0) {
//         $(".form-wrap .signup-box .signupcontainer").append("<input type='hidden' name='x_accountType' value='2'>")
//     }
//     $("#coupon").val(customvar.couponCode);
//     $("#couponname").val(customvar.couponCode);
//     customvar.showWalletForm();
//     if (!customvar.redirectUrlLink) {
//         customvar.redirectUrlLink = customvar.dcadded(customvar.signupObj.serviceurl)
//     }
//     var j = "https://store." + Zdomain + "." + dcdomainOne + "/CouponRedirect.do?creditsInfo=" + customvar.creditsInfo + "&redirectUrl=" + customvar.redirectUrlLink + "&websiteUrl=" + customvar.websiteUrl;
//     customvar.signupObj.serviceurl = encodeURIComponent(j);
//     var h = "https://accounts." + Zdomain + "." + dcdomainOne + "/signin?servicename=ZohoPayments&serviceurl=" + encodeURIComponent(j);
//     $(".zw-login").attr("href", h)
// };
// customvar.OTP_based = function () {
//     if (dcdomainOne == "in") {
//         return true
//     } else {
//         return false
//     }
// };
// customvar.mandatestart = function () {
//     for (var j = 0; j <= $(".czone-dc input").length; j++) {
//         if ($(".czone-dc .signupcontainer input").eq(j).attr("mandate") != "false") {
//             if ($("#czone-home").length > 0) {
//                 if (typeof $(".czone-dc .signupcontainer input").eq(j).attr("placeholder") != "undefined") {
//                     var h = $(".czone-dc .signupcontainer input").eq(j).attr("placeholder");
//                     if (h.indexOf("*") < 1) {
//                         $(".czone-dc .signupcontainer input").eq(j).attr("placeholder", h + " *")
//                     }
//                 }
//             } else {
//                 if (typeof $(".czone-dc .signupcontainer input").eq(j).siblings(".placeholder").html() != "undefined") {
//                     var h = $(".czone-dc .signupcontainer input").eq(j).siblings(".placeholder").html();
//                     if (h.indexOf("*") < 1) {
//                         $(".czone-dc .signupcontainer input").eq(j).siblings(".placeholder").html(h + " *")
//                     }
//                 }
//                 if (typeof $(".czone-dc .signupcontainer input").eq(j).attr("placeholder") != "undefined") {
//                     var h = $(".czone-dc .signupcontainer input").eq(j).attr("placeholder");
//                     if (h != "") {
//                         if (h.indexOf("*") < 1) {
//                             $(".czone-dc .signupcontainer input").eq(j).attr("placeholder", h + " *")
//                         }
//                     }
//                 }
//             }
//         } else {
//             if ($("#czone-home").length > 0) {
//                 if (typeof $(".czone-dc .signupcontainer input").eq(j).attr("placeholder") != "undefined") {
//                     var h = $(".czone-dc .signupcontainer input").eq(j).attr("placeholder");
//                     if (h.indexOf("*") > 0) {
//                         $(".czone-dc .signupcontainer input").eq(j).attr("placeholder", h.split("*").join(""))
//                     }
//                 }
//             } else {
//                 if (typeof $(".czone-dc .signupcontainer input").eq(j).siblings(".placeholder").html() != "undefined") {
//                     var h = $(".czone-dc .signupcontainer input").eq(j).siblings(".placeholder").html();
//                     if (h.indexOf("*") > 0) {
//                         $(".czone-dc .signupcontainer input").eq(j).siblings(".placeholder").html(h.split("*").join(""))
//                     }
//                 }
//             }
//         }
//     }
// };
// customvar.newsletterhandle = function () {
//     if ($(".globalcountrycode-signup option:selected").attr("newsletter_mode") > 1) {
//         $(".za-newsletter-container").addClass("zshow");
//         $(".icon-medium").removeClass("checked").addClass("unchecked");
//         $("#signupform [name='newsletter']").removeAttr("checked")
//     } else {
//         $(".za-newsletter-container").removeClass("zshow");
//         $(".icon-medium").removeClass("unchecked").addClass("checked");
//         $("#signupform [name='newsletter']").attr("checked", "true")
//     }
//     if ($(".globalcountrycode-signup option:selected").attr("newsletter_mode") >= 2) {
//         $(".za-newsletter-container").removeAttr("style")
//     }
//     if (countryEu.indexOf(customvar.scountrys) > -1 || customvar.scountrys == "AU" || customvar.scountrys == "ZA") {
//         $(".za-newsletter-container").addClass("zshow");
//         $(".icon-medium").removeClass("checked").addClass("unchecked");
//         $("#signupform [name='newsletter']").removeAttr("checked")
//     }
//     if (customvar.scountrys == "SG" && customvar.singaporeConsentproductList.includes(customvar.productName)) {
//         if ($(".signup-box .get-signup-plan #business").prop("checked")) {
//             $(".icon-medium").removeClass("unchecked").addClass("checked");
//             $("#signupform [name='newsletter']").attr("checked", "true");
//             $(".za-newsletter-container").removeClass("zshow").addClass("zhide")
//         } else {
//             if ($('.signupcontainer [name="signup_edition"]').length) {
//                 $(".icon-medium").removeClass("checked").addClass("unchecked");
//                 $("#signupform [name='newsletter']").removeAttr("checked");
//                 $(".za-newsletter-container").removeClass("zhide").addClass("zshow");
//                 if (customvar.singaporeConsentchecked) {
//                     $(".icon-medium").removeClass("unchecked").addClass("checked");
//                     $("#signupform [name='newsletter']").attr("checked", "true")
//                 }
//             } else {
//                 $(".za-newsletter-container").removeClass("zshow").addClass("zhide");
//                 $(".icon-medium").removeClass("unchecked").addClass("checked");
//                 $("#signupform [name='newsletter']").attr("checked", "true")
//             }
//         }
//     }
// };

// function global_getValParam(j, m) {
//     var l = {},
//         h = "";
//     var k = m.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, o, p) {
//         l[o] = p;
//         if (o == j) {
//             h = p
//         }
//     });
//     return h
// }
// customvar.setcurrentCountry = function () {
//     if (customvar.showchangecountry == "false") {
//         if ($(".signup-box .globalcountrycode-signup").length > 0) {
//             $(".signup-box .globalcountrycode-signup").val(CountryCode)
//         }
//     } else {
//         $(".globalcountrycode-signup").val(customvar.scountrys)
//     }
// };
// var zr_script = "";

// function z_add_account_script_common() {
//     customvar.setcurrentCountry();
//     customvar.zDomainHandling();
//     if ($(".signup-box #czone-wallet").length > 0) {
//         if (_lhref.indexOf("recruit/lp/wallet-credits.html") > 0) {
//             customvar.walletcreditelm()
//         }
//         if (typeof customvar.signupObj.couponinput != "undefined") {
//             if (typeof customvar.signupObj.couponinput.required == "undefined" || customvar.signupObj.couponinput.required || customvar.signupObj.couponinput.required == "true") {
//                 customvar.walletcreditelm()
//             }
//         }
//     }
//     $("script#z-account-script").remove();
//     var j = (global_getUrlParam("serviceurl") != "") ? (function () {
//         return customvar.dcadded(global_getUrlParam("serviceurl"))
//     })() : ((typeof customvar.signupObj.serviceurl != "undefined") ? (function () {
//         return customvar.dcadded(customvar.signupObj.serviceurl)
//     })() : (customvar.outproduct.indexOf(customvar.productName) > -1) ? "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne : "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne);
//     var p = document.createElement("script");
//     p.id = "z-account-script";
//     if (customvar.outproduct.indexOf(customvar.productName) > -1) {
//         p.src = "https://accounts." + ((location.host.indexOf("localbigin") > 0 || location.host.indexOf("localqntrl") > 0) ? Zdomain : Zdomain) + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&servicename=" + ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) + "&loadcss=false" + ((typeof customvar.signupObj.accountsparam != "undefined") ? (customvar.dcadded(customvar.signupObj.accountsparam)) : "") + ((global_getUrlParam("ismobilesignup") != "") ? "&use_homeurl=true" : "") + "&serviceurl=" + j
//     } else {
//         p.src = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&servicename=" + ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) + "&loadcss=false" + ((typeof customvar.signupObj.accountsparam != "undefined") ? (customvar.dcadded(customvar.signupObj.accountsparam)) : "") + ((global_getUrlParam("ismobilesignup") != "") ? "&use_homeurl=true" : "") + "&serviceurl=" + j
//     }
//     if (window.location.host.includes(_lz) && customvar.productName == "learn" && _lhref.includes("/signup.html")) {
//         p.src = "https://accounts-alpha." + _lz + ".com/register/script?mode=33&temp_redirect=true&" + customvar.clang + "load_country=false&servicename=" + ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) + "&loadcss=false" + ((typeof customvar.signupObj.accountsparam != "undefined") ? (customvar.dcadded(customvar.signupObj.accountsparam)) : "") + ((global_getUrlParam("ismobilesignup") != "") ? "&use_homeurl=true" : "") + "&serviceurl=" + j
//     }
//     if (p.src.indexOf("mode=20") < 0) {
//         if (customvar.OTP_based()) {
//             if ($(".signup-box .za-rmobile-container").length < 1) {
//                 if ($(".signup-box .mobile-container").length > 0) {
//                     $(".signup-box .mobile-container").before(customvar.signupflow.rmobile)
//                 } else {
//                     $(".signup-box .za-captcha-container").before(customvar.signupflow.rmobile)
//                 }
//                 if (typeof customvar.signupObj.rmobilelabel != "undefined") {
//                     if ($(".signup-box .za-rmobile-container").length > 0) {
//                         $(".signup-box .za-rmobile-container").prepend(customvar.signupObj.rmobilelabel)
//                     }
//                 }
//                 if (typeof customvar.signupObj.rplaceholder != "undefined") {
//                     if ($(".signup-box #rmobile").length > 0) {
//                         $(".signup-box #rmobile").attr("placeholder", customvar.signupObj.rplaceholder)
//                     }
//                 }
//             }
//             if ($(".za-password-container").length < 1) {
//                 $(".za-rmobile-container").before(customvar.signupflow.password)
//             }
//             if (typeof $(".czone-dc").attr("id") != "undefined") {
//                 if ($(".czone-dc").attr("id") == "czone-signup") {
//                     $(".czone-dc input").not(".langinput").attr("placeholder", "")
//                 } else {
//                     $(".czone-dc .placeholder").remove()
//                 }
//                 if ($("#rmobile").siblings(".placeholder").length > 0) {
//                     $("#rmobile").siblings(".placeholder").html(customvar.phoneNumber)
//                 } else {
//                     if ($("#rmobile").attr("placeholder").length > 0) {
//                         $("#rmobile").attr("placeholder", customvar.phoneNumber)
//                     }
//                 }
//             }
//             $(".za_country_code").val("IN");
//             $(".phone_countrycode").val("+91");
//             $(".ccodediv").html("+91");
//             setTimeout(function () {
//                 $(".za_country_code").val("IN");
//                 $(".phone_countrycode").val("+91");
//                 $(".ccodediv").html("+91")
//             }, 150);
//             $(".mobile-container").addClass("zhide-common");
//             if (global_getValParam("mode", p.src) == "") {
//                 p.src = p.src + "&mode=24"
//             } else {
//                 if (global_getValParam("mode", p.src) != "24") {
//                     p.src = p.src.split("mode=" + global_getValParam("mode", p.src)).join("mode=24")
//                 }
//             }
//         } else {
//             $(".za-rmobile-container").hide();
//             $(".mobile-container").removeClass("zhide-common")
//         }
//     }
//     if (p.src.indexOf("mode=24") > -1) {
//         if ($(".signup-box .za-rmobile-container").length > 0 && $(".mobile-container").length < 1) {
//             if ($('.signup-box input[name="r_address/1.phone"]').length < 1 && $('.signup-box input[name="r_address/2.phone"]').length < 1) {
//                 $(".signup-box .za-rmobile-container").after('<div class="zhide-common"><input class="rmobilevalue" mandate="false" name="r_address/1.phone" placeholder="" type="hidden"></div>')
//             }
//         }
//     }
//     $('.signupcontainer input[type="hidden"]').attr("mandate", "false");
//     if ($(".signupotpcontainer .signupbtn").length > 0) {
//         $(".signupotpcontainer .signupbtn").val(customvar.verify)
//     }
//     if (currentUrlLang != "jp") {
//         customvar.mandatestart()
//     }
//     $(".signupotpcontainer .signupbtn").off("click");
//     $(".signupotpcontainer .signupbtn").on("click", function () {
//         if ($(".signupotpcontainer .signupbtn").length > 0) {
//             $(".signupotpcontainer .signupbtn").val(customvar.verifying + "...");
//             if (typeof customvar.submitotp != "undefined") {
//                 customvar.submitotp()
//             }
//         }
//     });
//     document.getElementsByTagName("head")[0].appendChild(p);
//     customvar.newsletterhandle();
//     customvar.showdcode();
//     var o = "Based on your IP, you are in",
//         q = "Change",
//         r = "Your data will be in",
//         m = "data center",
//         l = "based on your IP",
//         h = "";
//     if (typeof customvar.basedonip != "undefined") {
//         o = customvar.basedonip
//     }
//     if (typeof customvar.basedon != "undefined") {
//         l = customvar.basedon
//     }
//     if (typeof customvar.change != "undefined") {
//         q = customvar.change
//     }
//     if (typeof customvar.datawillb != "undefined") {
//         r = customvar.datawillb
//     }
//     if (typeof customvar.datacenter != "undefined") {
//         m = customvar.datacenter
//     }
//     if (typeof customvar.transCName != "undefined") {
//         h = customvar.transCName
//     }
//     if ($(".zcountry-info").length < 1) {
//         if (customvar.showchangecountry == "true") {
//             if (currentUrlLang == "jp") {
//                 $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="zcountry-info zshow">' + o + '<span id="zip-countryname"> ' + h + ' </span><span class="dcset-jp"> ' + l + '</span><span id="zip-countryname-change">' + q + "</span></p>")
//             } else {
//                 $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="zcountry-info zshow">' + o + '<span id="zip-countryname"> ' + h + "</span><span> " + l + '</span>.<span id="zip-countryname-change">' + q + "</span></p>")
//             }
//         }
//     }
//     if ($(".dc-info").length < 1) {
//         var k = ".",
//             n = "US";
//         if (typeof customvar.nsdctext != "undefined") {
//             n = customvar.nsdctext()
//         }
//         if (currentUrlLang == "jp") {
//             $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="dc-info"><span class="accountstxt-jp">' + r + '</span><span class="dcset dcset-jp">' + n + '</span><span class="dcenter-jp">' + m + "</span></p>")
//         } else {
//             if (customvar.scountrys == "ES" && currentUrlLang == "es-xl") {
//                 r = "Sus datos se almacenarÃ¡n en el centro de datos de";
//                 m = " "
//             } else {
//                 if ((customvar.scountrys == "NL" || customvar.scountrys == "AN") && currentUrlLang == "nl") {
//                     r = "Uw gegevens worden in het datacenter in";
//                     m = "opgeslagen"
//                 }
//             } (m == " ") ? m = "" : n = n + " ";
//             $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="dc-info">' + r + ' <span class="dcset">' + n + "</span>" + m + k + "</p>")
//         }
//     }
//     statehandling($(".globalcountrycode-signup").val());
//     zr_script = p
// }

// function statehandling(h) {
//     var k = "";
//     for (var j = 0; j < customvar.usstates.length; j++) {
//         k += '<option value="' + customvar.usstates[j].toLowerCase() + '">' + customvar.usstates[j] + "</option>"
//     }
//     $(".signup-box .za-country-container").after('<div class="sgfrm za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + k + "</select></div>");
//     if (h == "US") {
//         $(".za-globalstate-signup option").eq(0).remove();
//         $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
//         if (typeof RegionName != "undefined") {
//             if ($(".za-globalstate-signup").length > 0) {
//                 if (h == "US") {
//                     $(".za-globalstate-signup").val(RegionName.toLowerCase())
//                 }
//                 if ($(".za-globalstate-signup").val() == null) {
//                     $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
//                 }
//             }
//         }
//     } else {
//         $(".za-state-container").removeClass("zshow-common").addClass("zhide-common")
//     }
//     customvar.privacypolicylink(true)
// }
// $(document).on("change", ".signup-box #terms-check", function () {
//     if ($(this).is(":checked") != false) {
//         $(this).val(true);
//         $(".tcheck").addClass("checked");
//         $(this).closest(".terms-accept").find(".field-msg").remove()
//     } else {
//         $(".tcheck").removeClass("checked");
//         $(this).val(false)
//     }
// });
// $(document).on("click", "#zip-countryname-change", function () {
//     $(".zcountry-info").addClass("zhide-common");
//     $(".za-country-container").addClass("zshow");
//     customvar.counntrychangeed = 1
// });
// $(document).on("click", ".signup-box .showhide", function () {
//     if ($(".signup-box #password").attr("type") == "text") {
//         $(".signup-box #password").attr("type", "password");
//         $(this).removeClass("active")
//     } else {
//         $(".signup-box #password").attr("type", "text");
//         $(this).addClass("active")
//     }
// });
// customvar.getsfield = function () {
//     for (var j = 0; j < $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').length; j++) {
//         if ($('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').eq(j).val() != "") {
//             var h = $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').eq(j).attr("id");
//             customvar.nSignupArr[customvar.nOfSignup][j] = h + "::to::" + $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').eq(j).val();
//             customvar.validatetextArry[customvar.nOfSignup][j] = $("#" + h).siblings(".placetxt").attr("class")
//         }
//     }
//     if ($("span.portal-input").length > 0) {
//         customvar.nSignupspanArr[customvar.nOfSignup][0] = $("span.portal-input").html()
//     }
//     if ($(".za_country_code").length > 0) {
//         customvar.nSignupdialArr[customvar.nOfSignup][0] = $(".za_country_code").val()
//     }
//     if ($(".za_confirm_country_code").length > 0) {
//         customvar.nSignupconfirmdialArr[customvar.nOfSignup][0] = $(".za_confirm_country_code").val()
//     }
//     if ($(".signup-box .rmobilevalue").length > 0) {
//         customvar.hiddenrmobileval[customvar.nOfSignup] = $(".signup-box .rmobilevalue").val()
//     }
//     customvar.visitedArry[customvar.nOfSignup][0] = "visited"
// };
// customvar.setsfield = function () {
//     for (var k = 0; k < customvar.nSignupArr[customvar.nOfSignup].length; k++) {
//         if (customvar.nSignupArr[customvar.nOfSignup][k] != "") {
//             if (typeof customvar.nSignupArr[customvar.nOfSignup][k] != "undefined") {
//                 var j = customvar.nSignupArr[customvar.nOfSignup][k].split("::to::")[0];
//                 var h = customvar.nSignupArr[customvar.nOfSignup][k].split("::to::")[1];
//                 $("#" + j).parent().addClass("added-placeholder");
//                 $("#" + j).val(h);
//                 $("#" + j).siblings(".placetxt").addClass(customvar.validatetextArry[customvar.nOfSignup][k])
//             }
//         }
//     }
//     if ($("span.portal-input").length > 0) {
//         if (typeof customvar.nSignupspanArr[customvar.nOfSignup][0] != "undefined") {
//             $("span.portal-input").html(customvar.nSignupspanArr[customvar.nOfSignup][0])
//         }
//     }
//     if ($(".signup-box .rmobilevalue").length > 0) {
//         $(".signup-box .rmobilevalue").val(customvar.hiddenrmobileval[customvar.nOfSignup])
//     }
//     if (customvar.slectedradio[0] != "") {
//         if ($(".radiooptions").length > 0) {
//             $(".radiooptions").prop("checked", false);
//             $(".radiooptions").eq(customvar.slectedradio[0]).prop("checked", true)
//         }
//         if ($('.signup-box input[name="x_optioncheck"]').length > 0) {
//             $('.signup-box input[name="x_optioncheck"]').val(customvar.slectedradio[1])
//         }
//     }
//     customvar.showdcode()
// };
// $(document).on("click", ".signup-box .radiogroup .radiooptions", function () {
//     if ($('.signup-box input[name="x_optioncheck"]').length > 0) {
//         $('.signup-box input[name="x_optioncheck"]').val("radiochecked")
//     }
//     customvar.slectedradio[0] = $(this).val();
//     customvar.slectedradio[1] = "radiochecked"
// });
// customvar.getmadate = function (h) {
//     if (h == "x_optioncheck") {
//         if ($(".x_optioncheck").val() == "") {
//             return false
//         }
//         return true
//     }
//     return (typeof $("input[name='" + h + "']").attr("mandate") != "undefined") ? (($("input[name='" + h + "']").attr("mandate") == "false") ? false : true) : true
// };
// customvar.getsplmadate = function (h) {
//     if (customvar.productName == "mail") {
//         return true
//     } else {
//         return false
//     }
// };
// customvar.validateRemote = function (h) {
//     if (customvar.productName == "mail") {
//         return true
//     } else {
//         return false
//     }
// };
// customvar.nsdctext = function () {
//     var j = "US";
//     var k = customvar.dcObj;
//     for (var h in k) {
//         if (typeof k[h].countries != "undefind") {
//             if (k[h].countries.indexOf(customvar.scountrys) > -1) {
//                 j = k[h].dctext
//             }
//         }
//     }
//     if (onlycom) {
//         j = "US"
//     }
//     return j
// }, customvar.nscountrypop = function (h) {
//     this._data = "";
//     this.arr = customvar.countries;
//     for (var j = 0; j < customvar.countries[0].length; j++) {
//         if (h == "dial") {
//             this._data += '<option value="' + this.arr[1][j] + '" dialling_code="' + this.arr[2][j] + '">' + this.arr[0][j] + " (+" + this.arr[2][j] + ")</option>"
//         } else {
//             this._val = "0";
//             (customvar.optinArr.indexOf(this.arr[1][j]) > -1) ? this._val = "2" : (customvar.optoutArr.indexOf(this.arr[1][j]) > -1) ? this._val = "2" : (customvar.doubleoptinArr.indexOf(this.arr[1][j]) > -1) ? this._val = "3" : "";
//             this._data += '<option value="' + this.arr[1][j] + '" newsletter_mode="' + this._val + '">' + this.arr[0][j] + "</option>"
//         }
//     }
//     setTimeout(function () {
//         $(".globalcountrycode-signup").val(customvar.scountrys);
//         if (h == "dial") {
//             $(".za_country_code, #confirm_country_code").val(customvar.scountrys);
//             $(".ccodediv, .cccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"));
//             if ($(".confirm_ccodediv").length > 0) {
//                 if ($(".confirm_phone_countrycode").length > 0 && $(".za_confirm_country_code").length > 0) {
//                     $(".confirm_phone_countrycode").val("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"))
//                 }
//                 if ($(".confirm_phone_countrycode").length > 0 && $(".za_confirm_country_code").length > 0) {
//                     $(".confirm_ccodediv").html("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"))
//                 }
//             }
//         }
//     }, 100);
//     return this._data
// };

// function setcountryCode() {
//     if (typeof customvar.scountrys != "undefined") {
//         $(".za_country_code, #confirm_country_code").val(customvar.scountrys);
//         changeCountrycode()
//     }
// }

// function changeCountrycode(h) {
//     if ($(".ccodediv").length > 0) {
//         $(".phone_countrycode").val("+" + $(".za_country_code option:selected").attr("dialling_code"));
//         $(".ccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"))
//     }
//     if ($(".confirm_ccodediv").length > 0) {
//         $(".confirm_phone_countrycode").val("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"));
//         $(".confirm_ccodediv").html("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"))
//     }
// }

// function passwordset() {
//     var n = 16,
//         m = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
//     var l = "";
//     for (var h = 0; h < n; h++) {
//         var k = Math.floor(Math.random() * m.length);
//         l += m.charAt(k)
//     }
//     $("#password, #testpw").val(l);
//     $("#password").parent().addClass("added-placeholder");
//     $(".pcopy").removeClass("zhide-common");
//     $(".pcopy").show();
//     $(".gentext").removeClass("zhide-common");
//     $(".gentext").css("display", "inline-block");
//     var h = document.getElementById("password");
//     h.type = "text";
//     if ($(".zpassword-show.active").length < 1) {
//         var j;
//         clearInterval(j);
//         j = setTimeout(function () {
//             h.type = "password"
//         }, 2000)
//     }
//     window.pagesense = window.pagesense || [];
//     window.pagesense.push(["trackEvent", "genpass"])
// }

// function copyToClipboard() {
//     $(".pcopy").show();
//     var m = $("#password").val();
//     var l = document.createElement("textarea");
//     l.value = m;
//     document.body.appendChild(l);
//     l.select();
//     $(".t-text").html("Copied");
//     try {
//         var n = document.execCommand("copy");
//         var k = n ? "successful" : "unsuccessful"
//     } catch (h) { }
//     document.body.removeChild(l);
//     var j = document.getElementById("password");
//     j.select()
// }
// customvar.showdcode = function () {
//     if ($("#emailmoile").length > 0) {
//         if (/^\d+$/.test($("#emailmoile").val())) {
//             if ($("#emailmoile").val().length > 2) {
//                 $("#emailmoile").siblings(".za-country_code-container").css("display", "block");
//                 $(".za-emailormobile-container").addClass("dialactive")
//             } else {
//                 $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
//                 $(".za-emailormobile-container").removeClass("dialactive")
//             }
//         } else {
//             $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
//             $(".za-emailormobile-container").removeClass("dialactive")
//         }
//         if ($("#emailmoile").val().indexOf("@") > -1) {
//             $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
//             $(".za-emailormobile-container").removeClass("dialactive")
//         }
//     }
// };
// $(document).on("keyup", "#emailmoile", function () {
//     customvar.showdcode()
// });
// $(document).on("keyup", '.za-password-container [name="password"]', function (o) {
//     $(".password-strengths").removeClass("zhide-common");
//     var n = $(".za-password-container .strengths-bar span"),
//         m = $(".za-password-container .weak-pass"),
//         k = 8,
//         l = $(".za-password-container .strong-pass"),
//         j = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225, 91];
//     if (!j.includes(o.keyCode)) {
//         if (!o.target.value.length) {
//             n.css("width", "0%");
//             m.css("display", "inline-block");
//             l.css("display", "none")
//         }
//         if (o.target.value.length > 0 && o.target.value.length < k) {
//             n.css("width", Math.round((o.target.value.length * 50) / k) + "%");
//             n.removeClass("strong-bg");
//             n.addClass("weak-bg");
//             m.css("display", "inline-block");
//             l.css("display", "none")
//         }
//         if (o.target.value.length >= k) {
//             var h = 1;
//             /[A-Z]/.test(o.target.value) && h++, /[a-z]/.test(o.target.value) && h++, /\d/.test(o.target.value) && h++, /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(o.target.value) && h++;
//             n.css("width", ((h * 8) + 60) + "%");
//             n.removeClass("weak-bg");
//             n.addClass("strong-bg");
//             l.css("display", "inline-block");
//             m.css("display", "none")
//         }
//     }
// });
// $(document).on("keyup", ".signup-box .za-rmobile-container #rmobile", function () {
//     var h = $(this).val();
//     if ($('.signup-box input[name="x_phone"]').length > 0) {
//         $('.signup-box input[name="x_phone"]').val(h)
//     }
//     if ($('.signup-box input[name="x_contactnumber"]').length > 0) {
//         $('.signup-box input[name="x_contactnumber"]').val(h)
//     }
//     if ($("#mobile").length > 0) {
//         $("#mobile").val(h)
//     }
//     if ($(".signup-box .rmobilevalue").length > 0) {
//         $(".signup-box .rmobilevalue").val(h)
//     }
// });
// $(document).on("keyup", ".signup-box .mobile-container #mobile", function () {
//     var h = $(this).val();
//     if ($('input[name="x_phone"]').length > 0) {
//         $('input[name="x_phone"]').val(h)
//     }
//     if ($('input[name="x_contactnumber"]').length > 0) {
//         $('input[name="x_contactnumber"]').val(h)
//     }
// });
// $(document).on("click", ".signup-box .zpassword-show", function () {
//     if ($(this).hasClass("active")) {
//         $(".signup-box #password").attr("type", "password");
//         $(this).removeClass("active")
//     } else {
//         $(".signup-box #password").attr("type", "text");
//         $(this).addClass("active")
//     }
// });

// function gobacktosignuptemp() {
//     if ($("#otpfield").length > 0) {
//         $("#otpfield").val("")
//     }
//     $(".signupcontainer").show();
//     $(".signupotpcontainer").hide();
//     $("#signupbtn").val(customvar.signupforFree);
//     $("#signupbtn").removeClass("disabled-z-signup");
//     $("#signupbtn").removeClass("zwc_creating_account");
//     $("body").removeClass("zw_signup_otp_visible");
//     if ($(".signup-box").parent().hasClass("form")) {
//         $(".signup-box").parent().removeAttr("submitted")
//     }
// }

// function zwc_gobacktosignup() {
//     if (typeof gobacktosignup == "function") {
//         gobacktosignup()
//     }
//     gobacktosignuptemp()
// }

// function dispportalName() {
//     if ($(".p_name").length > 0) {
//         var h = $(".p_name").val();
//         h = h.replace(/[^A-Za-z0-9 \s]/gi, "").replace(/[_\s]/g, "");
//         h = h.toLowerCase();
//         if ($("#r_account").length > 0) {
//             $("#r_account").val(h)
//         }
//         try {
//             $(".portal-input").val(h)
//         } catch (j) { }
//         try {
//             $(".portal-input").html(h)
//         } catch (j) { }
//     }
// }
// $(document).keyup(function (h) {
//     if (h.keyCode == 13) {
//         if ($(".czone-dc form .signupotpcontainer input").is(":focus")) {
//             $(".za-submitbtn-otp .signupbtn").trigger("click")
//         }
//     }
// });
// $(document).on("blur", ".signup-box input", function () {
//     var h = $(this);
//     setTimeout(function () {
//         if ((h.parent().hasClass("field-error") || h.val() == "")) {
//             h.siblings(".placetxt").removeClass("zcr-msg-active").addClass("zcr-msg-grey")
//         } else {
//             h.siblings(".placetxt").removeClass("zcr-msg-grey").addClass("zcr-msg-active")
//         }
//         if (window.location.host == _preZ) {
//             if (h.val() == "" || h.parent().hasClass("field-error")) {
//                 h.removeClass("czone-field-valid").addClass("czone-field-error")
//             } else {
//                 h.removeClass("czone-field-error").addClass("czone-field-valid")
//             }
//         }
//     }, 1000)
// });
// $(document).on("change", "#newsletter", function () {
//     if ($(".icon-medium").hasClass("checked")) {
//         $("#signupform [name='newsletter']").attr("checked", "true");
//         customvar.singaporeConsentchecked = true
//     } else {
//         $("#signupform [name='newsletter']").removeAttr("checked");
//         customvar.singaporeConsentchecked = false
//     }
// });
// $(document).on("change", ".globalcountrycode-signup", function () {
//     if (customvar.showchangecountry == "false") {
//         if ($(".signup-box .globalcountrycode-signup").length > 0) {
//             $(".signup-box .globalcountrycode-signup").val(CountryCode)
//         }
//     }
//     onlycom = false;
//     if ((customvar.productName == "crm" || customvar.productName == "bigin" || customvar.productName == "zohobigin" || customvar.productName == "canvas" || customvar.productName == "desk") && currentUrlLang != "jp") { } else {
//         var h = $(this).val();
//         customvar.scountrys = h;
//         var k = customvar.dcObj;
//         dcdomainOne = "com";
//         for (var j in k) {
//             if (typeof k[j].countries != "undefind") {
//                 if (k[j].countries.indexOf(h) > -1) {
//                     if (k[j].notavailable.indexOf(customvar.productName) > -1) {
//                         dcdomainOne = "com";
//                         onlycom = true
//                     } else {
//                         dcdomainOne = k[j].domain
//                     }
//                 }
//             }
//         }
//         customvar.zDomainHandling();
//         addsignup(customvar.signupObj);
//         if ($(".portName").length > 0) {
//             $(".portName").html(customvar.dcadded($(".portName").html()))
//         }
//         $(".zcountry-info").addClass("zhide-common");
//         $(".za-country-container").addClass("zshow")
//     }
// });
// if (customvar.showchangecountry == "false") { }

// function addsignup(l) {
//     customvar.signupObj = l;
//     customvar.signupflow = {
//         customelement: ((typeof customvar.signupObj.customelement != "undefined") ? customvar.signupObj.customelement : ""),
//         customelementone: ((typeof customvar.signupObj.customelementone != "undefined") ? customvar.signupObj.customelementone : ""),
//         customelementtwo: ((typeof customvar.signupObj.customelementtwo != "undefined") ? customvar.signupObj.customelementtwo : ""),
//         username: '<div class="username-container sgfrm" id="usernmediv"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Email Address") + '</span><input class="dummyclass" id="username" name="username" placeholder="' + Drupal.t("Email Address") + '" type="text"><label class="defdomlabel" id="defdomdiv">@' + customvar.productName + "." + Zdomain + "." + dcdomainOne + "</label></div></div>",
//         name: '<div class="sgfrm za-name-container"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Name") + '</span><input class="dummyclass" id="name" name="firstname" placeholder="' + Drupal.t("Name") + '" type="text"></div></div>',
//         fullname: '<div class="sgfrm za-name-container"><div class="wrap-elm"><span class="placeholder">' + customvar.fullName + '</span><input class="dummyclass" id="fullname" name="firstname" placeholder="' + customvar.fullName + '" type="text"></div></div>',
//         email: '<div class="za-email-container sgfrm"><div class="wrap-elm"><span class="placeholder">' + customvar.email + '</span><input class="dummyclass" id="email" name="email" placeholder="' + customvar.email + '" type="text"></div></div>',
//         password: '<div class="za-password-container sgfrm"><div class="wrap-elm"><span class="placeholder">' + customvar.password + '</span><span class="zpassword-show"></span><input class="dummyclass" id="password" name="password" placeholder="' + customvar.password + '" type="password">' + ((typeof customvar.signupObj.password != "undefined") ? ((typeof customvar.signupObj.password.showpassword != "undefined") ? ((customvar.signupObj.password.showpassword == true || customvar.signupObj.password.showpassword == "yes") ? '<span class="showhide"></span>' : "") : "") : "") + ((typeof customvar.signupObj.password != "undefined") ? ((typeof customvar.signupObj.password.passwordstrength != "undefined") ? ((customvar.signupObj.password.passwordstrength == true || customvar.signupObj.password.passwordstrength == "yes") ? ('<div class="password-strengths zhide-common"> <p> Password Strength ï¼š<b class="weak-pass">Weak</b><b class="strong-pass">Strong</b></p> <div class="strengths-bar"> <span></span> </div> </div>') : "") : "") : "") + "</div></div>",
//         repassword: '<div class="za-repassword-container sgfrm"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Confirm Password") + '</span><input class="dummyclass" id="repassword" name="repassword" placeholder="' + Drupal.t("Confirm Password") + '" type="password">' + ((typeof customvar.signupObj.password != "undefined") ? ((typeof customvar.signupObj.password.showpassword != "undefined") ? ((customvar.signupObj.password.showpassword == true || customvar.signupObj.password.showpassword == "yes") ? '<span class="showhide"></span>' : "") : "") : "") + "</div></div>",
//         companyname: '<div class="sgfrm za-company-container"><div class="wrap-elm"><span class="placeholder">' + customvar.companyName + '</span><input class="dummyclass" id="companyname" name="x_companyname" placeholder="' + customvar.companyName + '" type="text"></div></div>',
//         contactnumber: '<div class="sgfrm mobile-container"><div class="wrap-elm"><span class="placeholder">' + customvar.phoneNumber + '</span><input class="dummyclass" id="mobile" type="text" placeholder="' + customvar.phoneNumber + '" name="r_address/1.phone"></div></div>',
//         custominput: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + ((typeof customvar.signupObj.custominput != "undefined") ? ((typeof customvar.signupObj.custominput.placeholder != "undefined") ? customvar.signupObj.custominput.placeholder : "") : "") + '</span><input id="custominput" class="dummyclass" type="' + ((typeof customvar.signupObj.custominput != "undefined") ? ((typeof customvar.signupObj.custominput.type != "undefined") ? customvar.signupObj.custominput.type : "text") : "text") + '" placeholder="' + ((typeof customvar.signupObj.custominput != "undefined") ? ((typeof customvar.signupObj.custominput.placeholder != "undefined") ? customvar.signupObj.custominput.placeholder : "") : "") + '" name="' + ((typeof customvar.signupObj.custominput != "undefined") ? ((typeof customvar.signupObj.custominput.name != "undefined") ? customvar.signupObj.custominput.name : "") : "") + '"></div></div>',
//         custominputone: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + ((typeof customvar.signupObj.custominputone != "undefined") ? ((typeof customvar.signupObj.custominputone.placeholder != "undefined") ? customvar.signupObj.custominputone.placeholder : "") : "") + '</span><input id="custominputone" class="dummyclass" type="' + ((typeof customvar.signupObj.custominputone != "undefined") ? ((typeof customvar.signupObj.custominputone.type != "undefined") ? customvar.signupObj.custominputone.type : "text") : "text") + '" placeholder="' + ((typeof customvar.signupObj.custominputone != "undefined") ? ((typeof customvar.signupObj.custominputone.placeholder != "undefined") ? customvar.signupObj.custominputone.placeholder : "") : "") + '" name="' + ((typeof customvar.signupObj.custominputone != "undefined") ? ((typeof customvar.signupObj.custominputone.name != "undefined") ? customvar.signupObj.custominputone.name : "") : "") + '"></div></div>',
//         couponinput: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + ((typeof customvar.signupObj.couponinput != "undefined") ? ((typeof customvar.signupObj.couponinput.placeholder != "undefined") ? customvar.signupObj.couponinput.placeholder : customvar.couponinputplaceholder) : "") + '</span><input id="coupon" class="dummyclass" type="' + ((typeof customvar.signupObj.couponinput != "undefined") ? ((typeof customvar.signupObj.couponinput.type != "undefined") ? customvar.signupObj.couponinput.type : "text") : "text") + '" placeholder="' + ((typeof customvar.signupObj.couponinput != "undefined") ? ((typeof customvar.signupObj.couponinput.placeholder != "undefined") ? customvar.signupObj.couponinput.placeholder : customvar.couponinputplaceholder) : "") + '" name="' + ((typeof customvar.signupObj.couponinput != "undefined") ? ((typeof customvar.signupObj.couponinput.name != "undefined") ? customvar.signupObj.couponinput.name : "x_r_coupon") : "") + '"></div></div>',
//         custominputtwo: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + ((typeof customvar.signupObj.custominputtwo != "undefined") ? ((typeof customvar.signupObj.custominputtwo.placeholder != "undefined") ? customvar.signupObj.custominputtwo.placeholder : "") : "") + '</span><input id="custominputtwo" class="dummyclass" type="' + ((typeof customvar.signupObj.custominputtwo != "undefined") ? ((typeof customvar.signupObj.custominputtwo.type != "undefined") ? customvar.signupObj.custominputtwo.type : "text") : "text") + '" placeholder="' + ((typeof customvar.signupObj.custominputtwo != "undefined") ? ((typeof customvar.signupObj.custominputtwo.placeholder != "undefined") ? customvar.signupObj.custominputtwo.placeholder : "") : "") + '" name="' + ((typeof customvar.signupObj.custominputtwo != "undefined") ? ((typeof customvar.signupObj.custominputtwo.name != "undefined") ? customvar.signupObj.custominputtwo.name : "") : "") + '"></div></div>',
//         custominputthree: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + ((typeof customvar.signupObj.custominputthree != "undefined") ? ((typeof customvar.signupObj.custominputthree.placeholder != "undefined") ? customvar.signupObj.custominputthree.placeholder : "") : "") + '</span><input id="custominputthree" class="dummyclass" type="' + ((typeof customvar.signupObj.custominputthree != "undefined") ? ((typeof customvar.signupObj.custominputthree.type != "undefined") ? customvar.signupObj.custominputthree.type : "text") : "text") + '" placeholder="' + ((typeof customvar.signupObj.custominputthree != "undefined") ? ((typeof customvar.signupObj.custominputthree.placeholder != "undefined") ? customvar.signupObj.custominputthree.placeholder : "") : "") + '" name="' + ((typeof customvar.signupObj.custominputthree != "undefined") ? ((typeof customvar.signupObj.custominputthree.name != "undefined") ? customvar.signupObj.custominputthree.name : "") : "") + '"></div></div>',
//         orgname: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Organization Name") + '</span><input class="dummyclass" id="orgname" name="x_orgname" placeholder=' + Drupal.t("Organization Name") + ' type="text"></div></div>',
//         dialcodecontactnumber: '<div class="mobile-container sgfrm mobile-ccode"><div class="wrap-elm"><div align="left" class="za-country_code-container"> <select class="za_country_code" id="country_code" onchange="changeCountrycode(this)" name="country_code">' + customvar.nscountrypop("dial") + '</select><input id="dialcodecontactnumber" class="phone_countrycode" name="x_phone_countrycode" type="hidden" value=""><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv"></div></div><span class="dialphonenum placeholder">' + ((typeof customvar.signupObj.dialcodecontactnumber != "undefined") ? ((typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined") ? customvar.signupObj.dialcodecontactnumber.placeholder : customvar.phoneNumber) : customvar.phoneNumber) + '</span><input class="dummyclass dialphone" id="mobile" name="r_address/1.phone" placeholder="' + ((typeof customvar.signupObj.dialcodecontactnumber != "undefined") ? ((typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined") ? customvar.signupObj.dialcodecontactnumber.placeholder : customvar.phoneNumber) : customvar.phoneNumber) + '" spellcheck="false" type="text" /> </div></div></div>',
//         redialcodecontactnumber: '<div class="za-remobile-container sgfrm mobile-ccode"><div class="wrap-elm"><div align="left" class="za-ccountry_code-container"> <select class="za_confirm_country_code" id="confirm_country_code" onchange="changeCountrycode(this)" name="confirm_country_code">' + customvar.nscountrypop("dial") + '</select><input id="redialcodecontactnumber" class="confirm_phone_countrycode" name="x_confirm_phone_countrycode" type="hidden" value=""><div class="ccodelabel" id="countryconfirmCodeDiv"><div class="confirm_ccodediv" id="ccodediv"></div></div><span class="placeholder dialphonenum">' + ((typeof customvar.signupObj.redialcodecontactnumber != "undefined") ? ((typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined") ? customvar.signupObj.redialcodecontactnumber.placeholder : customvar.rephoneNumber) : customvar.rephoneNumber) + '</span><input class="dummyclass dialphone" id="confirmMobile" name="confirmMobile" placeholder="' + ((typeof customvar.signupObj.redialcodecontactnumber != "undefined") ? ((typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined") ? customvar.signupObj.redialcodecontactnumber.placeholder : customvar.rephoneNumber) : customvar.rephoneNumber) + '" spellcheck="false" type="text" /> </div></div></div>',
//         emailormobile: '<div class="sgfrm za-email-container" style="display:none"><span class="placeholder">' + customvar.email + '</span><input type="text" id="email" name="email" placeholder="' + customvar.email + '"></div> <div class="sgfrm za-emailormobile-container mobile-ccode"><div class="wrap-elm"><div align="left" class="za-country_code-container" style="display:none"><select data-zcqa="sgnp-mob-countryCode" class="za_country_code" id="country_code" name="country_code" aria-label="Enter your country code" onchange="changeCountrycode(this)">' + customvar.nscountrypop("dial") + '</select><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv"></div></div></div><span class="placeholder">' + Drupal.t("Email") + " / " + Drupal.t("Phone") + '</span><input type="text" name="emailormobile" class="dummyclass" id="emailmoile" axlength="100" placeholder="' + Drupal.t("Email") + " / " + Drupal.t("Phone") + '"> </div></div> <div class="sgfrm za-mobile-container" style="display:none"> <div> <div class="za-country_code-container"> <div> <div class="ccdivtext"><span class="ccdiv"></span></div> <select class="form-input1 countryCnt1 za-country-select-code" name="country_code" id="country-code" tabindex="1"></select> </div> </div> <input type="text" name="mobile" id="phonenumber"> <label id="mobile_label">Phone Number</label> </div> </div>',
//         rmobile: '<div class="za-rmobile-container sgfrm rmobiledisabled"><div class="wrap-elm"><div align="left" class="za-country_code-container "> <select class="za_country_code" id="country_code_rmobile" onchange="changeCountrycode()" name="country_code">' + customvar.nscountrypop("dial") + '</select><input class="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91"><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv">+91</div></div><span class="dialphonenum placeholder">' + ((typeof customvar.signupObj.rmobile != "undefined") ? ((typeof customvar.signupObj.rmobile.placeholder != "undefined") ? customvar.signupObj.rmobile.placeholder : customvar.phoneNumber) : customvar.phoneNumber) + '</span><input id="rmobile" class="dialphone" name="rmobile" placeholder="' + ((typeof customvar.signupObj.dialcodecontactnumber != "undefined") ? ((typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined") ? customvar.signupObj.dialcodecontactnumber.placeholder : customvar.phoneNumber) : customvar.phoneNumber) + '" spellcheck="false" type="text" /> </div></div></div><input type="hidden" name="x_phone" value="">',
//         portalcompanyname: '<div class="sgfrm za-company-container"> <div class="wrap-elm"><span class="placeholder">' + customvar.companyName + '</span><input type="text" id="portalcompanyname" placeholder="' + customvar.companyName + '" onkeyup="dispportalName()"  class="sgname sgnusrname p_name dummyclass" name="r_account.account_name" onblur="$(\'#x_portal\').trigger(\'blur\');"> </div></div>',
//         portal: '<div class="sgfrm za-company-container"> <div class="wrap-elm"><div class="za-company-box"><span class="portal-id" id="sPortalInpId">https://' + customvar.productName + "." + Zdomain + "." + dcdomainOne + '/portal/</span><input class="portal-input dummyclass" id="portal" name="x_portal" type="text"></div> </div></div>',
//         companywithportal: '<div class="sgfrm za-company-container"><div class="wrap-elm"><span class="placeholder">' + customvar.companyName + '</span><input id="r_account" name="r_account.account_name" type="hidden" value=""><input class="sgnemail p_name dummyclass" id="companywithportal" name="x_portal.portal_name" onkeyup="dispportalName()" placeholder="' + customvar.companyName + '" type="text"><div class="portalName"><span class="portalink"><span class="portName">' + ((typeof customvar.signupObj.portaltext != "undefined") ? customvar.signupObj.portaltext : "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + "/") + '</span><span id="portal-input" class="portal-input"></div></div></div>',
//         customselect: '<div class="sgfrm za-select-container"><div class="wrap-elm"><select id="customselect" class="dummyclass">' + ((typeof customvar.signupObj.customselect != "undefined") ? customvar.signupObj.customselect.options : "") + "</select></div></div>",
//         customselectone: '<div class="sgfrm za-select-container"><div class="wrap-elm"><select id="customselect" class="dummyclass">' + ((typeof customvar.signupObj.customselectone != "undefined") ? customvar.signupObj.customselectone.options : "") + "</select></div></div>"
//     };
//     customvar.singleFieldSingupFlow = {
//         email: '<div class="za-email-container sgfrm zwc_sfield"><div class="wrap-elm col"><span class="placeholder">' + customvar.email + '</span><input class="dummyclass" id="email" name="email" placeholder="' + customvar.email + '" type="text"></div></div>'
//     };
//     customvar.getsfield();
//     customvar.nOfSignup = (typeof customvar.signupObj.nunmberofsignup != "undefined") ? (customvar.signupObj.nunmberofsignup) : 0;
//     $("#czone-home, #czone-signup, #czone-wallet").addClass("czone-dc");
//     if ($("#czone-wallet").length > 0) {
//         $("body").addClass("czone-iswallet-page")
//     }
//     $(".czone-dc").html("");
//     if (window.location.host.includes(_lz) && customvar.productName == "learn" && _lhref.includes("/signup.html")) {
//         $(".czone-dc").append('<form action="//accounts.zoho.com/accounts/register.ac" autocomplete="off" class="banner-signup" name="signupform" id="signupform" method="post" novalidate><input type="hidden" class="langinput" name="language" value="' + ((currentUrlLang == "jp") ? "ja" : (currentUrlLang == "zh-hant") ? "zh_tw" : currentUrlLang) + '"><div class="signupcontainer"></div></form>')
//     } else {
//         $(".czone-dc").append('<form action="//accounts.zoho.com/accounts/register.ac" autocomplete="off" class="banner-signup" name="signupform" id="signupform" method="post" novalidate><input type="hidden" class="langinput" name="language" value="' + ((currentUrlLang == "jp") ? "ja" : (currentUrlLang == "zh-hant") ? "zh_tw" : currentUrlLang) + '"><div class="signupcontainer"></div>' + customvar.otpEle + "</form>")
//     }
//     for (var n in customvar.signupObj) {
//         var o = n.replace(/ +/g, "").toLowerCase();
//         var m = (typeof customvar.signupObj[n].required != "undefined") ? ((customvar.signupObj[n].required == true) ? true : false) : true;
//         if ((["customelement", "customelementone", "customelementtwo"].includes(n) && customvar.signupObj[n] == "")) {
//             m = false
//         }
//         if (typeof customvar.signupflow[o] != "undefined" && m) {
//             if (o == "couponinput") {
//                 if (customvar.signupObj[n]["couponcode"]) {
//                     customvar.couponCode = customvar.signupObj[n]["couponcode"]
//                 }
//                 if (customvar.signupObj[n]["redirecturl"]) {
//                     customvar.dataredirectUrl = customvar.signupObj[n]["redirecturl"]
//                 }
//                 if (customvar.signupObj[n]["couponterms"]) {
//                     customvar.zwProTerms = customvar.signupObj[n]["couponterms"]
//                 }
//             }
//             if (typeof customvar.signupObj.singlefield != "undefined" && customvar.signupObj.singlefield && customvar.singleFieldSingupFlow[o]) {
//                 $(".signupcontainer").append(customvar.singleFieldSingupFlow[o])
//             } else {
//                 $(".signupcontainer").append(customvar.signupflow[o])
//             }
//             if ((typeof customvar.signupObj[n].label != "undefined")) {
//                 if ($(".dummyclass").length > 0) {
//                     $(".dummyclass").before(customvar.signupObj[n].label)
//                 }
//             }
//             if (global_getUrlParam("ismobilesignup") != "") {
//                 if ($(".dummyclass").length > 0) {
//                     $(".dummyclass").attr("autocapitalize", "none")
//                 }
//             }
//             for (var j in customvar.signupObj[n]) {
//                 var h = j.replace(/ +/g, "").toLowerCase();
//                 if (h == "nameattr") {
//                     $(".dummyclass").attr("name", customvar.signupObj[n][j]);
//                     $(".dummyclass").addClass(customvar.signupObj[n][j]);
//                     if (customvar.signupObj[n][j] == "mobile" && customvar.productName == "mail") {
//                         $(".dummyclass").parents().find(".mobile-container").addClass("za-mobile-container");
//                         $(".dummyclass").parents().find(".za-mobile-container").removeClass("mobile-container")
//                     }
//                 } else {
//                     if (h == "placeholder") {
//                         $(".dummyclass").siblings(".placeholder").html(customvar.signupObj[n][j]);
//                         $(".dummyclass").attr("placeholder", customvar.signupObj[n][j])
//                     } else {
//                         if (h == "id") {
//                             $(".dummyclass").attr("id", customvar.signupObj[n][j])
//                         } else {
//                             if (h == "class") {
//                                 $(".dummyclass").addClass(customvar.signupObj[n][j])
//                             } else {
//                                 if (h == "type") {
//                                     $(".dummyclass").attr("type", customvar.signupObj[n][j])
//                                 } else {
//                                     if (h == "mandatory" || h == "mandatory-dc" || h == "mandatory-country") {
//                                         if (h == "mandatory-dc") {
//                                             if (customvar.signupObj[n][j].split(",").indexOf(dcdomainOne) > -1) {
//                                                 $(".dummyclass").attr("mandate", true)
//                                             } else {
//                                                 $(".dummyclass").attr("mandate", false)
//                                             }
//                                         } else {
//                                             if (h == "mandatory-country") {
//                                                 if (customvar.signupObj[n][j].split(",").indexOf(customvar.scountrys.toLowerCase()) > -1) {
//                                                     $(".dummyclass").attr("mandate", true)
//                                                 } else {
//                                                     $(".dummyclass").attr("mandate", false)
//                                                 }
//                                             } else {
//                                                 $(".dummyclass").attr("mandate", customvar.signupObj[n][j])
//                                             }
//                                         }
//                                     } else {
//                                         if (h == "validatetext") {
//                                             $(".dummyclass").after('<span class="placetxt zcr-msg-grey">' + customvar.signupObj[n][j] + "</span>")
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             $("input, select").removeClass("dummyclass")
//         }
//     }
//     if (typeof $(".czone-dc").attr("id") != "undefined") {
//         if ($(".czone-dc").attr("id") == "czone-signup") {
//             $(".czone-dc input").not(".langinput").attr("placeholder", "")
//         } else {
//             $(".czone-dc .placeholder").remove()
//         }
//     } ((typeof customvar.signupObj.singlefield != "undefined" && customvar.signupObj.singlefield && $("#czone-home").length > 0) ? $(".signup-box").addClass("zsingle-field-form") : "");
//     customvar.signupcommonelm = '<div class="za-captcha-container zs-ml34 sgfrm" style="display:none;"><input class="zs-txtfldnew zs-txtfldwidth" maxlength="15" name="captcha" placeholder="Enter the word seen in the below image" type="text" disabled="disabled"><div><img alt="Captcha" class="za-captcha" src="https://accounts.zoho.com/accounts/images/spacer.gif"><span class="za-refresh-captcha" onclick="changeHip(document.signupform)"></span></div></div><div class="sgfrm za-country-container za-country-container-arrow"> <span class="placecountryregion">' + Drupal.t("Country/Region") + '</span><select class="form-input countryCnt za-country-select globalcountrycode-signup" disabled="disabled" autocomplete="off" name="country" id="country" placeholder="Select Country" aria-invalid="false">' + customvar.nscountrypop() + '</select> </div><div class="sgnbtnmn"><div class="za-newsletter-container snews-letter" style="display: block;"><label for="newsletter" class="news-signup sign_agree"> <input tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium" id="signup-newsletter"></span> <span>' + _txtIwould + "</span> </label></div>";
//     customvar.signupcommonelm += (typeof customvar.signupObj.additionalterms != "undefined") ? '<div class="terms-accept sgfrm"><label for="terms-check"><span class="tcheck">&nbsp;</span>' + ((typeof customvar.signupObj.additionalterms.text != "undefined") ? customvar.signupObj.additionalterms.text : "") + '</label><input class="validatefield" id="terms-check" mandate=' + ((typeof customvar.signupObj.additionalterms.mandatory != "undefined") ? customvar.signupObj.additionalterms.mandatory : true) + ' name="' + ((typeof customvar.signupObj.additionalterms.nameAttr != "undefined") ? customvar.signupObj.additionalterms.nameAttr : "x_I_agree_to_the") + '" type="checkbox" value="false"></div>' : "";
//     customvar.signupcommonelm += '<div class="za-tos-container"><label class="sign_agree" for="tos"><input class="za-tos" id="tos" name="tos" onclick="toggleTosField()"  type="checkbox" value="false"><span class="unchecked" id="signup-termservice">&nbsp;</span>' + ((currentUrlLang == "jp") ? '<a class="stermslink" name="terms" href="https://www.zoho.com/jp/terms.html?src=crm-index" target="_blank" rel="noopener">ã‚µãƒ¼ãƒ“ã‚¹è¦ç´„</a>ãŠã‚ˆã³<a href="https://www.zoho.co.jp/privacy/" target="_blank" class="zrlink" rel="noopener">ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼</a>ã«åŒæ„ã—ã¾ã™ã€‚' : (((typeof customvar.signupObj.globalagree != "undefined") ? (customvar.signupObj.globalagree) : Drupal.t("I agree to the ") + ' <a name="terms" href="' + ("https://www.zoho.com" + langsrc + "terms.html") + '" target="_blank" rel="noopener" class="czone-signup-term">' + Drupal.t("Terms of Service") + "</a> " + Drupal.t("and") + ' <a class="zrlink" name="privacy" href="' + ((typeof customvar.signupObj.privacylink != "undefined") ? (customvar.signupObj.privacylink) : "https://www.zoho.com" + langsrc + "privacy.html") + "" + ((typeof customvar.signupObj.privacyparam != "undefined") ? (customvar.signupObj.privacyparam) : "") + '" target="_blank" rel="noopener">' + Drupal.t("Privacy Policy") + "</a>."))) + "</label></div>";
//     if ($(".signup-box").hasClass("zsingle-field-form")) {
//         $(".zwc_sfield").append('<div class="sgnbtn col"><input class="signupbtn disabled-z-signup" onclick=" return zSignupPrevent();" id="signupbtn" type="submit" value="' + ((typeof customvar.signupObj.btntext != "undefined") ? (customvar.signupObj.btntext) : Drupal.t("Sign Up for Free")) + '" style="opacity:0.3;"></div></div>')
//     } else {
//         customvar.signupcommonelm += '<div class="sgnbtn"><input class="signupbtn disabled-z-signup" onclick=" return zSignupPrevent();" id="signupbtn" type="submit" value="' + ((typeof customvar.signupObj.btntext != "undefined") ? (customvar.signupObj.btntext) : Drupal.t("Sign Up for Free")) + '" style="opacity:0.3;"></div></div>'
//     }
//     customvar.signupcommonelm += '<div class="socl-signup" style="display:none;"> <p>' + ((typeof customvar.signupObj.socialtxt != "undefined") ? ((customvar.signupObj.socialtxt == "true" || customvar.signupObj.socialtxt == true) ? Drupal.t("or sign in using ") : "") : Drupal.t("or sign in using ")) + ' <span class="vi-apple sig-mac" onclick="FederatedSignIn.GO(\'APPLE\');zohoFedClickEvent(\'apple\');" title="apple"  style="display:none;">apple</span><span class="vi-google" onclick="FederatedSignIn.GO(\'GOOGLE\');zohoFedClickEvent(\'Google\');" title="Google" style="display:none;">Google</span><span class="vi-facebook" onclick="FederatedSignIn.GO(\'FACEBOOK\');zohoFedClickEvent(\'Facebook\');" title="Facebook" style="display:none;">Facebook</span><span class="vi-linkedin" onclick="FederatedSignIn.GO(\'LINKEDIN\');zohoFedClickEvent(\'Linkedin\');" title="Linkedin" style="display:none;">Linkedin</span><span class="vi-twitter" onclick="FederatedSignIn.GO(\'TWITTER\');zohoFedClickEvent(\'Twitter\');" title="Twitter" style="display:none;">Twitter</span><span class="vi-office365" onclick="FederatedSignIn.GO(\'AZURE\');zohoFedClickEvent(\'office365\');" title="Microsoft" style="display:none;">Office365</span><span class="vi-apple sig-android" onclick="FederatedSignIn.GO(\'APPLE\');zohoFedClickEvent(\'apple\');" style="display:none;" title="apple">apple</span><span class="vi-github" onclick="FederatedSignIn.GO(\'GITHUB\');zohoFedClickEvent(\'github\');" style="display:none;" title="github">github</span></p></div>';
//     $(".signupcontainer").append(((typeof customvar.signupObj.additionalfield != "undefined") ? (customvar.signupObj.additionalfield) : "") + customvar.signupcommonelm);
//     if (global_getUrlParam("ismobilesignup") == "") {
//         $(".signupcontainer").append('<input name="x_tempIpCountry" mandate="false" type="hidden" value="' + customvar.getGlobalCookie("zip") + '">')
//     }
//     $(".zrlink").length > 0 && "de" == currentUrlLang && "Datenschutzrichtlinie" == $(".zrlink").html() && $(".zrlink").after("<span> zu</span>");
//     if (typeof customvar.signupObj.password != "undefined") {
//         if (typeof customvar.signupObj.password.passwordgen != "undefined") {
//             $("#password").after('<span class="gentext zhide-common">' + Drupal.t("Powered by Zoho Vault's") + ' <a href="/vault/password-generator/" target="_blank">' + Drupal.t("password generator.") + "</a> " + Drupal.t("The generated password will be copied when you click 'Sign up for free.'") + '</span><span onclick="passwordset();" class="pgen t-tip"><span>Generate password</span></span> <span onclick="copyToClipboard();" class="pcopy t-tip zhide-common">Copy<span class="t-text">Copy</span></span>');
//             $(".t-tip").on("mouseover", function () {
//                 $(this).addClass("active")
//             }).on("mouseout", function () {
//                 $(this).removeClass("active")
//             });
//             $("#password").on("keyup", function () {
//                 if ($("#password").val() == "") {
//                     $(".pcopy").hide()
//                 }
//             })
//         }
//     }
//     if (typeof customvar.signupObj["social-icon"] != "undefined") {
//         if (customvar.signupObj["social-icon"] != "") {
//             $(".signup-box .socl-signup").show();
//             var k = customvar.signupObj["social-icon"].split(",");
//             for (i = 0; i <= k.length; i++) {
//                 $(".signup-box .socl-signup ." + k[i]).show()
//             }
//         }
//         if ($(".signup-box .socl-signup .vi-facebook").length > 0) {
//             if (typeof $(".signup-box .socl-signup .vi-facebook").attr("style") != "undefined") {
//                 if ($(".signup-box .socl-signup .vi-facebook").attr("style").indexOf("display: inline") > -1) {
//                     $(".signup-box .socl-signup .vi-facebook").hide()
//                 }
//             }
//         }
//         $(".ccode-eucountries .czone-dc .vi-linkedin").hide()
//     }
//     $(".za-newsletter-container").css("display", "none");
//     if (typeof customvar.signupformloaded != "undefined") {
//         customvar.signupformloaded()
//     }
//     z_add_account_script_common();
//     setcountryCode();
//     if (customvar.counntrychangeed) {
//         $(".zcountry-info").addClass("zhide-common");
//         $(".za-country-container").addClass("zshow")
//     }
//     customvar.setsfield();
//     customvar.privacypolicylink(true);
//     customvar.termslink.setDefaultTerm(true)
// }
// customvar.signupEditionHandler = function (k, l) {
//     var m = null;
//     if (l) {
//         m = l
//     } else {
//         if (k) {
//             m = k.target.value
//         }
//     }
//     if (m == "personal") {
//         var h = $('.signupcontainer [name="signup_edition"]#personal').attr("checked");
//         if (typeof customvar.personalsignup != "undefined" && !h) {
//             customvar.personalsignup()
//         }
//     } else {
//         if (m == "business") {
//             var j = $('.signupcontainer [name="signup_edition"]#business').attr("checked");
//             if (typeof customvar.businesssignup != "undefined" && !j) {
//                 customvar.businesssignup()
//             }
//         }
//     }
//     if ($(".socl-signup").length > 0) {
//         $(".socl-signup p").contents().filter(function () {
//             return this.nodeType === 3
//         }).wrap("<b/>")
//     }
//     customvar.newsletterhandle()
// };
// $(document).on("click", '.signupcontainer [name="signup_edition"]', customvar.signupEditionHandler);

// function onSignupReady() {
//     var h = $("#signupbtn");
//     $("#signupbtn, .za-tos-container").removeClass("disabled-z-signup");
//     $(".globalcountrycode-signup, .za-tos, #signupbtn").removeAttr("disabled");
//     h.css({
//         opacity: 1
//     });
//     $(".signup-box").css({
//         opacity: "1",
//         visibility: "visible"
//     });
//     if ($("body").hasClass("ismobileapp") && customvar.productName == "desk") {
//         $(".signup-box #email").attr("type", "email")
//     }
//     $.validator.addMethod("isValidPhone", function (m, k) {
//         var l = /^[0-9\s\(\)\+\-]+$/;
//         var j = /^[\-\+]+$/;
//         if (m != "") {
//             if (!j.test(m)) {
//                 if (!l.test(m)) {
//                     return false
//                 }
//             }
//             if ($("#mobile").hasClass("dialphone")) {
//                 if (m.indexOf("+") > -1) {
//                     return false
//                 }
//             }
//             if (m.length < 5) {
//                 return false
//             }
//         }
//         if (window.location.host == "www.zoho.com.cn" || window.location.href.indexOf("/zh-hans/") > -1) {
//             var l = /^1[34578]\d{9}$/;
//             var j = /^[\-\+]+$/;
//             if (m != "") {
//                 if (!j.test(m)) {
//                     if (!l.test(m)) {
//                         this.settings.messages[k.name] = "&#35831;&#36755;&#20837;&#26377;&#25928;&#30340;&#25163;&#26426;&#21495;";
//                         return false
//                     }
//                 }
//             }
//         }
//         return true
//     });
//     $.validator.addMethod("isValidPortalName", function (l, j) {
//         var k = /^[a-z0-9]+$/;
//         if (!k.test(l)) {
//             return false
//         } else {
//             return true
//         }
//     });
//     $.validator.addMethod("accountNamevalidate", function (k, j) {
//         if (k.length < 6) {
//             return false
//         }
//         return true
//     });
//     $.validator.addMethod("isValidlastname", function (k, j) {
//         var l = /^[A-Za-z0-9_\-\ \.]+$/;
//         if (!l.test(k)) {
//             return false
//         }
//         return true
//     });
//     $.validator.addMethod("repasscheck", function (k, j) {
//         if ($("#password").val() != $("#repassword").val()) {
//             return false
//         }
//         return true
//     });
//     $.validator.addMethod("isValid", function (l, j) {
//         var k = /^[A-Za-z0-9 ]+$/;
//         if (!k.test(l)) {
//             return false
//         } else {
//             return true
//         }
//     });
//     $.validator.addMethod("isreValidPhone", function (k, j) {
//         if ($("#mobile").val() != k || $("#country_code").val() != $("#confirm_country_code").val()) {
//             return false
//         }
//         return true
//     });
//     $.validator.addMethod("seletcheck", function (k, j) {
//         if (k == "") {
//             return false
//         }
//         return true
//     });
//     $.validator.addMethod("x_optioncheck", function (k, j) {
//         if (k == "") {
//             return false
//         }
//         return true
//     });
//     $.validator.addMethod("isValidUser", function (k, j) {
//         if (k != "") {
//             if (!(/^[0-9]{1,10}$/.test(k)) || k < "1") {
//                 return false
//             }
//         }
//         return true
//     });
//     if (typeof WalletSignUpError == "function") {
//         WalletSignUpError()
//     }
//     // $("#signupform").zaSignUp({
//     //     validator: {
//     //         rules: {
//     //             firstname: {
//     //                 required: customvar.getmadate("firstname"),
//     //                 isValidlastname: customvar.getsplmadate("firstname"),
//     //                 validateRemote: customvar.validateRemote("firstname")
//     //             },
//     //             x_name: {
//     //                 required: customvar.getmadate("x_name")
//     //             },
//     //             lastname: {
//     //                 required: customvar.getmadate("lastname"),
//     //                 isValidlastname: customvar.getsplmadate("lastname"),
//     //                 validateRemote: customvar.validateRemote("lastname")
//     //             },
//     //             x_phone_number: {
//     //                 required: customvar.getmadate("x_phone_number"),
//     //                 isValidPhone: (($("input[name='x_phone_number']").attr("type") == "hidden") ? false : true)
//     //             },
//     //             x_phone: {
//     //                 required: customvar.getmadate("x_phone"),
//     //                 isValidPhone: (($("input[name='x_phone']").attr("type") == "hidden") ? false : true)
//     //             },
//     //             "r_address/1.phone": {
//     //                 required: customvar.getmadate("r_address/1.phone"),
//     //                 isValidPhone: (($("input[name='r_address/1.phone']").attr("type") == "hidden") ? false : true)
//     //             },
//     //             "r_address/1.company_name": {
//     //                 required: customvar.getmadate("r_address/1.company_name")
//     //             },
//     //             x_contactnumber: {
//     //                 required: customvar.getmadate("x_contactnumber"),
//     //                 isValidPhone: (($("input[name='x_contactnumber']").attr("type") == "hidden") ? false : true)
//     //             },
//     //             confirmMobile: {
//     //                 required: true,
//     //                 isreValidPhone: true
//     //             },
//     //             "r_address/2.phone": {
//     //                 required: customvar.getmadate("r_address/2.phone"),
//     //                 isValidPhone: (($("input[name='r_address/2.phone']").attr("type") == "hidden") ? false : true)
//     //             },
//     //             "r_account.account_name": {
//     //                 required: customvar.getmadate("r_account.account_name"),
//     //                 validateRemote: {}
//     //             },
//     //             x_orgname: {
//     //                 required: customvar.getmadate("x_orgname")
//     //             },
//     //             Organization_Name: {
//     //                 required: customvar.getmadate("Organization_Name")
//     //             },
//     //             x_organization_name: {
//     //                 required: customvar.getmadate("x_organization_name")
//     //             },
//     //             Role_in_organization: {
//     //                 required: customvar.getmadate("Role_in_organization")
//     //             },
//     //             x_role_in_organization: {
//     //                 required: customvar.getmadate("x_role_in_organization")
//     //             },
//     //             x_developer_experience: {
//     //                 required: customvar.getmadate("x_developer_experience")
//     //             },
//     //             Developer_Experience: {
//     //                 required: customvar.getmadate("Developer_Experience")
//     //             },
//     //             x_company_name: {
//     //                 required: customvar.getmadate("x_company_name")
//     //             },
//     //             x_company: {
//     //                 required: customvar.getmadate("x_company")
//     //             },
//     //             x_companyname: {
//     //                 required: customvar.getmadate("x_companyname")
//     //             },
//     //             x_iamCompanyName: {
//     //                 required: customvar.getmadate("x_iamCompanyName")
//     //             },
//     //             x_portal: {
//     //                 required: true,
//     //                 isValidPortalName: true,
//     //                 validateRemote: {
//     //                     success: function (j) {
//     //                         var k = j.error;
//     //                         if (typeof customvar.siggnupremotevalidate != "undefined") {
//     //                             customvar.siggnupremotevalidate(k)
//     //                         }
//     //                     }
//     //                 }
//     //             },
//     //             repassword: {
//     //                 required: true,
//     //                 repasscheck: true
//     //             },
//     //             x_r_coupon: {
//     //                 required: false,
//     //                 validateRemote: {}
//     //             },
//     //             x_employee_count: {
//     //                 required: customvar.getmadate("x_employee_count"),
//     //                 seletcheck: true
//     //             },
//     //             x_location_count: {
//     //                 required: customvar.getmadate("x_location_count"),
//     //                 seletcheck: true
//     //             },
//     //             x_empCount: {
//     //                 required: customvar.getmadate("x_empCount"),
//     //                 seletcheck: true
//     //             },
//     //             x_industry: {
//     //                 required: customvar.getmadate("x_industry"),
//     //                 seletcheck: true
//     //             },
//     //             x_agteamname: {
//     //                 required: true,
//     //                 isValid: true,
//     //                 validateRemote: {
//     //                     success: function (j) {
//     //                         var k = j.error;
//     //                         if (typeof customvar.siggnupremotevalidate != "undefined") {
//     //                             customvar.siggnupremotevalidate(k)
//     //                         }
//     //                     }
//     //                 }
//     //             },
//     //             "x_portal.portal_name": {
//     //                 required: true,
//     //                 isValid: true,
//     //                 validateRemote: {
//     //                     success: function (j) {
//     //                         var k = j.error;
//     //                         if (typeof customvar.siggnupremotevalidate != "undefined") {
//     //                             customvar.siggnupremotevalidate(k)
//     //                         }
//     //                     }
//     //                 }
//     //             },
//     //             x_portal_name: {
//     //                 required: customvar.getmadate("x_portal_name"),
//     //                 isValid: true,
//     //                 validateRemote: {}
//     //             },
//     //             "x_portal.portal_agency_name": {
//     //                 required: true,
//     //                 isValid: true,
//     //                 validateRemote: {
//     //                     success: function (j) {
//     //                         var k = j.error;
//     //                         if (typeof customvar.siggnupremotevalidate != "undefined") {
//     //                             customvar.siggnupremotevalidate(k)
//     //                         }
//     //                     }
//     //                 }
//     //             },
//     //             x_I_agree_to_the: {
//     //                 required: customvar.getmadate("x_I_agree_to_the")
//     //             },
//     //             x_optioncheck: {
//     //                 required: customvar.getmadate("x_optioncheck")
//     //             },
//     //             x_offer_code: {
//     //                 validateRemote: true
//     //             },
//     //             x_register: {
//     //                 required: customvar.getmadate("x_register")
//     //             },
//     //             x_API_Users: {
//     //                 required: customvar.getmadate("x_API_Users"),
//     //                 isValidUser: true
//     //             },
//     //             x_formation_state: {
//     //                 required: customvar.getmadate("x_formation_state"),
//     //                 seletcheck: true
//     //             }
//     //         },
//     //         messages: {
//     //             firstname: {
//     //                 required: (customvar.productName == "one" || customvar.productName == "publish" ? customvar.eFullName : customvar.eFirstName),
//     //                 isValidlastname: customvar.numcharspl
//     //             },
//     //             x_name: {
//     //                 required: customvar.eFullName
//     //             },
//     //             lastname: {
//     //                 required: customvar.eLastName,
//     //                 isValidlastname: customvar.numcharspl
//     //             },
//     //             x_phone_number: {
//     //                 required: customvar.eMobileNumber,
//     //                 isValidPhone: customvar.eValidPhoneNumber
//     //             },
//     //             x_phone: {
//     //                 required: customvar.eMobileNumber,
//     //                 isValidPhone: customvar.eValidPhoneNumber
//     //             },
//     //             "r_address/1.phone": {
//     //                 required: customvar.eMobileNumber,
//     //                 isValidPhone: customvar.eValidPhoneNumber
//     //             },
//     //             "r_address/1.company_name": {
//     //                 required: customvar.eOrgName
//     //             },
//     //             x_contactnumber: {
//     //                 required: customvar.eMobileNumber,
//     //                 isValidPhone: customvar.eValidPhoneNumber
//     //             },
//     //             confirmMobile: {
//     //                 required: customvar.eReMobileNumber,
//     //                 isreValidPhone: customvar.eValidPhoneNumber
//     //             },
//     //             "r_address/2.phone": {
//     //                 required: customvar.eMobileNumber,
//     //                 isValidPhone: customvar.eValidPhoneNumber
//     //             },
//     //             "r_account.account_name": {
//     //                 required: customvar.eCompanyName
//     //             },
//     //             x_orgname: {
//     //                 required: customvar.eOrgName
//     //             },
//     //             Organization_Name: {
//     //                 required: customvar.eOrgName
//     //             },
//     //             x_organization_name: {
//     //                 required: customvar.eOrgName
//     //             },
//     //             Role_in_organization: {
//     //                 required: customvar.eOrgRole
//     //             },
//     //             x_role_in_organization: {
//     //                 required: customvar.eOrgRole
//     //             },
//     //             x_developer_experience: {
//     //                 required: customvar.eAboutYpurCompany
//     //             },
//     //             Developer_Experience: {
//     //                 required: customvar.eAboutYpurCompany
//     //             },
//     //             x_company_name: {
//     //                 required: customvar.eCompanyName
//     //             },
//     //             x_company: {
//     //                 required: customvar.eCompanyName
//     //             },
//     //             x_companyname: {
//     //                 required: customvar.eCompanyName
//     //             },
//     //             x_iamCompanyName: {
//     //                 required: customvar.eCompanyName
//     //             },
//     //             x_portal: {
//     //                 required: customvar.ePortalName,
//     //                 isValidPortalName: customvar.onlyletters,
//     //                 validateRemote: ""
//     //             },
//     //             repassword: {
//     //                 required: customvar.repasserr,
//     //                 repasscheck: customvar.repaswrongserr
//     //             },
//     //             x_r_coupon: {
//     //                 required: "test",
//     //                 validateRemote: {}
//     //             },
//     //             x_employee_count: {
//     //                 required: customvar.empCount,
//     //                 seletcheck: customvar.empCount
//     //             },
//     //             x_location_count: {
//     //                 required: customvar.locationCount,
//     //                 seletcheck: customvar.locationCount
//     //             },
//     //             x_empCount: {
//     //                 required: customvar.empCount,
//     //                 seletcheck: customvar.empCount
//     //             },
//     //             x_industry: {
//     //                 required: customvar.selectindustry,
//     //                 seletcheck: customvar.selectindustry
//     //             },
//     //             x_agteamname: {
//     //                 required: customvar.teamNameTranslt,
//     //                 isValid: customvar.isValidTranslt,
//     //                 validateRemote: ""
//     //             },
//     //             "x_portal.portal_name": {
//     //                 required: customvar.eCompanyName,
//     //                 isValid: customvar.isvalidName,
//     //                 validateRemote: ""
//     //             },
//     //             x_portal_name: {
//     //                 required: customvar.eCompanyName,
//     //                 isValid: customvar.isvalidName
//     //             },
//     //             "x_portal.portal_agency_name": {
//     //                 required: customvar.isvalidAgency,
//     //                 isValid: customvar.isvalidName,
//     //                 validateRemote: ""
//     //             },
//     //             x_optioncheck: {
//     //                 required: customvar.eselectEdition
//     //             },
//     //             x_register: {
//     //                 required: customvar.registernum
//     //             },
//     //             x_formation_state: {
//     //                 required: customvar.eFormationState
//     //             },
//     //             x_API_Users: {
//     //                 required: customvar.usersrequire,
//     //                 isValidUser: customvar.usersrequire
//     //             }
//     //         }
//     //     },
//     //     onsubmit: function () {
//     //         customvar.setcurrentCountry();
//     //         h.val(customvar.creatingthePortal);
//     //         $("#signupbtn").addClass("disabled-z-signup");
//     //         $("#signupbtn").addClass("zwc_creating_account");
//     //         if (CountryCode == "US") {
//     //             if (typeof RegionName != "undefined") {
//     //                 if ($(".signup-box .za-state-container").hasClass("zshow-common")) {
//     //                     if ($(".signup-box .za-state-container .za-globalstate-signup").length > 0) {
//     //                         try {
//     //                             $zoho.salesiq.visitor.customaction('{"eventCategory":"state_change_dd","eventAction":"' + (RegionName.toLowerCase()) + "-" + $(".signup-box .za-state-container .za-globalstate-signup").val() + '","eventLabel":"' + (customvar.productName.toLowerCase()) + '"}')
//     //                         } catch (j) { }
//     //                     }
//     //                 }
//     //             }
//     //         }
//     //         zohoGASignupEvent();
//     //         if (typeof customvar.signupObj.password != "undefined") {
//     //             if (typeof customvar.signupObj.password.passwordgen != "undefined") {
//     //                 copyToClipboard();
//     //                 $(".pcopy.t-tip").addClass("active");
//     //                 $(".t-text").html("Password Copied");
//     //                 setTimeout(function () {
//     //                     $(".pcopy.t-tip").removeClass("active")
//     //                 }, 1000)
//     //             }
//     //         }
//     //         if (typeof customvar.signuphandleonsubmit != "undefined") {
//     //             customvar.signuphandleonsubmit()
//     //         }
//     //     },
//     //     handleConfirmation: function (j) {
//     //         if (typeof customvar.signuphandleconfirm != "undefined") {
//     //             customvar.signuphandleconfirm(j)
//     //         }
//     //         if (!_lhref.includes("creator/developers/signup.html")) {
//     //             j.doAction()
//     //         }
//     //     },
//     //     oncomplete: function (j) {
//     //         if (j == $.fn.zaSignUp.SIGNUP_STATE.ERROR) {
//     //             $("#signupbtn").removeClass("disabled-z-signup");
//     //             $("#signupbtn").removeClass("zwc_creating_account");
//     //             h.val(((typeof customvar.signupObj.btntext != "undefined") ? (customvar.signupObj.btntext) : customvar.signupforFree));
//     //             if (typeof customvar.signupcompleteError != "undefined") {
//     //                 customvar.signupcompleteError(j)
//     //             }
//     //         } else {
//     //             if (j == jQuery.fn.zaSignUp.SIGNUP_STATE.SIGNUP_COMPLETED) {
//     //                 if (typeof customvar.signupcomplete != "undefined") {
//     //                     customvar.signupcomplete(j)
//     //                 }
//     //             }
//     //         }
//     //         if (typeof customvar.signupJPConfirm != "undefined") {
//     //             customvar.signupJPConfirm(j)
//     //         }
//     //         if (j == $.fn.zaSignUp.SIGNUP_STATE.OTP_INITIATED) {
//     //             if (typeof customvar.otp_initiated != "undefined") {
//     //                 customvar.otp_initiated(j)
//     //             }
//     //             $("body").addClass("zw_signup_otp_visible")
//     //         } else {
//     //             if (j == $.fn.zaSignUp.SIGNUP_STATE.OTP_ERROR) {
//     //                 setTimeout(function () {
//     //                     if ($(".signupotpcontainer .signupbtn").length > 0) {
//     //                         $(".signupotpcontainer .signupbtn").val(customvar.verify)
//     //                     }
//     //                     if (typeof customvar.otp_error != "undefined") {
//     //                         customvar.otp_error(j)
//     //                     }
//     //                 }, 300)
//     //             }
//     //         }
//     //         if ($("#mobileotp").length > 0) {
//     //             if ($(".form-input.countryCnt.za-country-select.globalcountrycode-signup").val() != "IN") {
//     //                 if ($("#emailmoile").length && zr_script.src.indexOf("mode=23")) {
//     //                     $("#mobileotp").html($("#emailmoile").val())
//     //                 }
//     //             }
//     //             if ($("#mobileotp").html().indexOf("@") > 0) {
//     //                 $(".verifyheader").html(customvar.enterotpemail)
//     //             } else {
//     //                 $(".verifyheader").html(customvar.enterotpmobile)
//     //             }
//     //         }
//     //     }
//     // });
//     // if (typeof webformevent === "function") {
//     //     webformevent()
//     // }
// }
// $(window).on("load", function () {
//     if ($("#ref_value").length < 1) {
//         if ($(".signup-box form").length > 0) {
//             var h = customvar.czmr();
//             var j = _lhref;
//             if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
//                 h = customvar.czmr().split(".html")[0] + ".html"
//             }
//             if (j.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
//                 j = customvar.absurl
//             }
//             j = (j.length > 300) ? j.substring(0, 300) : j;
//             $(".signup-box form").append('<input id="ref_value" name="ref_value" type="hidden" value="' + customvar.czms() + "," + h + "," + customvar.cuid() + "," + customvar.mydevice() + "," + j + '">')
//         }
//     }
// });