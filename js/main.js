!(function (e) {
    "use strict";
    var a, t;
    e("#current_date").length &&
        (document.getElementById("current_date").innerHTML =
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(a = new Date()).getDay()] +
            " , " +
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][a.getMonth()] +
            " " +
            a.getDate() +
            " , " +
            a.getFullYear()),
        (-1 != (t = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 != t.indexOf("trident")) && e("body").addClass("ie");
    var n = e(".popup-youtube");
    function o() {
        var a = e("body").find(">#wrapper"),
            t = e("#side-menu-trigger a.menu-times");
        a.removeClass("open").find(".offcanvas-mask").remove(), e("#offcanvas-body-wrapper").attr("style", ""), t.prev(".menu-bar").removeClass("open"), t.addClass("close");
    }
    n.length && n.magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
        e(".zoom-gallery").length &&
            e(".zoom-gallery").each(function () {
                e(this).magnificPopup({ delegate: "a.ne-zoom", type: "image", gallery: { enabled: !0 } });
            }),
        e(document).on("click", "#top-search-form .search-button", function (a) {
            return (
                a.preventDefault(),
                e(this)
                    .prev("input.search-input")
                    .animate({ width: ["toggle", "swing"], height: ["toggle", "swing"], opacity: "toggle" }, 500, "linear"),
                !1
            );
        }),
        e(".loadmore").on("click", "a", function (a) {
            a.preventDefault();
            var t = e(this),
                n = t.parents(".menu-list-wrapper").find(".menu-list").find(".menu-item.hidden").slice(0, 3);
            return (
                n.length
                    ? (n.animate({ opacity: 0 }),
                      n.promise().done(function () {
                          n.removeClass("hidden"), n.show().animate({ opacity: 1 }, 1e3);
                      }))
                    : t.text("No more item to display"),
                !1
            );
        }),
        //e("nav#dropdown").meanmenu({ siteLogo: "<div class='mobile-menu-nav-back'><a href='index.html' class='logo-mobile'><img src='img/logo.png'/></a></div>" }),
        //new WOW().init(),
        //e.scrollUp({ scrollText: '<i class="fa fa-angle-double-up"></i>', easingType: "linear", scrollSpeed: 900, animation: "fade" }),
        e("#wrapper").on("click", "#side-menu-trigger a.menu-bar", function (a) {
            a.preventDefault();
            var t = e(this),
                n = e(this).parents("body").find(">#wrapper"),
                o = e("<div />").addClass("offcanvas-mask");
            return n.addClass("open").append(o), t.addClass("open"), t.next(".menu-times").removeClass("close"), (document.getElementById("offcanvas-body-wrapper").style.right = "0"), !1;
        }),
        e("#wrapper").on("click", "#side-menu-trigger a.menu-times", function (a) {
            a.preventDefault();
            var t = e(this);
            return e("#offcanvas-body-wrapper").attr("style", ""), t.prev(".menu-bar").removeClass("open"), t.addClass("close"), o(), !1;
        }),
        e("#wrapper").on("click", "#offcanvas-nav-close a", function (e) {
            return o(), !1;
        }),
        e(document).on("click", "#wrapper.open .offcanvas-mask", function () {
            o();
        }),
        e(window).on("load", function () { });
        e(".ne-carousel").each(function () {
            var a = e(this),
                t = a.data("loop"),
                n = a.data("items"),
                o = a.data("margin"),
                s = (a.data("stage-padding"), a.data("autoplay")),
                i = a.data("autoplay-timeout"),
                r = a.data("smart-speed"),
                l = a.data("dots"),
                d = a.data("nav"),
                p = a.data("nav-speed"),
                c = a.data("r-x-small"),
                m = a.data("r-x-small-nav"),
                u = a.data("r-x-small-dots"),
                f = a.data("r-x-medium"),
                g = a.data("r-x-medium-nav"),
                v = a.data("r-x-medium-dots"),
                h = a.data("r-small"),
                y = a.data("r-small-nav"),
                w = a.data("r-small-dots"),
                b = a.data("r-medium"),
                C = a.data("r-medium-nav"),
                T = a.data("r-medium-dots"),
                k = a.data("r-Large"),
                x = a.data("r-Large-nav"),
                D = a.data("r-Large-dots"),
                S = a.data("center");
            a.owlCarousel({
                loop: !!t,
                items: n || 4,
                lazyLoad: !0,
                margin: o || 0,
                autoplay: !!s,
                autoplayTimeout: i || 1e3,
                smartSpeed: r || 250,
                dots: !!l,
                nav: !!d,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                navSpeed: !!p,
                center: !!S,
                responsiveClass: !0,
                responsive: {
                    0: { items: c || 1, nav: !!m, dots: !!u },
                    480: { items: f || 2, nav: !!g, dots: !!v },
                    768: { items: h || 3, nav: !!y, dots: !!w },
                    992: { items: b || 4, nav: !!C, dots: !!T },
                    1200: { items: k || 5, nav: !!x, dots: !!D },
                },
            });
        }),
        e(window).on("scroll", function () {
            var a = e("#sticker"),
                t = a.outerHeight(),
                n = e(window).scrollTop(),
                o = e(window).width(),
                s = e("#header-layout1"),
                i = e("#header-layout2");
            if (o > 991) {
                var r = 1;
                i.length && (r = i.find(".header-top-bar").outerHeight()),
                    n >= r
                        ? (s.length && a.addClass("stick"), i.length && (a.addClass("stick"), e(".main-menu-area").addClass("header-menu-fixed"), e("body").css({ "margin-top": t + "px" })))
                        : (a.removeClass("stick"), i.length && (a.removeClass("stick"), e(".main-menu-area").removeClass("header-menu-fixed"), e("body").css({ "margin-top": 0 })));
            }
        });
})(jQuery);
